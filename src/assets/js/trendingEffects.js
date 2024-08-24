class TrendingEffects {
    constructor() {}
    static playBtns($) {
        $(".trending-info-swiper-slide-bg-container").on({
            mouseenter: (event) => {
                $(event.currentTarget).children(".trending-info-swiper-slide-play").fadeTo(300 , 1 , "swing")
            },
            mouseleave: (event) => {
                $(event.currentTarget).children(".trending-info-swiper-slide-play").fadeTo(300 , 0 , "swing")
            }
        })
    }
    static navbarHandler($) {
        $(".trending-info-navbar-menu").on("click" , (event) => {
            $(".trending-info-navbar-menu").removeClass("show-trending-info-navbar-menu-effects")
            $(event.currentTarget).addClass("show-trending-info-navbar-menu-effects")
            const currentInfo = $(event.currentTarget).text().trim()
            if(currentInfo !== "overview") {
                $(".trending-info-wrapper-overview").removeClass("trending-info-wrapper-overview")
            } else {
                $(".trending-info-area-wrapper").addClass("trending-info-wrapper-overview")
            }
            
            $(".trending-info-wrapper-show-effect").removeClass("trending-info-wrapper-show-effect")
            setTimeout(() => {
                $(".trending-info-wrapper").addClass("trending-info-wrapper-show-effect")
            } , 400)
            const currentInfoArea = $(".trending-extra-info-container").filter(`[data-info-area="${currentInfo.replace(/\ /ig , "-")}"]`)
            $(".trending-extra-info-container").css("display" , "none")
            $(currentInfoArea).css("display" , "block")
        }) 
    }
}

export default TrendingEffects
