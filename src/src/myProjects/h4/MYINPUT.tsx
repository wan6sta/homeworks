import {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react';
import styles from './UI.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MyInputProps = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
}

const MyInput: FC<MyInputProps> = (
  {
    type,
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    className,
    spanClassName,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeText && onChangeText(e.currentTarget.value)
  }

  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e)
    onEnter
      && e.code === 'Enter'
      && onEnter()
  }

  return <label className={styles.label}>
    <input
      type="text"
      onChange={onChangeCallback}
      onKeyDown={onKeyPressCallback}
      className={`${error ? styles.error : ''} ${className}`}
      {...restProps}
    />
    {error && <span className={`${styles.spanError} ${spanClassName ? spanClassName : ''}`}>{error}</span>}
  </label>
};

export default MyInput;