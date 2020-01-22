<template lang="html">
 <StackLayout backgroundColor="#d3d3d3">
  <StackLayout width="95%" marginTop="10"height="96%" backgroundColor="white">
   <ListView for="youtubeBookmark in youtubeBookmarkList"
             style="height:100%" @itemTap="goYoutube">
    <v-template>
     <StackLayout width="100%" padding="0" orientation="horizontal" >
      <StackLayout paddingRight="-15">
       <Image :src="youtubeBookmark.thumbnail_url" class="thumb img-thumbnail" width="40%" height="100" />
      </StackLayout>
      <StackLayout width="60%" paddingLeft="0">
       <StackLayout orientation="horizontal" style="text-align: center"  padding="0">
        <Label :text="'@ ' +youtubeBookmark.place_name" fontSize="20" width="100%" style="text-align: left" />
       </StackLayout>
       <StackLayout orientation="horizontal" style="text-align: center"  padding="0">
        <Label :text="youtubeBookmark.title" fontSize="16" width="100%" style="text-align: left" />
       </StackLayout>
       <StackLayout orientation="horizontal" style="text-align: center"  padding="0">
        <Label :text="youtubeBookmark.description" fontSize="13" width="100%" style="text-align: left" />
       </StackLayout>
      </StackLayout>
     </StackLayout>
    </v-template>
   </ListView>
  </StackLayout>
 </StackLayout>
</template>

<script>
 import axios from 'axios';
 import YBookmarkDetil from "./bookmarkDetail/YBookmarkDetil";
    export default {
        name:"YoutubeBookmark",
       data(){
        return {
         youtubeBookmarkList:[]
        }
       },
        components: {
        },mounted() {
         axios({
          method: 'get',
          url: 'http://api.matitzung.shop/v1/bookmarks?',
          //  url: 'http://192.168.1.85:9090/v1/places?',
          params: {
           gubun: 'youtube',
           user_id : 'jeetkn@naver.com'
          },
         }).then((response) => {
          console.log(response.data);
          this.$data.youtubeBookmarkList = response.data.dataList;
         }, (error) => {
          console.log(error);
         });
     },methods:{
      goYoutube(args){
       console.log("여기 타니?");
       const view = args.view;
       const page = view.page;
       const tappedItem = view.bindingContext;
       this.$navigateTo(YBookmarkDetil, {
        props: {
         context: tappedItem}});
      }
     }
    };
</script>

<style lang="scss">
    // Start custom common variables
      @import "~@nativescript/theme/scss/variables/orange";
    // End custom common variables

    // Custom styles

</style>
