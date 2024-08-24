import Swiper from 'swiper'
import { Navigation , Pagination } from 'swiper/modules'

const baseConfigObj = {
    modules: [Navigation , Pagination],
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        enabled: false,
    },
}

export { Swiper , baseConfigObj }
