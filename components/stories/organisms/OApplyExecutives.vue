<script setup lang="ts">
import MModal from '../molecules/MModal.vue';
import MButton from '../molecules/MButton.vue';
import MRadioButtonGroup from '../molecules/MRadioButtonGroup.vue';
import MInputSelection from '../molecules/MInputSelection.vue';
import MExecutiveCard from '../molecules/MExecutiveCard.vue';

import { ref, watch } from 'vue';
import MTooltip from '../molecules/MTooltip.vue';

interface PropType {
  corpname: string;
}

interface INameSelect {
  text: string | undefined;
  check: boolean[] | undefined;
}

interface IExecutive {
  image: string;
  name: string;
  charge: string;
  chips: string[] | [];
  backgroundColor: string;
  state: string;
}


withDefaults(defineProps<PropType>(), {})

const exeSelected = ref(0);
const rankSelected = ref(-1);
const whoSelected = ref(-1);
const nameSelect1 = ref({ text: undefined, check: undefined } as INameSelect);
const nameSelect2 = ref({ text: undefined, check: undefined } as INameSelect);
const nameSelect3 = ref({ text: undefined, check: undefined } as INameSelect);
const executiveList = ref([] as IExecutive[]);

const exes = ['임원', '임원 아닌 주주'];
const ranks = ['대표이사', '이사', '감사'];
const who = ['개인', '법인'];
const extra = ['외국인', '미성년자'];
const rearImages = [
  { unchecked: 'https://deungi24.com/img/ico_list4.png', checked: 'https://deungi24.com/img/ico_list4_on.png'}, 
  { unchecked: 'https://deungi24.com/img/ico_list5.png', checked: 'https://deungi24.com/img/ico_list5_on.png' }
]
const checkItems1 = [
  {
    content: "외국인",
    name: "foreigner"
  },
  {
    content: "미성년자",
    name: "child"
  }
]
const checkItems2 = [
  {
    content: "외국법인",
    name: "foreignCorp"
  }
]

watch(exeSelected, newval => {
  nameSelect1.value = { text: undefined, check: undefined }
  nameSelect2.value = { text: undefined, check: undefined }
  nameSelect3.value = { text: undefined, check: undefined }
  if (newval === 0) { 
    whoSelected.value = -1; // 임원이 선택되면, 임원아닌주주의 selectoption 초기화
  } else {
    rankSelected.value = -1;  // 위와 반대
  }
})
const checkDisabled = () => {
  if (exeSelected.value === 0 && !nameSelect1.value.text) return true;
  else {
    if (exeSelected.value === 1 && whoSelected.value === -1) return true;
    if (whoSelected.value === 0 && !nameSelect2.value.text) return true;
    if (whoSelected.value === 1 && !nameSelect3.value.text) return true;
  }
  return false;
}

const mapping = (target: string[], boolList: boolean[]) => {
  const ret = [];
  if (!boolList) return ret;
  for (let i = 0; i < boolList.length; i += 1) {
    if (boolList[i]) {
      ret.push(target[i]);
    }
  }
  return ret;
}
const addExcutive = () => {
  // 임원아닌주주 => 법인만 이미지 색깔다름
  const exeObj = {} as IExecutive;

  if (exeSelected.value === 0) {
    if (nameSelect1.value.text) {
      exeObj.backgroundColor = '#EDF0FF';
      exeObj.image = 'https://deungi24.com/img/ico_list1.png';
      exeObj.name = nameSelect1.value.text;
      exeObj.chips = mapping(extra, nameSelect1.value.check)
      exeObj.charge = ranks[rankSelected.value];
      exeObj.state = '다음에 입력';
      executiveList.value.push(exeObj)
    }
  } else {
    if (whoSelected.value === 0) {
      if (nameSelect2.value.text) {
        exeObj.backgroundColor = '#EDF0FF';
        exeObj.image = 'https://deungi24.com/img/ico_list1.png';
        exeObj.name = nameSelect2.value.text;
        exeObj.chips = mapping(extra, nameSelect2.value.check)
        exeObj.charge = exes[exeSelected.value];
        exeObj.state = '다음에 입력';
        executiveList.value.push(exeObj)
      }
    } else {
      if (nameSelect3.value.text) {
        exeObj.backgroundColor = '#EDF9FF';
        exeObj.image = 'https://deungi24.com/img/ico_list2.png';
        exeObj.name = nameSelect3.value.text;
        exeObj.chips = mapping(['외국법인'], nameSelect3.value.check)
        exeObj.charge = exes[exeSelected.value];
        exeObj.state = '다음에 입력';
        executiveList.value.push(exeObj)
      }
    }
  }
  nameSelect1.value = { text: undefined, check: undefined };
  nameSelect2.value = { text: undefined, check: undefined };
  nameSelect3.value = { text: undefined, check: undefined };
  exeSelected.value = 0;
  rankSelected.value = -1;
  whoSelected.value = -1;
}

const removeExecutive = (idx) => {
  executiveList.value.splice(idx, 1)
}

</script>

<template>
<p class="title-type-1">{{ corpname }}의<br /> 첫 주주와 임원 구성은?</p>


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
          <MInputSelection
            place-holder="이름을 입력해주세요"
            :check-items="checkItems1"
            v-model="nameSelect1"
            name="임원셀렉트"
          />
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
        <div v-show="whoSelected === 0">
          <MInputSelection 
            place-holder="이름을 입력해주세요"
            :check-items="checkItems1"
            v-model="nameSelect2"
            name="임원아닌주주_개인"
          />
        </div>
        <div v-show="whoSelected === 1">
          <MInputSelection 
            place-holder="이름을 입력해주세요"
            :check-items="checkItems2"
            v-model="nameSelect3"
            name="임원아닌주주_법인"
          />
        </div>
          <!-- v-model="nameSelect" -->
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
        :disabled="checkDisabled()"
        @click="addExcutive()"
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
</style>