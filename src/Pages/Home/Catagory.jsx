import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Catagory.css';

// import required modules
import { Pagination } from 'swiper/modules';
import catagoryImg1 from "../../assets/Home/Catagory/c1.png"
import catagoryImg2 from "../../assets/Home/Catagory/c2.png"
import catagoryImg3 from "../../assets/Home/Catagory/c3.png"
import catagoryImg4 from "../../assets/Home/Catagory/c4.png"
const Catagory = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={catagoryImg1} />
                </SwiperSlide>
                <SwiperSlide> <img src={catagoryImg2} />
                </SwiperSlide>
                <SwiperSlide> <img src={catagoryImg3} />
                </SwiperSlide>
                <SwiperSlide> <img src={catagoryImg4} />
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Catagory