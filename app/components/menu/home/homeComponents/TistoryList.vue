<template lang="html">
    <StackLayout class="tistoryWrap">
        <StackLayout orientation="horizontal" class="tistoryHeaderWrap" width="100%">
            <image src="~/Resources/img/home/tistory.png" class="tistoryIcon"/>
            <label text="티스토리" class="tistoryTitle"/>
            <label text="더보기" class="tistoryMore" @tap="$navigateTo(TistoryMorePage)"  v-if="tistoryList.length > 4" />
            <image src="~/Resources/img/home/angle-right.png" class="tistoryRightIcon"   v-if="tistoryList.length > 4" />
        </StackLayout>
        <StackLayout v-if="tistoryList.length>0" marginTop="0">
            <ScrollView orientation="horizontal" height="100%" >
                <StackLayout orientation="horizontal"  class="tistorySubWrap">
                    <StackLayout orientation="horizontal"  @tap="goWebview(index)" v-for="(list,index) in tistoryList" class="tistoryMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                        <StackLayout class="tistoryImageWrap">
                            <Image class="tistoryImage" stretch="aspectFill" :src="list.thumbnail_url"/>
                        </StackLayout>
                        <StackLayout class="tistoryRightWrap">
                            <StackLayout class="tistoryRightTop">
                                <label class="tistorySubject" :text="list.title"  textWrap="true" row="2" textAlignment="left"/>
                            </StackLayout>
                            <StackLayout class="tistoryRightBottom" orientation="horizontal">
                                <label class="tistoryWriteDate" :text="list.write_date"/>
                                <label class="tistoryWriter" :text="list.author"/>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>

        <StackLayout v-else marginTop="40" width="100%" style="text-align: center">
            <label text="검색 결과가 없습니다." />
        </StackLayout>
    </StackLayout>
</template>

<script>
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_480.scss';

    import axios from 'axios'
    import TistoryMore from './reviewMore/TistoryMore'
    import TistoryWebview from './reviewMore/mainReviewWebview/TistoryWebview'
    var cache = require("nativescript-cache");


    export default {
        name:"Tistory",
        components: {
        }, data() {
            return {
                tistoryList:[],
                TistoryMorePage:TistoryMore,
                user_name:global.user_name
            }
         },methods :{
            getTistoryList(keyword){
                  axios({
                    method: 'get',
                        url: 'http://api.eatjeong.com/v1/main/reviews?',
                    params: {
                        query:keyword,
                        portal:"DAUM",
                        size:'5'
                    },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        this.$data.tistoryList = response.data.dataList;


                    }, (error) => {
                    console.log(error);
                    });
            },goWebview(index){
                this.$navigateTo(TistoryWebview, {
                    props: {
                        itemList: this.$data.tistoryList[index]
                    }
                })
            }
        },mounted(){
            this.getTistoryList("서울 맛집");
            // if(cache.get("location_name") == null){
            //     this.getTistoryList("서울 맛집");
            // }else{
            //     this.getTistoryList(cache.get("location_name"));
            // }
            // this.getTistoryList();

        }
    };
</script>

<style lang="scss">

</style>

