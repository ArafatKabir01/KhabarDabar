import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/Home/Banner Img/b1.jpg"
import banner2 from "../../assets/Home/Banner Img/b2.jpg"
import banner3 from "../../assets/Home/Banner Img/b3.jpg"
import banner4 from "../../assets/Home/Banner Img/b4.jpg"
import banner5 from "../../assets/Home/Banner Img/b5.jpg"
function Banner() {
    return (
        <Carousel>
            <div>
                <img src={banner1} />

            </div>
            <div>
                <img src={banner2} />

            </div>
            <div>
                <img src={banner3} />

            </div>
            <div>
                <img src={banner4} />

            </div>
            <div>
                <img src={banner5} />

            </div>
            
        </Carousel>
    )
}

export default Banner