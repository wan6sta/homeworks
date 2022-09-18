import React, {ChangeEvent, useState} from 'react';
import MyInput from './MYINPUT';
import styles from './UI.module.css'
import MyButton from './MYBUTTON';
import MyCheckBox from './MyCheckBox';


const Myhomework4 = () => {
  const [value, setValue] = useState('')
  const error = value ? '' : 'Field is required'
  const [check, setCheck] = useState(false)


  return (
    <div style={{marginTop: 20}}>
      <MyInput
        value={value}
        onChangeText={setValue}
        onEnter={() => {
          if (!value) {
            return
          }
          alert(value)
          setValue('')
        }}
        error={error}
        className={styles.input}
        spanClassName={styles.span}
      />
      <MyInput
        value={value}
        onChangeText={setValue}
        onEnter={() => {
          if (!value) {
            return
          }
          alert(value)
          setValue('')
        }}
        error={error}
        className={styles.input + ' ' + styles.inputTwo}
        spanClassName={styles.span}
      />

      <MyButton className={styles.btn} onClick={() => alert(value)}>
        HYPE
      </MyButton>

      <MyButton className={styles.btn} red>
        HYPE
      </MyButton>

      <MyButton className={styles.btn} disabled>
        HYPE
      </MyButton>

      <MyCheckBox
        className={styles.check}
        checked={check}
        spanClassName={styles.span}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCheck(e.currentTarget.checked)}
      >
        KAIF
      </MyCheckBox>
      <MyCheckBox
        checked={check}
        className={styles.check}
        spanClassName={styles.span}
        onChangeChecked={(value: boolean) => setCheck(value)}
      >
        KAIF
      </MyCheckBox>
    </div>
  );
};

export default Myhomework4;