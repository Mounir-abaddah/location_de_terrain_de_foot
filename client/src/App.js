import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Toaster } from 'react-hot-toast';
import ProtecteRoute from './Components/ProtecteRoute';
import { useSelector } from 'react-redux';
import Reserver from './pages/Reserver/Reserver';
import Notifications from './Components/Notifications/Notifications';
import UserList from './Components/UserList/UserList';
import AcceuilAdmin from './Components/Admin/Acceuil/AcceuilAdmin';
import Rendezvous from './pages/Rendezvous/Rendezvous';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashbord/Dashbord'; 
import AdminRoute from './Components/Adminroute/Adminroute';
import Acceuil from './pages/Acceuil/Acceuil';
import AboutUs from './pages/Home/AboutUs';
import Propos from './pages/Home/Propos';
import ContactUs from './pages/Home/ContactUs';
import Messages from './pages/Messages/Messages';
const App = () => {
  const { loading } = useSelector((state) => state.alerts);
  console.log(loading);
  
  return (
    <BrowserRouter>
      {loading && (
        <div className='spinner-parent'>
          <div className="spinner-border" role="status">
          </div>
        </div>
      )}
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Acceuil' element={<Acceuil />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/A_Propos_de_Nous' element={<Propos />} />
        <Route path='/Contacter_Nous' element={<ContactUs />} />
        <Route path='/reservation' element={<ProtecteRoute><Reserver /></ProtecteRoute>} />
        <Route path='/admin/Notifications' element={<ProtecteRoute><Notifications /></ProtecteRoute>} />
        <Route path='/profile/:userId' element={<ProtecteRoute><Profile /></ProtecteRoute>} />
        <Route path='/rendez_vous' element={<ProtecteRoute><Rendezvous /></ProtecteRoute>} />
        <Route path='/admin/user-lists' element={<AdminRoute><UserList /></AdminRoute>} />
        <Route path='/admin/Messages' element={<AdminRoute><Messages /></AdminRoute>} />
        <Route path='/admin/acceuil' element={<AdminRoute><AcceuilAdmin /></AdminRoute>} />
        <Route path='/Dashboard' element={<ProtecteRoute><Dashboard /></ProtecteRoute>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;