<template lang="html">
 <StackLayout backgroundColor="#d3d3d3">
  <StackLayout width="95%" marginTop="10"height="96%" backgroundColor="white">
   <ListView for="naverBookmark in naverBookmarkList"
             style="height:100%" @itemTap="goNaverBlog">
    <v-template>
      <StackLayout width="100%" padding="0" orientation="horizontal" >
         <StackLayout paddingRight="-15">
          <Image :src="naverBookmark.thumbnail_url" class="thumb img-thumbnail" width="40%" height="100" />
         </StackLayout>
          <StackLayout width="60%" paddingLeft="0">
            <StackLayout orientation="horizontal" style="text-align: center">
             <Label text="영업중" row="0" col="0" fontSize="14" backgroundColor="#d3d3d3" style="border-radius: 50px" width="30%" />
             <Label :text="naverBookmark.place_name" row="0" col="1" fontSize="18" width="70%" style="text-align: left" />
            </StackLayout>
            <StackLayout orientation="horizontal"  style="text-align: center" >
             <Label text="고기떡볶이" row="1" col="0" fontSize="14" width="30%"/>
             <Image src="res://star"  width="10%"></Image>
             <Label text="1.5" row="1" col="1" width="50%" fontSize="17" style="text-align: left"/>
            </StackLayout>
          </StackLayout>
      </StackLayout>
    </v-template>
   </ListView>
  </StackLayout>
 </StackLayout>
</template>

<script>
 import NBookmarkDetil from "./bookmarkDetail/NBookmarkDetil";
 import axios from 'axios';
 import PlaceDetail from "../../search/place/placeDetail/PlaceDetail";
    export default {
        name:"NaverBookmark",
       data(){
        return {
         naverBookmarkList:[],
         NBookmarkDetil:NBookmarkDetil
        }
       },
        components: {
        },mounted() {
         axios({
          method: 'get',
          url: 'http://api.matitzung.shop/v1/bookmarks?',
          //  url: 'http://192.168.1.85:9090/v1/places?',
          params: {
           gubun: 'naver',
           user_id : 'jeetkn@naver.com'
          },
         }).then((response) => {
          console.log(response.data);
          this.$data.naverBookmarkList = response.data.dataList;
         }, (error) => {
          console.log(error);
         });
     },methods:{
      goNaverBlog(args){
       console.log("여기 타니?");
       const view = args.view;
       const page = view.page;
       const tappedItem = view.bindingContext;
       this.$navigateTo(NBookmarkDetil, {
        props: {
         context: tappedItem}});
       }
     }
    };
</script>

<style lang="scss">
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
