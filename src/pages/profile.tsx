import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {

  interface User {
    first_name: string
  }

  const userId = '1';
  const user_url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/users'
  const products_url = ''
  const[user, setUser] = useState<User>({first_name: ''});
  const[products, setProducts] = useState([] as any[]);

  const fetchUser = async () => {
    await axios.get(`${user_url}/${userId}`)
    .then(res => res.data[0])
    .then(data => setUser(data))
    .catch(err => console.log('err', err))
  }

  const fetchProducts = async () => {
   await axios.get(`${user_url}/${userId}`)
    .then(res => res.data)
    .then(data => setUser(data))
    .catch(err => console.log('err', err))
  }

  useEffect(() =>{
    fetchUser();
  }, []);


  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '5rem',
      margin: '3rem'
    }}>
      <div style={{
        textAlign: 'left',
        margin: '3rem'
      }}>
        <h3>Hi, {user.first_name}!</h3>
      </div>
      <div>
        You have following orders
      </div>
    </div>
  )
}

export default Profile;
