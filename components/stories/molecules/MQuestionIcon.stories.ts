import MQuestionIcon from './MQuestionIcon.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MQuestionIcon',
  component: MQuestionIcon,
} as Meta<typeof MQuestionIcon>

const Template:StoryFn<typeof MQuestionIcon> = (args) => ({
  components: { MQuestionIcon },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MQuestionIcon v-bind="args">
        <div style="color: white;">
        이용약관 동의<br><br>

        제1조(목적)<br>
        이 약관은 피앤케이 법률사무소(이하 "피앤케이")이 제공하는 법률서비스의 이용과 관련하여 필요한 사항을 규정함을 목적으로 한다.<br>
        <br>
        제2조(약관의 명시와 개정)<br>
        1. 피앤케이는 이 약관의 내용을 서비스 초기화면의 게시한다.<br>

        2. 피앤케이 약관을 개정하는 경우, 최소 7일 전에 미리 공지하여야 하며 적용일자 이후 체결되는 계약에 대해서만 개정약관이 적용된다.<br>

        3. 피앤케이 약관의 개정을 공지한 후 7일 내에 회원이 명시적으로 거부의 의사표시를 하지 않은 경우 약관 개정에 동의한 것으로 간주한다.<br>

        4. 회원이 개정된 약관 적용을 거부하는 경우, 피앤케이과 회원은 이용계약을 해지할 수 있다. 기존의 약관을 적용할 수 없는 경우에도 마찬가지이다.<br>
        <br>
        제3조(약관의 해석)<br>
        별도의 개별 서비스에 대한 약관, 서비스에 대한 계약이 있는 경우 개별 서비스에 대한 약관 및 서비스 계약이 본 약관보다 우선한다.<br>
        <br>
        제4조(이용자에 대한 통지)<br>
        1. 피앤케이 이용자에 대한 통지를 하는 경우, 별도의 규정이 없는 한 전자우편 송달, 우편 송달, SMS, 모바일 메신저, 전화 등을 통하여 통지할 수 있다.<br>

        2. 피앤케이의 홈페이지에 게시함으로써 제1항의 통지를 갈음할 수 있다.<br>
        <br>
        제5조(서비스의 제공)<br>
        1. 피앤케이는 회원에게 다음과 같은 서비스를 제공합니다.<br>

        - 계약서 작성, 검토 서비스<br>

        - 상업등기(법인등기) 서류작성 및 대행서비스<br>

        - 소송업무 위임서비스<br>

        2. 제1항과 관련하여 이 약관 외의 별도의 규정을 둘 수 있습니다.<br>
        <br>
        제6조(정보의 제공, 광고의 게재)<br>
        1. 피앤케이는 피앤케이의 회원이 서비스 이용에 필요한 경우 필요한다고 인정되는 정보(절차안내, 견적안내, 진행현황 안내 등 열거된 예에 한정하지 않음)를 전자우편, 문자메세지, 모바일메신저, 전화, 우편, FAX 등의 방법으로 이용자에게 제공할 수 있습니다.<br>

        2. 이용자는 제1항의 정보 제공 방법 중 일부에 대하여 수신을 거절할 수 있으며, 거절의 의사표시를 하기 전에는 동의를 한 것으로 간주합니다.<br>
        <br>
        제7조(상업등기 서비스의 계약의 성립 및 환불)<br>
        1. 상업등기 서비스는 이용자의 이용신청하여 피앤케이에서 견적서 및 안내자료를 발송하고, 이용자가 이에 대하여 수수료를 입금하는 순간 계약이 성립됩니다.<br>

        2. 상업등기 서비스는 계약 성립 후 이용취소를 할 수 있습니다. 환불 기준은 아래와 같습니다.<br>

        - 이용자가 피앤케이의 등기전담 매니저와 통화 전: 100%<br>

        - 피앤케이의 등기전담 매니저가 등기신청 업무에 착수하기 전 : 70%<br>

        - 등기업무 착수 후: 환불불가<br>

        3. 제2항의 환불 범위에는 수수료만을 의미하며, 공과금은 전액 반환을 원칙으로 하나 이미 소요된 공과금에 대하여는 영수증을 교부함으로써 반환 책임을 면합니다.<br>
        <br>
        제8조(상업등기 서비스의 계약거절 및 해제)<br><br>
        1. 다음과 같은 경우에 피앤케이는 계약을 거절할 수 있습니다.<br>

        - 서비스 이용신청에 승낙하는 것이 피앤케이의 기술상 현저히 지장이 있는 경우<br>

        - 서비스 이용신청을 한 자와 법률상 이행관계가 대립하는 자가 피앤케이의 서비스를 이용하고 있는 경우<br>

        - 서비스 신청 고객이 법령위반행위, 반사회적질서행위, 범죄행위에 해당하는 내용의 서비스를 신청하는 경우<br>

        - 기타 서비스를 제공함에 있어서 부득이한 이유가 있는 경우<br>

        2. 제1항의 사유가 계약 성립 후에 발생한 경우, 피앤케이는 제1항의 사유로 계약을 해제할 수 있습니다. 이때 수수료는 전액 환급하여야 합니다.<br>
        <br>
        제9조(재판권 및 전속관할)<br><br>
        1. 이 약관의 해석 및 피앤케이과 이용자간의 분쟁에 대해서는 대한민국 법률을 적용합니다.<br>

        2. 이 약관의 해석 및 피앤케이과 이용자간의 분쟁 발생시 소송이 제기되는 경우 서울중앙지방법원을 전속관할 법원으로 합니다.<br>
        <br>
        제10조(시행일)<br>
        이 약관은 2020년 09월 25일부터 시행합니다.<br>
      </div>
    </MQuestionIcon>
  `,
})

export const IconExample = Template.bind({})
IconExample.args = {
}
