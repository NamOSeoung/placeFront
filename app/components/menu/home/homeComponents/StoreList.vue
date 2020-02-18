<template lang="html">
 <StackLayout class="storeWrap">
   <StackLayout orientation="horizontal" class="storeHeaderWrap">
       <image src="~/Resources/img/home/cook.png" class="storeCookIcon"/>
       <label text="매장정보" class="storeTitle"/>
       <label text="더보기" class="storeMore" @tap="$navigateTo(StoreMorePage)"/>
       <image src="~/Resources/img/home/angle-right.png" class="storeRightIcon" />
   </StackLayout>
     <ScrollView orientation="horizontal" >
             <StackLayout orientation="horizontal" class="storeDetailSubWrap" >
                 <StackLayout orientation="horizontal" class="storeDetailWrap"  @tap="goPlaceDetail(index)" v-for="(list,index) in storeList">
                     <StackLayout class="storeLeftWrap" v-if="list.blog_thumbnail != null">
                         <image class="storeImage" stretch="aspectFill" :src="list.blog_thumbnail"/>
                     </StackLayout>
                     <StackLayout class="storeLeftWrap" v-else backgroundColor="#dddddd" borderRadius="10">
                         <image class="storeImage" width="55" height="55" marginTop="8" stretch="aspectFill" src="~/Resources/img/home/dinner_w_64.png"/>
                     </StackLayout>
                     <StackLayout class="storeRightWrap">
                         <StackLayout orientation="horizontal" class="storeTopWrap">
                             <StackLayout class="storeTimeWrap">
                                 <label text="영업중" class="storeTime" />
                             </StackLayout>
                             <StackLayout class="storeStarIconWrap">
                                 <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
                             </StackLayout>
                             <StackLayout class="storeRatingWrap">
                                 <label text="4.3" class="storeRating"/>
                             </StackLayout>
                         </StackLayout>
                         <StackLayout class="storeMiddleWrap">
                             <label :text="list.place_name" class="storeName" />
                         </StackLayout>
                         <StackLayout class="storeBottomWrap">
                             <label :text="list.category_name" class="storeCategory"/>
                         </StackLayout>
                     </StackLayout>
                 </StackLayout>
             </StackLayout>
     </ScrollView>
 </StackLayout>
</template>

<script>
    import axios from 'axios';

    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_480.scss';

    import StoreMore from './reviewMore/StoreMore'
    var cache = require("nativescript-cache");
    import PlaceDetail from '../../search/place/placeDetail/PlaceDetail'
    const appSettings = require("tns-core-modules/application-settings");
    export default {
        name:"StoreList",
        data(){
            return{
               storeList:[],
                StoreMorePage:StoreMore
        }
        },
        components: {
        },methods:{
            getStoreList(keyword){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/main/places?',
                    params: {
                        query:"서울 동작구 상도동 맛집",
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        size:'5'
                    },
                }).then((response) => {
                    console.log(response.data.dataList)
                    this.$data.storeList = response.data.dataList;


                }, (error) => {
                    console.log(error);
                });
            },goPlaceDetail(index){
                cache.set('place_id',this.$data.storeList[index].place_id)
                cache.set('place_name',this.$data.storeList[index].place_name)
                cache.set('place_address',this.$data.storeList[index].place_address);
                this.$navigateTo(PlaceDetail, {
                    props: {
                        context: this.$data.storeList[index]}});
            }
        },
        mounted() {
            this.getStoreList();
        }
    };
</script>

<style lang="scss">

</style>
