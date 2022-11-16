import React from 'react';
import s from './AppTitle.module.css'

export type PropsPageTitle ={
  title:string
}

export const PageTitle = (props:PropsPageTitle) => {
  return (
    <div className={s.container}>
      <h1 className={s.h3}>{props.title}</h1>
      <>This is s component</>
    </div>
  );
}


