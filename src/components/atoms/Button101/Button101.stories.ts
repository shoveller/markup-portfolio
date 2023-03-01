import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/html'
import {
  colorSchemeList,
  methodNameList,
  renderButton,
  sizeList,
} from 'src/components/atoms/Button101/Button101'

export default {
  title: 'atoms/$.ui.Button101',
  argTypes: {
    methodName: {
      control: { type: 'radio' },
      defaultValue: 'enable',
      options: methodNameList,
    },
    label: { control: 'text' },
    click: { action: 'click', defaultValue: action('click') },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: sizeList,
    },
    color: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: colorSchemeList,
    },
  },
} as Meta<JQueryUI.Button101>

const Template: Story<JQueryUI.Button101> = (props) => {
  return renderButton(props)
}

export const 기본적인_사용법 = Template.bind({})
기본적인_사용법.args = {
  label: 'Button',
}

기본적인_사용법.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/xB2enbJC5YrOsNcjy3KXUD/%F0%9F%A6%A9-Flamingo-Design-System-(Community)?node-id=53%3A413&t=SLiRQhgDZG7wlF6g-4',
  },
}
