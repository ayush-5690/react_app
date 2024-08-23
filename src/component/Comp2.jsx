import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementCount, incrementCount, removeCounter } from '../redux/actions/counterAction'

function Comp2() {
    const dispatch = useDispatch()
    const increment=()=>{
        dispatch(incrementCount({obj:"jelkfjefejf"}))
      }
    const decrement=()=>{
        dispatch(decrementCount())
      }
    const remove=()=>{
        dispatch(removeCounter())
      }
  return (
    <div>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={remove}>Zero</button>
    </div>
  )
}

export default Comp2
