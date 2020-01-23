import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';
import Login from './components/member/Login';

import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

TNSFontIcon.paths = {
    fa: './font-awesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon)

Vue.use(RadListView);
Vue.config.silent = false
new Vue({
    render: h => h('frame',[h(Login)])
}).$start()
