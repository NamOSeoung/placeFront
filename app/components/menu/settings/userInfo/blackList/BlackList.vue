<template lang="html">
    <Page actionBarHidden="true">
        <AbsoluteLayout>
            <StackLayout @swipe="onSwipe" height="100%" width="100%">
                <StackLayout orientation="horizontal" class="blackListHeaderWrap">
                    <StackLayout class="blackListBackIconWrap"  @tap="$navigateBack">
                        <image class="blackListBackIcon"  src="~/Resources/img/home/angle-left.png"/>
                    </StackLayout>
                    <StackLayout class="blackListBackTitleWrap"  @tap="$navigateBack" >
                        <label text="내정보" class="blackListBackTitle" />
                    </StackLayout>
                    <StackLayout class="blackListTitleWrap" >
                        <label text="블랙리스트" class="blackListTitle"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout>
                    <StackLayout orientation="horizontal">
                        <StackLayout :class="selectTab==0?'active':''" class="blackListTabWrap" @tap="selectBtn(selectButton,selectPlatform,0)">
                            <label text="게시자"  class="blackListTabAutor"/>
                        </StackLayout>
                        <StackLayout :class="selectTab==1?'active':''" class="blackListTabWrap" @tap="selectBtn(selectButton,selectPlatform,1)">
                            <label text="게시물" class="blackListTabContents" />
                        </StackLayout>
                        <StackLayout class="blackListPortalTapWrap"  orientation="horizontal">
                            <StackLayout class="blackListButtonWrap" :class="selectButton==0?'active':''"
                                         @tap="selectBtn(0,'YOUTUBE')">
                                <label text="유튜브" class="blackListYoutubeTitleWrap"/>
                            </StackLayout>
                            <StackLayout class="blackListButtonWrap" :class="selectButton==1?'active':''"
                                         @tap="selectBtn(1,'NAVER')">
                                <label text="네이버" class="blackListNaverTitleWrap" />
                            </StackLayout>
                            <StackLayout class="blackListButtonWrap" :class="selectButton==2?'active':''"
                                         @tap="selectBtn(2,'TISTORY')">
                                <label text="티스토리" class="blackListTistoryTitleWrap" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout v-if="selectTab==0" class="blackListAutorWrap" >
                    <StackLayout v-if="selectPlatform=='YOUTUBE'">
                        <StackLayout width="100%"  height="100%" >
                            <StackLayout orientation="horizontal"class="blackListAutorYoutubeWrap" v-for="list in blackList.author_blacklist_youtube"  >
                                <StackLayout  class="blackListAutorYoutubeWrapWrap" >
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout class="blackListAutorYoutubeCancelWrap" @tap="blackListDelete(list.review_id,list.author,'author','youtube')">
                                    <label text="취소" class="blackListAutorYoutubeCancel" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else-if="selectPlatform=='NAVER'">
                        <StackLayout width="100%"  height="100%">
                            <StackLayout orientation="horizontal" class="blackListAutorYoutubeWrap"v-for="list in blackList.author_blacklist_naver" >
                                <StackLayout class="blackListAutorYoutubeWrapWrap">
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout class="blackListAutorYoutubeCancelWrap"  @tap="blackListDelete(list.review_id,list.author,'author','naver')">
                                    <label text="취소" class="blackListAutorYoutubeCancel" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout width="100%"  height="100%">
                            <StackLayout orientation="horizontal" class="blackListAutorYoutubeWrap"  v-for="list in blackList.author_blacklist_tistory"  >
                                <StackLayout class="blackListAutorYoutubeWrapWrap" >
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout class="blackListAutorYoutubeCancelWrap"@tap="blackListDelete(list.review_id,list.author,'author','tistory')">
                                    <label text="취소" class="blackListAutorYoutubeCancel" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout  backgroundColor="#eff2f7" width="100%" height="100%" paddingTop="11" >
                    <StackLayout v-if="selectPlatform=='YOUTUBE'">
                        <StackLayout  width="100%"  height="100%">
                            <StackLayout orientation="horizontal" class="blackListYoutubeContentsWrap" v-for="list in blackList.post_blacklist_youtube"   @tap="goWebview(list,'youtube')">
                                <StackLayout  class="blackListYoutubeContentsTitleWrap">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout class="blackListYoutubeContentsDelWrap"  @tap="blackListDelete(list.review_id,list.author,'post','youtube')">
                                    <label text="취소" class="blackListYoutubeContentsDel"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else-if="selectPlatform=='NAVER'" >
                        <StackLayout width="100%"  height="100%">
                            <StackLayout orientation="horizontal" class="blackListYoutubeContentsWrap" v-for="list in blackList.post_blacklist_naver" @tap="goWebview(list,'naver')">
                                <StackLayout  class="blackListYoutubeContentsTitleWrap">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout class="blackListYoutubeContentsDelWrap"  @tap="blackListDelete(list.review_id,list.author,'post','naver')">
                                    <label text="취소" class="blackListYoutubeContentsDel" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout width="100%"  height="100%">
                            <StackLayout orientation="horizontal" class="blackListYoutubeContentsWrap" v-for="list in blackList.post_blacklist_tistory"   @tap="goWebview(list,'tistory')">
                                <StackLayout class="blackListYoutubeContentsTitleWrap" @tap="$navigateBack">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout class="blackListYoutubeContentsDelWrap"  @tap="blackListDelete(list.review_id,list.author,'post','daum')">
                                    <label text="취소" class="blackListYoutubeContentsDel"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
            <StackLayout width="100%" height="100%" backgroundColor="#dddddd" top="0" opacity="0.4" v-if="busy==true">

            </StackLayout>
            <StackLayout top="0" >
                <ActivityIndicator :busy="busy" class="blackListBusy" />
            </StackLayout>
        </AbsoluteLayout>
    </Page>
</template>
<script>

    import Youtube from './platForm/youtube/Youtube'
    const appSettings = require("tns-core-modules/application-settings");
    import axios from 'axios';
    import NaverWebview from "../../../search/place/placeDetail/reviewMore/reviewMoreWebview/NaverWebview";
    import YoutubeWebview from "../../../search/place/placeDetail/reviewMore/reviewMoreWebview/YoutubeWebview";
    import TistoryWebview from "../../../search/place/placeDetail/reviewMore/reviewMoreWebview/TistoryWebview";

    import '~/Resources/css/menu/settings/userInfo/blackList/BlackList/blackList_320';
    import '~/Resources/css/menu/settings/userInfo/blackList/BlackList/blackList_360';
    import '~/Resources/css/menu/settings/userInfo/blackList/BlackList/blackList_420';
    import '~/Resources/css/menu/settings/userInfo/blackList/BlackList/blackList_480';
    export default {
        name: "BlackList",
        components: {
            Youtube
        }, data() {
            return {
                blackList:[],
                selectButton: 0,
                selectPlatform:"YOUTUBE",
                selectTab:0,
                busy:false,
            }
        }, methods: {
            onSwipe(args){

                console.log('wwdasda')
                console.log("Swipe!");
                console.log("Object that triggered the event: " + args.object);
                console.log("View that triggered the event: " + args.view);
                console.log("Event name: " + args.eventName);
                console.log("Swipe Direction: " + args.direction);

                this.getBlackList();
            },
            blackListDelete(review_id,author,view_division,portal_division){
                console.log(review_id)
                console.log(author)
                console.log(view_division)
                console.log(portal_division)
                if(view_division == 'author'){
                    axios({
                        method: 'delete',
                        url: 'http://api.eatjeong.com/v1/reviews/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:portal_division,
                            author:author,
                            blacklist_division:view_division
                        },
                    }).then((response) => {
                        console.log(response.data)
                        if(response.data.code==200){
                            this.getBlackList();
                        }
                    }, (error) => {
                        console.log(error);
                    });
                }else{
                    axios({
                        method: 'delete',
                        url: 'http://api.eatjeong.com/v1/reviews/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:portal_division,
                            author:author,
                            blacklist_division:view_division,
                            review_id:review_id
                        },
                    }).then((response) => {
                        console.log(response.data)
                        if(response.data.code==200){
                            this.getBlackList();
                        }
                    }, (error) => {
                        console.log(error);
                    });
                }

            },
            onItemTap: function (args) {
                console.log('Item with index: ' + args.index + ' tapped');
            },
            selectBtn(btn,platform,tab) {
                this.$data.selectButton = btn;
                this.$data.selectPlatform = platform;
                if(tab!=undefined){
                    this.$data.selectTab = tab;
                }
            },getBlackList(){

                this.$data.busy = true;
                setTimeout(() => {
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division")
                        },
                    }).then((response) => {
                        this.$data.busy = false;
                        console.log("blackList"+response.data.dataList.post_blacklist_naver)
                        this.$data.blackList = response.data.dataList;
                    }, (error) => {
                        this.$data.busy = false;
                        console.log(error);
                    });
                }, 1000);


            },goWebview(args,gubun){
                //const view = args.view;
               // const tappedItem = view.bindingContext;

                //console.log(tappedItem.url)
                //cache.set('place_name',tappedItem.place_name);

                if(gubun == 'youtube'){
                    this.$navigateTo(YoutubeWebview, {
                        props: {
                            itemList: args,
                            gubun:'youtube'}
                    })
                }else if(gubun == 'naver'){
                    this.$navigateTo(NaverWebview, {
                        props: {
                            itemList: args,
                            gubun:'naver'}
                    })
                }else if(gubun == 'tistory'){
                    this.$navigateTo(TistoryWebview, {
                        props: {
                            itemList: args,
                            gubun:'daum'}
                    })
                }

            }
        },mounted(){
            this.getBlackList();
        }
    };
</script>

<style lang="scss">

</style>
