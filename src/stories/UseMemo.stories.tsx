import React, {useMemo, useState} from 'react'
import {SecretPropsType, UseUsersMessagesCounter} from '../component/17_react_memo/ReactMemo.stories';

export default {
  title: 'useMemo'
}
export const Example = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }
  return <>

    <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
    <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
    <hr/>
    <div>
      result A: {resultA}
    </div>
    <div>
      result B: {resultB}
    </div>
  </>
}

const UseUsersSecret = (props: SecretPropsType) => {
  console.log('Secret Render')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}
const Users = React.memo(UseUsersSecret)

export const HelpToReactMemo = () => {
  console.log('Help Render')
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(['Dodo', 'Pan Ataman', 'Hrundel'])
  const newArrayUsers = useMemo(() => {
   return  users.filter(u => u.toLowerCase().indexOf('a') > -1)
  }, [users])
  return <>
    <button onClick={() => {
      setCount(count + 1)
    }}>KLAC
    </button>
    <button onClick={()=>{setUsers([...users, 'Glasha' +new Date().getTime()])}}>Add User</button>
    {count}
    <Users users={newArrayUsers}/>
  </>
}