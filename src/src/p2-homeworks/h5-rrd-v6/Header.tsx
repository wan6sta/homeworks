import React from 'react'
import {PATH} from './Pages';
import {NavLink} from 'react-router-dom';
import cls from './Header.module.css'

function Header() {
  return (
    <div className={cls.Header}>
      {Object.entries(PATH).map(([name, path]) => <NavLink key={path} to={path}>{name}</NavLink>)}
      <button>Show</button>
    </div>
  )
}

export default Header
