import TrendingMoviesEvents from './trendingMoviesEvents.js'

const verticalConfig = {
    speed: 600,
    spaceBetween: 17,
    on: {
        click: TrendingMoviesEvents.click,
        activeIndexChange: TrendingMoviesEvents.activeIndexChange
    },
    breakpoints: {
        670: {
            direction: 'vertical',
            spaceBetween: 20,
            slidesPerView: 3,
        },
        450: {
            direction: 'horizontal',
            slidesPerView: 2.2,
            spaceBetween: 12,
        } 
    },
}

export { verticalConfig }
