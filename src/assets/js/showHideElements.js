const elements = {
    switcherElements: ["#nav-search-bar-area" , "#nav-alarm-area" , "#nav-profile-area" , ".watch-trail-btns"],
    hiddedElements: ["#search-bar-container" , "#notif-container" , "#profile-settings-container" , ".trailer-container"],
    displayClasses: ["search-bar-visible" , "show-notif" , "show-profile-settings" , "show-trailer"],
}

function showHideElements($) {
    let index = 0
    for(let switcherElement of elements.switcherElements) {
        $(switcherElement).on("click" , (event) => {
            index = elements.switcherElements.indexOf(switcherElement)
            if($(elements.hiddedElements[index]).hasClass(elements.displayClasses[index])) {
                $(elements.hiddedElements[index]).removeClass(elements.displayClasses[index])
                $(elements.hiddedElements[index]).attr("data-displayed" , "false")
            } else {
                $(elements.hiddedElements[index]).addClass(elements.displayClasses[index])
                $(elements.hiddedElements[index]).attr("data-displayed" , "true")
            }  
            event.stopPropagation()

        })
    }
    $(document).on({
        click: function (event) {
            $("[data-displayed=true]").attr("data-displayed" , "false")
            for(let item of elements.displayClasses) {
                $("." + item).removeClass(item)
            }
        }
    })
}

function showHideHeaderTrailer($) {
    $(".watch-trail-btns").on({
        click: function (event) {
            const trailerContainer = $(this).parents(".header-slide-container").children(".new-top-viwe-trailer-container")
            trailerContainer.addClass("new-top-viwe-trailer-show-effect")
        },
    })
    $(".new-top-viwe-trailer-container").on({
        click: function (event) {
            $(this).addClass("new-top-viwe-trailer-hide-effect")
            setTimeout(() => {
                $(this).removeClass("new-top-viwe-trailer-show-effect").removeClass("new-top-viwe-trailer-hide-effect")
            } , 1001)
        },
    })
    $(".trailer-container").on('click' , (event) => {
        if(!$(event.target).is($("video.trailer"))) {
            $(".trailer-container").removeClass("show-trailer")
        }
    })
}

export default showHideElements
export { showHideHeaderTrailer }
