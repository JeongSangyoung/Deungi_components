<script setup lang="ts">
import { MapHighlight, mapData, thirdCityList, gwamilDongObj, gwamilSiList, gwamilIncheon } from '@/apis/location';
import { ref, onMounted, watch, computed } from 'vue';

interface PropType {
    modelValue: {
    sido: string;
    sigungu: string;
    third: string;
    }
}

const props = withDefaults(defineProps<PropType>(), {
    modelValue: () => {
    return {
        sido: '전체',
        sigungu: '시/군/구',
        third: '',
    }
    }
})

// STATE
const mapImg = ref(null);
const mapCanvas = ref(null);
const sido = ref(''); // 1번째
const sigungu = ref(''); // 2번째
const third = ref(''); // 3번재 
const sigunguList = ref([]);
const thirdList = ref([]);


const init = ref(false);
let mapHighlight = null;


onMounted(() => {
    // DATA INIT
    if (props.modelValue.sido === '') sido.value = '전체';
    else sido.value = props.modelValue.sido;
    if (props.modelValue.sigungu === '') sigungu.value = '시/군/구';
    else sigungu.value = props.modelValue.sigungu;
    if (props.modelValue.third === '') third.value = '선택해주세요';
    else third.value = props.modelValue.third;

    // MAP INIT
    mapHighlight = new MapHighlight(mapImg.value, mapCanvas.value);
    mapHighlight.resetCoord();
    mapHighlight.setCity(sido.value);

    changeSigungu() // 셀렉되었을 때 테두리 표시
})

const getSigunguList = (newSelect) => {
    if (newSelect === '시/군/구') { return }
    if (Object.keys(mapData).includes(newSelect)) {
    if (newSelect == '전체') {
        sigunguList.value = ['시/군/구'];
        return; // 전체면 시군구만하고 종료
    }
    sigunguList.value = mapData[newSelect].map(cityList => {
        return cityList.city;
    });
    sigunguList.value.sort();
    sigunguList.value.unshift('시/군/구');
    }
}
const getThirdList = () => {
    let curCity = sigungu.value;
    if (sido.value === '인천') {
    curCity = '인천_' + curCity;
    }
    if (Object.keys(thirdCityList).includes(curCity)) {
    if (third.value === '') third.value = '선택해주세요';
    thirdList.value = ['선택해주세요'].concat(thirdCityList[curCity])
    return;
    }
    thirdList.value = undefined;
}

// 지도에서 선택했을 때 또는 Select에서 선택했을 때
watch(sido, newSelect => {
    mapHighlight.resetCoord();
    mapHighlight.setCity(newSelect);
    getSigunguList(newSelect);
    if (sido.value == '전체') {
    sigungu.value = '시/군/구';
    }
    if (init.value) emitState();
    init.value = true;
})
watch(sigungu, _ => {
    changeSigungu()
    getThirdList();
    if (init.value) emitState();
    init.value = true;
});

const sidoReset = () => {
    sigungu.value = '시/군/구'; // 시군구는 초기화
    third.value = ''; // 시군구는 초기화
}

const sigunguReset = () => {
    third.value = '';
}

// 시군구 Select Tag 에서 이벤트 발생시
const changeSigungu = () => {
    mapHighlight.resetCoord();
    if (sigungu.value === '시/군/구') { return }
    if (Object.keys(mapData).includes(sido.value)) {
    const { city, coords } = mapData[sido.value].find(cityList => {
        return cityList.city === sigungu.value
    });
    mapHighlight.selectArea(coords, city);
    }
}

// 검증단계. true false 리턴
const verification = () => {
    if (sigungu.value !== '' && sigungu.value !== '시/군/구') {
    let curCity = '';
    if (sido.value === '인천') {
        curCity = '인천_' + sigungu.value ;
    } else {
        curCity = sigungu.value;
    }
    if (Object.keys(thirdCityList).includes(curCity)) {
        if (third.value !== '' && third.value !== '선택해주세요') {
        return true;
        }
        return false; // 세번째 선택지가 들어있지 않은경우는 거짓
    } else { 
        return true; 
    } // 두번째까지만 있고 세번째는 없는경우는 참
    }
    return false; // 두번째가 없는경우는 거짓
}
const verifyComputed = computed(() => {
    return verification()
})

const emit = defineEmits(['update:modelValue', 'verified'])
const emitState = () => {
    emit('update:modelValue', { 
    sido: sido.value, 
    sigungu: sigungu.value.replace(/[0-9]/g, ''), 
    third: third.value,
    })
    emit('verified', { croweded: isGwamil(sido.value, sigungu.value, third.value), verified: verification() })
}

// area tag에서 hover, leave 이벤트 발생시
const hovering = (element) => {
    mapHighlight.hovering(element)
}
const leaving = (element) => {
    mapHighlight.leaving(element)
}

// area tag에서 click이벤트 발생시
const clicked = (element) => {
    mapHighlight.changedArea(element);
    const location = element.getAttribute('alt');
    if (location === sigungu.value) {
    return
    }
    third.value = ''; // 시군구는 초기화
    if (Object.keys(mapData).includes(location)) {
    if (sido.value === '전체') {
        sido.value = location;
        mapHighlight.resetCoord();
    }
    } else {
    // select 박스에 자동으로 입력되게함
    sigungu.value = location
    }
}

// 3번째 select option의 배경색을 변경. 과밀 비과밀
const setOptionColor = (tc) => {
    if (tc === '선택해주세요') {
    return '#fff'
    }
    return isGwamil(sido.value, sigungu.value, tc) ? '#d54d4d52' : '#3a52b452';
}

const isGwamil = (sido, sigungu, third) => {
    if (sido === '서울') return true;
    else if (sido === '경기') {
    if (gwamilSiList.includes(sigungu)) {
        if (Object.keys(gwamilDongObj).includes(sigungu)) {
        if (gwamilDongObj[sigungu].includes(third)) {
            return true // 시군구 과밀인데 과밀동에 있음
        }
        return false // 시군구 과밀인데 과밀동에 없음
        }
        return true // 시군구는 과밀인데 과밀동Obj에 없음
    }
    }
    else if (sido === '인천') {
    if (Object.keys(gwamilDongObj).includes('인천_' + sigungu)) {
        if (gwamilDongObj['인천_' + sigungu].includes(third)) {
        return true;
        }
        return false;
    }
    if (gwamilIncheon.includes(sigungu)) return true;
    }
    return false;
}

</script>

<template>
<div>

    <input type="hidden" id="targetRow" name="targetRow" value="" />
    <input type="hidden" name="sido_gubun" value="" />
    <input type="hidden" name="sido_map" value="" />
    <input type="hidden" name="sigungu_map" value="" />
    
    <div class="select-box">
    <!-- First -->
    <select 
        id="sido"
        name="sido"
        title="시도 선택"
        v-model="sido"
        @change="sidoReset()"
    >
        <option value="전체">전체보기</option>
        <option value="서울">서울특별시</option>
        <option value="부산">부산광역시</option>
        <option value="대구">대구광역시</option>
        <option value="인천">인천광역시</option>
        <option value="광주">광주광역시</option>
        <option value="대전">대전광역시</option>
        <option value="울산">울산광역시</option>
        <option value="세종">세종특별자치시</option>
        <option value="강원">강원도</option>
        <option value="경기">경기도</option>
        <option value="경남">경상남도</option>
        <option value="경북">경상북도</option>
        <option value="전남">전라남도</option>
        <option value="전북">전라북도</option>
        <option value="제주">제주특별자치도</option>
        <option value="충남">충청남도</option>
        <option value="충북">충청북도</option>
    </select>
    <!-- Second -->
    <select 
        id="sigungu" 
        name="sigungu"
        title="시군구"
        v-model="sigungu"
        @change="sigunguReset()"
        >
        <!-- @change="changeSigungu" -->
        <option 
        v-for="sg in sigunguList"
        :key="sg"
        :value="sg"
        >
        {{ sg }}
        </option>
    </select>
    <!-- Third -->
    <select
        id="thirdCity"
        name="thirdCity"
        v-model="third"
        @change="emitState()"
        v-if="thirdList"
    >

        <option
        v-for="tc in thirdList"
        :key="tc"
        :value="tc"
        :style="{ background: setOptionColor(tc) }"
        >
        {{ tc }}
        </option>
    </select>
    
    <select
        v-else
        disabled
        class="select-disabled"
    > 
        <option></option>
    </select>
    </div>
    
    <div class="map_area">
    <div class="left_map_korea">
        <canvas ref="mapCanvas"></canvas>
        <img 
        :src="`/static/map/map_${sido}.gif`" 
        :alt="sido" 
        :usemap="`#map_${sido}`" 
        ref="mapImg" 
        />
        <map v-if="Object.keys(mapData).includes(sido)" :name="`map_${sido}`">
        <area
            v-for="mm in mapData[sido]" 
            :key="mm.city" 
            :coords="mm.coords"
            :alt="mm.city"
            shape="poly"
            href="javascript:;" 
            @mouseover="hovering($event.target)" 
            @mouseout="leaving($event.target)"
            @click="clicked($event.target)"
        />
        </map>
    </div>
    </div>

    <!-- <p v-if="verifyComputed">
    <span v-if="isGwamil(sido, sigungu, third)" style="color: red">과밀</span>
    <span v-else style="color: blue">과밀아님</span>
    </p> -->
    
</div>
</template>

<style lang="scss" scoped>
.map_area {
    position: relative;
    width: 316px;
    height: 467px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
}

.map_area img {
    width: 100%;
}

canvas {
    pointer-events: none;
    /* make the canvas transparent to the mouse - needed since canvas is position infront of image */
    position: absolute;
}

select {
    height: 32px;
    padding: 0 40px 0 12px;
    border: 1px solid #e9e9e9;
    background: url(https://deungi24.com/img/bg_select1.png) no-repeat right center;
    background-size: 24px auto;
    -webkit-appearance: none;
    min-width: 100px;

    @include xs {
    padding: 0 24px 0 8px; 
    }

    &:disabled {
    cursor: not-allowed;
    background: #ccc;
    }

    option {
    padding: 6px 0;
    }
}

.select-box {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    @include xs {
    width: unset;
    }
    select {
    width: 30%;
    }
}

</style>