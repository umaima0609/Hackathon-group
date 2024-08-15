import React from 'react';
import Signup from './Components/Auth/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { Toaster } from 'react-hot-toast';
import Login from "./Components/Auth/Login";
import { Authprovider } from './Components/Auth/AuthContext';
import Done from './Components/Student/Done';
import About from './Components/About';
import FeedbackForm from './Components/Student/FeedbackForm'; 

const App = () => {
  return (
    <Authprovider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/about' element={<About />} />
          <Route path='/done' element={<Done />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/feedback' element={<FeedbackForm />} />  
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
