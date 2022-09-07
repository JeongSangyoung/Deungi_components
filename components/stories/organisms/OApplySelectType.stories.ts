import OApplySelectType from './OApplySelectType.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'organisms/OApplySelectType',
  component: OApplySelectType,
} as Meta<typeof OApplySelectType>

const Template:StoryFn<typeof OApplySelectType> = (args) => ({
  components: { OApplySelectType },
  setup() {
    return {
      args,
    }
  },
  template: `
    <OApplySelectType v-bind="args" />
  `,
})

export const Default = Template.bind({})
Default.args = {
  state: { radio: 1 },
  propsData: {
    name: 'example',
    items: [
      {
        content: '주식회사',
        image: 'https://deungi24.com/img/illu_1.png',
        expertName: '등기24',
        expertCharge: '등기24 변호사',
        expertContent: `
          <p class="tooltip-title">
          <span style="color: #3850a1">일반적인 법인</span>으로 <span style="color: #3850a1">외부 투자</span>와 <span
            style="color: #3850a1">절세</span>에 유리합니다.
          </p>
          <p class="tooltip-content">한국에서 가장 흔한 법인 유형입니다. 특수 법인이 아니면 선택하세요.<br>공개적인 투자 유치나, 상장까지도 할 수
            있습니다.</p>
        `
      },
      {
        content: '유한회사',
        image: 'https://deungi24.com/img/illu_2.png',
        expertName: '등기24',
        expertCharge: '등기24 변호사',
        expertContent: `
        <p class="tooltip-title">
          <span style="color: #3850a1">기업 재무 정보</span>를 외부에 <span style="color: #3850a1">공개하기 싫다면</span> 선택하세요.
          </p>
          <p class="tooltip-content">외부 투자나 상장 계획이 없다면, 기업 정보를 공개 할 의무가 없는 유한회사 법인이 유리합니다.</p>
        `
      },
      {
        content: '농/어업 법인',
        image: 'https://deungi24.com/img/illu_3.png',
        expertName: '등기24',
        expertCharge: '등기24 변호사',
        expertContent: `
          <p class="tooltip-title">
          <span style="color: #3850a1">주주 전원</span>이 <span style="color: #3850a1">농업인</span>이라면 선택하세요.
          </p>
          <p class="tooltip-content">농/어업 법인은 각종 세금 감면 혜택과 브랜드 경쟁력을 가질 수 있습니다. 단, 주주 전원의 농업인 확인서가 있어야 설립
            가능 합니다.</p>
        `
      },
      {
        content: '사회적 기업, 협동조합',
        image: 'https://deungi24.com/img/illu_4.png',
        expertName: '등기24',
        expertCharge: '등기24 변호사',
        expertContent: `
          <p class="tooltip-title">
          <span style="color: #3850a1">비영리 회사</span>, <span style="color: #3850a1">협동 조합</span>을 만들고 싶다면 선택하세요.
          </p>
          <p class="tooltip-content">각종 세금 감면 혜택이나 정부 지원을 받을 수 있습니다. 조건에 따라 일정 기준의 영리활동도 가능합니다.</p>
        `
      },
    ]
  }
}