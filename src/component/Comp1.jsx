import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT } from '../redux/types/type';
import { incrementCount } from '../redux/actions/counterAction';

function Comp1() {
  const state=  useSelector(state=>state)
  console.log(state.counter.count);
  
  return (
    <div>
      <h1>counter{state.counter.count}</h1> <br />
    </div>
  )
}

export default Comp1
