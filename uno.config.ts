import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        si: () => (
          import('@iconify-json/simple-icons/icons.json').then(i => i.default)
        ),
      },
      scale: 2,
      warn: true,
    }),
    presetTypography({
      cssExtend: {
        '*': {
          'font-family': '"DM Sans", system-ui, sans-serif',
          'margin': '0 auto',
        },
        'p': {
          'letter-spacing': '0.025rem'
        }
      }
    }),
    presetUno(),
  ],
  theme: {
    fontFamily: {
      sans: '"DM Sans", system-ui, sans-serif',
      serif: '"DM Serif Text", serif',
    },
  },
})
