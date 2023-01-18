import {ReducerTypeAction} from './UseReducer';

export type AccordionTypeProps = {
  title: string
}
type StateType = {
  collapsed: boolean
}
export const SET_CONST = 'SET-СOLLAPSED'
export const reducer = (state: StateType, action: ReducerTypeAction): StateType => {
  switch (action.type) {
    case SET_CONST:

      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      throw new Error('Сорян! Но я не понял, что ты имел в виду!')
  }
  return state;
}