<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true">
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
       <ListView for="list in naverMoreList" separatorColor="transparent"
                 style="height:100%" @itemTap="goWebview" >
           <v-template>
               <StackLayout class="naverMarkMain" >
                   <StackLayout class="naverMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                       <StackLayout class="naverMarkTitleWrap" >
                           <label :text="list.title" class="naverMarkTitle"/>
                       </StackLayout>
                       <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-if="list.thumbnail_url != null" >
                           <StackLayout class="naverMarkImageWrap">
                               <Image :src="list.thumbnail_url" stretch="aspectFill" class="naverMarkImage"/>
                           </StackLayout>
                           <StackLayout class="naverMarkRightWrap" >
                               <StackLayout orientation="horizontal" class="naverMarkContentsWrap">
                                   <Label :text="list.description" class="naverMarkContents" textWrap="true"/>
                               </StackLayout>
                               <StackLayout orientation="horizontal" class="naverMarkDateWriterWrap" >
                                   <StackLayout class="naverMarkDateWrap">
                                       <Label :text="list.write_date" class="naverMarkDate"  />
                                   </StackLayout>
                                   <StackLayout class="naverMarkWriterWrap" width="200">
                                       <label :text="list.author" width="200" class="naverMarkWriter" />
                                   </StackLayout>
                               </StackLayout>
                           </StackLayout>
                       </StackLayout>
                       <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-else>
                           <StackLayout class="naverMarkNoImageWrap" >
                               <StackLayout orientation="horizontal" class="naverMarkNoImgContentsWrap">
                                   <Label :text="list.description" class="naverMarkNoImgContents" textWrap="true" />
                               </StackLayout>
                               <StackLayout orientation="horizontal" class="naverMarkNoImgDateWriterWrap"  >
                                   <StackLayout class="naverMarkDateWrap">
                                       <Label :text="list.write_date" class="naverMarkNoImgDate"  />
                                   </StackLayout>
                                   <StackLayout class="naverMarkNoImgWriterWrap" width="230">
                                       <label :text="list.author" width="230" class="naverMarkNoImgWriter" />
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
  </StackLayout>

 </Page>
</template>

<script>
 import axios from 'axios';
 const appSettings = require("tns-core-modules/application-settings");
 import NaverWebview from './mainReviewWebview/NaverWebview'
 var cache = require("nativescript-cache");
 import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_480.scss';

 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_320.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_360.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_420.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_480.scss';

 // const Page = require('tns-core-modules/ui/page').Page;
 //
 // exports.pageLoaded = pageLoaded;
 //
 // function pageLoaded(args) {
 //     var page = args.object;
 //     console.log(page);
 //     page.viewModel = viewModel;
 //     viewModel.set("LastGetNews", "test");
 // }
     // Page.on('navigatingFrom', (data) => {
     //     console.log("ghcnf")
     //     // run destroy code
     //     // (note: this will run when you either move forward to a new page or back to the previous page)
     // })


    export default {
        name:"NaverMore",
       data(){
           return {
             naverMoreList:[],
               place_name:cache.get('place_name')
           }
       },created() {
          console.log('created')
        },
        components: {
        },mounted() {
            console.log('mounted')
            this.naverMore();
     },methods:{
      goWebview(args){
          const view = args.view;
          const tappedItem = view.bindingContext;
          console.log(tappedItem.url)
          this.$navigateTo(NaverWebview, {
              props: {
                  itemList: tappedItem,
              }
          })
      },naverMore(){
                var cache = require("nativescript-cache");
                console.log(cache.get('place_id') + "티스토리 리스트에서 확인 ");
                console.log(cache.get('place_address') + "네이버 리스트에서 확인 ");
                console.log("99999" + this.$data.naverMoreList)
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/main/reviews',
                    params: {
                        portal:'NAVER',
                        query:'서울 동작구 상도동 맛'
                    },
                }).then((response) => {
                    console.log(response.data);
                    if(response.data.dataList === undefined){
                        this.$data.naverMoreList = '';
                    }else {
                        this.$data.naverMoreList = response.data.dataList;
                    }

                }, (error) => {
                    console.log(error);
                });
            }
            ,goNaverWebview(url){
                console.log(url)
            }
         }
    };


</script>

<style lang="scss">

</style>
