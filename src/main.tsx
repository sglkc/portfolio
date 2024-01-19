import { render } from 'preact'
import { Provider } from 'react-wrap-balancer'
import { LazyMotion } from 'framer-motion'
import App from './App'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/dm-serif-text'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const framerFeatures = () => import('@/framer-features').then(i => i.default)

render(
  <LazyMotion features={framerFeatures} strict>
    <Provider>
      <App />
    </Provider>
  </LazyMotion>,
  document.getElementById('root')!
)
