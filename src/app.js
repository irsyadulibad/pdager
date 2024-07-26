import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  spaceBetween: 10,
  slidesPerView: 3,
  autoplay: {
    delay: 500,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
