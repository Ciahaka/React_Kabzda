import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CallbackControlledRating, RatingValueType} from './CallbackControledRating';


export default {
  title: 'CallbackControlledRating',
  component: CallbackControlledRating,
}

export const PukEmpty = ()=> <CallbackControlledRating value={0} onClick={x => x}/>
export const Puk_1 = ()=> <CallbackControlledRating value={1} onClick={x => x}/>
export const Puk_2 = ()=> <CallbackControlledRating value={2} onClick={x => x}/>
export const Puk_3 = ()=> <CallbackControlledRating value={3} onClick={x => x}/>
export const Puk_4 = ()=> <CallbackControlledRating value={4} onClick={x => x}/>

export const PukChange = () => {
 const [rating,setRating]=useState<RatingValueType>(3);
 return <CallbackControlledRating value={rating} onClick={setRating}/>
}



