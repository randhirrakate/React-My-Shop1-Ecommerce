import Navbar_component from '../components/Navbar_component';
import productImage2 from '../Images/product2.jpg';
import {BrowserRouter,Switch,Route,Link,} from "react-router-dom";
import {Button} from 'react-bootstrap';

function ProductInformation()
{
    return(
        <div>
            <Navbar_component />

            <div className="row">

                <div className="col-lg-6 ProductInfoDiv">
                    <img className="mx-auto d-block productImage" src={productImage2} />
                </div>

                < div className="col-lg-6 secondDivProduct ProductInfoDiv">

                    <h1>Nikon D 500 DSLR Camera</h1>

                    <p>
                        <h6>Special price</h6>
                        <h4>₹1,54,762</h4> <span> <del>₹1,86,450</del> </span>  <span className="text-success"><b>16% off</b></span> <span className="text-danger">Hurry, Only 4 left!</span>
                        <h4 className="avoffer">Available offers</h4>
                        <ul>
                            <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card <Link to="/">T&C</Link></li>
                            <li>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply <Link to="/">T&C</Link></li>
                            <li>Partner OfferGST Invoice Available! Save up to 28% for business purchases.Know More <Link to="/">Know More</Link></li>
                            <li>No cost EMI ₹25,794/month. Standard EMI also available <Link to="/">View Plans ></Link></li>
                        </ul>
                    </p>

                </div>
                
                <div className="col-lg-6">

                    <div className="row">
                        <div className="col-lg-6">
                            <button className="addTocartButton"> Add To Cart </button>
                        </div>
                        <div className="col-lg-6">
                            <button className="buyNowButton">Buy Now  </button>
                        </div>
                    </div>     
            </div>
        </div>
    </div>
    );
}

export default ProductInformation;
