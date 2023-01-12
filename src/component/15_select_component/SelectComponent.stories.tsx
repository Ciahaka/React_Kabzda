import React from 'react';
import {action} from '@storybook/addon-actions';
import {SelectComponent} from './SelectComponent';


export default {
  title: 'SelectComponent',
  component: SelectComponent,
}

export const SelectBase = () => <SelectComponent onChange={action('Значение изменилось')}
                                                 value={'1'}
                                                 items={[
                                                   {value:'1', title:'Minsk'},
                                                   {value:'2', title:'Kiev'},
                                                   {value:'3', title:'Moscow'},
                                                 ]}
/>