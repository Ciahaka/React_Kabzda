import React from 'react';
import s from './Accordion.module.css'


export const Accordion = () => {
  return (
    <div className={s.container}>
      <h3 className={s.h3}>This is a menu</h3>
      <ul className={s.ul}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}