import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper';

import data from '../assets/data/slide'
// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])

const Project = () => {
    return (
        <section className="project">
            <h2 className="project__title">Please take a look through our <br /><span>featured Digital Trends</span></h2>
            <Swiper slidesPerView={'auto'} autoplay={{ delay: 3000 }} spaceBetween={30} centeredSlides={true} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }}>
                {
                    data.map((item) => (
                        <SwiperSlide className="project__slide" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="project__slide__info">
                                <div className="project__slide__info__content">
                                    <h6>{item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                                <i class="fa fa-angle-right"></i>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Project
