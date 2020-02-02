<template lang="html">
    <ListView for="naverBookmark in naverBookmarkList" separatorColor="transparent"
              style="height:100%" @itemTap="goNaver" >
        <v-template>
            <StackLayout class="naverMarkMain" >
                <StackLayout class="naverMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                    <StackLayout class="naverMarkTitleWrap" >
                        <label :text="naverBookmark.title" class="naverMarkTitle"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-if="naverBookmark.thumbnail != ''" >
                        <StackLayout class="naverMarkImageWrap">
                            <Image :src="naverBookmark.thumbnail" stretch="aspectFill" class="naverMarkImage"/>
                        </StackLayout>
                        <StackLayout class="naverMarkRightWrap" >
                            <StackLayout orientation="horizontal" class="naverMarkContentsWrap">
                                <Label :text="naverBookmark.contents" class="naverMarkContents" textWrap="true"/>
                            </StackLayout>
                            <StackLayout orientation="horizontal" class="naverMarkDateWriterWrap" >
                                <StackLayout class="naverMarkDateWrap">
                                    <Label :text="naverBookmark.date" class="naverMarkDate"  />
                                </StackLayout>
                                <StackLayout class="naverMarkWriterWrap">
                                    <label :text="naverBookmark.writer" class="naverMarkWriter" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-if="naverBookmark.thumbnail == ''" >
                        <StackLayout class="naverMarkNoImageWrap" >
                            <StackLayout orientation="horizontal" class="naverMarkNoImgContentsWrap">
                                <Label :text="naverBookmark.contents" class="naverMarkNoImgContents" textWrap="true" />
                            </StackLayout>
                            <StackLayout orientation="horizontal" class="naverMarkNoImgDateWriterWrap"  >
                                <StackLayout class="naverMarkDateWrap">
                                    <Label :text="naverBookmark.date" class="naverMarkNoImgDate"  />
                                </StackLayout>
                                <StackLayout class="naverMarkNoImgWriterWrap">
                                    <label :text="naverBookmark.writer" class="naverMarkNoImgWriter" />
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

    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_320.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_360.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_420.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_480.scss';

    export default {
        name:"NaverBookmark",
        data(){
            return {
                naverBookmarkList:[
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
               user_id : 'jeetkn@naver.com'
              },
             }).then((response) => {
              console.log(response.data);
              this.$data.youtubeBookmarkList = response.data.dataList;
             }, (error) => {
              console.log(error);
             });*/
        },methods:{
            goNaver(args){
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
