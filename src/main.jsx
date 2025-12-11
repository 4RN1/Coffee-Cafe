import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/main.css"
import 'aos/dist/aos.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
