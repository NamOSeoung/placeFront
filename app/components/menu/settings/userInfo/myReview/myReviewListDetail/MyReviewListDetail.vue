<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  <StackLayout>
   <StackLayout class="reviewMoreWrap" orientation="horizontal" >
     <StackLayout class="reviewMoreIconWrap" @tap="$navigateBack" >
       <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
     </StackLayout>
     <StackLayout class="reviewMorePlaceNameWrap"  >
       <label class="reviewMorePlaceName" text="리뷰목록"/>
     </StackLayout>
       <StackLayout class="appReviewWriteIconWrap" @tap="updateReview">
           <image class="appReviewWriteIcon" src="~/Resources/img/place/Orion_edit.png" />
       </StackLayout>
   </StackLayout>
       <ScrollView height="100%">
           <StackLayout>
               <StackLayout >
                   <StackLayout class="appReviewHeaderWrap" orientation="horizontal">
                       <StackLayout class="appReviewHeaderRatingwrap" >
                           <label class="appReviewHeaderRating" :text="itemList.place_name" textWrap="true" />
                       </StackLayout>
                   </StackLayout>
                   <StackLayout height="100%">
                       <StackLayout class="googleReviewMoreWrap" v-for="a_reviews in myReviewList" v-if="myReviewList != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                           <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                               <StackLayout class="appReviewUserIconWrap"  visibility="collapsed">
                               </StackLayout>
                               <StackLayout v-if="user_id == a_reviews.review_user_id" marginTop="19" marginLeft="15" >
                                   <label text="내 리뷰" fontFamily="nanumsquareroundb" fontSize="14" color="#888888" />
                               </StackLayout>
                               <StackLayout orientation="horizontal" v-else>
                                   <StackLayout class="appReviewUserIconWrap2" >
                                       <image class="appReviewUserIcon"  :src="a_reviews.profile_image_url" stretch="aspectFill" />
                                   </StackLayout>
                                   <StackLayout class="appReviewUserNickNameWrap" >
                                       <label class="appReviewUserNickName" :text="a_reviews.author" stretch="aspectFill" />
                                   </StackLayout>
                               </StackLayout>
                               <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal" >
                                   <StackLayout orientation="horizontal">
                                       <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="225" v-if="a_reviews.rating_point == 1"/>
                                       <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="205" v-else-if="a_reviews.rating_point==2"/>
                                       <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="185" v-else-if="a_reviews.rating_point == 3"/>
                                       <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="165" v-else-if="a_reviews.rating_point== 4"/>
                                       <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="145" v-else-if="a_reviews.rating_point == 5"/>
                                       <StackLayout orientation="horizontal">
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 1"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 2"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 3"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 4"/>
                                       </StackLayout>
                                   </StackLayout>
                               </StackLayout>
                           </StackLayout>
                           <StackLayout class="googleReviewMoreContentsWrap" marginTop="8" >
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
                               <StackLayout  v-if="a_reviews.like_flag == true" class="appReviewLikeIconWrap" marginTop="-5" @tap="updateLikeCount(a_reviews.review_id,'DEL')">
                                   <image class="appReviewLikeIcon"  src="~/Resources/img/settings/like_r_64.png" />
                               </StackLayout>
                               <StackLayout  v-else class="appReviewLikeIconWrap" marginTop="-5" @tap="updateLikeCount(a_reviews.review_id,'ADD')">
                                   <image class="appReviewLikeIcon"  src="~/Resources/img/user/heart_d_64.png" />
                               </StackLayout>
                               <StackLayout class="appReviewLikeCountWrap" marginTop="-1" >
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

               <StackLayout v-if="otherReviewList != ''">
                   <StackLayout>
                       <StackLayout class="appReviewHeaderWrap" orientation="horizontal" >
                           <StackLayout class="appReviewHeaderIconWrap">
                               <image class="appReviewHeaderIcon" src="~/Resources/img/place/star_yellow.png" />
                           </StackLayout>
                           <StackLayout class="appReviewHeaderRatingwrap" marginTop="10">
                               <label class="appReviewHeaderRating" :text="'잇정리뷰 '+rating_avg() + ' 점'" />
                           </StackLayout>
                       </StackLayout>
                       <StackLayout height="100%">
                           <StackLayout class="googleReviewMoreWrap" v-for="a_reviews in otherReviewList" v-if="otherReviewList != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                               <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                                   <StackLayout class="appReviewUserIconWrap"  visibility="collapsed">
                                   </StackLayout>
                                   <StackLayout class="appReviewUserIconWrap2">
                                       <image class="appReviewUserIcon"  :src="a_reviews.profile_image_url" stretch="aspectFill" />
                                   </StackLayout>
                                   <StackLayout class="appReviewUserNickNameWrap" >
                                       <label class="appReviewUserNickName" :text="a_reviews.review_user_nickname" stretch="aspectFill" />
                                   </StackLayout>
                                   <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal">
                                       <StackLayout orientation="horizontal">
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="85" v-if="a_reviews.rating_point == 1"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="65" v-else-if="a_reviews.rating_point==2"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="45" v-else-if="a_reviews.rating_point == 3"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="25" v-else-if="a_reviews.rating_point== 4"/>
                                           <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="5" v-else-if="a_reviews.rating_point == 5"/>
                                           <StackLayout orientation="horizontal">
                                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 1"/>
                                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 2"/>
                                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 3"/>
                                               <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 4"/>
                                           </StackLayout>
                                       </StackLayout>
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
                                   <StackLayout  v-if="a_reviews.like_flag == true" marginTop="-5" class="appReviewLikeIconWrap" @tap="updateLikeCount(a_reviews.review_id,'DEL')">
                                       <image class="appReviewLikeIcon"  src="~/Resources/img/settings/like_r_64.png" />
                                   </StackLayout>
                                   <StackLayout  v-else class="appReviewLikeIconWrap" marginTop="-5" @tap="updateLikeCount(a_reviews.review_id,'ADD')">
                                       <image class="appReviewLikeIcon"  src="~/Resources/img/user/heart_d_64.png" />
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
               </StackLayout>
           </StackLayout>
       </ScrollView>
  </StackLayout>

 </Page>
</template>

<script>
    import axios from 'axios';

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

  //  import PictureModal from '../../placeDetail/modal/PictureModal';
    import PictureModal from '../../../../search/place/placeDetail/modal/PictureModal'
    import ReviewWrite from '../../../../search/place/placeDetail/review/ReviewWrite'

    export default {
        name:"MyReviewListDetail",
        props:['itemList'],
        components: {
        }, data(){
            return {
                appReview:[],
                user_id:appSettings.getString("user_id"),
                myReviewList:[],
                otherReviewList:[]
            }
        },mounted(){
            this.appReviewMore();
        },methods :{
            rating_avg(){
                var rating_avg = 0;
                var rating_sum = 0;
                for(var i = 0; i < this.$data.otherReviewList.length; i++){
                    rating_sum += this.$data.otherReviewList[0].rating_point;
                }
                rating_avg = rating_sum/this.$data.otherReviewList.length;
                return rating_avg;
            },
            appReviewMore(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/myreviews/'+cache.get('place_id')+'/'+this.itemList.review_id,
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                    },
                }).then((response) => {
                    console.log(response.data);
                    this.$data.myReviewList = response.data.dataList.myReviewList;
                    this.$data.otherReviewList = response.data.dataList.otherReviewList;
                }, (error) => {
                    console.log(error);
                });
            },rating_avg(){
                var rating_avg = 0;
                var rating_sum = 0;
                for(var i = 0; i < this.$data.otherReviewList.length; i++){
                    rating_sum += this.$data.otherReviewList[0].rating_point;
                }

                for(var i = 0; i < this.$data.myReviewList.length; i++){
                    rating_sum += this.$data.myReviewList[0].rating_point;
                }
                rating_avg = rating_sum/(this.$data.myReviewList.length + this.$data.otherReviewList.length) ;
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
                axios({
                    method: 'delete',
                    url: 'http://api.eatjeong.com/v1/places/'+cache.get("place_id")+'/reviews/'+review_id,
                    params: {
                        review_user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        url:['abc','def']
                    },
                }).then((response) => {
                    console.log(response.data);
                    this.appReviewMore();
                }, (error) => {
                    console.log(error);
                });
            },updateLikeCount(review_id,division){
                if(division == 'ADD'){
                    axios({
                        method: 'post',
                        url: 'http://api.eatjeong.com/v1/reviews/'+review_id,
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                        },
                    }).then((response) => {
                        console.log(response.data);
                        this.appReviewMore();
                    }, (error) => {
                        console.log(error);
                    });
                }else{
                    axios({
                        method: 'delete',
                        url: 'http://api.eatjeong.com/v1/reviews/'+review_id,
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                        },
                    }).then((response) => {
                        console.log(response.data);
                        this.appReviewMore();
                    }, (error) => {
                        console.log(error);
                    });
                }

            },updateReview(){
                 this.$navigateTo(ReviewWrite, {
                     props: {
                         itemList: this.$data.myReviewList[0]}
                 })
            }
        }
    };
</script>

<style lang="scss">

</style>
