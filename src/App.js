import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";

import './App.css';
// import SideBar from './components/DashBoard/SideBar';
 import NavBar from './components/NavBar';

import LandPage from './components/LandingPage/LandPage';
import SideNavBar from './components/SideNavBar';



function App() {
  return (
    <>

      <Routes>
     
      <Route exact path="/" element={<LandPage/>}/>
        <Route exact path="/login" element={<LoginForm />} />
       
        <Route exact path="/dashboard" element={
          <>
           
            <NavBar />
            <SideNavBar/>
            
            
          </>} >
           {/****************** ROUTES  *****************/}
          <Route exact path="createresource" element={ <>helo</>} 
          />
          <Route exact path="settings" element={ <>helo</>} 
          />
          <Route exact path="viewexams" element={ <>helo</>} 
          />
          </Route>
      </Routes>
    </>
  );
}

export default App;
