import React, {useState} from 'react';
import s from './CallbackAccordion.module.css'

export type PropsAccordionType = {
  title: string
  // collapsed: boolean
}

export const CallbackUnControlledAccordion = (props:PropsAccordionType) => {

  let[collapsed, setCollapsed]= useState(true)

  return (
    <div className={s.container}>
      <AccordionTitle title={props.title} onClick={()=> {setCollapsed(!collapsed)}}/>
      {!collapsed && <AccordionBody/>}
    </div>
  );


}

export type PropsAccordionTitle = {
  title:string
  onClick:()=>void
}

const AccordionTitle = (props:PropsAccordionTitle) => {
  return (
    <div className={s.title}>
      <h2 className={s.colorText} onClick={()=>{props.onClick()}}>{props.title}</h2>
    </div>
  );
}

const AccordionBody = () => {
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
