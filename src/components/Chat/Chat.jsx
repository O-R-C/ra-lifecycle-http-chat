import { useState, useEffect } from 'react'
import Loading from '../Loading/Loading'
import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'
import ChatAPI from './ChatAPI'
import styles from './Chat.module.css'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
      ChatAPI.getMessages(messages?.at(-1)?.id || 0, setMessages, setLoading)
    }, 3000)

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [messages])

  const handleSend = (message) => {
    ChatAPI.postMessage({ content: message, userId: import.meta.env.VITE_USER_ID })
  }

  return (
    <div className={styles.chat}>
      {loading && <Loading />}
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  )
}
