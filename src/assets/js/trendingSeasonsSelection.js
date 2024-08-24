import { resetTrendingSelectionOptions , resetTrendingSelection , matchWithTrendingSeason } from "./trendingSeasonSelectionHandlingTools.js"

function trendingSeasonSelectionHandling($) {
    $(".trending-episode-selected-season").on("click" , function (event) {
        if($(this).attr("data-opened") === "false") {
            const movieName = $(this).attr("data-movie-name")
            const selection = $(`[data-movie-name="${movieName}"]`).filter(".trending-episode-selection-options-season")
            if(selection.children().length > 7) {
                selection.css({
                    "overflow-y": "scroll",
                    "height": "290px",
                })
            }
            if($(this).offset().top - 293 > $(window).scrollTop() + 100) {
                selection.css("top" , "-290px")
            } else {
                selection.css("top" , "100%")
            }
            $(this).addClass("trending-episode-selection-season-icon-arrow-top")
            $(this).attr("data-opened" , true)
            resetTrendingSelection($)
        } else {
            if($(this).attr("data-opened") === "true") {
                $(this).removeClass("trending-episode-selection-season-icon-arrow-top")
                $(this).attr("data-opened" , false)
                $(".trending-episode-selection-options-season").css("display" , "none")
            }
        }
    })
    $(".trending-episode-selection-option-season-value").on("click" , function (event) {
        $(".trending-episode-selected-season-text").text($(event.currentTarget).text())
        $(".trending-episode-selected-season").attr("data-opened" , false)
        $(".trending-episode-selection-options-season").css("display" , "none")
    })
    $(".trending-episode-selection-search-bar-season").on({
        input: function (event) {
            function matched() {
                $(".trending-episode-selected-option-season-value").removeClass("trending-episode-selected-option-season-value")
            }
            matchWithTrendingSeason($ , this , matched , true)
        },
        keyup: function (event) {
            const input = $(this)
            if(event.which === 8) {
                matchWithTrendingSeason($ , this , () => {} , () => {
                    resetTrendingSelectionOptions($)
                })
            }
            if(!input.val().replace(/\ /g)) {
                $(".trending-episode-selection-search-bar-season-eraser").css("display" , "none")
            } else {
                $(".trending-episode-selection-search-bar-season-eraser").css("display" , "flex")
            }
        }
    })
    $(".trending-episode-selection-search-bar-season-eraser").on({
        click: function (event) {
            $(".trending-episode-selection-search-bar-season").val("")
            const options = $(".trending-episode-selection-options-season").children()
            options.css("display" , "flex").removeClass("trending-episode-selected-option-season-value")
        }
    })
}

export default trendingSeasonSelectionHandling
