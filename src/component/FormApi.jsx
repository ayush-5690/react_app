import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, editStudent } from "../redux/actions/studenAction";

function FormApi() {
    const [obj, setObj] = useState({hobbies:[]});
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    console.log(state);

    useEffect(()=>{
        if(state.student.editObj){
            setObj({...state.student.editObj})
        }
    },[state])
    
    const getData=(e)=>{
        if(e.target.name === 'hobbies'){
          if(e.target.checked){
            obj.hobbies.push(e.target.value)
          }else{
            obj.hobbies= obj.hobbies.filter((x)=>x !== e.target.value)
          }
        }else{
          obj[e.target.name]=e.target.value
        }
        console.log(obj);
        setObj({...obj})
      }
      const saveData=()=>{
        if(obj._id){
            obj.id = obj._id
            dispatch(editStudent(obj))
        }else{
            dispatch(addStudent(obj))
        }
      }
  return (
    <div>
      <form action="" className="w-50 mx-auto">
        <label htmlFor="" className="d-block">firstname</label>
        <input type="text" className="w-100" name="firstName" value={obj.firstName} onChange={getData}/>
        <label htmlFor="" className="d-block">lastName</label>
        <input type="text" className="w-100" name="lastName" value={obj.lastName} onChange={getData}/>
        <label htmlFor="" className="d-block">age</label>
        <input type="number" className="w-100" value={obj.age} name="age" onChange={getData}/>
        <label htmlFor="" className="d-block">city</label>
        <input type="text" className="w-100" value={obj.city} name="city" onChange={getData}/>
        <label htmlFor="" className="d-block">gender</label>
        <input type="radio"  name="gender" onChange={getData} value={"male"} checked={obj.gender === 'male'}/>male
        <input type="radio"  name="gender" onChange={getData} value={"female"} checked={obj.gender === 'female'}/>female
        <label htmlFor="" className="d-block">hobbies</label>
        <input type="checkbox"   name="hobbies" onChange={getData} value={"cricket"} checked={obj.hobbies.includes("cricket")}/>cricket

        <input type="checkbox" checked={obj.hobbies.includes("football")}  name="hobbies" onChange={getData} value={"football"}/>football

        <input type="checkbox" checked={obj.hobbies.includes("baseball")}  name="hobbies" onChange={getData} value={"baseball"}/>baseball <br />
        <button className="btn btn-success" type="button" onClick={saveData}>Save</button>
      </form>
    </div>
  )
}

export default FormApi
