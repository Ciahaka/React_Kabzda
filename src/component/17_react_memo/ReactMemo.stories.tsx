import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
  title: 'React memo demo',
}
export type CountPropsType = {
  count:number
}
export type SecretPropsType ={
  users:string[]
}
export const UseUsersMessagesCounter = (props:CountPropsType) => {
  return <div>{props.count}</div>
}
export const UseUsersSecret = (props: SecretPropsType) => {
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
}
const  Users = React.memo(UseUsersSecret)
const UseResultExample = () => {
  const [count,setCount] = useState(0)
  const [users,setUsers] = useState(['Dodo', 'Pan Ataman','Hrundel'])

  return <>
    <button onClick={()=>{
      setCount(count+1)
    }
    }>KLAC</button>
    <button onClick={()=>{
      setUsers(
          [...users,
          'Glasha' +new Date().getTime()]

        )
    }
    }>Add User</button>
    <UseUsersMessagesCounter count={count}/>
    <Users users={users}/>
  </>
}
