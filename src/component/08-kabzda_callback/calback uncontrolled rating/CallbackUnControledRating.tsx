import React, {useState} from 'react';
import s from './CallbackUnControlledRating.module.css'

export const CallbackUnControlledRating = () => {

  let [value, setValue] = useState(0)
  return (
    <div className={s.container}>

      <SpiT selected={value > 0} setValue={()=>{setValue(1)}} />
      <SpiT selected={value > 1} setValue={()=>{setValue(2)}} />
      <SpiT selected={value > 2} setValue={()=>{setValue(3)}} />
      <SpiT selected={value > 3} setValue={()=>{setValue(4)}}  />

    </div>

  )
};

  type SpiTType = {
  selected: boolean
  setValue: () => void
}

const SpiT = (props: SpiTType) => {
  return <span className={s.span} onClick={() => {props.setValue()}}>{props.selected ? <b>UnCtrRtg</b> : 'SpiT'}</span>

}

