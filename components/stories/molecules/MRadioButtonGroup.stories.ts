import MRadioButtonGroup from './MRadioButtonGroup.vue';
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MRadioButtonGroup',
  component: MRadioButtonGroup,
  argTypes: {
    onSelect: {
      actions: 'onSelect'
    }
  }
} as Meta<typeof MRadioButtonGroup>

const Template:StoryFn<typeof MRadioButtonGroup> = (args) => ({
  components: { MRadioButtonGroup },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MRadioButtonGroup v-bind="args" />
  `,
})

export const RadioExample = Template.bind({})
RadioExample.args = {
  name: 'example1',
  contents: ['주식회사', '유한회사', '농/어업 법인', '사회적 기업, 협동조합']
}

export const SetDefaultIndex = Template.bind({})
SetDefaultIndex.args = {
  name: 'example3',
  contents: ['주식회사', '유한회사', '농/어업 법인', '사회적 기업, 협동조합'],
  defaultIndex: 1,
}

export const SetInline = Template.bind({})
SetInline.args = {
  name: 'example4',
  contents: ['임원', '임원 아닌 주주'],
  setInline: true,
  maxWidth: '700px'
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  name: 'example5',
  contents: ['대표이사', '이사', '감사'],
  setInline: true,
  noCheckIcon: true,
  maxWidth: '700px'
}

export const RearImages = Template.bind({})
RearImages.args = {
  name: 'example6',
  contents: ['개인', '법인'],
  setInline: true,
  rearImages: [
    { unchecked: 'https://deungi24.com/img/ico_list4.png', checked: 'https://deungi24.com/img/ico_list4_on.png'}, 
    { unchecked: 'https://deungi24.com/img/ico_list5.png', checked: 'https://deungi24.com/img/ico_list5_on.png' }
  ],
  maxWidth: '700px'
}