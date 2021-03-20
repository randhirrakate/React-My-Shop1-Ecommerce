import React from 'react';
import {Button} from 'react-bootstrap';
import Navbar_component from '../components/Navbar_component';

function Contact() {
    return (
        <div>
          <Navbar_component />

              <div className="regi_div">
                    <h1 className="text-center"><b>Contact Section</b></h1><br/><br/>
                    <h1 className="text-center"><b>+91_1234567890</b></h1><br/>
              <div className="form-group">
                    <Button className="mx-auto d-block" variant="success">Call</Button> 
                </div>
                <br/>
</div>

</div>
);
}
export default Contact;