import {useState} from 'react'
import {v4} from 'uuid';
import HelloContainer from './HelloContainer';

export type UserType = {
  name: string
  id: string
}

const Hello = () => {
  const [users, setUsers] = useState<UserType[]>([])

  const addUser = (name: string) => {
    setUsers([...users, {id: v4(), name}])
  }

  return <>
    <HelloContainer users={users} addUser={addUser}/>
  </>
}

export default Hello