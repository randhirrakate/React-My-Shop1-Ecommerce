import React,{useState}from 'react';
import Navbar_component from '../components/Navbar_component';
import {Function_insert_category} from './API2';
import   '../App.css';


export default function Insert_category() {

    const [myvalues,setMyvalues] = useState(
        {
            name:'',
        }
    );


    const { name } = myvalues;  


    const handleChange = input_type_name => e => 
    {

            setMyvalues({...myvalues,[input_type_name]:e.target.value})
    }


    const onSubmit = event =>
    {

     event.preventDefault();
     

     Function_insert_category({ name })
       .then(data => 
          {
         if (data.error) 
         {
             console.log('error is there');
                //    setValues({ ...myvalues, error: data.error, success: false });
         } 
         else 
         {
             
                //   updatedatafromBackendadd(data);
                  console.log(data);
                  setMyvalues({
                  ...myvalues,
                  name: "",
                  });
         }
       })
     
   };


    return (
        <div>
            <Navbar_component/>

            <div className="row bg-secondary">

                <div className="col-lg-12  text-white" >
                    <div className="mycategory_insert_div">
                    <h1 className="text-center">Insert Category Information</h1>

                <div className="form-group">
                <label>Category Name <span className="text-danger">*</span> </label>
                <input placeholder="Enter Product Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                <button onClick={onSubmit} className="btn btn-lg btn-danger">
                    Submit
                </button>
                </div>


            <p>
                <h1>Entered Values</h1>

                <ul>
                    <li>Category Name : {myvalues.name} </li>
                </ul>
            </p>

                </div>

                
            </div>
              
        </div>
            
    </div>
    )
}