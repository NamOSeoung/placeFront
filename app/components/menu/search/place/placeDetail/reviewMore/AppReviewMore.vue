<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  <StackLayout>
   <StackLayout class="reviewMoreWrap" orientation="horizontal" >
     <StackLayout class="reviewMoreIconWrap" @tap="$navigateBack" >
       <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
     </StackLayout>
     <StackLayout class="reviewMorePlaceNameWrap"  >
       <label class="reviewMorePlaceName" :text="place_name"/>
     </StackLayout>
       <StackLayout class="appReviewWriteIconWrap" >
           <image class="appReviewWriteIcon" src="~/Resources/img/place/Orion_edit.png" />
       </StackLayout>
   </StackLayout>

   <StackLayout>
       <ScrollView height="100%">
           <StackLayout >
               <StackLayout class="appReviewHeaderWrap" orientation="horizontal">
                   <StackLayout class="appReviewHeaderIconWrap">
                       <image class="appReviewHeaderIcon" src="~/Resources/img/place/star_yellow.png" />
                   </StackLayout>
                   <StackLayout class="appReviewHeaderRatingwrap" >
                       <label class="appReviewHeaderRating" :text="rating_avg()" />
                   </StackLayout>
                   <StackLayout class="appReviewHeaderCountWrap" >
                       <label class="appReviewHeaderCount" :text="appReview.length + '개 리뷰'" />
                   </StackLayout>
               </StackLayout>
               <StackLayout height="100%">
                   <StackLayout class="googleReviewMoreWrap" v-for="a_reviews in appReview" v-if="appReview != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                       <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                           <StackLayout class="appReviewUserIconWrap"  visibility="collapsed">
                           </StackLayout>
                           <StackLayout class="appReviewUserIconWrap2">
                               <image class="appReviewUserIcon"  :src="a_reviews.profile_image_url" stretch="aspectFill" />
                           </StackLayout>
                           <StackLayout class="appReviewUserNickNameWrap" >
                               <label class="appReviewUserNickName" :text="a_reviews.author" stretch="aspectFill" />
                           </StackLayout>
                           <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal">
                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" v-if="a_reviews.rating_point > 0"/>
                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" v-if="a_reviews.rating_point > 1"/>
                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" v-if="a_reviews.rating_point > 2"/>
                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" v-if="a_reviews.rating_point > 3"/>
                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" v-if="a_reviews.rating_point > 4"/>
                           </StackLayout>
                       </StackLayout>
                       <StackLayout class="googleReviewMoreContentsWrap" >
                           <TextView class="googleReviewMoreContents" :text="a_reviews.review_contents"   editable="false"  returnKeyType="send" textWrap="true" />
                       </StackLayout>
                       <StackLayout class="googleReviewMoreBottomWrap" orientation="horizontal" >
                           <StackLayout class="googleReviewMorePictureWrap" orientation="horizontal" marginRight="10" v-for="image in a_reviews.image_url">
                               <image  class="googleReviewMorePicture" stretch="aspectFill" :src="image" @tap="pictureDetail(image)" />
                           </StackLayout>
                       </StackLayout>
                       <StackLayout class="appReviewBottomWrap" orientation="horizontal">
                           <StackLayout class="appReviewDateWrap" >
                               <label class="appReviewDate" :text="a_reviews.write_date" />
                           </StackLayout>
                           <StackLayout class="appReviewLikeIconWrap">
                               <image class="appReviewLikeIcon"  src="~/Resources/img/place/Orion_likes.png" />
                           </StackLayout>
                           <StackLayout class="appReviewLikeCountWrap" >
                               <label class="appReviewLikeCount" :text="a_reviews.like_count" />
                           </StackLayout>
                           <StackLayout v-if="user_id == a_reviews.review_user_id">
                               <StackLayout class="appReviewDeleteWrap" @tap="reviewDelete(a_reviews.review_id)" >
                                   <label class="appReviewDelete" text="삭제"/>
                               </StackLayout>
                           </StackLayout>
                       </StackLayout>
                   </StackLayout>
               </StackLayout>
           </StackLayout>
       </ScrollView>
   </StackLayout>
  </StackLayout>

 </Page>
</template>

<script>
    import axios from 'axios';
    import PictureModal from '../../placeDetail/modal/PictureModal'

    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_480.scss';

    import '~/Resources/css/menu/search/place/placeDetail/placeMore/AppReviewMore/appReviewMore_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/AppReviewMore/appReviewMore_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/AppReviewMore/appReviewMore_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/AppReviewMore/appReviewMore_480.scss';
    const appSettings = require("tns-core-modules/application-settings");
    var cache = require("nativescript-cache");
    export default {
        name:"AppReviewMore",
        components: {
        }, data(){
            return {
                appReview:[],
                user_id:appSettings.getString("user_id"),
                place_name:cache.get('place_name')
            }
        },mounted(){
            this.appReviewMore();
        },methods :{
            appReviewMore(){


                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')  + '/reviews/eatzeong',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        query:''
                    },
                }).then((response) => {
                    console.log(response.data);
                    if(response.data.dataList === undefined){
                        this.$data.appReview = '';
                    }else {
                        this.$data.appReview = response.data.dataList;
                    }
                }, (error) => {
                    console.log(error);
                });
            },rating_avg(){
                var rating_avg = 0;
                var rating_sum = 0;
                for(var i = 0; i < this.$data.appReview.length; i++){
                    rating_sum += this.$data.appReview[0].rating_point;
                }
                rating_avg = rating_sum/this.$data.appReview.length;
                return rating_avg;
            },pictureDetail(image){
            this.$showModal(PictureModal,{
                props: {
                    image:image,
                },
                fullscreen: false,
                animated: true,
                stretched: false,
                dismissEnabled:true,
                dimAmount: 0.5 // Sets the alpha of the background dim,
            });
         },reviewDelete(review_id){
                console.log('ssss')
                axios({
                    method: 'delete',
                    url: 'http://api.eatjeong.com/v1/places/'+cache.get("place_id")+'/reviews/'+review_id,
                    params: {
                        review_user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                    },
                }).then((response) => {
                    console.log(response.data);
                    this.appReviewMore();
                }, (error) => {
                    console.log(error);
                });
            }
        }
    };
</script>

<style lang="scss">

</style>
