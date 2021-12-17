import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Uhome from '../pages/u_home';
import Bhome from '../pages/b_home';

function Switch() {

  const[userType, setUserType] = useState('');

  const handleClick = (val: any) => {
    setUserType(val);
    console.log(userType)
  }

  useEffect(() =>{
    handleClick(userType);
  }, []);

  if (userType === 'business') {
    return (
      <>
        <Bhome />
      {console.log(userType)}
    </>
    )
  }

  if (userType === 'user') {
    return (
      <>
        <Uhome />
        {console.log(userType)}
      </>
    )
  }


 return (
    <>
      <Button value='user' onClick={() => handleClick('user')}>I'm a user</Button>
      <Button value='business' onClick={() => handleClick('business')}>I'm running a business here</Button>
    </>
  );
}

export default Switch;
