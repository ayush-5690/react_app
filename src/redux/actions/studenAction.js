import axios from "axios"
import { GET } from "../types/type"

export const getStudent=()=>{
    return dispatch =>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res)=>{
            dispatch({type:GET,data:res.data.data})
        })
    }
}

export const addStudent=(obj)=>{
    return dispatch =>{
        axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
            dispatch(getStudent())
        })
    }
}

export const deleteStudent=(id)=>{
    return dispatch =>{
        axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((res)=>{
            dispatch(getStudent())
        })
    }
}

export const editStudent=(obj)=>{
    return dispatch =>{
        axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
            dispatch(getStudent())
        })
    }
}