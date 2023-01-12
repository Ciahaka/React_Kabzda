import React from 'react';
import s from './SelectComponent.module.css'

type itemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: itemType[]
}

export const SelectComponent = (props: SelectPropsType) => {
  const selectedItem = props.items.find(i => i.value === props.value)
  return (
    <div className={s.container}>
      <select name="Select a city">
        <option value="1">London</option>
        <option value="2">Paris</option>
        <option value="3">New York</option>
      </select>
      <div className={s.select + " " + s.active}>
        <h4>{selectedItem && selectedItem.title}</h4>
        <div className={s.items}>
          {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
      </div>


    </div>
  );
};

