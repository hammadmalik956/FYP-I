import LoginForm from './components/Login';
import { Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/DashBoard/SideBar';
import NavBar from './components/DashBoard/NavBar';
import LandPage from './components/LandingPage/LandPage';



function App() {
  return (
    <>

      <Routes>
      <Route exact path="/" element={<LandPage/>}/>
        <Route exact path="/login" element={<LoginForm />} />
       
        <Route exact path="/dashboard" element={
          <>
           
            <NavBar />
            <SideBar/>
            
            
          </>} />
      </Routes>
    </>
  );
}

export default App;
