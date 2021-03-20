import Navbar_component from '../components/Navbar_component';
import Image_slider from '../components/Image_slider.js';
import My_card_component from '../components/My_card_component';
import productImage from '../Images/product.jpg';
import productImage2 from '../Images/product2.jpg';
import productImage3 from '../Images/product3.jpg';


import '../App.css';

function Home()
{
    return(<div>
        <Navbar_component />
        <Image_slider />
        <h1 className="myheading text-center">My Product</h1>

        <div className="row">

        <div className="col-lg-4">
        <My_card_component product_image={productImage} product_name="Urban Fashion Sneakers For Men(Red)" product_price=" Rs.1,860" product_description="Color Black, Red Urban Fashion" />
        </div>

        <div className="col-lg-4">
        <My_card_component product_image={productImage2} product_name="Nikon D 500 DSLR Camera" product_price="Rs.1,54,762" product_description="Take this travel-friendly" />
        </div>

        <div className="col-lg-4">
        <My_card_component product_image={productImage3} product_name="American Tourister" product_price="Rs.879" product_description="This is a genuine American Tourister product. " />
        </div>

        </div>

    </div>);
}

export default Home;