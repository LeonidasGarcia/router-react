import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { WrapperQuery } from './querys'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapperQuery>
      <App />
    </WrapperQuery>
  </StrictMode>,
)
