import Navbar_component from '../components/Navbar_component';
import Image_slider from '../components/Image_slider.js';

function Home()
{
    return(<div>
        <Navbar_component />
        <Image_slider />
        <h1 className="text-center">Home Screen</h1>
    </div>);
}

export default Home;