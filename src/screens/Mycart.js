import React from 'react'
import Navbar_component from '../components/Navbar_component';
import {Table,Button} from 'react-bootstrap';
import productImage from '../Images/product.jpg';
import productImage2 from '../Images/product2.jpg';

export default function Mycart() {
    return (
        <div>
            <Navbar_component />

            <h1 className="text-center"> MY CART </h1>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Image</th>
                <th>QTY</th>
                <th>MRP</th>
                <th>Total Price</th>
                </tr>
            </thead>

            <tfoot>
                <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Image</th>
                <th>QTY</th>
                <th>MRP</th>
                <th>Total Price</th>
                </tr>
            </tfoot>

            <tbody>
                <tr>
                    <th>1</th>
                    <th>Urban Fashion Sneakers For Men(Red)</th>
                    <th><img width="200px" height="200px" src={productImage} /></th>
                    <th>1</th>
                    <th>1,860</th>
                    <th>1,860</th>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <th>2</th>
                    <th>Canon PowerShot SX430 IS</th>
                    <th><img width="200px" height="200px" src={productImage2} /></th>
                    <th>2</th>
                    <th>16,999</th>
                    <th>33,998</th>
                </tr>
            </tbody>
            </Table>

            {/* <Button variant="success float-right">Place Order</Button> */}

            <button className="btn btn-lg btn-success float-right place_order_btn">
                Place Order
            </button>
        </div>
    )
}
