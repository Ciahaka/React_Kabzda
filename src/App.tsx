import React from 'react';
import s from './App.module.css';
import {Accordion, Accordion_1, PropsAccordionType} from './component/04_kabzda_accordion/Accordion';
import {Rating} from './component/03_kabzda_rating/Rating';
import {PageTitle} from './component/02_rabzda_title_app/PageTitle';
import {Stars} from './component/01_kabzda_star/Stars';
import {AccordionTitle} from './component/04_kabzda_accordion/accordion_title/AccordionTitle';
import {ClickUse, OnOf, OnOf_1} from './component/05_kabzda_on_of/OnOf';
import {UnControlledAccordion} from './component/04_kabzda_accordion/accordion with use/UnControlledAccordion';
import {UnControlledRating} from './component/03_kabzda_rating/un controlled rating/UnControlledRating';
import {CallbackRating} from './component/08-kabzda_callback/CallbackRating';
import {CallbackAccordion} from './component/08-kabzda_callback/callback accordion/CallbackAccordion';
import {
  CallbackControlledRating
} from './component/08-kabzda_callback/callback controled rating/CallbackControledRating';

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
      <UnControlledAccordion title={'I am very hungry!'}/>
      <UnControlledRating/>
      <UnControlledRating/>
      <UnControlledRating/>
      <UnControlledRating/>
      <CallbackRating/>
      <CallbackAccordion title={'Callback'}/>
      <CallbackControlledRating value={2}/>
    </div>
  );
}

export default App;
