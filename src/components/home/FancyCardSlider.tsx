// CurvedCardSlider.tsx
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CurvedCardSlider() {
    const cards = ["One", "Two", "Three", "Four", "Five"];

    return (
        <div className="w-[1008px] h-80 mx-auto">
            <Swiper
                modules={[EffectCoverflow, Autoplay, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} // number of visible slides
                loop={true}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 40,    // angle of rotation
                    stretch: 0,    // spacing between
                    depth: 150,    // depth perspective
                    modifier: 1,   // intensity
                    slideShadows: true,
                }}
                className="h-full"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-40 h-40 bg-neutral-700 rounded-2xl flex items-center justify-center text-white text-lg shadow-xl">
                            {card}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
