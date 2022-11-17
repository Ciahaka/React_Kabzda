import React, {useState} from 'react';
import s from './UnControlledOnOffCallback.module.css'

export type onClickType = true | false

export type PropsOnOfType = {
  click: boolean
  onClick: (click:boolean) => void
}

export const UnControlledOnOffCallback = (props: PropsOnOfType) => {


  return (

    <div className={s.contain}>

      <div className={props.click ? s.onCL || s.of : s.normalCL} onClick={() => {
        props.onClick(true)
      }}>AAAAAAAA!
      </div>
      <div className={props.click ? s.normalCL || s.on : s.ofCL} onClick={() => {
        props.onClick(false)
      }}>SUKA!
      </div>
      <div className={props.click ? s.roundOn : s.roundOf}></div>
    </div>

  )

}
