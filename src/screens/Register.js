import Navbar_component from '../components/Navbar_component';
import React, { useState } from "react";
import { Function_registerAPI } from './API';

import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function Register()
{
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error:false,
        errorMSG:"",
        success: false
      });
      

      const [datafromBackend, updatedatafromBackendadd] = useState();
    
      const { name, email, password, error, errorMSG, success } = values;


      const mySuccessDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div className="col-lg-4 datamsg">
            <div className="alert alert-success">
              Account Create Successfully !!!!
              Now You Can Login <Link to="Login">Click Here For Login</Link>
            </div>
          </div>

        </div>);
      }


      const myErrorDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="alert alert-danger">
              Error In Registration : Please Try Again !!!!
              <p>
                {errorMSG}
              </p>
            </div>
          </div>

        </div>);
      }


      const myMsgDiv = () =>
      {
        if(error === true)
        {
          return myErrorDiv();    
        }
        else if(success === true)
        {
          return mySuccessDiv();
        }
      }
  
    
      const handleChange = inputtype_name => event => {
        setValues({ ...values, error: false, [inputtype_name]: event.target.value });
      };
    
      const onSubmit = event =>
        {
  
         event.preventDefault();
         
         setValues({ ...values, error: false });
  
         Function_registerAPI({ name, email, password })
           .then(data => 
              {
            if (data.error) 
             {
               setValues({ ...values, error: true, errorMSG:data.error, success: false });
             } 
            else if (data.err) 
                {
                  setValues({ ...values, error: true, errorMSG:data.err, success: false });
                }
            else 
                {
                  setValues({ ...values, success: true });    

              updatedatafromBackendadd(data);
                console.log(data);
              setValues({
                ...values,
                name: "",
                email: "",
                password: "",
                error: false,
                success: true
              });

             // history.push("/login") ;

            //   <Redirect  to='/login' />
            }
          })
        //   .catch(console.log("Error in signup"));
      };
    
      
    return(<div>
        <Navbar_component />

        {myMsgDiv()}
      
        <div className="row">


                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Register </h1>

                        <div className="form-group">
                            <label >Name <span className="text-danger">*</span></label>
                            <input type="text" value={name} onChange={handleChange("name")} required placeholder="Enter Your Name" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Email <span className="text-danger">*</span></label>
                            <input type="email" value={email} onChange={handleChange("email")} required placeholder="Enter Your Email" className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label >Password <span className="text-danger">*</span></label>
                            <input type="password"  value={password} onChange={handleChange("password")} required placeholder="Enter Your Password" className="form-control"/>
                        </div>
                       
                        {/* <div className="form-group">
                        {JSON.stringify(values)}
                        </div> */}

                        <div className="form-group">
                            <button  onClick={onSubmit} className="btn btn-danger mx-auto d-block">
                                Register
                            </button>
                            {/* {JSON.stringify(datafromBackend)} */}
                        </div>
                       
                    </div>

                    <div className="col-lg-4 ">    
                      {/* <p className="text-light text-center">{JSON.stringify(values)}</p>
                      <p className="text-light text-center">{JSON.stringify(values)}</p> */}
                      </div>
                    </div>

       </div>
       );
}

export default Register;