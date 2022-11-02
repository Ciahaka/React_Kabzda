import React from 'react';
import s from './App.module.css';
import {Accordion, Accordion_1, PropsAccordionType} from './component/accordion/Accordion';
import {Rating} from './component/rating/Rating';
import {PageTitle} from './component/title_app/PageTitle';
import {Stars} from './component/star/Stars';
import {AccordionTitle} from './component/accordion/accordion_title/AccordionTitle';
import {ClickUse, OnOf, OnOf_1} from './component/on_of/OnOf';

function App() {
  return (
    <div className="App">
      <p className={s.img}><img src="https://snipp.ru/uploads/view/d8c58b07e849fcdd229dcdebc97cdaba.png"
                                alt="Centered Content" width={200}/></p>
      <PageTitle title={'My Duolingo'}/>
      <PageTitle title={'Interesting meeting'}/>
      <Stars/>
      <Stars/>
      <Accordion title={'Title for Accordion'} collapsed={true}/>
      <Accordion title={'I am hungry!'} collapsed={false}/>
      <Accordion_1 title={'Write me a component'} collapsed={true}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <OnOf_1 isDone={true}/>
      <OnOf_1 isDone={true}/>
      <OnOf isDone={true}/>
      <OnOf isDone={false}/>
        <ClickUse/>


    </div>
  );
}

export default App;
