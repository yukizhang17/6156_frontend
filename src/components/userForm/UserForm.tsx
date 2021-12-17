import axios from 'axios';
import { useState, useEffect } from 'react';
import { User } from './../../interfaces/User';

function UserForm(props: any) {
  const data = props.props;
  const [edit, setEdit] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    uid: data.uid,
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,
    email: data.email
  });

  const url = 'https://aejlggnsac.execute-api.us-east-1.amazonaws.com/v1/users';

  const updateUser = async (user: User) => {
    console.log(`${url}/${data.uid}`)
    axios(
      {method: 'post',
      url: `${url}/${data.uid}`,
      data: {
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.last_name,
      email: user.email
      }
    });
  }

  const handleChange = (event: any) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleUpdate = (event: any) => {
    event.preventDefault();
    updateUser(user);
    setEdit(false);
  }

  if (edit) {
    return (
      <div className='table-row'>
          <p>{data.uid}</p>
          <input type='input' name='first_name' placeholder={data.first_name} onChange={handleChange}/>
          <input type='input' name='last_name' placeholder={data.last_name} onChange={handleChange}/>
          <input type='input' name='phone_number' placeholder={data.phone_number} onChange={handleChange}/>
          <input type='input' name='email' placeholder={data.email} onChange={handleChange}/>
          <button type='button' onClick={handleUpdate}>Confirm</button>
      </div>
    )
  } else {
    return (
      <div>
        <p>first_name: {data.first_name}</p>
        <p>last_name: {data.last_name}</p>
        <p>phone_number: {data.phone_number}</p>
        <p>email: {data.email}</p>
        <button type='button' onClick={() => setEdit(true)}>Update</button>
      </div>
    )
  }
}

export default UserForm;
