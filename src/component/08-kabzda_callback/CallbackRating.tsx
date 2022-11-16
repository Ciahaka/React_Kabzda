import React, {useState} from 'react';
import s from './CallbackRating.module.css'


// export type TypeRating ={
//   value:number
//
// }

export const CallbackRating = () => {

  let [value, setValue] = useState(0)
  return (
    <div className={s.container}>

      <SpiT selected={value > 0} setValue={setValue} value={1} />
      <SpiT selected={value > 1} setValue={setValue} value={2} />
      <SpiT selected={value > 2} setValue={setValue} value={3} />
      <SpiT selected={value > 3} setValue={setValue} value={4} />

    </div>
  )
}; type SpiTType = {
  selected: boolean
  value: 1 | 2 | 3 | 4
  setValue: (value: 1 | 2 | 3 | 4) => void
}

const SpiT = (props: SpiTType) => {
  return <span className={s.span} onClick={() => {props.setValue(props.value)}}>{props.selected ? <b>SpiT</b> : 'SpiT'}</span>

  // return props.selected ? <span><b>SpiT</b> </span> : <span>SpiT</span> <--- 2_и ещё раз зарефакторили. Говорим, что ретурнем спан, если в пропсах придёт состояние selected, то bold, иначе просто вернём строку SpiT

  // if (props.selected) {                 <--- 1_зарефакторили записью выше
  //   return <span><b>SpiT</b> </span>;
  // } else {
  //   return <span>SpiT</span>;
  // }

}
