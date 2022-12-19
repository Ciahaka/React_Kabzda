import React from 'react';
import s from './AccordionTitle.module.css'

export type PropsAccordionTitle = {
  title:string
  pip:string
  onChange:()=>void
}

export const AccordionTitle = (props:PropsAccordionTitle) => {
  return (
    <div className={s.container}>
      <h2 className={s.colorText} >{props.title}</h2>
      <h3 className={s.h3} onClick={props.onChange}> {props.pip} </h3>
    </div>
  );
}