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
       <StackLayout class="appReviewWriteIconWrap" @tap="reviewWrite">
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
                               <StackLayout orientation="horizontal">
                                   <image class="appReviewRatingIcon1" src="~/Resources/img/place/star_yellow.png" marginLeft="85" v-if="a_reviews.rating_point == 1"/>
                                   <image class="appReviewRatingIcon2" src="~/Resources/img/place/star_yellow.png" marginLeft="65" v-else-if="a_reviews.rating_point==2"/>
                                   <image class="appReviewRatingIcon3" src="~/Resources/img/place/star_yellow.png" marginLeft="45" v-else-if="a_reviews.rating_point == 3"/>
                                   <image class="appReviewRatingIcon4" src="~/Resources/img/place/star_yellow.png" marginLeft="25" v-else-if="a_reviews.rating_point== 4"/>
                                   <image class="appReviewRatingIcon5" src="~/Resources/img/place/star_yellow.png" marginLeft="5" v-else-if="a_reviews.rating_point == 5"/>
                                   <StackLayout orientation="horizontal">
                                       <image class="appReviewRatingIcon6" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 1"/>
                                       <image class="appReviewRatingIcon6" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 2"/>
                                       <image class="appReviewRatingIcon6" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 3"/>
                                       <image class="appReviewRatingIcon6" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="a_reviews.rating_point > 4"/>
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
                           <StackLayout class="appReviewLikeCountWrap" width="150" >
                               <label class="appReviewLikeCount" :text="a_reviews.like_count" />
                           </StackLayout>
                           <StackLayout orientation="horizontal" v-if="user_id == a_reviews.review_user_id">
                               <StackLayout class="appReviewDeleteWrap" @tap="updateReview(a_reviews)" >
                                   <label class="appReviewDelete" text="수정"/>
                               </StackLayout>
                               <StackLayout class="appReviewDeleteWrap" @tap="reviewDelete(a_reviews.review_id)" marginLeft="20"  >
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
    import Login from "../../../../../member/Login";
    import ReviewWrite from "../review/ReviewWrite";
    const appSettings = require("tns-core-modules/application-settings");
    var cache = require("nativescript-cache");
    import PlaceGoLoginModal from '../modal/PlaceGoLoginModal'
    var dialogs = require("tns-core-modules/ui/dialogs");

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
                console.log('ssss');

                dialogs.confirm({
                    title: "",
                    message: "리뷰를 삭제하시겠습니까?",
                    okButtonText: "네",
                    cancelButtonText: "아니오",
                }).then((result) =>  {
                    // result argument is boolean
                    console.log("Dialog result: " + result);
                    if(result == true){

                        axios({
                            method: 'delete',
                            url: 'http://api.eatjeong.com/v1/places/'+cache.get("place_id")+'/reviews/'+review_id,
                            params: {
                                review_user_id:appSettings.getString("user_id"),
                                sns_division:appSettings.getString("sns_division"),
                            },
                        }).then((response) => {
                            console.log(response.data);

                            dialogs.alert({
                                title: "",
                                message: "리뷰가 삭제되었습니다.",
                                okButtonText: "확인"
                            }).then(() => {
                                console.log("Dialog closed22!");
                                this.appReviewMore();
                                //this.appReviewMore();
                                //this.aaa()
                                //this.$navigateTo(Login);

                            });
                        }, (error) => {
                            console.log(error);
                        });

                    }
                });

                // axios({
                //     method: 'delete',
                //     url: 'http://api.eatjeong.com/v1/places/'+cache.get("place_id")+'/reviews/'+review_id,
                //     params: {
                //         review_user_id:appSettings.getString("user_id"),
                //         sns_division:appSettings.getString("sns_division"),
                //     },
                // }).then((response) => {
                //     console.log(response.data);
                //     this.appReviewMore();
                // }, (error) => {
                //     console.log(error);
                // });
            },aaa(){
                console.log('123123')
            },updateReview(reviews){
                console.log(reviews)
                this.$navigateTo(ReviewWrite, {
                    props: {
                        itemList: reviews}
                })
            },updateLikeCount(review_id,division){
                if(appSettings.getString("user_id") != undefined ) {
                    if (appSettings.getString("user_id") != '') {
                        if (division == 'ADD') {
                            axios({
                                method: 'post',
                                url: 'http://api.eatjeong.com/v1/reviews/' + review_id,
                                params: {
                                    user_id: appSettings.getString("user_id"),
                                    sns_division: appSettings.getString("sns_division"),
                                },
                            }).then((response) => {
                                console.log(response.data);
                                this.appReviewMore();
                            }, (error) => {
                                console.log(error);
                            });
                        } else {
                            axios({
                                method: 'delete',
                                url: 'http://api.eatjeong.com/v1/reviews/' + review_id,
                                params: {
                                    user_id: appSettings.getString("user_id"),
                                    sns_division: appSettings.getString("sns_division"),
                                },
                            }).then((response) => {
                                console.log(response.data);
                                this.appReviewMore();
                            }, (error) => {
                                console.log(error);
                            });
                        }
                    }else{
                        this.$showModal(PlaceGoLoginModal)
                        this.$modal.close()
                    }
                }else{
                    this.$showModal(PlaceGoLoginModal)
                    this.$modal.close()
                }
            },reviewWrite(){
                console.log("리뷰 작성")
                if(appSettings.getString("user_id") != undefined ) {
                    if (appSettings.getString("user_id") != '') {
                        var write_flag = false;
                        for(var i = 0; i < this.$data.appReview.length ; i++){
                            if(this.$data.appReview[i].review_user_id == this.$data.user_id){
                                write_flag = true;
                                break;
                            }
                        }

                        console.log(write_flag)

                        if(write_flag == true){
                            dialogs.alert({
                                title: "",
                                message: "이미 작성하신 리뷰가 존재합니다.",
                                okButtonText: "확인"
                            }).then(() => {
                                console.log("Dialog closed22!");
                                //this.appReviewMore();
                                //this.appReviewMore();
                                //this.aaa()
                                //this.$navigateTo(Login);

                            });
                        }else{
                            this.$navigateTo(ReviewWrite)
                        }
                    }else{
                        this.$showModal(PlaceGoLoginModal)
                        this.$modal.close()
                    }
                }else{
                    this.$showModal(PlaceGoLoginModal)
                    this.$modal.close()
                }
            }
        }
    };
</script>

<style lang="scss">

</style>
