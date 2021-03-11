import Navbar_component from '../components/Navbar_component';
import React, { useState } from "react";
import {signup} from './API';
import { useHistory } from "react-router";

import {BrowserRouter,Switch,Route,Link,Redirect} from "react-router-dom";

function Register()
{
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error:false,
        success: false
      });

    const [datafromBackend, datafromBackendadd] = useState();
    
      const { name, email, password, error, success } = values;
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event =>
       {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
          .then(data => {
            if (data.error) 
            {
              setValues({ ...values, error: data.error, success: false });
            } else 
            {
            

             datafromBackendadd(data);
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

        <div className="row">


                    <div className="col-lg-4 "></div>
                    <div className="col-lg-4 my_login_div ">
                        <h1 className="text-center">Register    </h1>

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
                       
                        <div className="form-group">
                        {JSON.stringify(values)}
                        </div>

                        <div className="form-group">
                            <button  onClick={onSubmit} className="btn btn-danger mx-auto d-block">
                                Register
                            </button>
                            {JSON.stringify(datafromBackend)}
                        </div>
                       
                    </div>

                    <div className="col-lg-4 ">    
                      <p className="text-light text-center">{JSON.stringify(values)}</p>    <p className="text-light text-center">{JSON.stringify(values)}</p>
                      </div>
                    </div>

       </div>);
}

export default Register;