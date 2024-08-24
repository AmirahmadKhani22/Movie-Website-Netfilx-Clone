function resetTrendingSelectionOptions($) {
    $(".trending-episode-selection-options-season").children().css("display" , "block").removeClass("trending-episode-selected-option-season-value")
    $(".trending-episode-selection-options-season").css("display" , "block")
}
function resetTrendingSelection($) {
    $(".trending-episode-selection-search-bar-season").val("")
    $(".trending-episode-selection-search-bar-season-eraser").css("display" , "none")
    resetTrendingSelectionOptions($)
}
function matchWithTrendingSeason($ , inputElement , matchedCB , notMatchedCB) {
    const optionElements = $(".trending-episode-selection-option-season-value").toArray()
    const compliteSearchInput = $(inputElement).val().replace(/\ /g , "").match(/season[1-9]$/i)
    if(compliteSearchInput) {
        for(let element of optionElements) {
            const seasonOption = $(element).text().replace(/\ /g , "")
            if(seasonOption.toLowerCase() === ("" + compliteSearchInput).toLowerCase()) {
                if(notMatchedCB === true || matchedCB === true) {
                    $(element).css("display" , "flex").addClass("trending-episode-selected-option-season-value")
                } else {
                    matchedCB()
                }
            } else {  
                if(matchedCB === true || notMatchedCB === true) {
                    $(element).css("display" , "none")
                } else {
                    notMatchedCB()
                }
            }
        }
    } else {
        if($(inputElement).val().replace(/\ /g , "")) {
            $(".trending-episode-selection-options-season").children().css("display" , "block").removeClass("trending-episode-selected-option-season-value") 
            if(!(matchedCB === true || notMatchedCB === true)) {
                notMatchedCB()
            }
        }
    }
}

export { resetTrendingSelectionOptions , resetTrendingSelection , matchWithTrendingSeason }
