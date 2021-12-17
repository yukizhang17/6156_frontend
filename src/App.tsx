import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Unav from './pages/u_nav';
import Bhome from './pages/b_home';
import { setGlobal, useGlobal } from 'reactn';

function App() {
  // setGlobal({
  // userType: 'user'
  // });


  // const[isBusiness, setIsBusiness] = useGlobal(keyof 'userType');
  // const handleClick = () => {
  //   setUserType();
  // }

  // useEffect(() =>{
  //   handleClick();
  // }, [])


  return (
  <>
    {/* <Button onClick={handleClick}>Change</Button> */}
    {/* {userType === true ? <Uhome /> : <Bhome />} */}
    <Unav />
  </>
  )
}


export default App;
