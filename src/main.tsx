import React from 'react'
import ReactDOM from 'react-dom/client'
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={framerFeatures} strict>
      <Provider>
        <App />
      </Provider>
    </LazyMotion>
  </React.StrictMode>,
)
