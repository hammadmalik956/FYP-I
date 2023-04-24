import LoginForm from './components/Login';
import { Routes, Route, Outlet } from "react-router-dom";

import './App.css';
// import SideBar from './components/DashBoard/SideBar';
 import NavBar from './components/NavBar';

import LandPage from './components/LandingPage/LandPage';
import SideNavBar from './components/SideNavBar';
import ViewExam from './components/Dashboard/ViewExam';
import CreateResource from './components/Dashboard/CreateResource';
import CreateExam from './components/Dashboard/CreateExam';



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
            <div className=" w-full pl-[16rem] pt-[4.25rem] mr-[2rem] bg-gray-50  ">
              <Outlet />
            </div>
            
            
          </>} >
           {/****************** ROUTES  *****************/}
          <Route exact path="createresource" element={<CreateResource/>} 
          />
          <Route exact path="exam" element={<CreateExam/>} 
          />
          <Route exact path="settings" element={ <>helo</>} 
          />
          {/* <Route exact path="viewexams" element={ <ViewExam/>} 
          /> */}
           <Route exact path="vexam/:id"  element={ <ViewExam/>} 
          />
          </Route>
      </Routes>
    </>
  );
}

export default App;
