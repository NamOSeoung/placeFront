<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal">
            <image class="youtubeListIcon" src="~/Resources/img/home/tistory.png" />
            <label class="tistoryListTitle" text="티스토리" />
            <label class="tistoryListMore" text="더보기" @tap="goMorePage" v-if="tistoryReview.length > 4" />
            <image class="youtubeListMoreIcon"  src="~/Resources/img/place/right_5_64.png" v-if="tistoryReview.length > 4"/>
        </StackLayout>
        <ScrollView orientation="horizontal">
            <AbsoluteLayout width="100%">
                <StackLayout class="naverListHeaderWrap" orientation="horizontal" >
                    <StackLayout class="naverListTopWrap" orientation="horizontal" @tap="goWebview(t_reviews.index)" v-if="tistoryReview != ''" v-for="t_reviews in tistoryReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                        <StackLayout width="100%" orientation="horizontal" v-if="t_reviews.thumbnail_url != ''">
                            <StackLayout class="naverListThumbnailWrap" >
                                <Image class="naverListThumbnail"  stretch="aspectFill" :src="t_reviews.thumbnail_url"/>
                            </StackLayout>
                            <StackLayout>
                                <StackLayout class="tistoryListSubjectWrap" >
                                    <label class="tistoryListSubject"   :text="t_reviews.title" textWrap="true"  />
                                </StackLayout>
                                <StackLayout class="tistoryListDateInfoWrap" orientation="horizontal">
                                    <label class="naverListDate" :text="t_reviews.write_date"  />
                                    <label class="naverListWriter" :text="t_reviews.author" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout width="100%" orientation="horizontal" v-else>
                            <StackLayout  width="260" paddingLeft="10">
                                <StackLayout class="tistoryListSubjectWrap"  width="260" >
                                    <label class="tistoryListSubject" width="260"   :text="t_reviews.title" textWrap="true"  />
                                </StackLayout>
                                <StackLayout class="tistoryListDateInfoWrap" width="260" orientation="horizontal">
                                    <label class="naverListDate" :text="t_reviews.write_date"  />
                                    <label class="naverListWriter" width="227" :text="t_reviews.author" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="naverListBottomWrap" v-if="tistoryReview == ''&&busy==false" >
                        <StackLayout class="naverListNonContentsWrap" >
                            <label class="naverListNonContents" text="정보가 없습니다."  />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout top="10" width="100%">
                    <ActivityIndicator :busy="busy" marginTop="10" color="#ffe074" width="50" height="50" />
                </StackLayout>
            </AbsoluteLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import TistoryMore from '../reviewMore/TistoryMore'
    import axios from 'axios';
    import TistoryWebview from '../reviewMore/reviewMoreWebview/TistoryWebview'
    const appSettings = require("tns-core-modules/application-settings");
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/TistoryList/tistoryList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/TistoryList/tistoryList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/TistoryList/tistoryList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/TistoryList/tistoryList_480.scss';
    var Toast = require("nativescript-toast");
    export default {
        name:"TistoryList",
        components: {
        }, data(){
            return {
                tistoryReview:[],
                tistoryMorePage:TistoryMore,
                busy:false
            }
        },methods:{
            getTistoryReviewList(){
                var cache = require("nativescript-cache");
                var address = cache.get('place_address').split(' ');


                this.$data.busy = true;
                setTimeout(() => {
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/places/'+cache.get('place_id')  + '/blogs/daum',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            query: address[0] + ' ' + address[1] +' ' +cache.get('place_name') +' '+ '맛집',
                            size:'5'
                        },
                    }).then((response) => {
                        console.log(response.data);
                        this.$data.busy = false;
                        if(response.data.dataList === undefined){
                            this.$data.tistoryReview = '';
                        }else {
                            this.$data.tistoryReview = response.data.dataList;
                        }
                    }, (error) => {
                        this.$data.busy = false;
                        console.log(error);
                    });
                }, 1000);


            },goWebview(index){ //네이버 웹뷰페이지 호출
                console.log(index)
                this.$navigateTo(TistoryWebview, {
                    props: {
                        itemList: this.$data.tistoryReview[index-1]}
                })
            },goMorePage(){
                if(this.$data.tistoryReview.length < 5){
                    Toast.makeText("더보기 할 데이터가 존재하지 않습니다.").show();
                }else{
                    this.$navigateTo(this.$data.tistoryMorePage)
                }

            }
        },
        mounted(){
            this.getTistoryReviewList();
        }
    };
</script>

<style lang="scss">

</style>
