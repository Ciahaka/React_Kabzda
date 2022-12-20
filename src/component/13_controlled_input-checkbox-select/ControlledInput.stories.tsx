import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledInput} from './ControlledInput';

export default {
  title: 'Controlled Input',
  // component: ControlledInput,

}

const callbackAction = action('work of input')

export const useControlledInput = () => {
  const [valueP, setValueP] = useState('')
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueP(event.currentTarget.value)
  }

  return <input value={valueP} onChange={onChangeHandler}/>
}

export const useControlledCheckbox = () => {
  const [valueP, setValueP] = useState(true)
  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueP(event.currentTarget.checked)
  }

  return <input type={'checkbox'} checked={valueP} onChange={checkboxHandler}/>
}

export const useControlledSelect = () => {
  const [valueP, setValueP] = useState<string | undefined>(undefined)
  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setValueP(event.currentTarget.value)
  }

  return <>
    <select value={valueP} onChange={selectHandler}>
      <option>none</option>
      <option value={1}>Минск</option>
      <option value={22}>Питер</option>
      <option value={15}>Киев</option>
    </select>
  </>
}



