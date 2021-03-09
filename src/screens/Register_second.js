import React,{useState} from 'react'
import Navbar_component from '../components/Navbar_component.js';

export default function Register_second() 
{

    const [values,setValues] = useState(
        {
            name:'',
            email:'',
            password:'',
            error:false,
            success:false
        }
    );


    const { email, name, password, error, success } = values;  // variable pass to array 


      const handleChange = inputtype_name => e => 
      {
        setValues( { ...values,[inputtype_name]: e.target.value } );
      };


    return (
        <div>
            <Navbar_component />

            <div className="row">

                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                                <h1>Second Register Screen</h1>

                                <div className="form-group">
                                            <label htmlFor="">User Name : </label>
                                            <input type="text" onKeyUp={handleChange("name")}  required placeholder="Enter User Name"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">
                                            <label htmlFor="">User Email : </label>
                                            <input type="email" onKeyUp={handleChange("email")}   required placeholder="Enter User Email"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">
                                            <label htmlFor="">User Password : </label>
                                            <input type="password"  onKeyUp={handleChange("password")}     required placeholder="Enter User Password"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">

                                            <button className="btn btn-danger mx-auto d-block">Register</button>

                                </div>

                    </div>
                    <div className="col-lg-4"></div>

                    <ul>
                        <li>User Name : {name}</li>
                        <li>User Email : {email}</li>
                        <li>User password : {password}</li>
                    </ul>

            </div>

        </div>
    )
}