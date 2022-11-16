import React from 'react';
import s from './AccordionBody.module.css'



export const AccordionBody = () => {
  return (
    <div className={s.container}>

      <ul className={s.ul}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}