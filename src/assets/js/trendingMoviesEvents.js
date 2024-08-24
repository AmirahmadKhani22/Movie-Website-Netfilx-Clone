import jQuery from 'jquery'

const $ = jQuery.noConflict(true)

class TrendingMoviesEvents {
    constructor() {}
    static click(config) {
        config.slideToLoop(+$(config.slides).eq(config.clickedIndex).attr("data-swiper-slide-index") , 600 , true)
        //config.translateTo(4 , 600, true)
        //config.translateTo(0 , 600 , true , false)
    }
    static activeIndexChange(config) {
        $(".trending-movies-swiper-slide-active-before").removeClass("trending-movies-swiper-slide-active-before")
        $(".trending-movies-swiper-slide-active-after").removeClass("trending-movies-swiper-slide-active-after")
        $(".show-trending-movie-play-now").removeClass("show-trending-movie-play-now")
        const activeSlide = $(config.slides[config.activeIndex]).children()
        $(activeSlide).children(".trending-movies-swiper-slide-wrapper-before").addClass("trending-movies-swiper-slide-active-before")
        $(activeSlide).children(".trending-movies-swiper-slide-wrapper-after").addClass("trending-movies-swiper-slide-active-after")
        activeSlide.children().children(".trending-movie-play-now").addClass("show-trending-movie-play-now")
        $(".show-selected-trendig-movie-bg").removeClass("show-selected-trendig-movie-bg")
        const selectedMovieBg = $($(".selected-trendig-movie-bg-container").children()[config.realIndex]).addClass("show-selected-trendig-movie-bg")
        setTimeout(() => {
            $(".unhide-selected-trendig-movie-bg").removeClass("unhide-selected-trendig-movie-bg")
            selectedMovieBg.addClass("unhide-selected-trendig-movie-bg")
        } , 1)
    }
}

export default TrendingMoviesEvents
