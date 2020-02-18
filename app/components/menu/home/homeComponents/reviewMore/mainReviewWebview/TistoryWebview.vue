<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout width="100%" height="55" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
                <StackLayout width="360" marginTop="30" @tap="$navigateBack">
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
