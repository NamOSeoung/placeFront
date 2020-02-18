<template lang="html">
 <StackLayout v-if="youtubeBookmarkList != null">
  <ListView for="youtubeBookmark in youtubeBookmarkList" separatorColor="transparent"
            style="height:100%" @itemTap="goWebview" >
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
 </StackLayout>
  <StackLayout v-else>
   <label text="없음" />
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
         youtubeBookmarkList:[]
        }
       },
        components: {
        },mounted() {
           this.getYoutubeReview();
     },methods:{
      goWebview(args){
       const view = args.view;
       const tappedItem = view.bindingContext;

       //console.log(tappedItem.url)
       this.$navigateTo(YoutubeWebview, {
        props: {
         itemList: tappedItem}
       })
      },
     getYoutubeReview(){
       axios({
        method: 'get',
        url: 'http://api.eatjeong.com/v1/bookmarks',
        params: {
         gubun: 'youtube',
         user_id :  appSettings.getString("user_id"),
         sns_division:appSettings.getString("sns_division")
        },
       }).then((response) => {
        console.log(response.data);
        this.$data.youtubeBookmarkList = response.data.dataList;
        console.log('dddddddddd' + this.$data.youtubeBookmarkList)
       }, (error) => {
        console.log(error);
       });
      }
     }
    };
</script>

<style lang="scss">

</style>
