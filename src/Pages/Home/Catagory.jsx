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
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const Catagory = () => {
    return (
        <>
            <section>
                <SectionTitle heading={"ORDER ONLINE"} subHeading={"---From 11.00am to 10.00pm---"}></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-16"
                >
                    <SwiperSlide> <img src={catagoryImg1} />
                        <h3 className='text-4xl uppercase text-white text-center -mt-16'>SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img src={catagoryImg2} />
                        <h3 className='text-4xl uppercase text-white text-center -mt-16'>SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img src={catagoryImg3} />
                        <h3 className='text-4xl uppercase text-white text-center -mt-16'>SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img src={catagoryImg4} />
                        <h3 className='text-4xl uppercase text-white text-center -mt-16'>SALADS</h3>
                    </SwiperSlide>
                    <SwiperSlide> <img src={catagoryImg4} />
                        <h3 className='text-4xl uppercase text-white text-center -mt-16'>SALADS</h3>
                    </SwiperSlide>


                </Swiper>
            </section>
        </>
    )
}

export default Catagory