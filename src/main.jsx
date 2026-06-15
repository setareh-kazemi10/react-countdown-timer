import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountDown from './CountDown'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountDown />
  </StrictMode>,
)
