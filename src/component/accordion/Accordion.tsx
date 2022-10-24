import React from 'react';
import s from './Accordion.module.css'
import {AccordionBody} from './accordion_body/AccordionBody';
import {AccordionTitle} from './accordion_title/AccordionTitle';

export const Accordion = () => {
  return (
    <div className={s.container}>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  );
}