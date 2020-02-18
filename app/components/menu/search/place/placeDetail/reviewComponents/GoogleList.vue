<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <image class="youtubeListIcon" src="~/Resources/img/place/google.png" />
            <label class="tistoryListTitle" text="구글리뷰" />
            <label class="tistoryListMore" text="더보기" @tap="$navigateTo(googleMorePage)" />
            <image class="youtubeListMoreIcon"  src="~/Resources/img/place/right_5_64.png" />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout class="googleListHeaderWrap" orientation="horizontal" >
                <StackLayout class="googleListWrap" @tap="googleReviewDetail(g_reviews.g_rating,g_reviews.g_content,g_reviews.g_write_Date)"  v-for="g_reviews in googleReview" v-if="googleReview != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                    <StackLayout class="googleListWrapWrap" orientation="horizontal">
                        <StackLayout class="googleListRatingIconWrap" orientation="horizontal" >
                            <image class="googleListRatingIcon" src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 0"/>
                            <image class="googleListRatingIcon" src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 1"/>
                            <image class="googleListRatingIcon" src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 2"/>
                            <image class="googleListRatingIcon" src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 3"/>
                            <image class="googleListRatingIcon" src="~/Resources/img/place/star.png" v-if="g_reviews.g_rating > 4"/>
                            <!--<FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="10" marginTop="11" v-if="g_reviews.g_rating > 0"/> -->
                        </StackLayout>
                        <StackLayout>
                            <label class="googleListDate" :text="g_reviews.write_date"  />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="googleListContentsWrap"  >
                        <label class="googleListContents" :text="g_reviews.g_content" textWrap="true" />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="googleListBottomWrap" v-if="googleReview == ''" >
                    <StackLayout class="googleListNonContentsWrap" >
                        <label class="googleListNonContents" text="정보가 없습니다."  />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import axios from 'axios';
    import GoogleMore from '../reviewMore/GoogleMore'
    import GoogleReviewModal from '../modal/GoogleReviewModal'
    var cache = require("nativescript-cache");
    const appSettings = require("tns-core-modules/application-settings");
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/GoogleList/googleList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/GoogleList/googleList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/GoogleList/googleList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/GoogleList/googleList_480.scss';

    export default {
        name:"GoogleList",
        components: {
        }, data(){
            return {
                googleReview:[],
                googleMorePage:GoogleMore
            }
        },methods:{
            getGoogleReviewList(){

                   console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
                   axios({
                       method: 'get',
                       url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')  + '/reviews/google',
                       params: {
                           user_id:appSettings.getString("user_id"),
                           sns_division:appSettings.getString("sns_division"),
                           size:'5'
                       },
                   }).then((response) => {
                       console.log(response.data);
                       if(response.data.dataList === undefined){
                           this.$data.googleReview = '';
                       }else{
                           this.$data.googleReview = response.data.dataList;
                       }
                       console.log(this.$data.googleReview + "체킹!!")
                   }, (error) => {
                       console.log(error);
                   });
            },goWebview(index){ //네이버 웹뷰페이지 호출
                console.log(index)
                this.$navigateTo(GoogleMore)
            },googleReviewDetail(rating,contents,write_date){
                this.$showModal(GoogleReviewModal,{
                    props: {
                        rating:rating,
                        contents:contents,
                        write_date:write_date
                    },
                    fullscreen: false,
                    animated: true,
                    stretched: false,
                    dismissEnabled:true,
                    dimAmount: 0.5 // Sets the alpha of the background dim,
                });
            }
        }, mounted(){
            this.getGoogleReviewList()
        }
    };
</script>

<style lang="scss">


</style>
