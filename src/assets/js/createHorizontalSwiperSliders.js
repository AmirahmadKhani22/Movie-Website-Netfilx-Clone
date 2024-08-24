import { Swiper , baseConfigObj } from './baseSwipersConfig.js'
import swipersConfig , { mainAreaSwipersConfig , trendingSwipersConfig } from './horizontalSwipersConfig.js'

export default function configHorizontalSwipers() {
    const swipers = {}
    for(let item in swipersConfig) {
        if(mainAreaSwipersConfig.includes(item)) {
            swipersConfig[item] = mainAreaSwipersConfig[mainAreaSwipersConfig.length - 1]
        }
        if(trendingSwipersConfig.includes(item)) {
            swipersConfig[item] = trendingSwipersConfig[trendingSwipersConfig.length - 1]
        }
        if(item === "header") {
            baseConfigObj.navigation.enabled = false
            baseConfigObj.pagination.enabled = true
            baseConfigObj.pagination.renderCustom = (config , current , total) => {
                let lines = ``
                for(let i = 0 ; i < total ; i++) {
                    lines += (i + 1) === current ? 
                        `<div class = "header-swiper-pagination-line header-swiper-active-pagination-line"></div>`:
                        `<div class = "header-swiper-pagination-line"></div>`
                }
                return lines
            }
        } else {
            baseConfigObj.navigation.enabled = true
            baseConfigObj.pagination.enabled = false
        }
        swipers[item] = new Swiper("#" + item , Object.assign(swipersConfig[item] , baseConfigObj))
    }
    return swipers
}
