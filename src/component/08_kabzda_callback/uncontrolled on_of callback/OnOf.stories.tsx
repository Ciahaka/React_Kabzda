import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOffCallback, onClickType} from './UnControlledOnOffCallback';


export default {
  title: 'UnControlledOnOffCallback',
  component: UnControlledOnOffCallback,
}
const callbackAction= action('on or of clicked')
export const OnMode = () => <UnControlledOnOffCallback click={true} onClick={callbackAction}/>
export const OfMode = () => <UnControlledOnOffCallback click={false} onClick={callbackAction}/>
export const SetMode = () => {
  let [isDone,setIsDone] = useState<onClickType>(true)
  return <UnControlledOnOffCallback click={isDone} onClick={(click)=>setIsDone(click)}/>
}

