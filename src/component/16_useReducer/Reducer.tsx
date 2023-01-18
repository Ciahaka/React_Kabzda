import {ReducerTypeAction} from './UseReducer';

export type AccordionTypeProps = {
  title: string
}
export const SET_CONST = 'SET-СOLLAPSED'
export const reducer = (state: boolean, action: ReducerTypeAction) => {
  switch (action.type) {
    case SET_CONST:
      return !state;
    default:
      throw new Error('Сорян! Но я не понял, что ты имел в виду!')
  }
  return state;
}