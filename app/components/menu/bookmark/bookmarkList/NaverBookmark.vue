<template lang="html">
    <StackLayout v-if="naverBookmarkList!=null">
        <ListView for="naverBookmark in naverBookmarkList" separatorColor="transparent"
                  style="height:100%" @itemTap="goWebview" >
            <v-template>
                <StackLayout class="naverMarkMain" >
                    <StackLayout class="naverMarkMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                        <StackLayout class="naverMarkTitleWrap" >
                            <label :text="naverBookmark.title" class="naverMarkTitle"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-if="naverBookmark.thumbnail_url != null" >
                            <StackLayout class="naverMarkImageWrap">
                                <Image :src="naverBookmark.thumbnail_url" stretch="aspectFill" class="naverMarkImage"/>
                            </StackLayout>
                            <StackLayout class="naverMarkRightWrap" >
                                <StackLayout orientation="horizontal" class="naverMarkContentsWrap">
                                    <Label :text="naverBookmark.description" class="naverMarkContents" textWrap="true"/>
                                </StackLayout>
                                <StackLayout orientation="horizontal" class="naverMarkDateWriterWrap" >
                                    <StackLayout class="naverMarkDateWrap">
                                        <Label :text="naverBookmark.write_date" class="naverMarkDate"  />
                                    </StackLayout>
                                    <StackLayout class="naverMarkWriterWrap">
                                        <label :text="naverBookmark.author" class="naverMarkWriter" />
                                    </StackLayout>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                        <StackLayout orientation="horizontal" class="naverMarkSubWrap" v-else >
                            <StackLayout class="naverMarkNoImageWrap" >
                                <StackLayout orientation="horizontal" class="naverMarkNoImgContentsWrap">
                                    <Label :text="naverBookmark.description" class="naverMarkNoImgContents" textWrap="true" />
                                </StackLayout>
                                <StackLayout orientation="horizontal" class="naverMarkNoImgDateWriterWrap"  >
                                    <StackLayout class="naverMarkDateWrap">
                                        <Label :text="naverBookmark.write_date" class="naverMarkNoImgDate"  />
                                    </StackLayout>
                                    <StackLayout class="naverMarkNoImgWriterWrap" width="230">
                                        <label :text="naverBookmark.author" width="230" class="naverMarkNoImgWriter" />
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
    </StackLayout>
   <StackLayout v-else>
       <label text="데이터없음 "/>
   </StackLayout>
</template>

<script>
    import axios from 'axios';

    var cache = require("nativescript-cache");

    import NaverWebview from '../../search/place/placeDetail/reviewMore/reviewMoreWebview/NaverWebview'

    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_320.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_360.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_420.scss';
    import '~/Resources/css/menu/bookmark/bookmarkList/NaverBookmark/naverBookmark_480.scss';
    const appSettings = require("tns-core-modules/application-settings");
    export default {
        name:"NaverBookmark",
        data(){
            return {
                naverBookmarkList:[]
            }
        },
        components: {
        },mounted() {
            this.getNaverReview();
        },methods:{
            goWebview(args){
                const view = args.view;
                const tappedItem = view.bindingContext;

                console.log(tappedItem.url)
                cache.set('place_name',tappedItem.place_name);
                this.$navigateTo(NaverWebview, {
                    props: {
                        itemList: tappedItem}
                })
            }, getNaverReview(){
                 axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/bookmarks',
                    params: {
                     gubun: 'naver',
                     user_id : appSettings.getString("user_id"),
                     sns_division:appSettings.getString("sns_division")
                    },
                   }).then((response) => {
                    console.log(response.data);
                    console.log("naverdata")
                    console.log(response.data.dataList);
                    this.$data.naverBookmarkList = response.data.dataList;
                   }, (error) => {
                    console.log(error);
                   });
            }
        }
    };
</script>

<style lang="scss">


</style>
