import Vue from 'nativescript-vue';
import RadListView from 'nativescript-ui-listview/vue';
import Login from './components/member/Login';

Vue.use(RadListView);
Vue.config.silent = false
new Vue({
    render: h => h('frame',[h(Login)])
}).$start()
