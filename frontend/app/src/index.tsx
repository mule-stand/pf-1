import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Test } from '@project/test'

const container = document.getElementById('app')

if (!container) {
  throw new Error('DOM Root element not found')
}

const root = createRoot(container)
root.render(
  <StrictMode>
    <Test />
  </StrictMode>
)
