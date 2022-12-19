import React from 'react';
import s from './CallbackControlledRating.module.css'

import {Puk, PukType} from './Puk';

export type RatingValueType = 0|1|2|3|4

export type TypeRating ={
  value: RatingValueType
  onClick:(value: RatingValueType)=>void
}

export const CallbackControlledRating = (props:TypeRating) => {
  return (
      <div className={s.container}>
        <Puk selected={props.value>0} onClick={props.onClick} value={1}/>
        <Puk selected={props.value>1} onClick={props.onClick} value={2}/>
        <Puk selected={props.value>2} onClick={props.onClick} value={3}/>
        <Puk selected={props.value>3} onClick={props.onClick} value={4}/>
      </div>
    );
  }




