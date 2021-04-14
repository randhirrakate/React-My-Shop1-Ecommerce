import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Register_second from './screens/Register_second';
import ProductInformation from './screens/ProductInformation';
import Contact_us from './screens/Contact_us';
import Mycart from './screens/Mycart';
import Insert_product from './screens/Insert_product';
import Insert_category from './screens/Insert_category';
import Testing from './screens/Testing';
import Notfound from './screens/Notfound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const routing = (<BrowserRouter>
       
  <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/contact_us"  component={Contact_us} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
          <Route path="/register_second"  component={Register_second} />
          <Route path="/ProductInformation"  component={ProductInformation} />
          <Route path="/Mycart"  component={Mycart} />
          <Route path="/Insert_product"  component={Insert_product} />
          <Route path="/Insert_category"  component={Insert_category} />
          <Route path="/testing"  component={Testing} />
          <Route component={Notfound} ></Route>
    
  </Switch>


</BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
