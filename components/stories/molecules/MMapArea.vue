<script setup lang="ts">
import { MapHighlight, mapData } from '@/plugins/location';
import { ref, onMounted } from 'vue';

const mapImg = ref(null);
const mapCanvas = ref(null);
const sidoMap = ref('전체');
let mapHighlight = null

onMounted(() => {
  mapHighlight = new MapHighlight(mapImg.value, mapCanvas.value);
})

const hovering = (element) => {
  mapHighlight.hovering(element)
}

const leaving = (element) => {
  mapHighlight.leaving(element)
}

const selectSido = (value) => {
  sidoMap.value = value;
  mapHighlight.resetCoord();
}

const clicked = (element) => {
  mapHighlight.changedArea(element);
  if (sidoMap.value === '전체') {
    selectSido(element.getAttribute('alt'))
  }
}

</script>

<template>
  <p class="tit-type-1">사업은 어디서 시작하시나요?</p>
  <form method="post" name="schfrm" id="schfrm" action="/comm.alddl.RetrieveAlddlPostOfficeList.comm" ref="schfrm">
    <input type="hidden" id="targetRow" name="targetRow" value="" />
    <input type="hidden" name="sido_gubun" value="" />
    <input type="hidden" name="sido_map" value="" />
    <input type="hidden" name="sigungu_map" value="" />

    <div class="select-box-1 wd-1">
      <select class="select-type-1" id="sido" name="sido" @change="selectSido($refs.schfrm.sido.value)" title="시도 선택">
        <option value="전체" selected>전체보기</option>
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
      <select class="select-type-1" id="sigungu" name="sigungu"
        @change="[$refs.schfrm.sido.value, $refs.schfrm.sigungu.value]" title="시군구">
        <option value="">시/군/구</option>
      </select>
    </div>
    {{ Object.keys(mapData).includes(sidoMap) }}
    {{ sidoMap }}
    <div class="map_area">
      <div class="left_map_korea">
        <canvas ref="mapCanvas"></canvas>
        <img 
          :src="`/static/map/map_${sidoMap}.gif`" 
          :alt="sidoMap" 
          :usemap="`#map_${sidoMap}`" 
          ref="mapImg" 
        />
        <map v-if="Object.keys(mapData).includes(sidoMap)" :name="`map_${sidoMap}`">
          <area
            v-for="mm in mapData[sidoMap]" 
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
  </form>

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
</style>