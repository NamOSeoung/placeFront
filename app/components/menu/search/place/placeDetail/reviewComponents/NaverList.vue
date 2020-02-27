<template lang="html">
    <StackLayout marginTop="10">
        <StackLayout orientation="horizontal">
            <image class="youtubeListIcon" src="~/Resources/img/home/naver.png" />
            <label class="youtubeListTitle" text="네이버"  />
            <label class="youtubeListMore" text="더보기"  @tap="goMorePage" v-if="naverReview.length > 4"/>
            <image class="youtubeListMoreIcon"  src="~/Resources/img/place/right_5_64.png" v-if="naverReview.length > 4" />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout class="naverListHeaderWrap" orientation="horizontal"  >
                <StackLayout class="naverListTopWrap" orientation="horizontal" @tap="goWebview(n_reviews.index)" v-if="naverReview != ''" v-for="n_reviews in naverReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                      <StackLayout v-if="naverReview.thumbnail_url != null">
                          <StackLayout class="naverListThumbnailWrap" >
                              <Image class="naverListThumbnail"  stretch="aspectFill" :src="n_reviews.thumbnail_url"/>
                          </StackLayout>
                          <StackLayout>
                              <StackLayout>
                                  <label class="naverListTitle" :text="n_reviews.title"  />
                                  <Label class="naverListDescription" :text="n_reviews.description" />
                              </StackLayout>
                              <StackLayout class="naverListDateInfoWrap" orientation="horizontal" >
                                  <label class="naverListDate" :text="n_reviews.write_date"  />
                                  <label class="naverListWriter" :text="n_reviews.author" />
                              </StackLayout>
                          </StackLayout>
                      </StackLayout>
                     <StackLayout v-else>
                            <StackLayout width="100%">
                                <StackLayout width="100%" paddingLeft="8">
                                    <label width="96%" class="naverListTitle" :text="n_reviews.title" />
                                    <Label width="96%" class="naverListDescription" :text="n_reviews.description" />
                                </StackLayout>
                                <StackLayout width="100%" paddingLeft="8" class="naverListDateInfoWrap" orientation="horizontal">
                                    <label class="naverListDate" :text="n_reviews.write_date"  />
                                    <label class="naverListWriter" :text="n_reviews.author" />
                                </StackLayout>
                            </StackLayout>
                      </StackLayout>
                  </StackLayout>
                <StackLayout class="naverListBottomWrap" v-if="naverReview == ''" >
                    <StackLayout class="naverListNonContentsWrap" >
                        <label class="naverListNonContents" text="정보가 없습니다."  />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import NaverMore from '../reviewMore/NaverMore'
    import PlaceDetail from '../PlaceDetail'
    import NaverWebview from '../reviewMore/reviewMoreWebview/NaverWebview'

    import axios from 'axios';
    var cache = require("nativescript-cache");
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/NaverList/naverList_320.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/NaverList/naverList_360.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/NaverList/naverList_420.scss';
    import '~/Resources/css/menu/search/place/placeDetail/reviewComponents/NaverList/naverList_480.scss';
    const appSettings = require("tns-core-modules/application-settings");

    var Toast = require("nativescript-toast");

    export default {
        name:"NaverList",
        components: {
        }, computed: {
        }, data(){
            return {
                naverReview:[],
                naverMorePage:NaverMore
            }
        },methods: {
            getNaverReviewList() {
                var address = cache.get('place_address').split(' ');
                console.log("ji")
                console.log('http://202.182.117.173:8080/v1/places/'+cache.get('place_id')+'/blogs/naver')
                console.log(address[0] + ' ' + address[1] +' ' +cache.get('place_name') +' '+ '맛집')
                 axios({
                     method: 'get',
                     url:'http://api.eatjeong.com/v1/places/'+cache.get('place_id')+'/blogs/naver',
                     params: {
                         user_id:appSettings.getString("user_id"),
                         sns_division:appSettings.getString("sns_division"),
                         query: address[0] + ' ' + address[1] +' ' +cache.get('place_name') +' '+ '맛집',
                         size:'5'
                     },
                 }).then((response) => {
                     console.log("naverList"+response.data.dataList);
                     if(response.data.dataList === undefined){
                         this.$data.naverReview = '';
                     }else {
                         this.$data.naverReview = response.data.dataList;
                     }
                 }, (error) => {
                     console.log(error);
                 });
            },goWebview(index){ //네이버 웹뷰페이지 호출
                console.log(index)
                this.$navigateTo(NaverWebview, {
                    props: {
                        itemList: this.$data.naverReview[index-1]}
                })
            },goMorePage(){
                if(this.$data.naverReview.length < 5){
                    Toast.makeText("더보기 할 데이터가 존재하지 않습니다.").show();
                }else{
                    this.$navigateTo(this.$data.naverMorePage)
                }

            }
        },mounted(){
            this.getNaverReviewList();
        }
    };
</script>

<style lang="scss">

</style>
