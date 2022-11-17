import React from 'react';
import s from './CallbackUnControlledAccordion.module.css'
import {AccordionBody} from './accordion_body/AccordionBody'
import {AccordionTitle} from './accordion_title/AccordionTitle'

export type PropsAccordionType = {
  title: string
  pip:string
  collapsed: boolean
  onChange:()=>void
}

export const CallbackUnControlledAccordion = (props: PropsAccordionType) => {
  return (
    <div className={s.container} >
      <AccordionTitle title={props.title} onChange={props.onChange} pip={props.pip}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  );

}
