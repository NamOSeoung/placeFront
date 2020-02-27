<template lang="html">
 <StackLayout v-if="youtubeBookmarkList.length>0" @swipe="onSwipe">
  <AbsoluteLayout>
   <ListView for="youtubeBookmark in youtubeBookmarkList" separatorColor="transparent"
             style="height:100%" @itemTap="goWebview" @swipe="onSwipe" marginTop="20">
    <v-template>
     <StackLayout class="youtubeMarkMain" >
      <StackLayout orientation="horizontal" class="youtubeMarkWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
       <StackLayout class="youtubeMarkImageWrap">
        <Image :src="youtubeBookmark.thumbnail_url" class="youtubeMarkImage"/>
       </StackLayout>
       <StackLayout class="youtubeRightWrap">
        <StackLayout orientation="horizontal" class="youtubeMarkTitleWrap">
         <Label :text="youtubeBookmark.title" class="youtubeMarkTitle" textWrap="true"/>
        </StackLayout>
        <StackLayout orientation="horizontal" class="youtubeMarkDateWrap">
         <Label :text="youtubeBookmark.write_date" class="youtubeMarkDate"  />
        </StackLayout>
       </StackLayout>
      </StackLayout>
      <StackLayout class="markUnderline">
      </StackLayout>
     </StackLayout>
    </v-template>
   </ListView>

   <StackLayout width="100%" height="100%" backgroundColor="#dddddd" top="0" opacity="0.4" v-if="busy==true">

   </StackLayout>
   <StackLayout top="0" width="100%">
    <ActivityIndicator :busy="busy" marginTop="230"  color="#ffe074" width="100" height="100" />
   </StackLayout>
  </AbsoluteLayout>

 </StackLayout>
 <StackLayout v-else  @swipe="onSwipe">
  <AbsoluteLayout>
   <StackLayout width="100%" style="text-align: center">
    <label text="저장 된 내용이 없습니다." fontSize="14" color="#333333" marginTop="300" fontFamily="nanumsquareroundr" />
   </StackLayout>
   <StackLayout width="100%" height="100%" backgroundColor="#dddddd" top="0" opacity="0.4" v-if="busy==true">

   </StackLayout>
   <StackLayout top="0" width="100%">
    <ActivityIndicator :busy="busy" marginTop="230"  color="#ffe074" width="100" height="100" />
   </StackLayout>
  </AbsoluteLayout>
 </StackLayout>
</template>

<script>
 import axios from 'axios';
 var cache = require("nativescript-cache");
 const appSettings = require("tns-core-modules/application-settings");
 import YoutubeWebview from '../../search/place/placeDetail/reviewMore/reviewMoreWebview/YoutubeWebview'
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_480.scss';

    export default {
        name:"YoutubeBookmark",
       data(){
        return {
         youtubeBookmarkList:[],
         busy:false
        }
       },
        components: {
        },mounted() {
           this.getYoutubeReview();
     },methods:{
      onSwipe(args){

       console.log('wwdasda')
       console.log("Swipe!");
       console.log("Object that triggered the event: " + args.object);
       console.log("View that triggered the event: " + args.view);
       console.log("Event name: " + args.eventName);
       console.log("Swipe Direction: " + args.direction);
       this.getYoutubeReview();

      },
      goWebview(args){
       const view = args.view;
       const tappedItem = view.bindingContext;

       cache.set('place_name',tappedItem.place_name);
       cache.set('place_id',tappedItem.place_id);
       //console.log(tappedItem.url)
       this.$navigateTo(YoutubeWebview, {
        props: {
         itemList: tappedItem}
       })
      },
     getYoutubeReview(){

       this.$data.busy = true;
      setTimeout(() => {

       axios({
        method: 'get',
        url: 'http://api.eatjeong.com/v1/bookmarks',
        params: {
         gubun: 'youtube',
         user_id :  appSettings.getString("user_id"),
         sns_division:appSettings.getString("sns_division")
        },
       }).then((response) => {
        this.$data.busy = false;
        console.log(response.data);
        this.$data.youtubeBookmarkList = response.data.dataList;
        console.log('dddddddddd' + this.$data.youtubeBookmarkList.length)
       }, (error) => {
        this.$data.busy = false;
        console.log(error);
       });
      }, 1000);
      }
     }
    };
</script>

<style lang="scss">

</style>
