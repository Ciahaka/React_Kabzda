import React, {useState} from 'react';
import s from './UnControlledAccordion.module.css'
import of from '../../05_kabzda_on_of/OnOf.module.css'
import on from '../../05_kabzda_on_of/OnOf.module.css'

export type PropsAccordionType = {
  title: string
  // collapsed: boolean
}

export const UnControlledAccordion = (props:PropsAccordionType) => {

  let[collapsed, setCollapsed]= useState(true)

  return (
    <div className={s.container}>
      <AccordionTitle title={props.title}/>
      <button className={of.of} onClick={()=>setCollapsed(false)}>Поешь!</button>
      <button className={on.on} onClick={()=>setCollapsed(true)}>No eat!</button>
      {!collapsed && <AccordionBody/>}
    </div>
  );


}

export type PropsAccordionTitle = {
  title:string
}

const AccordionTitle = (props:PropsAccordionTitle) => {
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
        <li>ПИУ</li>
        <li>ПИУ-ПИУ</li>
        <li>ПИУ-ПИУ-ПИУ</li>
        <li>ПИУ-ПИУ-ПИУ-ПИУ</li>
      </ul>
    </div>
  );
}
