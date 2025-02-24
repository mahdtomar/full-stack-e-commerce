import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import JWT from './context/JWT.jsx'
import { NotificationProvider } from './hooks/useNotification.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/" future={{
    v7_startTransition: true,
  }}>
    <JWT>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </JWT>
  </BrowserRouter>,
)
