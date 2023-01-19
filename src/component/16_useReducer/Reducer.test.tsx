import {reducer, StateType} from './Reducer';


test('collapsed should be true', ()=>{
const state:StateType = {
  collapsed:false
}
const newState = reducer(state,{type:'SET-СOLLAPSED'})
  expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', ()=>{
  const state:StateType = {
    collapsed:true
  }
  const newState = reducer(state,{type:'SET-СOLLAPSED'})
  expect(newState.collapsed).toBe(false)
})