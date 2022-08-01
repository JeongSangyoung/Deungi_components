import MExecutiveCard from './MExecutiveCard.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'molecules/MExecutiveCard',
  component: MExecutiveCard,
} as Meta<typeof MExecutiveCard>

const Template:StoryFn<typeof MExecutiveCard> = (args) => ({
  components: { MExecutiveCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <MExecutiveCard v-bind="args" />
  `,
})

export const CardExample = Template.bind({})
CardExample.args = {
  backgroundColor: '#EDF0FF',
  name: '응우옌',
  charge: '임원 아닌 주주',
  chips: ['외국인', '미성년자'],
}

const TemplateList:StoryFn<typeof MExecutiveCard> = (args) => ({
  components: { MExecutiveCard },
  setup() {
    return {
      args,
    }
  },
  template: `
    <div v-bind="args">
      <div v-for="item in args.items" :key="item.name">
        <MExecutiveCard
          v-bind="item"
        />
      </div>
    </div>
  `,
})

export const CardList = TemplateList.bind({})
CardList.args = {
  items: [
    {
      backgroundColor: '#EDF0FF',
      name: '김임원',
      charge: '임원 아닌 주주',
      chips: ['외국인', '미성년자'],
    },
    {
      backgroundColor: '#EDF9FF',
      name: '이주주',
      charge: '임원 아닌 주주',
      chips: ['외국인'],
      image: 'https://deungi24.com/img/ico_list2.png'
    },
    {
      backgroundColor: '#EDF0FF',
      name: '외국인',
      charge: '임원 아닌 주주',
    },
  ]
}