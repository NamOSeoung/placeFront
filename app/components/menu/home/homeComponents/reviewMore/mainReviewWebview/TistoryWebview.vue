<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout class="webViewWrap" width="100%" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
                <StackLayout class="webViewNavigation" @tap="$navigateBack">
                    <image class="webViewExit" src="~/Resources/img/place/close_5_64_b.png" />
                </StackLayout>
         </StackLayout>
         <StackLayout>
             <WebView width="100%" height="100%" :src="item.url" />
         </StackLayout>
     </StackLayout>
 </Page>
</template>

<script>
 import axios from 'axios';
 import '~/Resources/css/menu/home/homeComponents/WebViewCommon/WebView_320.scss';
 import '~/Resources/css/menu/home/homeComponents/WebViewCommon/WebView_360.scss';
 import '~/Resources/css/menu/home/homeComponents/WebViewCommon/WebView_420.scss';
 import '~/Resources/css/menu/home/homeComponents/WebViewCommon/WebView_480.scss';
 var cache = require("nativescript-cache");
    export default {
        name:"TistoryWebview",
        props: ["itemList"],
       data(){
           return {
               place_name:cache.get('place_name')
           }
       },
        components: {
        },mounted() {
            console.log(this.itemList)
         },computed: {
                item() {
                    return this.itemList || {};
                }
        },methods:{
            detailMenu(){

            }
     }
    };
</script>

<style lang="scss">

</style>
