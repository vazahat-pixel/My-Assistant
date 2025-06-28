import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.Jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>
    <App />
  </UserContext>,
)
