<template lang="html">
 <StackLayout v-if="tistoryBookmarkList!=null">
 <ListView for="tistoryBookmark in tistoryBookmarkList" separatorColor="transparent"
           style="height:100%" @itemTap="goWebview" >
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
 </StackLayout>
 <StackLayout v-else>
  <label text="없음." />
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
    tistoryBookmarkList:[]
   }
  },
  components: {
  },mounted() {
    this.getTistoryReview();
  },methods:{

   goWebview(args){
    const view = args.view;
    const tappedItem = view.bindingContext;

    console.log(tappedItem.url)
    cache.set('place_name',tappedItem.place_name);
    this.$navigateTo(TistoryWebview, {
     props: {
      itemList: tappedItem}
    })
   },getTistoryReview(){
    axios({
     method: 'get',
     url: 'http://api.eatjeong.com/v1/bookmarks',
     params: {
      gubun: 'tistory',
      user_id : appSettings.getString("user_id"),
      sns_division:appSettings.getString("user_division")
     },
    }).then((response) => {
     console.log(response.data);
     this.$data.tistoryBookmarkList = response.data.dataList;
    }, (error) => {
     console.log(error);
    });
   }
  }
 };
</script>

<style lang="scss">


</style>

