import Navbar_component from '../components/Navbar_component';
import productImage2 from '../Images/product2.jpg';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

function ProductInformation()
{
    const element = <FontAwesomeIcon icon={faTags} />
  
    return(
        <div>
            <Navbar_component />
            <div className="row">
                <div className="col-lg-6  text-center productInfoDiv">
                    <div className="row">
                       <div className="col-lg-12">
                         <img className="mx-auto d-block productImage" src={productImage2} /> 
                            </div>
                                    <div className="col-lg-12">
                                    <FontAwesomeIcon icon={['fab', 'apple']} />
                                    <FontAwesomeIcon icon={['fab', 'microsoft']} />
                                    <FontAwesomeIcon icon={['fab', 'google']} />

                                    <FontAwesomeIcon icon="check-square" />
                                    <br/>
                                    <button className="addTocartButton"> <i class="fa fa-shopping-cart" aria-hidden="true"><b> GO TO CART</b></i></button>{" "} 
                                    <button className="buyNowButton"> <i class="fa fa-bolt" aria-hidden="true"><b> BUY NOW</b></i></button>
                                    </div> 

                            </div>
                        </div>


                        <div className="col-lg-6 secondDivProduct productInfoDiv margin">       
                            <h1 className="padding">Nikon D 500 DSLR Camera</h1>
                              <p>
                                <h6 className="padding">Special price</h6>
                                
                                <h4 className="padding">₹1,54,762 </h4>  <span> <del><b className="padding">₹1,86,450</b></del>  </span>  <span className="text-success"> <b> <i class="fa fa-heart" aria-hidden="true"></i> 16% off</b></span>    <span className="text-danger"><b> Hurry, Only 2 left!</b> </span>  

                                <h4 className="avoffer padding">Available offers</h4>
                                    <span className="text-success padding"><i class="fa fa-tag" aria-hidden="true"></i></span> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card  <Link to="/"><b>T&C</b></Link><br/>
                                    <span className="text-success padding"><i class="fa fa-tag" aria-hidden="true"></i></span> Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply  <Link to="/"><b>T&C</b></Link><br/>
                                    <span className="text-success padding"><i class="fa fa-tag" aria-hidden="true"></i></span> Partner OfferGST Invoice Available! Save up to 28% for business purchases.Know More <Link to="/"><b>T&C</b></Link><br/>
                                    {/* {element} <FontAwesomeIcon icon={["fal", "coffee"]}/> */} <span className="text-success padding"><i class="fa fa-tag" aria-hidden="true"></i></span> No cost EMI ₹25,794/month. Standard EMI also available  <Link to="/"><b> View Plans</b></Link>
                            </p>
                            <span className="text-danger padding"><i class="fa fa-truck" aria-hidden="true"></i> </span><b>Delivery to</b><br/>
                            <span className="padding"><input type="text" placeholder="Enter delivery pincode" maxlength="6"></input>{" "}</span>                     <button className="btn-sm btn-success"><b>Check</b></button>
                        </div>
                     </div>
                 </div>
    );
}
export default ProductInformation;