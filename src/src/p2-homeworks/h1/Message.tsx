import styles from './Message.module.css'

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message({message, time, name, avatar}: MessagePropsType) {
  return (
    <div className={styles.message}>
      <div className={styles.messageInner}>
        <img src={avatar} alt=""/>
        <div className={styles.main}>
          <div className={styles.name}>
            <span className={styles.nameMain}>{name}</span>
            <span>{message}</span>
          </div>
          <span className={styles.time}>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default Message
