import {FC, MouseEvent, useEffect} from 'react';
import styles from './hello.module.css'

type PropsType = {
  name: string
  setIsModal: (isModal: boolean) => void
  setName: (name: string) => void
  isModal: boolean
}

const HelloModal: FC<PropsType> = ({name, setIsModal, setName, isModal}) => {
  const isModalHandler = () => {
    setIsModal(false)
    setName('')
  }

  const classForModal = isModal ? styles.modalMain : styles.modalHidden

  return (
    <div onClick={isModalHandler} className={classForModal}>
      <div onClick={e => e.stopPropagation()} className={styles.modalHello}>
        <span className={styles.modalSpan}>Привет {name}</span>
      </div>
    </div>
  );
};

export default HelloModal;