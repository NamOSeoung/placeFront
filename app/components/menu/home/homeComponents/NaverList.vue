<template lang="html">
    <StackLayout class="naverWrap">
        <StackLayout orientation="horizontal" class="naverHeaderWrap" width="100%">
            <image src="~/Resources/img/home/naver.png" class="naverIcon"/>
            <label text="네이버" class="naverTitle"/>
            <label text="더보기" class="naverMore" @tap="$navigateTo(NaverMorePage)" v-if="naverList.length > 4" />
            <image src="~/Resources/img/home/angle-right.png" class="naverRightIcon" v-if="naverList.length > 4" />
        </StackLayout>
        <StackLayout v-if="naverList.length>0" marginTop="0" >
            <ScrollView orientation="horizontal" height="100%">
                <StackLayout orientation="horizontal"  class="naverSubWrap">
                    <StackLayout  v-for="(list,index) in naverList" @tap="goWebview(index)" orientation="horizontal" class="naverMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                        <StackLayout class="naverImageWrap">
                            <Image class="naverImage" stretch="aspectFill" :src="list.thumbnail_url"/>
                        </StackLayout>
                        <StackLayout class="naverRightWrap">
                            <StackLayout class="naverRightTop">
                                <label class="naverSubject" :text="list.title"/>
                                <Label class="naverContents" :text="list.description"/>
                            </StackLayout>
                            <StackLayout class="naverRightBottom" orientation="horizontal">
                                <label class="naverWriteDate" :text="list.write_date"/>
                                <label class="naverWriter" :text="list.author"/>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>

     </StackLayout>
</template>

<script>
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_480.scss';

    import NaverMore from './reviewMore/NaverMore'
    import NaverWebview from './reviewMore/mainReviewWebview/NaverWebview'
    import axios from 'axios';
    var cache = require("nativescript-cache");
    export default {
        name:"NaverList",
        components: {
        }, data() {
            return {
                naverList:[],
                NaverMorePage:NaverMore
            }
         },methods :{
            getNaverList(keyword){
                  axios({
                    method: 'get',
                        url: 'http://api.eatjeong.com/v1/main/reviews',
                    params: {
                        query:keyword,
                        portal:"NAVER",
                        size:'5'
                    },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        this.$data.naverList = response.data.dataList;


                    }, (error) => {
                    console.log(error);
                    });
            },goWebview(index){
                this.$navigateTo(NaverWebview, {
                    props: {
                        itemList: this.$data.naverList[index]
                    }
                })
            }
        },mounted(){

            if(cache.get("location_name") == null){
                this.getNaverList("서울 맛집");
            }else{
               this.getNaverList(cache.get("location_name"));
            }
           // this.getNaverList();
        }
    };

</script>

<style lang="scss">



</style>
