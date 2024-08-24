import './assets/css/style.css'
import jQuery from 'jquery'
import configHorizontalSwipers from './assets/js/createHorizontalSwiperSliders.js'
import configVerticalSwipers from './assets/js/createVerticalSwiperSliders.js'
import showHideElements , { showHideHeaderTrailer } from './assets/js/showHideElements.js'
import slidersWidgetHandller from './assets/js/mainsSlidersWidgetsHandler.js'
import trendingSeasonSelectionHandling from "./assets/js/trendingSeasonsSelection.js"
import { toggleMenuHandler, toggleAccessibilityHandler } from "./assets/js/responsiveLogics.js"
import TrendingEffects from "./assets/js/trendingEffects.js"

const $ = jQuery.noConflict(true)

const horizontalSwipers = configHorizontalSwipers()
const verticalSwipers = configVerticalSwipers()

toggleMenuHandler($(window) , $(".icon-toggle-menu") , $(".nav-menu-container"))
toggleAccessibilityHandler($(window) , $(".nav-toggle-accessibility") , $(".nav-accessibility-container"))

showHideElements($)
showHideHeaderTrailer($)

slidersWidgetHandller($)

trendingSeasonSelectionHandling($)
TrendingEffects.playBtns($)
TrendingEffects.navbarHandler($)

$(window).on({
    scroll: event => {
        if($('.trending-episode-selected-season').filter('[data-movie-name="the-crown"]').offset().top - 293 > $(window).scrollTop() + 100) {
            $('.trending-episode-selection-options-season').css("top" , "-290px")
        } else {
            $('.trending-episode-selection-options-season').css("top" , "100%")
        }
    }
})
