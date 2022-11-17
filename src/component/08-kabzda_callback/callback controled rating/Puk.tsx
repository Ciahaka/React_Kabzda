import React from 'react';
import {RatingValueType} from './CallbackControledRating';
import span from '../CallbackRating.module.css'
export type PukType = {
  selected:boolean
  onClick:(value: RatingValueType)=>void
  value: RatingValueType
}

export const Puk = (props:PukType) => {
  return <span className={span.span} onClick={()=>{props.onClick(props.value)}} >{props.selected ? <b>Puk</b> : 'Puk' }</span>
 // if (props.selected){
 //   return <span><b>Puk</b> </span>;
 // } else {
 //   return <span>Puk</span>;
 // }

}


