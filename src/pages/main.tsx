import Navigation from '../components/nav/NavBar';
import Bnavigation from '../components/business_nav/Bnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './explore';
import Profile from './profile';
import Signup from './signup';
import Signin from './signin';
import Bhome from './b_home';
import Uhome from './u_home';
import Buser from './b_user';


function Main(props: any) {
  const data = props.props;
  console.log(data)
  if (data === 'business') {
    return (
      <Bhome />
    )
  }
  return (
    <>

      <Navigation />
      <Router>

       <Routes>

        <Route path='/user' element={<Uhome />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
       </Routes>

      </Router>

    </>
  );
}

export default Main;
