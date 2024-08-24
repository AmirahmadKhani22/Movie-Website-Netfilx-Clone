import jQuery from 'jquery'

const $ = jQuery.noConflict(true)

class TrendingEvents {
    constructor() {}
    static init(config) {
        $(config.slides[config.activeIndex]).addClass("trending-swiper-slide-active")
        $(".trending-info-wrapper").addClass("trending-info-wrapper-show-effect")
        $(".trending-extra-info-container").css("display" , "none")
        const currentInfoArea = $(".trending-extra-info-container").filter(`[data-info-area="overview"]`)
        $(currentInfoArea).css("display" , "block")
    }
    static click(config , event) {
        if(!$(event.target).hasClass("swiper-wrapper")) {
            $(".trending-swiper-slide-active").removeClass("trending-swiper-slide-active")

            //config.setTranslate(0)
            config.slideToClickedSlide(+$(config.slides).eq(config.clickedIndex).attr("data-swiper-slide-index") , 600 , true)
            //config.slideToLoop(+$(config.slides).eq(config.clickedIndex).attr("data-swiper-slide-index") , 600 , true)

            $(config.clickedSlide).addClass("trending-swiper-slide-active")
        }
    }
    static activeIndexChange(config) {
        const movieName = $(config.slides[config.activeIndex]).attr("data-movie-name")
        $(".trending-swiper-slide-active").removeClass("trending-swiper-slide-active")
        $(config.slides[config.activeIndex]).addClass("trending-swiper-slide-active")
        $(".unhide-selected-trendig-info-wrapper-bg").removeClass("unhide-selected-trendig-info-wrapper-bg")
        $($(".trending-info-wrapper-bg-container").children()[config.realIndex]).addClass("unhide-selected-trendig-info-wrapper-bg")
        
        const bg = $(".trending-info-area-bg-container")
        if(+bg.css("opacity")){
            console.log(1)
            bg.css("opacity" , "0")
            bg.fadeTo(1000 , 1 , "swing")
        }

        $(".trending-info-area-bg").removeClass("trending-info-area-bg-" + config.previousRealIndex).addClass("trending-info-area-bg-" + config.realIndex)

        $(".trending-info-wrapper").css("display" , "none")
        if(movieName) {
            var selectedTrending = $(".trending-info-wrapper").filter(`[data-movie-name="${movieName}"]`)
            selectedTrending.css("display" , "block")
        }
    }
}

export default TrendingEvents
