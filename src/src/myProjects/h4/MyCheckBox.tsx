import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void
  spanClassName?: string
}

const MyCheckBox: React.FC<SuperCheckboxPropsType> = ({
                                                        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
                                                        onChange, onChangeChecked,
                                                        className, spanClassName,
                                                        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

                                                        ...restProps// все остальные пропсы попадут в объект restProps
                                                      }) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    onChangeChecked && onChangeChecked(e.currentTarget.checked)
  }


  return (
    <label>
      <input
        type={'checkbox'}
        onChange={onChangeCallback}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
      />
      {children && <span className={spanClassName}>{children}</span>}
    </label> // благодаря label нажатие на спан передастся в инпут
  );
};

export default MyCheckBox;