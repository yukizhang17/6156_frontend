import './App.css';
import Navigation from './components/nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Explore from './pages/explore';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Home from './pages/home';


function App() {
  return (
    <>

      <Navigation />
      <Router>

       <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
       </Routes>

      </Router>

    </>
  );
}

export default App;
