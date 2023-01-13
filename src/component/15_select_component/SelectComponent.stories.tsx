import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {SelectComponent} from './SelectComponent';


export default {
  title: 'SelectComponent',
  component: SelectComponent,
}

export const WithValue = () => {
  const [value, setValue] = useState('2')
  return <SelectComponent onChange={setValue}
                          value={value}
                          items={[
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Kiev'},
                            {value: '3', title: 'Moscow'},
                          ]}
  />
}

export const WithOutValue = () => {
  const [value, setValue] = useState(null)
  return <SelectComponent onChange={setValue}
                          value={value}
                          items={[
                            {value: '1', title: 'Minsk'},
                            {value: '2', title: 'Kiev'},
                            {value: '3', title: 'Moscow'},
                          ]}
  />
}

