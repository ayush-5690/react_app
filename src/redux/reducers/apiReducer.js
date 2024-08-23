import { EDITOBJ, GET } from "../types/type";

const defaultState={
    students:[]
}
export const apiReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case GET:
            return {
                students:action.data
            }
        case EDITOBJ:
            return {
                ...state,editObj:action.data
            }
    
        default:
            return state;
    }
}