import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {


  const  navigate= useNavigate();
  const loginUser=async(values)=>{

  try {
      const res= await axios.post("http://localhost:5000/user/login",values);

      console.log(res.data);
      const token= res?.data?.token;
      localStorage.setItem("accesstoken",token);
    navigate("/home");
  } catch (error) {
    console.log(error.response.data);
  }
  };  
  return (
    <>
     <Formik
      initialValues={{ email: '' ,password:''}}
      validationSchema={Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .trim(),
       password: Yup.string().required("Password is required"), //TODO:"pattern"

      })}
      onSubmit={(values) => {
        loginUser(values);
      }}
    >
      {formik => (
        <form 
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
        <TextField label="Email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}         
        <TextField label="Password" {...formik.getFieldProps("password")} />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}


        <Button type="submit" variant="contained" color="success">
              Sign in
        </Button>

        </form>
      )}
    </Formik>
    </>
   
  );
};


export default LoginForm;