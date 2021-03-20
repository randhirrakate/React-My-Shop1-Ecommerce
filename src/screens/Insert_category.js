import React,{useState}from 'react';
import Navbar_component from '../components/Navbar_component';
import {Function_insert_category} from './API2';
import   '../App.css';


export default function Insert_category() {

    const [myvalues,setMyvalues] = useState(
        {
            name:'',
            error:false,
            errorMSG:"",
            success: false
        }
    );

    const [datafromBackend, datafromBackendadd] = useState();

    const { name, error, success } = myvalues;  

    const SuccDiv = () =>
        {
            return(<div className="row">

            <div className="col-lg-4"></div>
            <div className="col-lg-4 datamsg">
            <div className="alert alert-success">
              Category Insert Successfully !!!!
            </div>
            </div>

             </div>);
        }


    const ErrDiv = () =>
        {
         return(<div className="row">

            <div className="col-lg-4"></div>
            <div className="col-lg-4">
            <div className="alert alert-danger">
              Error In Insert Category : Please Try Again !!!!
            </div>
            </div>

            </div>);
        }

    const MsgsDiv = () =>
        {
          if(success === true)
          {
            return SuccDiv();    
          }
          else if(error === true)
          {
            return ErrDiv();
          }
        }


    const handleChange = input_type_name => e => 
    {

            setMyvalues({...myvalues,[input_type_name]:e.target.value})
    }


    const onSubmit = event =>
    {
        event.preventDefault();
        setMyvalues({ ...myvalues, error: false });
        Function_insert_category({ name })
        .then(data => 
            {
            if (data.error) 
            {
            console.log('error is there');
                setMyvalues({ ...myvalues, error: true, errorMSG:data.error, success: false });
            } 
            else if (data.err)
            {
                setMyvalues({ ...myvalues, error: true, errorMSG:data.err, success: false });
            } 
            else 
            {
                setMyvalues({...myvalues, success: true});
             
                console.log(data);
                setMyvalues({
                ...myvalues,
                name: "",
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
                    <div className="mycategory_insert_div">
                    <h1 className="text-center">Insert Category Information</h1>

                    {MsgsDiv()}

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