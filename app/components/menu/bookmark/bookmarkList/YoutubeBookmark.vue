<template lang="html">
   <ListView for="youtubeBookmark in youtubeBookmarkList" separatorColor="transparent"
             style="height:100%" @itemTap="goYoutube" >
    <v-template>
     <StackLayout class="youtubeMarkMain" >
      <StackLayout orientation="horizontal" class="youtubeMarkWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
       <StackLayout class="youtubeMarkImageWrap">
        <Image :src="youtubeBookmark.thumbnail" class="youtubeMarkImage"/>
       </StackLayout>
       <StackLayout class="youtubeRightWrap">
        <StackLayout orientation="horizontal" class="youtubeMarkTitleWrap">
         <Label :text="youtubeBookmark.title" class="youtubeMarkTitle" textWrap="true"/>
        </StackLayout>
        <StackLayout orientation="horizontal" class="youtubeMarkDateWrap">
         <Label :text="youtubeBookmark.date" class="youtubeMarkDate"  />
        </StackLayout>
       </StackLayout>
      </StackLayout>
       <StackLayout class="markUnderline">
       </StackLayout>
     </StackLayout>
    </v-template>
   </ListView>
</template>

<script>
 import axios from 'axios';
 import YBookmarkDetil from "./bookmarkDetail/YBookmarkDetil";

 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/YoutubeBookmark/youtubeBookmark_480.scss';

    export default {
        name:"YoutubeBookmark",
       data(){
        return {
         youtubeBookmarkList:[
          {
           'thumbnail' : 'https://i.ytimg.com/vi/9f-bB4_SJkI/maxresdefault.jpg',
           'title':'영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지',
           'date':'7개월 전'
          },
          {
           'thumbnail' : 'https://i.ytimg.com/vi/9f-bB4_SJkI/maxresdefault.jpg',
           'title':'영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지',
           'date':'7개월 전'
          }
         ]
        }
       },
        components: {
        },mounted() {
        /* axios({
          method: 'get',
          url: 'http://api.matitzung.shop/v1/bookmarks?',
          //  url: 'http://192.168.1.85:9090/v1/places?',
          params: {
           gubun: 'youtube',
           user_id : 'jeetkn@naver.com'
          },
         }).then((response) => {
          console.log(response.data);
          this.$data.youtubeBookmarkList = response.data.dataList;
         }, (error) => {
          console.log(error);
         });*/
     },methods:{
      goYoutube(args){
       console.log("여기 타니?");
       const view = args.view;
       const page = view.page;
       const tappedItem = view.bindingContext;
       this.$navigateTo(YBookmarkDetil, {
        props: {
         context: tappedItem}});
      }
     }
    };
</script>

<style lang="scss">

</style>
