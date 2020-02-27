import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';
import Login from './components/member/Login';
import MenuWrap from './components/menu/MenuWrap'
import { ModalStack, overrideModalViewMethod, VueWindowedModal } from "nativescript-windowed-modal"

const appSettings = require("tns-core-modules/application-settings");
import FontIcon from 'nativescript-vue-fonticon';
import './app.css';
import Pager from 'nativescript-accordion/vue'
import NSVueShadow from 'nativescript-vue-shadow'

require( "nativescript-platform-css" );

Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown)
Vue.use(NSVueShadow)
Vue.use(Pager)

overrideModalViewMethod()
Vue.registerElement("ModalStack", () => ModalStack)
Vue.use(VueWindowedModal)

Vue.use(FontIcon, {
    componentName: 'FIcon', // <-- Optional. Will be the name for component icon.
    debug: true, // <-- Optional. Will output the css mapping to console.
    paths: {
        fa: './assets/font-awesome.css',
    }
});
Vue.use(RadListView);
Vue.config.silent = false


if(appSettings.getString("user_id") != undefined ){
    if(appSettings.getString("user_id") !=''){
        new Vue({

            render: h => h('frame',[h(MenuWrap)])
        }).$start()

    }else{
        new Vue({
            render: h => h('frame',[h(Login)])
        }).$start()
    }
}else{
    new Vue({
        render: h => h('frame',[h(Login)])
    }).$start()
}

