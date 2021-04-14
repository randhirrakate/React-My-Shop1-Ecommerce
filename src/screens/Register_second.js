import React,{useState} from 'react'
import Navbar_component from '../components/Navbar_component';
import {Function_registerAPI} from './API';

export default function Register_second() 
{

  //array use state 
    const [myvalues,setValues] = useState({
            name:'',
            email:'',
            password:'',
            error:false,
            success:false
        }
    );

    
    const [datafromBackend, updatedatafromBackendadd] = useState();


    const { email, name, password, error, success } = myvalues;  
    

      const handleChange = inputtype_name => e => 
      {
        setValues( { ...myvalues,[inputtype_name]: e.target.value } );
      };


      const onSubmit = event =>
      {

       event.preventDefault();
       
       setValues({ ...myvalues, error: false });

       Function_registerAPI({ name, email, password })
         .then(data => 
            {
           if (data.error) 
           {
             setValues({ ...myvalues, error: data.error, success: false });
           } 
           else 
           {
               
            updatedatafromBackendadd(data);
                    console.log(data);
                    setValues({
                    ...myvalues,
                    name: "",
                    email: "",
                    password: "",
                    error: false,
                    success: true
                    });
           }
         })
       
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

                                            <button onClick={onSubmit}   className="btn btn-danger mx-auto d-block">Register</button>

                                </div>

                    </div>
                    <div className="col-lg-4"></div>

                    <ul>
                        <li>User Name : {myvalues.name}</li>
                        <li>User Email : {myvalues.email}</li>
                        <li>User password : {myvalues.password}</li>
                    </ul>

                    <p>
                        Data From Backend :   {JSON.stringify(updatedatafromBackendadd)}

                    </p>

            </div>
          
        </div>
    )
}