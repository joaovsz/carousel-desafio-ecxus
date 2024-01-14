import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UploaderProvider } from './context/UploaderContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UploaderProvider>

    <App />
    </UploaderProvider>
  </React.StrictMode>,
)
