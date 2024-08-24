function hoverEffectNoRes($ , winWidth , config) {
    $(config.slides[config.activeIndex]).addClass("main-area-first-slide-per-view")
    if(winWidth >= 1200) {
        $(config.slides[config.activeIndex + 3]).addClass("main-area-last-slide-per-view")
    } else {
        if(winWidth >= 768) {
            $(config.slides[config.activeIndex + 2]).addClass("main-area-last-slide-per-view")
        } else {
            if(winWidth >= 480) {
                $(config.slides[config.activeIndex + 1]).addClass("main-area-last-slide-per-view")
            }
        }
    }
}

function mainAreaHoverEffect($ , winWidth , config) {
    $(config.slides).removeClass("main-area-first-slide-per-view")
    $(config.slides).removeClass("main-area-last-slide-per-view")
    hoverEffectNoRes($ , winWidth , config)
    $(window).on({
        resize: function (event) {
            hoverEffectNoRes($ , event.currentTarget.innerWidth , config)
        }
    })
}

export { mainAreaHoverEffect }
