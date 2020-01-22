<template lang="html">
 <StackLayout>
  <StackLayout>
   <ListView for="tistoryBookmark in tistoryBookmarkList" @itemTap="goTistoryBlog"
             style="height:1250px">
    <v-template>
     <FlexboxLayout flexDirection="row">
      <Image :src="tistoryBookmark.url" class="thumb img-circle" />
      <Label :text="tistoryBookmark.place_name" class="t-12"
             style="width: 60%" />
     </FlexboxLayout>
    </v-template>
   </ListView>
  </StackLayout>
 </StackLayout>
</template>

<script>
 import axios from 'axios';
 import TBookmarkDetil from "./bookmarkDetail/TBookmarkDetil";
    export default {
        name:"TistoryBookmark",
       data(){
        return {
         tistoryBookmarkList:[]
        }
       },
        components: {
        },mounted() {
          axios({
           method: 'get',
           url: 'http://api.matitzung.shop/v1/bookmarks?',
           //  url: 'http://192.168.1.85:9090/v1/places?',
           params: {
            gubun: 'tistory',
            user_id : 'jeetkn@naver.com'
           },
          }).then((response) => {
           console.log(response.data);
           this.$data.tistoryBookmarkList = response.data.dataList;
          }, (error) => {
           console.log(error);
          });
     },methods:{
      goTistoryBlog(args){
       console.log("여기 타니?");
       const view = args.view;
       const page = view.page;
       const tappedItem = view.bindingContext;
       this.$navigateTo(TBookmarkDetil, {
        props: {
         context: tappedItem}});
      }
     }
    };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
