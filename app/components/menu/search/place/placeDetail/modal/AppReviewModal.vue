<template lang="html">
    <Page padding="0 0 0 0" >
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout>
                    <StackLayout class="googleReviewMoreWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                        <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                            <StackLayout class="appReviewUserIconWrap"  visibility="collapsed">
                            </StackLayout>
                            <StackLayout class="appReviewUserIconWrap2">
                                <image class="appReviewUserIcon"  :src="reviewList.profile_image_url" stretch="aspectFill" />
                            </StackLayout>
                            <StackLayout class="appReviewUserNickNameWrap" >
                                <label class="appReviewUserNickName" :text="reviewList.author" stretch="aspectFill" />
                            </StackLayout>
                            <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal">
                                <StackLayout orientation="horizontal">
                                    <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="85" v-if="reviewList.rating_point == 1"/>
                                    <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="65" v-else-if="reviewList.rating_point==2"/>
                                    <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="45" v-else-if="reviewList.rating_point == 3"/>
                                    <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="25" v-else-if="reviewList.rating_point== 4"/>
                                    <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="5" v-else-if="reviewList.rating_point == 5"/>
                                    <StackLayout orientation="horizontal">
                                        <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="reviewList.rating_point > 1"/>
                                        <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="reviewList.rating_point > 2"/>
                                        <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="reviewList.rating_point > 3"/>
                                        <image class="appReviewRatingIcon" src="~/Resources/img/place/star_yellow.png" marginLeft="3" v-if="reviewList.rating_point > 4"/>
                                    </StackLayout>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout class="googleReviewMoreContentsWrap" >
                            <TextView class="googleReviewMoreContents" :text="reviewList.review_contents"   editable="false"  returnKeyType="send" textWrap="true" />
                        </StackLayout>
                        <StackLayout class="googleReviewMoreBottomWrap" orientation="horizontal" >
                            <StackLayout class="googleReviewMorePictureWrap" orientation="horizontal" marginRight="10" v-for="image in reviewList.image_url">
                                <image  class="googleReviewMorePicture" stretch="aspectFill" :src="image" @tap="pictureDetail(image)" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout class="appReviewBottomWrap" orientation="horizontal">
                            <StackLayout class="appReviewDateWrap" >
                                <label class="appReviewDate" :text="reviewList.write_date" />
                            </StackLayout>
                            <StackLayout  v-if="reviewList.like_flag == true" marginTop="-5" class="appReviewLikeIconWrap" @tap="updateLikeCount(reviewList.review_id,'DEL')">
                                <image class="appReviewLikeIcon"  src="~/Resources/img/settings/like_r_64.png" />
                            </StackLayout>
                            <StackLayout  v-else class="appReviewLikeIconWrap" marginTop="-5" @tap="updateLikeCount(reviewList.review_id,'ADD')">
                                <image class="appReviewLikeIcon"  src="~/Resources/img/user/heart_d_64.png" />
                            </StackLayout>
                            <StackLayout class="appReviewLikeCountWrap" width="150" >
                                <label class="appReviewLikeCount" :text="reviewList.like_count" />
                            </StackLayout>
                            <StackLayout orientation="horizontal" v-if="user_id == reviewList.review_user_id">
                                <StackLayout class="appReviewDeleteWrap" @tap="updateReview(reviewList)" >
                                    <label class="appReviewDelete" text="수정"/>
                                </StackLayout>
                                <StackLayout class="appReviewDeleteWrap" @tap="reviewDelete(reviewList.review_id)" marginLeft="10" >
                                    <label class="appReviewDelete" text="삭제"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>
 import axios from "axios";
 const appSettings = require("tns-core-modules/application-settings");
 var dialogs = require("tns-core-modules/ui/dialogs");
 var cache = require("nativescript-cache");
 import PlaceGoLoginModal from './PlaceGoLoginModal'
 import PictureModal from "./PictureModal";
 import AppReviewList  from "../reviewComponents/AppReviewList";
 import ReviewWrite from "../review/ReviewWrite";
 export default {
       name:"AppReviewModal",
       props:['reviewList'],
       data(){
           return {
               user_id:appSettings.getString("user_id")
           }
       },
        components: {
        },mounted() {

     },methods:{
         updateLikeCount(review_id,division){
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
                             this.reviewList.like_flag = true;
                             this.reviewList.like_count = this.reviewList.like_count+1;
                             //this.appReviewMore();
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
                             this.reviewList.like_flag = false;
                             this.reviewList.like_count = this.reviewList.like_count-1;
                             //this.appReviewMore();
                         }, (error) => {
                             console.log(error);
                         });
                     }
                 }else{
                     this.$showModal(PlaceGoLoginModal)
                    // this.$modal.close()
                 }
             }else{
                 this.$showModal(PlaceGoLoginModal)
                 //this.$modal.close()
             }
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
             console.log(review_id);

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
                             this.$modal.close()
                             console.log("Dialog closed22!");
                             AppReviewList.methods.getAppReviewList();

                             //this.appReviewMore();
                             //this.aaa()
                             //this.$navigateTo(Login);

                         });
                     }, (error) => {
                         console.log(error);
                     });

                 }
             });
         },updateReview(reviews){
             console.log(reviews)
             this.$navigateTo(ReviewWrite, {
                 props: {
                     itemList: reviews}
             })
             this.$modal.close();
         }
     }
    };

</script>

<style lang="scss">

</style>
