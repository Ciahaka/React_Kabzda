import React, {useState} from 'react';
import s from './CallbackAccordion.module.css'
import of from '../../05_kabzda_on_of/OnOf.module.css'
import on from '../../05_kabzda_on_of/OnOf.module.css'

export type PropsAccordionType = {
  title: string
  // collapsed: boolean
}

export const CallbackAccordion = (props:PropsAccordionType) => {

  let[collapsed, setCollapsed]= useState(true)

  return (
    <div className={s.container}>
      <AccordionTitle title={props.title} onClick={()=> {setCollapsed(!collapsed)}}/>
      {/*<button className={of.of} onClick={()=> {setCollapsed(!collapsed)}}>Поешь!</button>*/}
      {/*<button className={on.on} onClick={()=>setCollapsed(true)}>No eat!</button>*/}
      {!collapsed && <AccordionBody/>}
    </div>
  );


}

export type PropsAccordionTitle = {
  title:string
  onClick:()=>void
}

export const AccordionTitle = (props:PropsAccordionTitle) => {
  return (
    <div className={s.title}>
      <h2 className={s.colorText} onClick={()=>{props.onClick()}}>{props.title}</h2>
    </div>
  );
}

export const AccordionBody = () => {
  return (
    <div className={s.container}>

      <ul className={s.body}>
        <li>A-A-A</li>
        <li>Почему</li>
        <li>Болит</li>
        <li>Мозк!?</li>
      </ul>
    </div>
  );
}
