<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
     <StackLayout>
         <StackLayout width="100%" height="55" orientation="horizontal" borderBottomWidth="1" borderBottomColor="#dddddd" >
             <StackLayout width="360" marginTop="30" @tap="$navigateBack">
                 <image width="17" height="17" marginLeft="290" src="~/Resources/img/place/close_5_64_b.png" />
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
