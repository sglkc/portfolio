import { render } from 'preact'
import { Provider } from 'react-wrap-balancer'
import { LazyMotion } from 'framer-motion'
import { ReactLenis } from '@studio-freight/react-lenis'
import App from './App'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-700.css'
import '@fontsource/dm-serif-text'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './style.css'

const framerFeatures = () => import('@/framer-features').then(i => i.default)

render(
  <LazyMotion features={framerFeatures} strict>
    <Provider>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </Provider>
  </LazyMotion>,
  document.getElementById('root')!
)
