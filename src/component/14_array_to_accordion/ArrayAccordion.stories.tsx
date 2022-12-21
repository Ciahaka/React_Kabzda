import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ArrayAccordion} from './ArrayAccordion';

export default {
  title: 'Array Accordion',
  component: ArrayAccordion,
}

const callbackAction = action('work of accordion')
const onClickAction = action('меня нажали')

export const MenuCollapsedMode = () => <ArrayAccordion titleValue={'Я свёрнут'}
                                                       clickValue={'Цисни'}
                                                       onChange={callbackAction}
                                                       expanded={true}
                                                       items={[]}
                                                       onClick={onClickAction}/>

export const MenuUnCollapsedMode = () => <ArrayAccordion titleValue={'Я развёрнут'}
                                                         clickValue={'Click'}
                                                         onChange={callbackAction}
                                                         expanded={false}
                                                         items={[
                                                           {title: 'Tiger', value: 1},
                                                           {title: 'Bear', value: 2},
                                                           {title: 'Cat', value: 3},
                                                           {title: 'Dog', value: 4}
                                                         ]}
                                                         onClick={onClickAction}
/>

export const MenuChangeMode = () => {
  let [expanded, setExpanded] = useState<boolean>(true)
  return (
    <ArrayAccordion titleValue={'Я стейт'}
                    clickValue={'Click'}
                    onChange={() => setExpanded(!expanded)} expanded={expanded}
                    items={[
                      {title: 'Tiger', value: 1},
                      {title: 'Bear', value: 2},
                      {title: 'Cat', value: 3},
                      {title: 'Dog', value: 4}
                    ]}
                    onClick={(value)=>{alert(`Нажали элемент с id ${value}`)}}
    />
  )
}




