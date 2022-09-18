import React from 'react'
import styles from './Message.module.css'

type AlternativeMessagePropsType = {
  ava: string
  mess: string
  likes: number
}

function AlternativeMessage({ava, mess, likes}: AlternativeMessagePropsType) {
  return (
    <div className={styles.message}>
      <div className={styles.messageInner}>
        <img src={ava} alt=""/>
        <div className={styles.main}>
          <span>{mess}</span>
          <span className={styles.likes}>{likes} likes</span>
        </div>
      </div>
    </div>
  )
}

export default AlternativeMessage
