import { DECREMENT, INCREMENT, ZERO } from "../types/type"

export const incrementCount =(obj)=>{
    console.log(obj);
    return (dispatch)=>{
        dispatch({type:INCREMENT,name:"jwdbb"})
    }
}
export const decrementCount =()=>{
    return (dispatch)=>{
        dispatch({type:DECREMENT})
    }
}
export const removeCounter =()=>{
    return (dispatch)=>{
        dispatch({type:ZERO})
    }
}