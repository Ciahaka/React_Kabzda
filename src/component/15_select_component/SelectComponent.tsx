import React, {useState, KeyboardEvent, useEffect} from 'react';
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

  const selectedItem = props.items.find(i => i.value === props.value)
  const selectedHover = props.items.find(i => i.value === hoverValue)

  useEffect(() => {
    setHoverValue(props.value)
  }, [props.value])

  const toggleItems = () => setActive(!active)

  const onClickHandler = (value: any) => {
    props.onChange(value);
    toggleItems()
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoverValue) {
          const challengerElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1]
          if (challengerElement) {
            // setHoverValue(props.items[i + 1].value)
            props.onChange(challengerElement.value)
            return;
          }
        }
      }
      if(!selectedItem){
        props.onChange(props.items[0].value)
      }
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }

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
      <div className={s.customSelect} onKeyDown={onKeyDownHandler} tabIndex={0}>
        <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {
          active &&
            <div>
              {props.items.map(i => <div key={i.value}
                                         onMouseEnter={() => {
                                           setHoverValue(i.value)
                                         }}
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

