import React, {useRef, useState} from 'react';
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
export const useUncontrolledInputAbusedReact = () => {
  const [value, setValue] = useState('')
  return <>
    <input id={'inputID'}/>
    <button onClick={(event) => {
      const el = document.getElementById('inputID') as HTMLInputElement
      setValue(el.value)
    }}> Click
    </button>
    Actual Value: - {value}
  </>
}

export const useUncontrolledInputWithRef = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  return <>
    <input ref={inputRef}/>
    <button onClick={() => {

      const el = inputRef.current as HTMLInputElement
      setValue(el.value)
    }}> Click
    </button>
    Actual Value: - {value}
  </>
}



