import React, {useState} from 'react';
import s from './UnControlledRating.module.css'


// export type TypeRating ={
//   value:number
// }

export const UnControlledRating = () => {

  let [value, setValue] = useState(0)
  return (
    <div className={s.container}>
      <Puk selected={value > 0}/>
      <button onClick={() => setValue(1)}>1</button>
      <Puk selected={value > 1}/>
      <button onClick={() => setValue(2)}>2</button>
      <Puk selected={value > 2}/>
      <button onClick={() => setValue(3)}>3</button>
      <Puk selected={value > 3}/>
      <button onClick={() => setValue(4)}>4</button>
    </div>
  );
}

export type PukType = {
  selected: boolean
}

const Puk = (props:PukType) => {

  if (props.selected) {
    return <span><b>Puk</b> </span>;
  } else {
    return <span>Puk</span>;
  }

}





