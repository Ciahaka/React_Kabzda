import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ArrayAccordion} from './ArrayAccordion';

export default {
  title: 'Array Accordion',
  component: ArrayAccordion,
}

const callbackAction = action('work of accordion')

export const MenuCollapsedMode = () => <ArrayAccordion titleValue={'Я свёрнут'} clickValue={'Цисни'}
                                                       onChange={callbackAction} expanded={true} items={[]}/>

export const MenuUnCollapsedMode = () => <ArrayAccordion titleValue={'Я развёрнут'} clickValue={'Click'}
                                                         onChange={callbackAction} expanded={false}
                                                         items={['Tiger', 'Bear', 'Cat', 'Dog']}/>

export const MenuChangeMode = () => {
  let [expanded, setExpanded] = useState<boolean>(true)
  return (
    <ArrayAccordion titleValue={'Я стейт'} clickValue={'Click'}
                    onChange={() => setExpanded(!expanded)} expanded={expanded}
                    items={['Tiger', 'Bear', 'Cat', 'Dog']}/>
  )
}




