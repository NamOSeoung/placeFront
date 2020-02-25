<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout width="100%" height="55" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
             <StackLayout width="360" marginTop="30" @tap="backMoreList">
                 <image width="17" height="17" marginLeft="290" src="~/Resources/img/place/close_5_64_b.png" />
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
 var cache = require("nativescript-cache");

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

            },
            backMoreList(){
                //NaverMore.methods.naverMore();
                //this.routerExtensions.back();
                //this.$router.backToPreviousPage()
                console.log("sssss")
                this.$navigateBack({
                    props: {
                        itemList: [],
                    }
                })


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
