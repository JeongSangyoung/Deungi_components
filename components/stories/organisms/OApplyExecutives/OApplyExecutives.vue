<script setup lang="ts">
import { popScopeId, ref, watch } from 'vue';
import MModal from '@/components/stories/molecules/MModal/MModal.vue';
import MInput from '@/components/stories/molecules/MInput/MInput.vue';
import MCheck from '@/components/stories/molecules/MCheck/MCheck.vue';
import MButton from '@/components/stories/molecules/MButton/MButton.vue';
import MTooltip from '@/components/stories/molecules/MTooltip/MTooltip.vue';
import MRadioButtonGroup from '@/components/stories/molecules/MRadioButtonGroup/MRadioButtonGroup.vue';
import MExecutiveCard from '@/components/stories/molecules/MExecutiveCard/MExecutiveCard.vue';

import { IExecutive } from '@/types';

interface PropType {
  state: {
    executives: IExecutive[],
  },
  propsData: {
    corpName: string;
  }
}

interface IExecutiveCard extends IExecutive {
  image?: string;
  backgroundColor?: string;
  state?: string;
  chips?: string[];
}


const props = withDefaults(defineProps<PropType>(), {})

const exeSelected = ref<number>(0);
const rankSelected = ref<number>(-1);
const whoSelected = ref<number>(-1);
const name =ref<string>();
const underage = ref<boolean>(false);
const foreigner = ref<boolean>(false);

const executiveList = ref<IExecutiveCard[]>([]);

props.state.executives.forEach(exe => {
  const temp =  { 
    name: exe.name, 
    underage: exe.underage, 
    foreigner:exe.foreigner,
    state: '다음에입력',
  }
  if (exe.charge === '법인') {
    if (exe.foreigner) temp['chips'] = ['외국법인']
    executiveList.value.push(
      { ...temp, backgroundColor: '#EDF9FF', charge: '임원 아닌 주주', image: 'https://deungi24.com/img/ico_list2.png' }
    )
  } else if (exe.charge === '개인') {
    const tchips = [];
    if (exe.foreigner) tchips.push('외국인');
    if (exe.underage) tchips.push('미성년자');
    temp['chips'] = tchips;
    executiveList.value.push(
      { ...temp, backgroundColor: '#EDF0FF', charge: '임원 아닌 주주', image: 'https://deungi24.com/img/ico_list1.png' }
    )
  } else {
    const tchips = [];
    if (exe.foreigner) tchips.push('외국인');
    if (exe.underage) tchips.push('미성년자');
    temp['chips'] = tchips;
    executiveList.value.push(
      { ...temp, backgroundColor: '#EDF0FF', charge: exe.charge, image: 'https://deungi24.com/img/ico_list1.png' }
    )
  }
})

const exes = ['임원', '임원 아닌 주주'];
const ranks = ['대표이사', '이사', '감사'];
const who = ['개인', '법인'];
const extra = ['외국인', '미성년자'];
const rearImages = [
  { unchecked: 'https://deungi24.com/img/ico_list4.png', checked: 'https://deungi24.com/img/ico_list4_on.png'}, 
  { unchecked: 'https://deungi24.com/img/ico_list5.png', checked: 'https://deungi24.com/img/ico_list5_on.png' }
]

watch(exeSelected, newval => {
  name.value = ''
  underage.value = false;
  foreigner.value = false;

  if (newval === 0) { 
    whoSelected.value = -1; // 임원이 선택되면, 임원아닌주주의 selectoption 초기화
  } else {
    rankSelected.value = -1;  // 위와 반대
  }
})
watch(whoSelected, _ => {
  name.value = ''
  underage.value = false;
  foreigner.value = false;
})

const addExcutive = (name, charge, underage, foreigner) => {
  // 임원아닌주주 => 법인만 이미지 색깔다름
  const exeObj = {} as IExecutiveCard;
  exeObj.charge = charge;
  exeObj.underage = underage;
  exeObj.foreigner = foreigner;
  exeObj.name = name
  return exeObj
}

const emit = defineEmits(['verify'])

const addList = () => {
  let exeObj = {} as IExecutiveCard;
  if (exeSelected.value === 0) {
    exeObj = addExcutive(name.value, exes[exeSelected.value], underage.value, foreigner.value);
    exeObj.backgroundColor = '#EDF0FF';
    exeObj.image = 'https://deungi24.com/img/ico_list1.png';
    exeObj.state = '다음에입력';
  } else {
    if (whoSelected.value === 0) {
      exeObj = addExcutive(name.value, exes[exeSelected.value], underage.value, foreigner.value);
      exeObj.backgroundColor = '#EDF0FF';
      exeObj.image = 'https://deungi24.com/img/ico_list1.png';
    } else {
      exeObj = addExcutive(name.value, exes[exeSelected.value], underage.value, foreigner.value);
      exeObj.backgroundColor = '#EDF9FF';
      exeObj.image = 'https://deungi24.com/img/ico_list2.png';
    }
  }
  exeObj.chips = getChips()
  executiveList.value.push(exeObj)
  name.value = '';
  underage.value = false;
  foreigner.value = false;
  exeSelected.value = 0;
  rankSelected.value = -1;
  whoSelected.value = -1;
  emit('verify', { 
      executives: executiveList.value.map(exes => {
        return { name: exes.name, charge: exes.charge, foreigner: exes.foreigner, underage: exes.underage }
      }),
      verified: true,
  })
}

const removeExecutive = (idx) => {
  executiveList.value.splice(idx, 1)
  emit('verify', { 
      executives: executiveList.value.map(exes => {
        return { name: exes.name, charge: exes.charge, foreigner: exes.foreigner, underage: exes.underage }
      }),
      verified: true,
  })
}
const getChips = () => {
  const temp = [];
  if (whoSelected.value === 1 && foreigner.value) {
    temp.push('외국법인');
    return temp;
  }
  if (foreigner.value) temp.push('외국인');
  if (underage.value) temp.push('미성년자');
  return temp
}

</script>

<template>
<div>
<p class="title-type-1">{{ propsData.corpName }}의<br /> 첫 주주와 임원 구성은?</p>
<!-- 임원정보 리스트 -->
<MExecutiveCard
  v-for="(executive, idx) in executiveList"
  :key="`${executive.name}_${idx}`"
  v-bind="executive"
  @remove="removeExecutive(idx)"
  class="exe-list"
/>


<!-- 주주임원추가 모달 -->
<MModal class="exe-modal" max-width="760px" width="100%">
  <template #activator="{ on }">
  <MButton class="exe-btn" :dotted="true" v-on="on">
    <img src="https://deungi24.com/img/ico_list8.png" />
    <p class="txt-20">주주·임원 추가하기</p>
  </MButton>
  </template>

  <template #content="{ on }">
    <p class="txt-28 modal-title"><b>주주 · 임원 정보</b>를 입력하세요.</p>
    <hr />
    <MRadioButtonGroup 
      :contents="exes"
      :set-inline="true"
      name="isExe"
      v-model="exeSelected"
      :default-index="exeSelected"
    />
    <!-- 임원 -->
    <div v-if="exeSelected === 0">
      <MRadioButtonGroup
        :contents="ranks"
        :set-inline="true"
        name="exeCharge"
        v-model="rankSelected"
        :no-check-icon="true"
      />
      <div v-show="rankSelected > -1">
        <MTooltip 
          name="등기24" 
          charge="등기24변호사" 
          image="https://deungi24.com/img/illu_5.png"
          style="margin: 24px 0"
        >
          <div v-show="rankSelected === 0">
            <p class="tooltip-title"><b>대표 이사</b>는 임원을 대표하여 의사를 결정합니다.</p>
            <p class="tooltip-content">대표이사 포함 이사가 3명 이상일 경우, 주요 의사결정시 이사회를 열어야 하며 번거로울 수 있습니다.</p>
          </div>
          <div v-show="rankSelected === 1">
            <p class="tooltip-title"><b>이사</b>는 이사회에 참여하여 경영을 자문, 감독합니다.</p>
            <p class="tooltip-content">경영 활동에는 참석하지 않지만, 특정분야를 자문할 수 있는 전문가로 모십니다. </p>
          </div>
          <div v-show="rankSelected === 2">
            <p class="tooltip-title"><b>감사</b>는 임원을 감시하는 역할을 합니다.</p>
            <p class="tooltip-content">지분이 없으며, 1인 법인 혹은 10억 이상의 자본금이 있는 법인은 반드시 선임해야 합니다.</p>
          </div>
        </MTooltip>

        <!-- 입력칸 -->
        <div v-show="rankSelected > -1">
          <p class="title-type-2">이름</p>
          <div class="exeName">
            <MInput
              class="exeName-input"
              v-model="name" 
              place-holder="이름을 입력해주세요" 
            />
            <div class="exeName-check">
              <MCheck v-model="foreigner" label="외국인" class="exeName-check-1" />
              <MCheck v-model="underage" label="미성년자" />
            </div>
          </div>
          
          <div class="input-desc">
            <p class="txt-16">* 미성년자는 법정 대리인 인증 절차와 부가 비용이 발생 합니다.</p>
            <p class="txt-16">* 외국인은 추가 필요서류 및 비용이 발생합니다.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 임원아닌주주 -->
    <div v-if="exeSelected === 1">
      <p class="title-type-2">주주유형</p>
      <MRadioButtonGroup
        :rear-images="rearImages"
        :contents="who"
        :set-inline="true"
        name="who"
        v-model="whoSelected"
      />
      <div v-if="whoSelected === 0 || whoSelected === 1">
        <p class="title-type-2">이름</p>
        <div v-if="whoSelected === 0">
          <div class="exeName">
            <MInput
              class="exeName-input"
              v-model="name" 
              place-holder="이름을 입력해주세요" 
            />
            <div class="exeName-check">
              <MCheck v-model="foreigner" label="외국인" class="exeName-check-1" />
              <MCheck v-model="underage" label="미성년자" />
            </div>
          </div>
        </div>
        <div v-if="whoSelected === 1">
          <div class="exeName">
            <MInput
              class="exeName-input"
              v-model="name" 
              place-holder="이름을 입력해주세요" 
            />
            <div class="exeName-check">
              <MCheck v-model="foreigner" label="외국법인" />
            </div>
          </div>
        </div>

        <div class="input-desc">
          <p class="txt-16">* 미성년자는 법정 대리인 인증 절차와 부가 비용이 발생 합니다.</p>
          <p class="txt-16">* 외국인은 추가 필요서류 및 비용이 발생합니다.</p>
        </div>
      </div>

    </div>
    <div style="display: flex; justify-content: center">
      <MButton 
        class="next-btn" 
        width="100%"
        max-width="400px"
        :disabled="!name"
        @click="addList"
        v-on="on"
      >
        <div>
          추가하기
          <img src="https://deungi24.com/img/ico-1.png" />
        </div>
      </MButton>
    </div>
  </template>
</MModal>
<p class="txt-16" style="color: #707899">* 주주 임원 정보는 추후 <b>제출/수정</b>이 가능합니다.</p>

</div>
</template>

<style lang="scss" scoped>
.title-type-1 {
  margin-bottom: 24px;
}
.title-type-2 {
}
.txt-20 {
  color: $color-basic;
}

.tooltip-title {
  b {
    color: $color-basic;
  }
}
.exe-rcontainer {
  padding: 24px 12px;
}
.exe-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 12px;
  img {
    margin-right: 12px;
  }
  p {
    color: black;
  }
}

.modal-title {
  font-family: 'GmarketSans';
  font-weight: 500;
  letter-spacing: -1.5px;
  text-align: center;

  b {
    color: $color-basic;
  }
}
.input-desc {
  // margin-bottom: px;
  margin-top: 12px;
  @include xs {
    margin-bottom: unset;
  }
  p {
    color: #707899;
    margin: 2px 0;
  }
}

.next-btn {
  margin-top: 24px;
}

.exe-list {
  margin-bottom: 12px;
}

.exeName {
  display: flex;
  align-items: center;

  @include xs {
    flex-direction: column;
    align-items: flex-start;
  }

  &-input {
    width: 60%;

    @include xs {
      width: 100%;
    }
  }

  &-check {
    display: flex;
    margin-left: 24px;

    @include xs {
      margin-left: unset;
      margin-top: 12px;
    }
    &-1 {
      margin-right: 16px;
    }
  }
}
</style>