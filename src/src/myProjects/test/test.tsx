import React, {useState} from 'react';
import Test1 from './test1';

const Test = () => {
  const [isLogin, setIsLogin] = useState(false)

  const changeIsLogin = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div>
      <Test1 isLogin={isLogin} changeIsLogin={changeIsLogin}/>
    </div>
  );
};

export default Test;