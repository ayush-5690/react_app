import logo from './logo.svg';
import './App.css';
import Comp1 from './component/Comp1';
import 'bootstrap/dist/css/bootstrap.min.css'
import Comp2 from './component/Comp2';
import FormApi from './component/FormApi';
import TableApi from './component/TableApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getStudent } from './redux/actions/studenAction';
import Chart from './component/Chart';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getStudent())
  },[])
  return (
    <>
    {/* <Comp1/>
    <Comp2/> */}
    <FormApi/>
    <TableApi/>
    {/* <Chart/> */}
    </>
  );
}

export default App;
