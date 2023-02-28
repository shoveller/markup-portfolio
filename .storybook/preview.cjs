import prettier from '../.prettierrc.json'
import locale from 'axe-core/locales/ko.json'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier,
  },
  a11y: {
    config: {
      locale,
      // 명도대비는 거의 신경을 못 쓰므로 비활성화하는 경우가 많다
      // rules: [
      //   {
      //     id: 'color-contrast',
      //     enabled: false,
      //   },
      // ],
    },
  },
}
