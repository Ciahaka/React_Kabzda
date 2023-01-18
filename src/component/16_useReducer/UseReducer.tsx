import React, {useReducer} from 'react';
import s from './UseReducer.module.css';
import {AccordionTypeProps, reducer, SET_CONST} from './Reducer';

export type ReducerTypeAction = {
  type: string
}

function AccordionForUseReducer  (props: AccordionTypeProps) {
  //let [collapsed, setCollapsed] = useState(true)
  let [collapsed, dispatch] = useReducer(reducer, false)

  return (
    <div className={s.container}>
      <AccordionTitle title={props.title}/>
      <button className={s.of} onClick={() => {
        dispatch({type: SET_CONST})
      }}>Проверяй!
      </button>
      <button className={s.on} onClick={() => {
        dispatch({type: SET_CONST})
      }}>Достаточно!
      </button>
      {!collapsed && <AccordionBody/>}
    </div>
  );

}
export type PropsAccordionTitle = {
  title: string
}

const AccordionTitle = (props: PropsAccordionTitle) => {
  return (
    <div className={s.title}>
      <h2 className={s.colorText}>{props.title}</h2>
    </div>
  );
}

const AccordionBody = () => {
  return (
    <div className={s.container}>

      <ul className={s.body}>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
        <li>Четыре</li>
      </ul>
    </div>
  );
}

export default AccordionForUseReducer