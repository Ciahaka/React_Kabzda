import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledInput} from './UncontrolledInput';
import {action} from '@storybook/addon-actions';
import {TextField} from '@mui/material';


export default {
  title: 'Input',
  // component: UncontrolledInput,

}

const callbackAction = action('work of input')

export const uncontrolledInput = () => <input/>
export const controlledInputWithFixedValue = () => <input value={'Я под контролем!'}/>
export const useUncontrolledInputTrackedValue = () => {
  const [value, setValue] = useState('')
  return <>
    <input onChange={(event) => {
      const actualValue = event.currentTarget.value
      setValue(actualValue)
    }
    }/> - {value}  </>
}
export const useUncontrolledInputWithButton = () => {
  const [value, setValue] = useState('')
  return <>
    <input/>
    <button onClick={() => {
      setValue('Alert')
    }}> Click
    </button>
    Actual Value: - {value}
  </>
}



