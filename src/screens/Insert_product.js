import Navbar_component from '../components/Navbar_component';
import React,{useState}from 'react';
import {Function_insert_product} from './API';
import   '../App.css';


function Insert_product() {

    const [myvalues,setMyValues] = useState(
        {
            name:"",
            description:"",
            price:"",
            category:'60386f72a1b82065dd9465e5',
            error:false,
            errorMSG:"",
            success:false
        }
    );

    const [datafromBackend, datafromBackendadd] = useState();

    const { name, description, price, category, error, success } = myvalues;  


    const mySuccDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div className="col-lg-4 datamsg">
            <div className="alert alert-success">
              Product Insert Successfully !!!!
            </div>
          </div>

        </div>);
      }


      const myErrDiv = () =>
      {
        return(<div className="row">

          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="alert alert-danger">
              Error In Insert Product : Please Try Again !!!!
            </div>
          </div>

        </div>);
      }


      const myMsgsDiv = () =>
      {
        if(success === true)
        {
          return mySuccDiv();    
        }
        else if(error === true)
        {
          return myErrDiv();
        }
      }


    const handleChange = input_type_name => e => 
    {
            setMyValues({...myvalues,[input_type_name]:e.target.value})
    }

    const onSubmit = event =>
    {
        event.preventDefault();

        setMyValues({ ...myvalues, error: false });
        
        Function_insert_product({ name, description, price ,category })
        .then(data => 
            {
            if (data.error) 
            {
                console.log('error is there');
                // setMyValues({ ...myvalues, error: true, errorMSG:data.error, success: false });
            } 
            else if (data.err)
            {
                setMyValues({ ...myvalues, error: true, errorMSG:data.err, success: false });
            } 
            else 
            {
                setMyValues({...myvalues, success: true});
             
                  datafromBackendadd(data);
                    console.log(data);
                  setMyValues({
                  ...myvalues,
                  name: "",
                  description: "",
                  price: "",
                  error: false,
                  success: true
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

                    {myMsgsDiv()}

                <div className="form-group">
                <label>Product Name <span className="text-danger">*</span> </label>
                <input placeholder="Enter Product Name" value={name} onChange={handleChange("name")} type="text" className="form-control"/>
                </div>

                <div className="form-group">
                 <label>Product Description <span className="text-danger">*</span> </label>
                <textarea className="form-control" value={description} onChange={handleChange("description")} rows="5"></textarea>
                </div>

                <div className="form-group">
                <label>Product Price <span className="text-danger">*</span> </label>
                <input placeholder="Enter Product Name"  value={price} onChange={handleChange("price")} type="number" step="any"  className="form-control"/>
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

export default Insert_product;