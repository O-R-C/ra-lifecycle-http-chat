import PropTypes from 'prop-types'
import styles from './MessageInput.module.css'
import { useRef } from 'react'

export default function MessageInput({ onSend }) {
  const inputRef = useRef(null)

  const handleSend = () => {
    const message = inputRef.current.value
    inputRef.current.value = ''
    if (!message.trim()) return
    onSend(message)
  }

  return (
    <div className={styles.messageInput}>
      <input
        type='text'
        name='messageContent'
        placeholder='Type a message...'
        ref={inputRef}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

MessageInput.propTypes = {
  onSend: PropTypes.func,
}
