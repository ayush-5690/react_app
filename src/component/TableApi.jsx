import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent } from '../redux/actions/studenAction';
import { EDITOBJ } from '../redux/types/type';

function TableApi() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(state);

    const deleteData=(id)=>{
        dispatch(deleteStudent(id))
    }
    const editData=(id)=>{
        const editObj = state.student.students.find((x)=>x._id === id)
        console.log(editObj.hobbies.split(","));
        dispatch({type:EDITOBJ,data:{...editObj,hobbies:editObj.hobbies.split(",")}})
    }
    
  return (
    <div>
      
      <table className="table">
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>city</th>
            <th>age</th>
            <th>gender</th>
            <th>hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.student.students.map((x) => {
            return (
              <tr key={x._id}>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.city}</td>
                <td>{x.age}</td>
                <td>{x.gender}</td>
                <td>{x.hobbies}</td>
                <td>
                  <button className="btn btn-warning" onClick={()=>editData(x._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={()=>deleteData(x._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableApi
