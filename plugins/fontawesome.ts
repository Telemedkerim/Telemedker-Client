import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faCircleCheck, 
    faCircleXmark, 
    faTimes,
    faCalendarAlt,
    faEye
} from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library
library.add(
    faCircleCheck,
    faCircleXmark,
    faTimes,
    faCalendarAlt,
    faEye
)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
}) 