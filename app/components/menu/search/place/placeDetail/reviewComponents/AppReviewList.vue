<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <StackLayout orientation="horizontal" >
                <image class="youtubeListIcon" src="~/Resources/img/place/playstore-icon.png" />
                <label class="tistoryListTitle" text="잇정리뷰" />
                <label class="tistoryListMore" text="더보기" @tap="goMorePage"  v-if="appReview.length > 4"/>
                <image class="youtubeListMoreIcon"  src="~/Resources/img/place/right_5_64.png"  v-if="appReview.length > 4"/>
            </StackLayout>
        </StackLayout>
        <ScrollView orientation="horizontal">
            <AbsoluteLayout width="100%">
                <StackLayout orientation="horizontal">
                    <StackLayout class="appReviewListHeaderWrap" orientation="horizontal" v-for="a_reviews in appReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                        <StackLayout orientation="horizontal" v-if="a_reviews.image_url.length > 0 ">
                            <StackLayout class="appReviewListThumbnailWrap"  >
                                <Image class="appReviewListThumbnail"  stretch="aspectFill" :src="a_reviews.image_url[0]" @tap="pictureDetail(a_reviews.image_url[0])"/>
                            </StackLayout>
                            <StackLayout @tap="appReviewDetail(a_reviews)" >
                                <StackLayout orientation="horizontal">
                                    <StackLayout class="appReviewListRatingIconWrap" orientation="horizontal" >
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                    </StackLayout>
                                    <StackLayout>
                                        <label class="appReviewListDate" :text="a_reviews.write_date"  />
                                    </StackLayout>
                                </StackLayout>
                                <StackLayout class="appReviewListContentsWrap" >
                                    <label class="appReviewListContents" :text="a_reviews.review_contents" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout orientation="horizontal" v-else @tap="appReviewDetail(a_reviews)">
                            <StackLayout>
                                <StackLayout orientation="horizontal">
                                    <StackLayout class="appReviewListRatingIconWrap" orientation="horizontal" >
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                        <image class="appReviewListRatingIcon"  src="~/Resources/img/place/star_yellow.png" />
                                    </StackLayout>
                                    <StackLayout>
                                        <label class="appReviewListDate" :text="a_reviews.write_date"  />
                                    </StackLayout>
                                </StackLayout>
                                <StackLayout class="appReviewListContentsWrap" >
                                    <label class="appReviewListContents" :text="a_reviews.review_contents" textWrap="true" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="googleListBottomWrap" v-if="appReview == ''&&busy==false" >
                        <StackLayout class="googleListNonContentsWrap" >
                            <label class="googleListNonContents" text="정보가 없습니다."  />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout top="10" width="100%">
                    <ActivityIndicator :busy="busy" marginTop="10"  color="#ffe074" width="50" height="50" />
                </StackLayout>
            </AbsoluteLayout>

        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import AppReviewMore from '../reviewMore/AppReviewMore'
    import axios from 'axios';
    var cache = require("nativescript-cache");
    import PictureModal from '../modal/PictureModal'
    import AppReviewModal from '../modal/AppReviewModal'
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_480.scss';
    import GoogleReviewModal from "../modal/GoogleReviewModal";
    const appSettings = require("tns-core-modules/application-settings");
    var Toast = require("nativescript-toast");
    export default {
        name:"AppList",
        components: {
        }, data(){
            return {
                appReview:[],
                appReviewMorePage:AppReviewMore,
                busy:false
            }
        },methods:{
            getAppReviewList(){
                var cache = require("nativescript-cache");

                this.$data.busy = true;
                setTimeout(() => {
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')+'/reviews/eatzeong',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            //size:'5'
                        },
                    }).then((response) => {
                        this.$data.busy = false;
                        var write_flag = false;
                        if(response.data.dataList.length > 5){
                            for(var i = 0; i < response.data.dataList.length; i++){
                                if(appSettings.getString("user_id") != undefined ) {
                                    if (appSettings.getString("user_id") != '') {
                                        if (response.data.dataList[i].review_user_id == appSettings.getString("user_id")) {
                                            write_flag = true;
                                        }
                                    }
                                }
                                console.log(response.data.dataList[i] + "reviewssssssss")
                                if(i < 5){
                                    console.log(response.data.dataList[i] + "reviewssss")
                                    this.$data.appReview.push(response.data.dataList[i]);
                                }
                            }

                        }else{
                            this.$data.appReview = response.data.dataList;
                            for(var i = 0; i < response.data.dataList.length; i++) {
                                if (appSettings.getString("user_id") != undefined) {
                                    if (appSettings.getString("user_id") != '') {
                                        if (response.data.dataList[i].review_user_id == appSettings.getString("user_id")) {
                                            write_flag = true;
                                        }
                                    }
                                }
                            }
                        }


                        if( write_flag == true){
                            cache.set("write_flag","true");
                        }else{
                            cache.set("write_flag","false");
                        }

                        console.log(write_flag + "asdasd")

                    }, (error) => {
                        this.$data.busy = false;
                        console.log(error);
                    });
                }, 1000);



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
            },goMorePage(){
                if(this.$data.appReview.length < 5){
                    Toast.makeText("더보기 할 데이터가 존재하지 않습니다.").show();
                }else{
                    this.$navigateTo(this.$data.appReviewMorePage)
                }

            },appReviewDetail(review) {
                console.log("ssss")
                this.$showModal(AppReviewModal,{
                    props: {
                        reviewList:review
                    },
                    fullscreen: false,
                    animated: true,
                    stretched: false,
                    dismissEnabled:true,
                    dimAmount: 0.5 // Sets the alpha of the background dim,
                });
            }
        },
        mounted(){
            this.getAppReviewList()
        }
    };

    const Detail = {
        template: `
    <Page>
      <ActionBar title="Detail"/>
      <StackLayout @tap="aa">
        <Label text="Details.." />
      </StackLayout>
    </Page>
  ` ,
        methods: {
           aa(){
               console.log("ssssss")
               this.$navigateBack;
           }
        }
    };
</script>

<style lang="scss">

</style>
