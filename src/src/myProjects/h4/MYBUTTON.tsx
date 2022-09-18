import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './UI.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
  red?: boolean
}

const MyButton: React.FC<SuperButtonPropsType> = (
  {
    red, className,
    ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
  }
) => {
  const finalClassName = `${red ? s.red : ''} ${className}`

  return (
    <button
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  )
}

export default MyButton;