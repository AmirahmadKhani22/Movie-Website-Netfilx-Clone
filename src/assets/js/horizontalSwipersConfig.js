import jQuery from 'jquery'
import TrendingEvents from './trendingEvents.js'
import { mainAreaHoverEffect } from './mainAreaSliderHoverEffect.js'

const $ = jQuery.noConflict(true)

const mainAreaSwipersConfig = [
    "top-picks",
    "popular-movies",
    "suggested-sports",
    "recommended",
    {
        spaceBetween: 17,
        on: {
            activeIndexChange: (config) => {
                $(config.slides).on({
                    mouseenter: function (event) {
                        setTimeout(() => {
                            $(this).children(".main-area-slides-widgets-container").children().attr("disabled" , false)
                        } , 500)
                    },
                    mouseleave: function (event) {
                        setTimeout(() => {
                            $(this).children(".main-area-slides-widgets-container").children().attr("disabled" , true)
                        } , 500)
                    },
                })
                mainAreaHoverEffect($ , $(window).innerWidth() , config)
            },
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            481: {
                slidesPerView: 2,
            }
        }
    }
]
const trendingSwipersConfig = [
    "trending-episodes-swiper",
    "trending-trailers-swiper",
    "trending-similar-like-this-swiper",
    {
        spaceBetween: 20,
        breakpoints: {
            840: {
                slidesPerView: 4,
            },
            670: {
                slidesPerView: 3,
            },
            450: {
                slidesPerView: 2,
            }
        },
    }
]
const swipersConfig = {
    "top-picks": {},
    "popular-movies": {},
    "suggested-sports": {},
    "recommended": {},
    "trending-episodes-swiper": {},
    "trending-trailers-swiper": {},
    "trending-similar-like-this-swiper": {},
    "header": {
        speed: 800,
        on: {
            activeIndexChange: function (config) {
                const fadeInLeft = $(".header-fadeInLeft").removeClass("header-fadeInLeft")
                const fadeInUp = $(".header-fadeInUp").removeClass("header-fadeInUp")
                setTimeout(() => {
                    fadeInLeft.addClass("header-fadeInLeft")
                    fadeInUp.addClass("header-fadeInUp")
                } , 1)
            },
        },
        breakpoints: {
            991: {
                navigation: {
                    enabled: true,
                },
                pagination: {
                    enabled: false,
                },
            }
        }
    },
    "trending": {
        speed: 500,
        spaceBetween: 15,
        breakpoints: {
            1024: {
                slidesPerView: 5,
                centeredSlides: true,
            },
            600: {
                slidesPerView: 2,
                centeredSlides: false,
            }
        },
        on: {
            init: TrendingEvents.init,
            click: TrendingEvents.click,
            activeIndexChange: TrendingEvents.activeIndexChange
        },
    },
}

export default swipersConfig
export { mainAreaSwipersConfig , trendingSwipersConfig }
