<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  <StackLayout>
   <StackLayout class="reviewMoreWrap" orientation="horizontal" >
     <StackLayout class="reviewMoreIconWrap" @tap="$navigateBack" >
       <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
     </StackLayout>
     <StackLayout class="reviewMorePlaceNameWrap" >
       <label class="reviewMorePlaceName" text="서울 맛집"/>
     </StackLayout>
   </StackLayout>
   <StackLayout marginTop="17">
     <ListView for="list in youtubeMoreList" separatorColor="transparent"
               style="height:100%"  @itemTap="goWebview">
      <v-template>
       <StackLayout class="youtubeMarkMain">
        <StackLayout orientation="horizontal" class="youtubeMarkWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
         <StackLayout class="youtubeMarkImageWrap">
          <Image :src="list.thumbnail_url" class="youtubeMarkImage"/>
         </StackLayout>
         <StackLayout class="youtubeRightWrap">
          <StackLayout orientation="horizontal" class="youtubeMarkTitleWrap">
           <Label :text="list.title" class="youtubeMarkTitle" textWrap="true"/>
          </StackLayout>
          <StackLayout orientation="horizontal" class="youtubeMarkDateWrap">
           <Label :text="list.write_date" class="youtubeMarkDate"  />
          </StackLayout>
         </StackLayout>
        </StackLayout>
        <StackLayout class="markUnderline">
        </StackLayout>
       </StackLayout>
      </v-template>
     </ListView>
   </StackLayout>
  </StackLayout>

 </Page>
</template>

<script>
 import axios from 'axios';
 const appSettings = require("tns-core-modules/application-settings");
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_480.scss';

 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_320.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_360.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_420.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_480.scss';

 import YoutubeWebview from './mainReviewWebview/YoutubeWebview'

    export default {
        name:"YoutubeMore",
       data(){
        return {
            youtubeMoreList:[]
        }
       },
        components: {
        },mounted() {
            this.youtubeMore();
     },methods:{
        youtubeMore(){
            var cache = require("nativescript-cache");
            axios({
                method: 'get',
                url: 'http://api.eatjeong.com/v1/main/reviews',
                params: {
                    portal:'YOUTUBE',
                    query:'서울 동작구 상도동 맛집'
                },
            }).then((response) => {
                console.log(response.data);
                if(response.data.dataList === undefined){
                    this.$data.youtubeMoreList = '';
                }else {
                    this.$data.youtubeMoreList = response.data.dataList;
                }
            }, (error) => {
                console.log(error);
            });
        },
            goWebview(args){
                const view = args.view;
                const tappedItem = view.bindingContext;
                console.log(tappedItem.url)
                this.$navigateTo(YoutubeWebview, {
                    props: {
                        itemList: tappedItem}
                })
            },
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

</style>
