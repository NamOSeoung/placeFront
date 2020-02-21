<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <StackLayout orientation="horizontal" >
                <image class="youtubeListIcon" src="~/Resources/img/place/google.png" />
                <label class="tistoryListTitle" text="잇정리뷰" />
                <label class="tistoryListMore" text="더보기" @tap="goMorePage" />
                <image class="youtubeListMoreIcon"  src="~/Resources/img/place/right_5_64.png" />
            </StackLayout>
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal">
                <StackLayout class="appReviewListHeaderWrap" orientation="horizontal" v-for="a_reviews in appReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                       <StackLayout orientation="horizontal" v-if="a_reviews.image_url.length > 0 ">
                           <StackLayout class="appReviewListThumbnailWrap"  >
                               <Image class="appReviewListThumbnail"  stretch="aspectFill" :src="a_reviews.image_url[0]" @tap="pictureDetail(a_reviews.image_url[0])"/>
                           </StackLayout>
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
                        <StackLayout orientation="horizontal" v-else>
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

                <StackLayout class="googleListBottomWrap" v-if="appReview == ''" >
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
    import AppReviewMore from '../reviewMore/AppReviewMore'
    import axios from 'axios';
    var cache = require("nativescript-cache");
    import PictureModal from '../modal/PictureModal'
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/AppReviewList/appReviewList_480.scss';
    const appSettings = require("tns-core-modules/application-settings");
    var Toast = require("nativescript-toast");
    export default {
        name:"AppList",
        components: {
        }, data(){
            return {
                appReview:[],
                appReviewMorePage:AppReviewMore
            }
        },methods:{
            getAppReviewList(){
                var cache = require("nativescript-cache");
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')+'/reviews/eatzeong',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        size:'5'
                    },
                }).then((response) => {
                    (response.data);
                    this.$data.appReview = response.data.dataList;
                }, (error) => {
                    console.log(error);
                });
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
