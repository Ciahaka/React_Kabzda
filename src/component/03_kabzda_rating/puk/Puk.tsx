import React from 'react';

export type PukType = {
  selected:boolean
}

export const Puk = (props:PukType) => {
 if (props.selected){
   return <span><b>Puk</b> </span>;
 } else {
   return <span>Puk</span>;
 }

}


