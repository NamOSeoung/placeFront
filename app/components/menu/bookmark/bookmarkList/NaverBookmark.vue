<template lang="html">
    <StackLayout v-if="naverBookmarkList.length>0">
        <AbsoluteLayout>
            <ListView for="naverBookmark in naverBookmarkList" separatorColor="transparent"
                      style="height:100%" @itemTap="goWebview" @swipe="onSwipe" marginTop="20">
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
            <StackLayout width="100%" height="100%" backgroundColor="#dddddd" top="0" opacity="0.4" v-if="busy==true">

            </StackLayout>
            <StackLayout top="0" width="100%">
                <ActivityIndicator :busy="busy" marginTop="230" color="#ffe074" width="100" height="100" />
            </StackLayout>
        </AbsoluteLayout>

    </StackLayout>
    <StackLayout v-else  @swipe="onSwipe">
        <AbsoluteLayout>
            <StackLayout width="100%" style="text-align: center">
                <label text="저장 된 내용이 없습니다." fontSize="14" color="#333333" marginTop="300" fontFamily="nanumsquareroundr" />
            </StackLayout>
            <StackLayout width="100%" height="100%" backgroundColor="#dddddd" top="0" opacity="0.4" v-if="busy==true">

            </StackLayout>
            <StackLayout top="0" width="100%">
                <ActivityIndicator :busy="busy" marginTop="230"  color="#ffe074" width="100" height="100" />
            </StackLayout>
        </AbsoluteLayout>
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
                naverBookmarkList:[],
                busy:false,
            }
        },
        components: {
        },mounted() {
            this.getNaverReview();
        },methods:{
            onSwipe(args){

                console.log('wwdasda')
                console.log("Swipe!");
                console.log("Object that triggered the event: " + args.object);
                console.log("View that triggered the event: " + args.view);
                console.log("Event name: " + args.eventName);
                console.log("Swipe Direction: " + args.direction);

                this.getNaverReview();
            },
            goWebview(args){
                const view = args.view;
                const tappedItem = view.bindingContext;

                console.log(args)
                console.log(tappedItem.url)
                cache.set('place_name',tappedItem.place_name);
                cache.set('place_id',tappedItem.place_id);
                this.$navigateTo(NaverWebview, {
                    props: {
                        itemList: tappedItem}
                })
            }, getNaverReview(){

                this.$data.busy = true;
                setTimeout(() => {
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/bookmarks',
                        params: {
                            gubun: 'naver',
                            user_id : appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division")
                        },
                    }).then((response) => {
                        this.$data.busy = false;
                        console.log(response.data);
                        console.log("naverdata")
                        console.log(response.data.dataList);
                        this.$data.naverBookmarkList = response.data.dataList;
                    }, (error) => {
                        this.$data.busy = false;
                        console.log(error);
                    });
                }, 1000);



            }
        }
    };
</script>

<style lang="scss">


</style>
