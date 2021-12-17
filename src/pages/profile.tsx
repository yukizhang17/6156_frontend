import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ucard from '../components/userCard/userCard';
import { Button } from 'react-bootstrap';
import UserForm from '../components/userForm/UserForm';
import { User } from './../interfaces/User'

function Profile() {


  const userId = '1';
  const user_url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/users'
  const orders_url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/orders/user'
  const[user, setUser] = useState([] as any[]);
  const[orders, setOrders] = useState([] as any[]);
  const[offset, setOffset] = useState(0);

  const fetchUser = async () => {
    await axios.get(`${user_url}/${userId}`)
    .then(res => res.data[0])
    .then(data => setUser(data))
    .catch(err => console.log('err', err))
  }

  const fetchOrders = async () => {
   await axios.get(`${orders_url}/${userId}`)
    .then(res => res.data)
    .then(data => setOrders(data))
    .catch(err => console.log('err', err))
  }

  const getNext = () => {
    setOffset(offset + 3);
  }

  const getPrevious = () => {
    setOffset(offset - 3);
  }

  const fetchProduct = (order: any) => {
    return (
      <Ucard props={order} />
    )
  }

  const fetchUserForm = (user: any) => {
    return (
      <UserForm props={user} />
    )
  }


  useEffect(() =>{
    fetchUser();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [])



  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 0.5fr)',
      gridRowGap: '1rem',
      gridColumnGap: '1rem',
      margin: '3rem'
    }}>
      <div style={{
        textAlign: 'left',
        margin: '3rem',
        width: '20rem'
      }}>
        <UserForm props={user} />
      </div>
      {console.log(user)}
      {console.log(orders)}
      <div>
      You have following orders:
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '5rem',
      margin: '3rem',
      textAlign: 'left',
      width: '60rem'
      }}>
        {orders.slice(offset, offset + 3).map(fetchProduct)}
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridRowGap: '1rem',
      gridColumnGap: '5rem',
      margin: '3rem'
     }}>
       <div style={{
         margin: '1rem',
         textAlign: 'left'
       }}>
     {offset >= 3 && (
       <Button size='sm' onClick={getPrevious} style={{
         width: '5rem'
       }}>
       prev
       </Button>
     )}
   </div>
   <div style={{
         margin: '1rem',
         textAlign: 'right'
       }}>
     {offset < orders.length - 3 && (
       <Button size='sm' onClick={getNext} style={{
         width: '5rem',
       }}>
       next
       </Button>
     )}
    </div>
   </div>

 </div>
    </div>
  )
}

export default Profile;
