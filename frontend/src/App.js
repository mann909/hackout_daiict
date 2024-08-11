import './App.css';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Layout from './components/Layout';
import FarmerProfiles from './components/FarmerProfiles';
import User from './components/User';
import FieldInfo from './components/FieldInfo';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Agent from './components/Agent';
import Farmer from './components/Farmer';

function App() {

  const value = useContext(AppContext)

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
      {!value.isLoggedIn && <Route path='' element={<Home/>}/>}
        {value.user.type === 'Customer' && (<>
          <Route path='user' element={<User/>}/>
          <Route path='farmerprofiles' element={<FarmerProfiles/>}/>
          <Route path='fieldinfo' element={<FieldInfo/>}/>
        </>)}
        {
          value.user.type === 'Agent' && (<>
          <Route path='agent' element={<Agent/>}/></>)
        }
        {
          value.user.type === 'Farmer' && (<>
          <Route path='farmer' element={<Farmer/>}/></>)
        }
      </Route>
      {!value.isLoggedIn && <Route path='/login' element={<Login/>}/>}
      {!value.isLoggedIn && <Route path='/signup' element={<Signup/>}/>}
    </Routes>
    </Router></>
  );
}

export default App;
