<template lang="html">
 <StackLayout v-if="tistoryBookmarkList.length>0" @swipe="onSwipe">
  <AbsoluteLayout>
   <ListView for="tistoryBookmark in tistoryBookmarkList" separatorColor="transparent"
             style="height:100%" @itemTap="goWebview" marginTop="20" @swipe="onSwipe">
    <v-template>
     <StackLayout class="tistoryMarkMain" >
      <StackLayout class="tistoryMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
       <StackLayout class="tistoryMarkTitleWrap" >
        <label :text="tistoryBookmark.title" class="tistoryMarkTitle"/>
       </StackLayout>
       <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-if="tistoryBookmark.thumbnail_url != ''" >
        <StackLayout class="tistoryMarkImageWrap">
         <Image :src="tistoryBookmark.thumbnail_url" stretch="aspectFill" class="tistoryMarkImage"/>
        </StackLayout>
        <StackLayout class="tistoryMarkRightWrap" >
         <StackLayout orientation="horizontal" class="tistoryMarkContentsWrap">
          <Label :text="tistoryBookmark.description" class="tistoryMarkContents" textWrap="true"/>
         </StackLayout>
         <StackLayout orientation="horizontal" class="tistoryMarkDateWriterWrap" >
          <StackLayout class="tistoryMarkDateWrap">
           <Label :text="tistoryBookmark.write_date" class="tistoryMarkDate"  />
          </StackLayout>
          <StackLayout class="tistoryMarkWriterWrap">
           <label :text="tistoryBookmark.author" class="tistoryMarkWriter" />
          </StackLayout>
         </StackLayout>
        </StackLayout>
       </StackLayout>
       <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-else >
        <StackLayout class="tistoryMarkNoImageWrap" >
         <StackLayout orientation="horizontal" class="tistoryMarkNoImgContentsWrap">
          <Label :text="tistoryBookmark.description" class="tistoryMarkNoImgContents" textWrap="true" />
         </StackLayout>
         <StackLayout orientation="horizontal" class="tistoryMarkNoImgDateWriterWrap"  >
          <StackLayout class="tistoryMarkDateWrap">
           <Label :text="tistoryBookmark.write_date" class="tistoryMarkNoImgDate"  />
          </StackLayout>
          <StackLayout class="tistoryMarkNoImgWriterWrap" width="230">
           <label :text="tistoryBookmark.author" class="tistoryMarkNoImgWriter" width="230" />
          </StackLayout>
         </StackLayout>
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
    <ActivityIndicator :busy="busy" marginTop="230" color="#ffe074" width="100" height="100" />
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
    <ActivityIndicator :busy="busy" marginTop="230" color="#ffe074" width="100" height="100" />
   </StackLayout>
  </AbsoluteLayout>
 </StackLayout>
</template>

<script>
 import axios from 'axios';
 var cache = require("nativescript-cache");

 import TistoryWebview from '../../search/place/placeDetail/reviewMore/reviewMoreWebview/TistoryWebview'
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_480.scss';
 const appSettings = require("tns-core-modules/application-settings");

 export default {
  name:"tistoryBookmark",
  data(){
   return {
    tistoryBookmarkList:[],
    busy:false,
   }
  },
  components: {
  },mounted() {
    this.getTistoryReview();
  },methods:{
   onSwipe(args){

    console.log('wwdasda')
    console.log("Swipe!");
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Swipe Direction: " + args.direction);

    this.getTistoryReview();

   },
   goWebview(args){
    const view = args.view;
    const tappedItem = view.bindingContext;
    console.log(args)
    console.log(tappedItem.url)
    cache.set('place_name',tappedItem.place_name);
    cache.set('place_id',tappedItem.place_id);
    this.$navigateTo(TistoryWebview, {
     props: {
      itemList: tappedItem}
    })
   },getTistoryReview(){

    this.$data.busy = true;
    setTimeout(() => {
     axios({
      method: 'get',
      url: 'http://api.eatjeong.com/v1/bookmarks',
      params: {
       gubun: 'tistory',
       user_id : appSettings.getString("user_id"),
       sns_division:appSettings.getString("sns_division")
      },
     }).then((response) => {
      this.$data.busy = false;
      console.log(response.data);
      this.$data.tistoryBookmarkList = response.data.dataList;
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

