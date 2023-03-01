import 'src/components/atoms/Button101/button101.css'
import { render } from 'src/utils/render'
import 'src/components/atoms/Button101/Button101.type.d.ts'

export const sizeList = ['full', 'large', 'medium', 'small'] as const

export const colorSchemeList = [
  'primary',
  'secondary',
  'tertiary',
  'critical',
] as const

export const methodNameList = [
  'destroy',
  'disable',
  'enable',
  'refresh',
] as const

export const renderButton = (
  props: Partial<
    JQueryUI.Button101 & {
      methodName?: typeof methodNameList[number]
    }
  >,
) => {
  const { methodName = 'enable', click: onClick = () => null, ...rest } = props
  $(() => {
    $<HTMLButtonElement>('#button')
      .click(onClick)
      .button101(rest)
      .button101(methodName)
  })

  return render<HTMLButtonElement>(`
    <button id="button"></button>
    <script>
      $(() => {
        $("#button")
          .button101(${JSON.stringify(rest)})
          .button101("${methodName}")
          .on('click', console.log);
      });
    </script>
  `)
}

export default (() => {
  $.widget('custom.button101', $.ui.button, {
    _create() {
      this._super()
      this.element.each((_, el) => {
        el.dataset.size = this.options.size
        el.dataset.color = this.options.color
      })
    },
  })

  return 0
})()
