/// <reference types="jqueryui" />

declare namespace JQueryUI {
  interface WidgetCommonProperties {
    _super: () => never
    options: { [key: string]: string }
  }

  interface Button101 extends Widget, ButtonOptions {
    icon?: string
    iconPosition?: 'beginning' | 'end' | 'bottom'
    showLabel?: boolean
    // eslint-disable-next-line no-use-before-define
    click: JQuery.TypeEventHandler<
      HTMLButtonElement,
      null,
      HTMLButtonElement,
      HTMLButtonElement,
      'click'
    >
    isFullWidth?: boolean
  }

  interface UI {
    button101: Button101
  }
}

interface JQuery {
  button101(): JQuery
  button101(methodName: 'destroy'): void
  button101(methodName: 'disable'): void
  button101(methodName: 'enable'): void
  button101(methodName: 'refresh'): void
  button101(methodName: 'widget'): JQuery
  button101(methodName: string): JQuery
  button101(options: JQueryUI.ButtonOptions): JQuery
  button101(optionLiteral: string, optionName: string): never
  button101(optionLiteral: string, options: JQueryUI.ButtonOptions): never
  button101(
    optionLiteral: string,
    optionName: string,
    optionValue: never,
  ): JQuery
}
