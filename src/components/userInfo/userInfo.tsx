import { useState } from 'react';
import { User as UserInterface } from '../../interfaces/User';

function UserInfo(props: any) {
  const[update, setUpdate] = useState<boolean>(false);
  const[updatedForm, setUpdatedForm] = useState<UserInterface>({
    uid: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    email: ''
  });

  const handlechange = (event: any) => {
    setUpdatedForm({...updatedForm, [event.targe.name]: event.target.value})
  }



}

export default UserInfo;
