<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout width="100%" backgroundColor="#ffffff" height="55" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
                <StackLayout marginTop="25" marginLeft="16" @tap="detailMenu">
                    <image width="20" height="20" src="~/Resources/img/place/menu_5_64.png" />
                </StackLayout>
                <StackLayout width="274" height="18" marginTop="21" marginLeft="11">
                    <label :text="place_name" textWrap="true" height="18" width="274" style="font-family: nanumsquareroundb" fontSize="14" color="#494949"/>
                </StackLayout>
                <StackLayout marginTop="25" @tap="backMoreList">
                    <image width="17" height="17" src="~/Resources/img/place/close_5_64_b.png" />
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
 import ReviewWebviewBottomModal from './reviewWebviewBottomModal/ReviewWebviewBottomModal'
 var cache = require("nativescript-cache");

 //var application = require("application");
 //var AndroidApplication = application.android;
 //var activity = AndroidApplication.foregroundActivity;


 import NaverMore from '../NaverMore'

    export default {
        name:"NaverWebview",
        props: ["itemList"],
       data(){
           return {
               place_name:cache.get('place_name')
           }
       },
        components: {

        },created() {
        },
        computed: {
            item() {
                return this.itemList || {};
            }
        },mounted() {
            console.log("12312312"+this.item.url);

        },methods:{
            detailMenu(){
                this.$showModal(ReviewWebviewBottomModal,{
                    props: {
                        itemList : this.itemList,
                        portal_gubun:'naver'
                    },
                    fullscreen: false,
                    animated: true,
                    stretched: false,
                    dismissEnabled:true,
                    dimAmount: 0.5 // Sets the alpha of the background dim,
                });
            },
            backMoreList(){
                //NaverMore.methods.naverMore();
                //this.routerExtensions.back();
                //this.$router.backToPreviousPage()
                this.$navigateBack();
                //this.$router.push('naverMore')
                //this.$router.pushClear('naverMore')
                //this.$navigateBack();
               // console.log(NaverMore.mounted())
                //NaverMore.methods.naverMore()

            }
     }
    };


</script>

<style lang="scss">

</style>
