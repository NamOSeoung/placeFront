<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true" @swipe="onSwipe">
  <StackLayout>
   <StackLayout class="reviewMoreWrap" orientation="horizontal" >
     <StackLayout class="reviewMoreIconWrap" @tap="back" >
       <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
     </StackLayout>
     <StackLayout class="reviewMorePlaceNameWrap">
       <label class="reviewMorePlaceName" text="서울 맛집"/>
     </StackLayout>
   </StackLayout>
   <StackLayout marginTop="17" @swipe="onSwipe">
       <ListView for="list in tistoryMoreList" separatorColor="transparent"
                 style="height:100%" @itemTap="goWebview"  @swipe="onSwipe">
           <v-template>
               <StackLayout class="tistoryMarkMain" >
                   <StackLayout class="tistoryMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                       <StackLayout class="tistoryMarkTitleWrap" >
                           <label :text="list.title" class="tistoryMarkTitle"/>
                       </StackLayout>
                       <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-if="list.thumbnail_url != ''" >
                           <StackLayout class="tistoryMarkImageWrap">
                               <Image :src="list.thumbnail_url" stretch="aspectFill" class="tistoryMarkImage"/>
                           </StackLayout>
                           <StackLayout class="tistoryMarkRightWrap" >
                               <StackLayout orientation="horizontal" class="tistoryMarkContentsWrap">
                                   <Label :text="list.description" class="tistoryMarkContents" textWrap="true"/>
                               </StackLayout>
                               <StackLayout orientation="horizontal" class="tistoryMarkDateWriterWrap" >
                                   <StackLayout class="tistoryMarkDateWrap">
                                       <Label :text="list.write_date" class="tistoryMarkDate"  />
                                   </StackLayout>
                                   <StackLayout class="tistoryMarkWriterWrap" width="200">
                                       <label :text="list.author" width="200" class="tistoryMarkWriter" />
                                   </StackLayout>
                               </StackLayout>
                           </StackLayout>
                       </StackLayout>
                       <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-else>
                           <StackLayout class="tistoryMarkNoImageWrap" >
                               <StackLayout orientation="horizontal" class="tistoryMarkNoImgContentsWrap">
                                   <Label :text="list.description" class="tistoryMarkNoImgContents" textWrap="true" />
                               </StackLayout>
                               <StackLayout orientation="horizontal" class="tistoryMarkNoImgDateWriterWrap"  >
                                   <StackLayout class="tistoryMarkDateWrap">
                                       <Label :text="list.write_date" class="tistoryMarkNoImgDate"  />
                                   </StackLayout>
                                   <StackLayout class="tistoryMarkNoImgWriterWrap">
                                       <label :text="list.author" class="tistoryMarkNoImgWriter" />
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
 var cache = require("nativescript-cache");
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_480.scss';

 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_320.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_360.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_420.scss';
 import '~/Resources/css/menu/search/place/placeDetail/placeMore/PlaceMoreBarCommon/placeMoreBarCommon_480.scss';
 const appSettings = require("tns-core-modules/application-settings");
 import TistoryWebview from './mainReviewWebview/TistoryWebview'
 const frameModule = require("ui/frame"); // #A

 import variable from '../../../../../app'
    export default {
        name:"TistoryMore",
       data(){
        return {
            tistoryMoreList:[],
            place_name:cache.get('place_name')
        }
       },
        components: {
        },mounted() {
        this.tistoryMore();


     },methods:{
            onSwipe(args){
                console.log('wwdasda')
                var direction = args.direction;
                console.log(direction)
               // console.log ( "스 와이프 방향 :"+ 방향); // 1-왼쪽, 2-오른쪽
                if (direction === 1) {
                    // topmost = require ( "ui / frame"). topmost;
                                        frameModule.topmost().goBack(); // func로 바꿉니다. 다른 페이지로 이동하려면 아래
                    // frameModule.topmost (). navigate ({
                    // 모듈 이름 : "your / page"
                    // });
                }
            },
        goWebview(args){
            const view = args.view;
            const tappedItem = view.bindingContext;
            console.log(tappedItem.url)
            this.$navigateTo(TistoryWebview, {
                props: {
                    itemList: tappedItem}
            })
        },
        goTistory(args){
           console.log("여기 타니?");
           const view = args.view;
           const page = view.page;
           const tappedItem = view.bindingContext;
        },tistoryMore(){
            var cache = require("nativescript-cache");
            console.log(cache.get('place_id') + "티스토리 리스트에서 확인 ");
            axios({
                method: 'get',
                url: 'http://api.eatjeong.com/v1/main/reviews',
                params: {
                    portal:'DAUM',
                    query:'서울 동작구 상도동 맛'
                },
            }).then((response) => {
                console.log(response.data);
                if(response.data.dataList === undefined){
                    this.$data.tistoryMoreList = '';
                }else {
                    this.$data.tistoryMoreList = response.data.dataList;
                }
            }, (error) => {
                console.log(error);
            });
        },back(){
               // this.$navigateBack()
               // global.user_name = '222222'
              //  console.log("ddddd" + global.user_name)
                frameModule.topmost().goBack()
            }
     }
    };
</script>

<style lang="scss">

</style>
