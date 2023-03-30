import React from 'react'
import SideBox from '../Generic/SideBox';
import InputField from '../Generic/InputField';
import './../Generic/credForm.css'
// import { Link } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import AppContext from '../../context/appState/AppContext';
import { useUserLoginMutation } from '../../services/nodeApi';
// import jwt_decode from "jwt-decode";
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import { Form } from 'antd';
//import { useNavigate } from 'react-router-dom';
import bookrec from '../../assets/bookrec.json';


const LoginForm=() => {
  const [ veteranLogin]=useUserLoginMutation();

  // const navigate=useNavigate();


  const head="Login to make a smart record";

  const subHead="Kistae provide a new smart way to recording the sales of goods&accessories on installments";

  const { enqueueSnackbar }=useSnackbar();

  const [ creds, setCreds ]=useState( { email: "", password: "" } );
  const [ loading, setLoading ]=useState( false );

  const formRef=useRef( null )

  const { onChangeGeneric, Cookies }=useContext( AppContext );

  const onChange=onChangeGeneric( creds, setCreds );


  //******** SUBMIT LOGIN FORM 
  const handleSubmit=async ( e ) => {
    setLoading( true );
    try{
    const {data,error}=await veteranLogin( creds )

    
       console.log(data);

    
    
    if ( data ) {
      console.log(data);
      localStorage.setItem( "user", JSON.stringify( data) );
      setLoading( false );
      
      Cookies.set( 'jwt', data.result );
      // const decoded=jwt_decode( res.data.web_token );

      // console.log( decoded );



      formRef.current.resetFields();
      setCreds( { email: "", password: "" } );
      enqueueSnackbar( "Logged in successfully!", { variant: 'success' } );
      //setTimeout( () => { navigate( '/dashboard' ) }, 2000 );

      localStorage.setItem("userType","admin")

      
    }
  
    else {
      setLoading( false );
      console.log(error);
      
     
      enqueueSnackbar(error.data.message, { variant: 'error' } );
      
    }
    
    
  }
    catch(e){ console.log(e)}

    


  }


  // function handleClick() {
  //   setLoading( true );
  // }


  return (
    <div className="row">


      <div className="col-lg-6">

        <SideBox animation={bookrec} width="30rem" heading={head} subHeading={subHead} image='heroLogo.png' />

      </div>

      <div className="col-lg-6">

        <div className="container form">

          <div className="form_top_content">

            <h1 className="text-center text-2xl font-semibold">Welcome back SmartVisioner</h1>
            <p className="text-center">Please enter your account details to login.</p>


            <Form className='row g-2' ref={formRef} style={{ marginTop: "5rem" }} onFinish={handleSubmit}>

              <div className="col-md-12">

                <InputField name="email" label="Email Address" onChange={onChange} margin="mx-auto" placeholder="Enter email address" type='email' rules={[ { required: true, message: 'Please enter valid email!', type: 'email' } ]} />


              </div>


              <div className="col-md-12">
                <InputField name="password" label="Password" onChange={onChange} margin="mx-auto" placeholder="Enter password" type='password' required={true}
                  rules={[ { required: true, message: 'Please enter password!' } ]} />
              </div>


              <div className="field_width mx-auto d-flex justify-content-between check_input">
                <div className="col-md-4 form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <div className="col-md-4 text-end">
                  <a href="/">Forgot Password</a>
                </div>
              </div>


              <div className="col-12 text-center">
                {/* <button className="btn create_account_btn" style={{ width: "70%" }} type="submit">Login</button> */}

                <LoadingButton
                  size="small"
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  className="btn create_account_btn"
                  style={{ width: "70%" }} type="submit"
                >
                  Login
                </LoadingButton>
              </div>






            </Form>

          </div>


        </div>




      </div>


    </div>
  )
}

export default LoginForm