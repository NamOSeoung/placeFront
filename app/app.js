import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';
import Login from './components/member/Login';
import FontIcon from 'nativescript-vue-fonticon';
import './app.css';
import Pager from 'nativescript-accordion/vue'
import NSVueShadow from 'nativescript-vue-shadow'
require( "nativescript-platform-css" );

Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.use(NSVueShadow)
Vue.use(Pager)
Vue.use(FontIcon, {
    componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
    debug: true, // <-- Optional. Will output the css mapping to console.
    paths: {
        fa: './assets/font-awesome.css',
    }
});

Vue.use(RadListView);
Vue.config.silent = false
new Vue({
    render: h => h('frame',[h(Login)])
}).$start()
