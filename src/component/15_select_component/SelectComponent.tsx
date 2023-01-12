import React from 'react';

type itemType = {
  title:string
  value: any
}

type SelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: itemType[]
}

export const SelectComponent = (props: SelectPropsType) => {
  return (
    <div>
      <div>{}</div>
      {props.items.map(i=><div>{i.title}</div>)}
    </div>
  );
};

