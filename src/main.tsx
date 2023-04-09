import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/dm-serif-text'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
