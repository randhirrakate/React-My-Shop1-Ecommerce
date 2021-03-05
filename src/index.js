import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ProductInformation from './screens/ProductInformation';
import About_Us from './screens/About_Us';
import Notfound from './screens/Notfound';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';

const routing = (<BrowserRouter>
       
  <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/about_us"  component={About_Us} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
          <Route path="/ProductInformation"  component={ProductInformation} />
          <Route component={Notfound} ></Route>
    
  </Switch>


</BrowserRouter>
)

ReactDOM.render(routing,document.getElementById('root'));

reportWebVitals();
