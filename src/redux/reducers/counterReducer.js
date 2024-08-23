import { DECREMENT, INCREMENT, ZERO } from "../types/type";

const defaultState={
    count:0
}
export const counterReducer=(state=defaultState,action)=>{
    // console.log(state);
    switch (action.type) {
        
        case INCREMENT:
            console.log(state,action);
            
           return {count:state.count+1}
        case DECREMENT:
            console.log(state,action);
            
           return {count:state.count-1}
        case ZERO:
            console.log(state,action);
            
           return {count:0}
    
        default:
            return state;
    }
}