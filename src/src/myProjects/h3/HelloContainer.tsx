import {UserType} from './Hello';
import {ChangeEvent, FC, useState} from 'react';
import HelloPrez from './HelloPrez';
import HelloModal from './HelloModal';

type PropsType = {
  users: UserType[]
  addUser: (name: string) => void
}

const HelloContainer: FC<PropsType> = ({users, addUser}) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isModal, setIsModal] = useState(false)

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.trim()
    setError(value ? '' : 'Field is required')
    setName(value)
  }

  const helloUser = () => {
    setIsModal(true)
    addUser(name)
  }

  const countUsers = users.length

  return (
    <>
      <HelloModal name={name} setIsModal={setIsModal} setName={setName} isModal={isModal}/>
      <HelloPrez
        isModal={isModal}
        name={name}
        error={error}
        setNameCallback={setNameCallback}
        countUsers={countUsers}
        helloUser={helloUser}
      />
    </>
  )
}

export default HelloContainer;