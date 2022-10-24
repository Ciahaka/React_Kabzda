import React from 'react';
import s from './Rating.module.css'
import {Puk, PukType} from './puk/Puk';

export type TypeRating ={
  value:number
}

export const Rating = (props:TypeRating) => {
  if (props.value===1) {
    return (
      <div className={s.container}>
        <Puk selected={true}/>
        <Puk selected={false}/>
        <Puk selected={false}/>
        <Puk selected={false}/>
      </div>
    );
  }
  if (props.value===2) {
    return (
      <div className={s.container}>
        <Puk selected={true}/>
        <Puk selected={true}/>
        <Puk selected={false}/>
        <Puk selected={false}/>
      </div>
    );
  }
  if (props.value===3) {
    return (
      <div className={s.container}>
        <Puk selected={true}/>
        <Puk selected={true}/>
        <Puk selected={true}/>
        <Puk selected={false}/>
      </div>
    );
  }
  if (props.value===4){
    return (
      <div className={s.container}>
        <Puk selected={true}/>
        <Puk selected={true}/>
        <Puk selected={true}/>
        <Puk selected={true}/>
      </div>
    );
  }
  return (
    <div className={s.container}>
      <Puk selected={false}/>
      <Puk selected={false}/>
      <Puk selected={false}/>
      <Puk selected={false}/>
    </div>
  );
}


