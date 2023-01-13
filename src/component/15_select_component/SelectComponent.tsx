import React, {useState} from 'react';
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
  const [active, setActive] = useState(false)
  const [hoverValue, setHoverValue] = useState(props.value)
  const toggleItems = () => setActive(!active)
  const selectedItem = props.items.find(i => i.value === props.value)
  const selectedHover = props.items.find(i => i.value === hoverValue)
  const onClickHandler = (value: any) => {
    props.onChange(value);
    toggleItems()
  }
  return (
    <>
      <div className={s.container}>
        <select name="Select a city">
          <option value="1">London</option>
          <option value="2">Paris</option>
          <option value="3">New York</option>
        </select>
      </div>
      <div className={s.customSelect}>
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {
          active &&
            <div>
              {props.items.map(i => <div key={i.value}
                                         onMouseEnter={()=>{setHoverValue(i.value)}}
                                         className={s.item + ' ' + (selectedHover === i ? s.selected : '')}
                                         onClick={() => {
                                           onClickHandler(i.value)
                                         }}>{i.title}</div>)}
            </div>
        }
      </div>

    </>
  );
};

