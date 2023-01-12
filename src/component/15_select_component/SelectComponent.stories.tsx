import React from 'react';
import {action} from '@storybook/addon-actions';
import {SelectComponent} from './SelectComponent';


export default {
  title: 'SelectComponent',
  component: SelectComponent,
}

export const WithValue = () => <SelectComponent onChange={action('Value - Kiev')}
                                                value={'2'}
                                                items={[
                                                  {value: '1', title: 'Minsk'},
                                                  {value: '2', title: 'Kiev'},
                                                  {value: '3', title: 'Moscow'},
                                                ]}
/>

export const WithOutValue = () => <SelectComponent onChange={action('No Value')}
                                                   items={[
                                                     {value: '1', title: 'Minsk'},
                                                     {value: '2', title: 'Kiev'},
                                                     {value: '3', title: 'Moscow'},
                                                   ]}
/>

