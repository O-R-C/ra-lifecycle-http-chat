import PropTypes from 'prop-types'
import styles from './Message.module.css'

export default function Message({ content, userId }) {
  return (
    <div
      className={styles.message + ' ' + (userId === import.meta.env.VITE_USER_ID && styles.myMessage)}
      data-id={userId}
    >
      <div className={styles.messageText}>{content}</div>
    </div>
  )
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
}
