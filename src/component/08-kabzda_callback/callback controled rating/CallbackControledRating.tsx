import React from 'react';
import s from './CallbackControlledRating.module.css'
import {Puk, PukType} from './Puk';

export type TypeRating ={
  value:number
}

export const CallbackControlledRating = (props:TypeRating) => {
  return (
      <div className={s.container}>
        <Puk selected={props.value>0}/>
        <Puk selected={props.value>1}/>
        <Puk selected={props.value>2}/>
        <Puk selected={props.value>3}/>
      </div>
    );
  }




