<template lang="html">
    <StackLayout class="youtubeListHeaderWrap">
        <StackLayout orientation="horizontal">
            <image class="youtubeListIcon" src="~/Resources/img/home/youtube.png"/>
            <label class="youtubeListTitle" text="유튜브"/>
            <label class="youtubeListMore" text="더보기" @tap="goMorePage" v-if="youtubeReview.length > 4"/>
            <image class="youtubeListMoreIcon" src="~/Resources/img/place/right_5_64.png" @tap="goMorePage" v-if="youtubeReview.length > 4"/>
        </StackLayout>
        <ScrollView orientation="horizontal">

            <StackLayout class="youtubeListContentsWrap"  orientation="horizontal">
                <StackLayout class="youtubeListDataTopWrap"  v-for="y_reviews in youtubeReview"
                             v-if="youtubeReview != ''"
                             v-shadow="{ elevation: 2,shape:'RECTANGLE',backgroundColor:'#eff2f7', cornerRadius: 0 }">
                    <StackLayout>
                        <StackLayout @tap="goWebview(y_reviews.index)">
                            <image class="youtubeListThumbnail" stretch="aspectFill" :src="y_reviews.thumbnail_url"/>
                        </StackLayout>
                        <StackLayout class="youtubeListBottomWrap" >
                            <TextView @tap="goWebview(y_reviews.index)"  class="youtubeListDescription" editable="false" :text="y_reviews.title"
                                      returnKeyType="send" textWrap="true"/>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="youtubeListNonContentsWrap" v-if="youtubeReview == ''">
                    <StackLayout class="youtubeListNonContentsWrapWrap">
                        <label class="youtubeListNonContents" text="정보가 없습니다."/>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import YoutubeMore from '../reviewMore/YoutubeMore'
    import YoutubeWebview from '../reviewMore/reviewMoreWebview/YoutubeWebview'
    const appSettings = require("tns-core-modules/application-settings");
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/YoutubeList/youtubeList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/YoutubeList/youtubeList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/YoutubeList/youtubeList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/YoutubeList/youtubeList_480.scss';
    var Toast = require("nativescript-toast");
    import axios from 'axios';

    export default {
        name: "YoutubeList",
        data() {
            return {
                isBusy: true,
                youtubeReview: [],
                youtubeMorePage: YoutubeMore
            }
        },
        components: {}, methods: {
            getYoutubeReviewList() {
                var cache = require("nativescript-cache");
                var place_name = cache.get('place_name').split(' ');
                var address = cache.get('place_address').split(' ');
                if(address[1].length > 2){
                    address[1] = address[1].replace('시','').replace('군','').replace('구','')
                }

                console.log('addresscheck' + address[1])
                console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/places/' + cache.get('place_id') + '/reviews/youtube',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        query: address[1] +' ' +place_name[0] +' '+ '맛집',
                        size: '5'
                    },

            }).
                then((response) => {
                    //console.log(response.data);
                    console.log("유튜브" + response.data.dataList)
                    if (response.data.dataList === undefined) {
                        this.$data.youtubeReview = '';
                    } else {
                        this.$data.youtubeReview = response.data.dataList;
                    }

                    console.log(this.$data.youtubeReview + "유튜브 체킹")
                    //this.$data.place_detail = response.data.dataList;
                    //console.log(response.data);
                }, (error) => {
                    console.log(error);
                });
            },goWebview(index){ //네이버 웹뷰페이지 호출
                console.log(index)
                this.$navigateTo(YoutubeWebview, {
                    props: {
                        itemList: this.$data.youtubeReview[index-1]}
                })
            },goMorePage(){
                if(this.$data.youtubeReview.length < 5){
                    Toast.makeText("더보기 할 데이터가 존재하지 않습니다.").show();
                }else{
                    this.$navigateTo(this.$data.youtubeMorePage)
                }

            }
        }, mounted() {
            this.getYoutubeReviewList();
        }
    };
</script>

<style lang="scss">

</style>
