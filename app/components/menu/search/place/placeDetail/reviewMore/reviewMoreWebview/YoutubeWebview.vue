<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout width="100%" backgroundColor="#ffffff" height="70" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
                <StackLayout marginTop="50%" marginLeft="16" @tap="detailMenu">
                    <image width="20" height="20" src="~/Resources/img/place/menu_5_64.png" />
                </StackLayout>
                <StackLayout width="75%" height="18" marginTop="40%" marginLeft="11">
                    <label :text="place_name" textWrap="true" height="18" width="100%" style="font-family: nanumsquareroundb" fontSize="14" color="#494949"/>
                </StackLayout>
                <StackLayout marginTop="50%" @tap="$navigateBack">
                    <image width="17" height="17" src="~/Resources/img/place/close_5_64_b.png" />
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
 import ReviewWebviewBottomModal from './reviewWebviewBottomModal/ReviewWebviewBottomModal'
 var cache = require("nativescript-cache");


    export default {
        name:"YoutubeWebview",
        props: ["itemList"],
       data(){
           return {
               place_name:cache.get('place_name')
           }
       },
        components: {
        },mounted() {
     },methods:{
            detailMenu(){
                this.$showModal(ReviewWebviewBottomModal,{
                    props: {
                        itemList : this.itemList,
                        portal_gubun:'youtube'
                    },
                    fullscreen: false,
                    animated: true,
                    stretched: false,
                    dismissEnabled:true,
                    dimAmount: 0.5 // Sets the alpha of the background dim,
                });
            }
     }
    };
</script>

<style lang="scss">

</style>
