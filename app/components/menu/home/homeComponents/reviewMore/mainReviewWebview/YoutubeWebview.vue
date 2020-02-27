<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout class="webViewWrap" width="100%"  orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
             <StackLayout class="webViewNavigation"  @tap="$navigateBack">
                 <image class="webViewExit" src="~/Resources/img/place/close_5_64_b.png" />
             </StackLayout>
         </StackLayout>
         <StackLayout>
             <WebView width="100%" height="100%" :src="itemList.url" />
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

    export default {
        name:"YoutubeWebview",
        props: ["itemList"],
       data(){
           return {
           }
       },
        components: {
        },mounted() {
     },methods:{

     }
    };
</script>

<style lang="scss">

</style>
