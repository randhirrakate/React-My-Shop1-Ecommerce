import React,{useState}from 'react';
import Navbar_component from '../components/Navbar_component';
import {Function_insert_product} from './API2';
import   '../App.css';


export default function Insert_product() {

    const [myvalues,setMyvalues] = useState(
        {
            name:'',
            description:'',
            price:1200,
            category:'60386f72a1b82065dd9465e5'
        }
    );


    const { name, description, price, category } = myvalues;  


    const handleChange = input_type_name => e => 
    {

            setMyvalues({...myvalues,[input_type_name]:e.target.value})
    }


    const onSubmit = event =>
    {

     event.preventDefault();
     

     Function_insert_product({ name, description, price ,category })
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
                  description: "",
                  price: "",
                  });
         }
       })
     
   };


    return (
        <div>
            <Navbar_component/>

            <div className="row bg-secondary">

                <div className="col-lg-12  text-white" >
                    <div className="myproduct_insert_div">
                    <h1 className="text-center">Insert Product Information</h1>

                <div className="form-group">
                <label>Product Name <span className="text-danger">*</span> </label>
                <input placeholder="Enter Product Name" onKeyUp={handleChange("name")} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                 <label>Product Description <span className="text-danger">*</span> </label>
                <textarea className="form-control" onKeyUp={handleChange("description")} rows="5"></textarea>
                </div>

                <div className="form-group">
                <label>Product Price <span className="text-danger">*</span> </label>
                <input placeholder="Enter Product Name " onKeyUp={handleChange("price")} type="number" step="any"  className="form-control"/>
                </div>

                <div className="form-group">
                <button onClick={onSubmit} className="btn btn-lg btn-danger">
                    Submit
                </button>
                </div>


            <p>
                <h1>Entered Values</h1>

                <ul>
                    <li>Product Name : {myvalues.name} </li>
                    <li>Product Description : {myvalues.description} </li>
                    <li>Product Price : {myvalues.price} </li>
                </ul>
            </p>

                </div>

                
            </div>
              
        </div>
            
    </div>
    )
}