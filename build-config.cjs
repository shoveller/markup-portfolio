import styleDictionary from 'style-dictionary'
import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer'
import { enhance } from 'sd-tailwindcss-transformer-enhancer'

const SD = styleDictionary.extend(
  enhance(
    makeSdTailwindConfig({
      type: 'all',
      source: ['src/design/global.json'],
      buildPath: 'src/theme/',
    }),
  ),
)
SD.buildAllPlatforms()
