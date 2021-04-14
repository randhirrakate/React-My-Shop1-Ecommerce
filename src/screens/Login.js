import Navbar_component from '../components/Navbar_component';
import React, { useState } from "react";
import {Function_loginAPI} from './API';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";

function Login()
{
    const [myvalues, setmyValues] = useState({
        email: "",
        password: "",
        error:false,
        errorMSG:"",
        success:false
      });

    const [datafromBackend, updatedatafromBackendadd] = useState();

    const { email, password, error, errorMSG, success } = myvalues;

    const SuccessDiv = () =>
      {
        return(

          <div className="col-lg-12">
          
            <div className="alert alert-success">
              Welcome, Login Success !!!!
            </div>
          
        </div>);
      }


      const ErrorDiv = () =>
      {
        return(

          <div className="col-lg-12">
         
            <div className="alert alert-danger">
              Error In Login : {errorMSG}
            </div>
          </div>

        );
      }


      const MsgDiv = () =>
      {
        if(error === true)
        {
          return ErrorDiv();    
        }
        else if(success === true)
        {
          return SuccessDiv();
        }
      }


      const handleChange = inputtype_name => event => {
        setmyValues({ ...myvalues, [inputtype_name]: event.target.value });
      };
    
      const onSubmit = event =>
       {
        event.preventDefault();

        console.log("email :"+email);
        console.log("password :"+password);
        
        Function_loginAPI({ email, password })
          .then(data => {
            if (data.error) 
            {
              setmyValues({ ...myvalues, error: true, errorMSG:data.error, success: false });
            }
            else if (data.err)
            {
              setmyValues({ ...myvalues, error: true, errorMSG:data.err, success: false });
            } 
            else 
            {

              setmyValues({...myvalues, success: true});
              updatedatafromBackendadd(data);
              console.log(data);
              setmyValues({
                ...myvalues,
                email: "",
                password: "",
                error: false,
                success: true
              });

            }
          })
    
      };
    


    return(
        <div>
            <Navbar_component />

            {MsgDiv()}

            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 my_login_div">
                    <h1 className="text-center"> Login </h1>

                <div className="form group">
                    <label>Email <span className="text-danger">*</span> </label>
                    <input type="email" value={email} onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control" />
                </div>

                <div className="form group">
                    <label>Password <span className="text-danger">*</span> </label>
                    <input type="password" value={password} onChange={handleChange("password")} required placeholder="Enter Your Password" className="form-control" />
                </div>

                <div className="form group">
                    <button onClick={onSubmit} className="mx-auto btn-lg d-block btn btn-success">
                    Login
                    </button>
                </div>

                <div className="form group text-center">
                    <h4>OR</h4>
                </div>

                <div className="form group">
                    <Link to="/register" className="btn mx-auto d-block btn-danger">
                    Register
                    </Link>
                </div>


                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    );
}

export default Login;