import React, {useState} from 'react';
import {UnControlledOnOffCallback, onClickType} from './UnControlledOnOffCallback';


export default {
  title: 'UnControlledOnOffCallback',
  component: UnControlledOnOffCallback,
}

export const OnMode = () => <UnControlledOnOffCallback click={true} onClick={() => {}}/>
export const OfMode = () => <UnControlledOnOffCallback click={false} onClick={() => {}}/>
export const SetMode = () => {
  let [isDone,setIsDone] = useState<onClickType>(true)
  return <UnControlledOnOffCallback click={isDone} onClick={(click)=>setIsDone(click)}/>
}

