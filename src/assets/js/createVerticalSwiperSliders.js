import { Swiper , baseConfigObj } from './baseSwipersConfig.js'
import { verticalConfig } from './verticalSwipersConfig.js'

export default function configVerticalSwipers() {
    return new Swiper("#trending-movies" , Object.assign(baseConfigObj , verticalConfig))
}
