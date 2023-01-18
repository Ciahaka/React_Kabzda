import React, {useState} from 'react';
import s from './App.module.css';
import {Accordion, Accordion_1} from './component/04_kabzda_accordion/Accordion';
import {Rating} from './component/03_kabzda_rating/Rating';
import {PageTitle} from './component/02_rabzda_title_app/PageTitle';
import {Stars} from './component/01_kabzda_star/Stars';
import {ClickUse, OnOf, OnOf_1} from './component/05_kabzda_on_of/OnOf';
import {UnControlledAccordion} from './component/04_kabzda_accordion/accordion with use/UnControlledAccordion';
import {UnControlledRating} from './component/03_kabzda_rating/un controlled rating/UnControlledRating';
import {CallbackRating} from './component/08_kabzda_callback/CallbackRating';
import {CallbackAccordion} from './component/08_kabzda_callback/callback accordion/CallbackAccordion';
import {
  CallbackControlledRating,
  RatingValueType
} from './component/08_kabzda_callback/callback controled rating/CallbackControledRating';
import {
  CallbackUnControlledRating
} from './component/08_kabzda_callback/calback uncontrolled rating/CallbackUnControledRating';
import {
  CallbackUnControlledAccordion
} from './component/08_kabzda_callback/callback uncontrolled accordion/CallbackUnControlledAccordion';
import {
  onClickType,
  UnControlledOnOffCallback
} from './component/08_kabzda_callback/uncontrolled on_of callback/UnControlledOnOffCallback';
import {UncontrolledInput} from './component/12_uncontrolled_input/UncontrolledInput';
import {ControlledInput} from './component/13_controlled_input-checkbox-select/ControlledInput';
import {ArrayAccordion} from './component/14_array_to_accordion/ArrayAccordion';
import {SelectComponent} from './component/15_select_component/SelectComponent';
import AccordionForUseReducer from './component/16_useReducer/UseReducer';

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [collapsed, setCollapsed] = useState<boolean>(false)
  let [isDone, setIsDone] = useState<onClickType>(true)
  let [expanded, setExpanded] = useState<boolean>(true)
  const [value,setValue]= useState('2')

  return (
    <div className={'App'}>
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
      <ClickUse onChange={setIsDone}/>
      <div className={s.img}>{isDone.toString()}</div>
      <UnControlledAccordion title={'I am very hungry!'}/>
      <UnControlledRating/>
      <UnControlledRating/>
      <UnControlledRating/>
      <UnControlledRating/>
      <CallbackRating/>
      <CallbackRating/>
      <CallbackRating/>
      <CallbackAccordion title={'Callback'}/>
      <CallbackControlledRating value={ratingValue} onClick={setRatingValue}/>
      <CallbackUnControlledRating/>
      <CallbackUnControlledAccordion title={'Я неуправляемый баян из ада!'}
                                     pip={'Жми сюда!--> 0'}
                                     collapsed={collapsed}
                                     onChange={() => setCollapsed(!collapsed)}/>
      <UnControlledOnOffCallback click={isDone} onClick={(click) => setIsDone(click)}/>
      <UncontrolledInput title={'Uncontrolled Input'} value={'Я под контролeм!'}/>
      <ControlledInput title={'Controlled Input'}/>
      <ArrayAccordion items={[
        {title: 'Tiger', value: 1},
        {title: 'Bear', value: 2},
        {title: 'Cat', value: 3},
        {title: 'Dog', value: 4}
      ]}
                      titleValue={'Array of items to Accordion'}
                      clickValue={'ClicK'}
                      onChange={() => setExpanded(!expanded)}
                      expanded={expanded}
                      onClick={(value) => {
                        alert(`Нажали элемент ${value}`)
                      }}
      />
      <SelectComponent value={value} onChange={setValue} items={[
        {value:'1', title:'Minsk'},
        {value:'2', title:'Kiev'},
        {value:'3', title:'Moscow'},
      ]}/>
      <AccordionForUseReducer title={'Посчитай до четырёх'}/>

    </div>
  );
}

export default App;
