import React from 'react';

type PropsType = {
  isLogin: boolean
  changeIsLogin: () => void
}

const Test1 = ({isLogin, changeIsLogin}: PropsType) => {
  return (
    <div>
      {isLogin ? 'Я залогинен' : 'Я не в системе'}
      <button onClick={changeIsLogin}>{isLogin ? 'Выйти' : 'Войти'}</button>
    </div>
  );
};

export default Test1;