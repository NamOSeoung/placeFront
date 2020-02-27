<template lang="html">
 <StackLayout class="youtubeWrap">
     <StackLayout orientation="horizontal" class="youtubeHeaderWrap" width="100%">
         <image src="~/Resources/img/home/youtube.png" class="youtubeIcon"/>
         <label text="유튜브" class="youtubeTitle"/>
         <label text="더보기" class="youtubeMore" @tap="$navigateTo(YoutubeMorePage)" v-if="youtubeList.length > 4" />
         <image src="~/Resources/img/home/angle-right.png" class="youtubeRightIcon" v-if="youtubeList.length > 4" />
     </StackLayout>
     <StackLayout v-if="youtubeList.length>0" marginTop="0">
         <ScrollView orientation="horizontal">
             <StackLayout orientation="horizontal" class="youtubeSubWrap"  >
                 <StackLayout class="youtubeMainWrap" v-for="(list,index)  in youtubeList" @tap="goWebview(index)">
                     <StackLayout class="youtubeImageWrap">
                         <image class="youtubeImage" stretch="aspectFill"  :src="list.thumbnail_url"/>
                     </StackLayout>
                     <StackLayout class="youtubeSubjectWrap" >
                         <Label row="2" class="youtubeSubject" :text="list.title" textWrap="true" textAlignment="left" />
                     </StackLayout>
                 </StackLayout>
             </StackLayout>
         </ScrollView>
     </StackLayout>

     <StackLayout v-else marginTop="60" width="100%" style="text-align: center">
         <label text="검색 결과가 없습니다." />
     </StackLayout>
 </StackLayout>
</template>

<script>
    import axios from 'axios'

    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_480.scss';

    import YoutubeMore from './reviewMore/YoutubeMore'
    import YoutubeWebview from './reviewMore/mainReviewWebview/YoutubeWebview'
    var cache = require("nativescript-cache");
    export default {
        name:"YoutubeList",
        components: {

        },  data() {
            return {
                youtubeList:[],
                YoutubeMorePage:YoutubeMore
            }
         },methods :{
            getYoutubeList(keyword){
                  axios({
                    method: 'get',
                        url: 'http://api.eatjeong.com/v1/main/reviews?',
                    params: {
                        query:keyword,
                        portal:"YOUTUBE",
                        size:'5'
                    },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        this.$data.youtubeList = response.data.dataList;


                    }, (error) => {
                    console.log(error);
                    });
            },goWebview(index){
                this.$navigateTo(YoutubeWebview, {
                    props: {
                        itemList: this.$data.youtubeList[index]
                    }
                })
            }
        },mounted(){
            console.log('213123123')
            this.getYoutubeList("서울 맛집");
            // console.log(cache.get("location_name"))
            // if(cache.get("location_name") == null){
            //     this.getYoutubeList("서울 맛집");
            // }else{
            //     this.getYoutubeList(cache.get("location_name"));
            // }
           // this.getYoutubeList();
        }
    };
</script>

<style lang="scss">

</style>
