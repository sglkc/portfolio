import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-wrap-balancer'
import App from './App'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/dm-serif-text'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
