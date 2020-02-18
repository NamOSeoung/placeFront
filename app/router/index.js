import Vue from 'nativescript-vue'

import NSVueRouter from 'nativescript-vue-router-ns'
import NaverMore from "~/components/menu/search/place/placeDetail/reviewMore/NaverMore";

Vue.use(NSVueRouter)

const routes = [
    {
        name: 'naverMore',
        component: NaverMore,
        meta: { auth: true }
    }
]

const router = new NSVueRouter({
   // ignoreSame, // <-- Optional. Will set if reject or accept navigate to same current component.
    routes,
    /* eslint-disable-next-line no-undef  */
    verbose: TNS_ENV !== 'production' // <-- Optional. Will output the warnings to console.
})

export default router
