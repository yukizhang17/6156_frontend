import Bnavigation from "../components/business_nav/Bnav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buser from "./b_user";

function Bhome() {
  return (
    <>
    <Bnavigation />
      <Router>

       <Routes>
        <Route path='/business' element={<Bhome />} />
        <Route path='/business_user' element={<Buser />} />

       </Routes>

      </Router>


    <div>Hi, this is a business home page</div>
  </>
  )
}

export default Bhome;
