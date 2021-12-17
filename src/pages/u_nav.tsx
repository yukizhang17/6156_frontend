import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../components/nav/NavBar'
import Explore from './explore'
import Profile from './profile'
import Signup from './signup'
import Signin from './signin'
import Uhome from './u_home';

function Unav() {
  return (
    <>
    <Navigation />
      <Router>

       <Routes>
        <Route path='/user' element={<Uhome />} />
        <Route path='/user/explore' element={<Explore />} />
        <Route path='/user/profile' element={<Profile />}/>
        <Route path='/user/signin' element={<Signin />} />
        <Route path='/user/signup' element={<Signup />} />
       </Routes>

      </Router>

  </>
  )
}

export default Unav;
