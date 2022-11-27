import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {CallbackAccordion} from './CallbackAccordion';



export default {
  title: 'CallbackAccordion',
  component: CallbackAccordion,
}
const callbackAction = action('accordion mode change')
export const OnMode = () => <CallbackAccordion title={'Callback'}/>
export const SetMode = () => {
  let [collapsed,setCollapsed] = useState<boolean>(false);
  return (
    <CallbackAccordion title={'Callback'} />
  )
}

