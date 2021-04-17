// Import Swiper React components
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import './Lane.css';

import cardFitness from './assets/cardFitness.png';
import cardHeimtraining from './assets/cardHeimtraining.png';
import cardLaufen from './assets/cardLaufen.png';
import cardRadsport from './assets/cardRadsport.png';
import cardTriathlon from './assets/cardTriathlon.png';
import cardOther from './assets/cardOther.png';

SwiperCore.use([Pagination, Autoplay]);

function Lane() {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
            slidesPerView: 3,
        },
    }}
    >
      <SwiperSlide>
            <img className="slide" src={cardFitness} alt="Fitness" />
      </SwiperSlide>
      <SwiperSlide>
            <img className="slide" src={cardLaufen} alt="Laufen" />
      </SwiperSlide>
      <SwiperSlide>
            <img className="slide" src={cardRadsport} alt="Radsport" />
      </SwiperSlide>
      <SwiperSlide>
            <img className="slide" src={cardTriathlon} alt="Triathlon" />
      </SwiperSlide>
      <SwiperSlide>
            <img className="slide" src={cardOther} alt="Other" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Lane;
