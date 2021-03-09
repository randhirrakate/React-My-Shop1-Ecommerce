import Navbar_component from '../components/Navbar_component';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";

function Login()
{
    return(
        <div>
            <Navbar_component />

            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 my_login_div">
                    <h1 className="text-center"> Login </h1>

                <div className="form group">
                    <label>Email <span className="text-danger">*</span> </label>
                    <input type="email" required placeholder="Enter Your Email" className="form-control" />
                </div>

                <div className="form group">
                    <label>Password <span className="text-danger">*</span> </label>
                    <input type="password" required placeholder="Enter Your Password" className="form-control" />
                </div>

                <div className="form group">
                    <button className="mx-auto btn-lg d-block btn btn-success">
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