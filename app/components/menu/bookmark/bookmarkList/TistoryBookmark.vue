<template lang="html">
 <ListView for="tistoryBookmark in tistoryBookmarkList" separatorColor="transparent"
           style="height:100%" @itemTap="gotistory" >
  <v-template>
   <StackLayout class="tistoryMarkMain" >
    <StackLayout class="tistoryMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
     <StackLayout class="tistoryMarkTitleWrap" >
      <label :text="tistoryBookmark.title" class="tistoryMarkTitle"/>
     </StackLayout>
     <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-if="tistoryBookmark.thumbnail != ''" >
      <StackLayout class="tistoryMarkImageWrap">
       <Image :src="tistoryBookmark.thumbnail" stretch="aspectFill" class="tistoryMarkImage"/>
      </StackLayout>
      <StackLayout class="tistoryMarkRightWrap" >
       <StackLayout orientation="horizontal" class="tistoryMarkContentsWrap">
        <Label :text="tistoryBookmark.contents" class="tistoryMarkContents" textWrap="true"/>
       </StackLayout>
       <StackLayout orientation="horizontal" class="tistoryMarkDateWriterWrap" >
        <StackLayout class="tistoryMarkDateWrap">
         <Label :text="tistoryBookmark.date" class="tistoryMarkDate"  />
        </StackLayout>
        <StackLayout class="tistoryMarkWriterWrap">
         <label :text="tistoryBookmark.writer" class="tistoryMarkWriter" />
        </StackLayout>
       </StackLayout>
      </StackLayout>
     </StackLayout>
     <StackLayout orientation="horizontal" class="tistoryMarkSubWrap" v-if="tistoryBookmark.thumbnail == ''" >
      <StackLayout class="tistoryMarkNoImageWrap" >
       <StackLayout orientation="horizontal" class="tistoryMarkNoImgContentsWrap">
        <Label :text="tistoryBookmark.contents" class="tistoryMarkNoImgContents" textWrap="true" />
       </StackLayout>
       <StackLayout orientation="horizontal" class="tistoryMarkNoImgDateWriterWrap"  >
        <StackLayout class="tistoryMarkDateWrap">
         <Label :text="tistoryBookmark.date" class="tistoryMarkNoImgDate"  />
        </StackLayout>
        <StackLayout class="tistoryMarkNoImgWriterWrap">
         <label :text="tistoryBookmark.writer" class="tistoryMarkNoImgWriter" />
        </StackLayout>
       </StackLayout>
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
 import YBookmarkDetil from "./bookmarkDetail/NBookmarkDetil";

 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/TistoryBookmark/tistoryBookmark_480.scss';

 export default {
  name:"tistoryBookmark",
  data(){
   return {
    tistoryBookmarkList:[
     {
      'thumbnail' : 'https://i.ytimg.com/vi/9f-bB4_SJkI/maxresdefault.jpg',
      'title':'영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지',
      'contents' : '내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 ' +
              '내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 ',
      'date':'2020.01.03',
      'writer' : '홍길동'
     },
     {
      'thumbnail' : '',
      'title':'영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지 영상 제목 최대 세 줄까지',
      'contents' : '내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 ' +
              '내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 내용 두 줄까지 ',
      'date':'2020.01.05',
      'writer' : '아무개'
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
      user_id : 'jeetkn@tistory.com'
     },
    }).then((response) => {
     console.log(response.data);
     this.$data.youtubeBookmarkList = response.data.dataList;
    }, (error) => {
     console.log(error);
    });*/
  },methods:{
   gotistory(args){
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

