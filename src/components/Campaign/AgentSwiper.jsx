"use client"
import 'swiper/css';
import { Navigation, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';

export default function AgentSwiper({ children }){

    let counter = 1
    let cards = children.map(element => {
        return(
            <SwiperSlide
            key={counter++}
        >
            {element}
        </SwiperSlide>
        )
    })
    
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }}
            
            modules={[Navigation, FreeMode]}
            aria-orientation="horizontal"
            height={20}
            direction='horizontal'
            className='w-full'
            centerInsufficientSlides='true'
            navigation={true}
            rewind={true}
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
            freeMode={true}
        >
            {cards}
        </Swiper>
    )
}