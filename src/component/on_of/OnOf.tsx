import React from 'react';
import s from './OnOf.module.css'


export type PropsOnOfType = {
  isDone: boolean
}

export const OnOf_1 = (props: PropsOnOfType) => {
  return (
    <div className={s.container}>
      <div className={props.isDone ? s.on || s.normal: s.of}>on</div>
      {/*<div className={props.isDone ? s.on : s.of }>of</div>*/}
      <div className={props.isDone ? s.roundOn  : s.roundOf}></div>
    </div>

  )

}

export const OnOf = (props: PropsOnOfType) => {
  if (props.isDone) {
    return (
      <div className={s.container}>
        <div className={s.on}>on</div>
        <div className={s.normal}>of</div>
        <div className={s.roundOn}></div>
      </div>
    )
  } else {
    return (
      <div className={s.container}>
        <div className={s.normal}>on</div>
        <div className={s.of}>of</div>
        <div className={s.roundOf}></div>
      </div>
    )
  }
}

