import React, {useState} from 'react'

export default {
  title:'useMemo'
}
export const Example = ()=>{
 const [a, setA]= useState<number>(5)
 const [b, setB]= useState<number>(5)

  let resultA = 1
  let resultB = 1

  for (let i = 1; i <= a; i++) {
    resultA = resultA * i
  }
  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }
  return <>

    <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
    <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
    <hr/>
    <div>
      result A: {resultA}
    </div>
    <div>
      result B: {resultB}
    </div>
  </>
}