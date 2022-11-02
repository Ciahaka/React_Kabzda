import React, {useState} from 'react';
import s from './OnOf.module.css'


export type PropsOnOfType = {
  isDone: boolean
}

export const OnOf_1 = (props: PropsOnOfType) => {
  return (
    <div className={s.container}>
      <div className={props.isDone ? s.on || s.of : s.normal} onClick={(() => alert('ON'))}>ON_1</div>
      <div className={props.isDone ? s.normal || s.on : s.of} onClick={(() => alert('Of'))}>OF_1</div>
      <div className={props.isDone ? s.roundOn : s.roundOf}></div>
    </div>

  )

}

export const ClickUse = () => {

  let [isDone, setIsDone] = useState(false)

  return (

      <div className={s.container}>

        <div className={isDone ? s.on || s.of : s.normal} onClick={() => {
          setIsDone(true)
        }}>ClickUse ON
        </div>
        <div className={isDone ? s.normal || s.on : s.of} onClick={() => {
          setIsDone(false)
        }}>ClickUse OF
        </div>
        <div className={isDone ? s.roundOn : s.roundOf}></div>
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

