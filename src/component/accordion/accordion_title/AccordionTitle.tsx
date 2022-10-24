import React from 'react';
import s from './AccordionTitle.module.css'

export type PropsAccordionTitle = {
  title:string
}

export const AccordionTitle = (props:PropsAccordionTitle) => {
  return (
    <div className={s.container}>
      <h2>{props.title}</h2>
    </div>
  );
}