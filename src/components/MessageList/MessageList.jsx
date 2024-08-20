import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Message from '../Message/Message'
import styles from './MessageList.module.css'

export default function MessageList({ messages }) {
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages])

  return (
    <div
      className={styles.messageList}
      ref={listRef}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array,
}
