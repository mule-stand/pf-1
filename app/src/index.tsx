import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'

const container = document.getElementById('app')

if (!container) {
  throw new Error('DOM Root element not found')
}

const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
