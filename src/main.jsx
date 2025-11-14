import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Background from './Components/Background.jsx'
import AppContextProvider from './context/AppContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
        <Background/>
        <App />
     </AppContextProvider>
  </StrictMode>,
)
