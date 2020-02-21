<template lang="html">
 <Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
  <StackLayout>
   <StackLayout class="reviewMoreWrap" orientation="horizontal" >
     <StackLayout class="reviewMoreIconWrap" @tap="$navigateBack" >
       <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
     </StackLayout>
     <StackLayout class="reviewMorePlaceNameWrap" width="300" style="text-align: center">
       <label class="reviewMorePlaceName" :text="place_name"/>
     </StackLayout>
   </StackLayout>
   <StackLayout>
       <ScrollView >
           <StackLayout>
               <StackLayout class="googleReviewMoreWrap"v-for="g_reviews in googleReview" v-if="googleReview != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                   <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                       <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal">
                           <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 0"/>
                           <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 1"/>
                           <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 2"/>
                           <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 3"/>
                           <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 4"/>
                       </StackLayout>
                       <StackLayout class="googleReviewMoreDateWrap">
                           <label class="googleReviewMoreDate" :text="g_reviews.write_date"  />
                       </StackLayout>
                   </StackLayout>
                   <StackLayout class="googleReviewMoreContentsWrap" >
                       <TextView class="googleReviewMoreContents" :text="g_reviews.g_content"   editable="false"  returnKeyType="send" textWrap="true" />
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

    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/placeMore/GoogleMore/googleMore_480.scss';
    const appSettings = require("tns-core-modules/application-settings");

    var cache = require("nativescript-cache");

    export default {
        name:"GoogleMore",
        components: {
        }, data(){
            return {
                googleReview:[],
                place_name:cache.get('place_name')
            }
        },methods :{
            googleMore(){
                var cache = require("nativescript-cache");

                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')  + '/reviews/google',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        query:''
                    },
                }).then((response) => {
                    console.log(response.data);
                    if(response.data.dataList === undefined){
                        this.$data.googleReview = '';
                    }else {
                        this.$data.googleReview = response.data.dataList;
                    }
                }, (error) => {
                    console.log(error);
                });
            }
        },mounted(){
               this.googleMore()
        }
    };
</script>

<style lang="scss">

</style>
