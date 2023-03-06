var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{a as s}from"./index-75a32375.js";import"./iframe-c2758fdd.js";import"./make-decorator-b207d6be.js";const l=n(t=>new DOMParser().parseFromString(t,"text/html").body,"render"),c=["full","large","medium","small"],u=["primary","secondary","tertiary","critical"],m=["destroy","disable","enable","refresh"],d=n(t=>{const{methodName:o="enable",click:e=n(()=>null,"onClick"),...r}=t;return $(()=>{$("#button").click(e).button101(r).button101(o)}),l(`
    <button id="button"></button>
    <script>
      $(() => {
        $("#button")
          .button101(${JSON.stringify(r)})
          .button101("${o}")
          .on('click', console.log);
      });
    <\/script>
  `)},"renderButton");$.widget("custom.button101",$.ui.button,{_create(){this._super(),this.element.each((t,o)=>{o.dataset.size=this.options.size,o.dataset.color=this.options.color})}}),0;const h={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions'
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
`,locationsMap:{"기본적인-사용법":{startLoc:{col:44,line:33},endLoc:{col:1,line:35},startBody:{col:44,line:33},endBody:{col:1,line:35}}}}},title:"atoms/$.ui.Button101",argTypes:{methodName:{control:{type:"radio"},defaultValue:"enable",options:m},label:{control:"text"},click:{action:"click",defaultValue:s("click")},size:{control:{type:"radio"},defaultValue:"large",options:c},color:{control:{type:"radio"},defaultValue:"primary",options:u}}},p=n(t=>d(t),"Template"),i=p.bind({});i.args={label:"Button"};i.parameters={design:{type:"figma",url:"https://www.figma.com/file/xB2enbJC5YrOsNcjy3KXUD/%F0%9F%A6%A9-Flamingo-Design-System-(Community)?node-id=53%3A413&t=SLiRQhgDZG7wlF6g-4"}};const B=["기본적인_사용법"];export{B as __namedExportsOrder,h as default,i as 기본적인_사용법};
//# sourceMappingURL=Button101.stories-cf91c1b4.js.map
