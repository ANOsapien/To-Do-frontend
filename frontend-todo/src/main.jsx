import { createRoot } from 'react-dom/client'
import "./index.css"
import Notification from './components/notifications/notification'
import Inbox from './components/inbox/inbox'
import UserPage from "./components/userpage/userpage"

createRoot(document.getElementById('root')).render(
    <Notification />
)
 