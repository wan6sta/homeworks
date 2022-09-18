import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import styles from './hello.module.css'

type PropsType = {
  name: string
  error: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  countUsers: number
  helloUser: () => void
  isModal: boolean
}

const HelloPrez: FC<PropsType> = ({name, helloUser, setNameCallback, countUsers, error,   isModal}) => {
  const isDisable = !name ? styles.buttonDisable : undefined
  const isError = error ? styles.error : undefined
  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!name || isModal) {
      return
    }
    if (e.code === 'Enter') {
      helloUser()
    }
  }

  return (
    <div className={styles.hello}>
      <div className={styles.main}>
        <div className={styles.enter}>
          <input
            className={isError}
            type="text"
            value={name}
            onChange={setNameCallback}
            onKeyDown={enterHandler}
          />
          <button className={isDisable} disabled={!name} onClick={helloUser}>Add</button>
          <span>{countUsers}</span>
        </div>
        <span className={styles.spanError}>{error}</span>
      </div>
    </div>
  );
};

export default HelloPrez;