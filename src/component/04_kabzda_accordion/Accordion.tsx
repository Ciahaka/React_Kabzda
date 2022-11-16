import React from 'react';
import s from './Accordion.module.css'
import {AccordionBody} from './accordion_body/AccordionBody';
import {AccordionTitle, PropsAccordionTitle} from './accordion_title/AccordionTitle';

export type PropsAccordionType = {
  title: string
  collapsed: boolean
}

export const Accordion_1 = (props: PropsAccordionType) => {
  return (
    <div className={s.container}>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  );

}
export const Accordion = (props: PropsAccordionType) => {
  if (props.collapsed) {
    return (
      <div className={s.container}>
        <AccordionTitle title={props.title}/>
      </div>
    )
  }
  return (
    <div className={s.container}>
      <AccordionTitle title={props.title}/>
      <AccordionBody/>
    </div>
  );

}