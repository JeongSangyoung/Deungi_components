import MCheck from './MCheck.vue';
import { Meta, StoryFn } from '@storybook/vue3'
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/MCheck',
  component: MCheck,
  argTypes: {
    name: {
      description: '일종의 key 역할'
    },
    onCheck: {}
  }
} as Meta<typeof MCheck>

const Template:StoryFn<typeof MCheck> = (args) => ({
  components: { MCheck },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MCheck v-bind="args" />
  `,
})

export const CheckExample = Template.bind({})
CheckExample.args = {
  content: '이용약관 동의(필수)',
  name: 'Agree1'
}

const TemplateList:StoryFn<typeof MCheck> = (args) => ({
  components: { MCheck },
  setup() {
    const checkList = [];
    return {
      args,
    }
  },
  template: `
    <div v-bind="args">
      <MCheck 
        v-for="item in args.items" 
        :key="item.name" 
        v-bind="item"
        @check="action"
      />
    </div>
  `,
  methods: {
    action: action('clicked')
  }
})

export const CheckList = TemplateList.bind({})
CheckList.args = {
  items: [
    {
      name: 'Agree1',
      content: '1번항목 동의',
    },
    {
      name: 'Agree2',
      content: '2번항목 동의',
    },
  ]
}