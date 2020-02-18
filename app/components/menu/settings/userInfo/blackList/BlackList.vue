<template lang="html">
    <Page actionBarHidden="true">
        <StackLayout>
            <StackLayout orientation="horizontal" width="360" height="55" borderBottomWidth="1.05"
                         borderBottomColor="#dddddd">
                <StackLayout width="28" height="28" marginLeft="6" marginTop="30.5" @tap="$navigateBack">
                    <image width="16" height="16" src="~/Resources/img/home/angle-left.png"/>
                </StackLayout>
                <StackLayout marginLeft="2" marginTop="20" @tap="$navigateBack" height="13" width="33">
                    <label text="내정보" color="#333333" fontSize="12" style="font-family: nanumsquareroundb"/>
                </StackLayout>
                <StackLayout marginTop="24.5" marginLeft="80" width="64" height="18.55">
                    <label text="블랙리스트" style="font-family: nanumsquareroundb" fontSize="14" color="#333333"/>
                </StackLayout>
            </StackLayout>
            <StackLayout>
                <StackLayout orientation="horizontal">
                    <StackLayout :class="selectTab==0?'active':''" class="blackListTabWrap" @tap="selectBtn(selectButton,selectPlatform,0)">
                        <label text="게시자" marginTop="12" height="13" style="font-family: nanumsquareroundb"
                               fontSize="12" color="#333333"/>
                    </StackLayout>
                    <StackLayout :class="selectTab==1?'active':''" class="blackListTabWrap" @tap="selectBtn(selectButton,selectPlatform,1)">
                        <label text="게시물" marginTop="12" height="13" marginBottom="13"
                               style="font-family: nanumsquareroundb" fontSize="12" color="#333333"/>
                    </StackLayout>
                    <StackLayout marginLeft="48" orientation="horizontal">
                        <StackLayout class="blackListButtonWrap" :class="selectButton==0?'active':''"
                                     @tap="selectBtn(0,'YOUTUBE')">
                            <label text="유튜브" style="font-family: nanumsquareroundb" fontSize="10" color="#ffffff"
                                   marginTop="4"/>
                        </StackLayout>
                        <StackLayout class="blackListButtonWrap" :class="selectButton==1?'active':''"
                                     @tap="selectBtn(1,'NAVER')">
                            <label text="네이버" style="font-family: nanumsquareroundb" fontSize="10" color="#ffffff"
                                   marginTop="4"/>
                        </StackLayout>
                        <StackLayout class="blackListButtonWrap" :class="selectButton==2?'active':''"
                                     @tap="selectBtn(2,'TISTORY')">
                            <label text="티스토리" style="font-family: nanumsquareroundb" fontSize="10" color="#ffffff"
                                   marginTop="4"/>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
                <StackLayout v-if="selectTab==0" backgroundColor="#eff2f7" width="360" height="100%" paddingTop="11">
                    <StackLayout v-if="selectPlatform=='YOUTUBE'">
                        <StackLayout width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299" v-for="list in blackList.author_blacklist_youtube" paddingTop="15" paddingBottom="15"  borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261" >
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'author','youtube')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else-if="selectPlatform=='NAVER'">
                        <StackLayout width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299" v-for="list in blackList.author_blacklist_naver" paddingTop="15" paddingBottom="15"  borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261" >
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'author','naver')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299" v-for="list in blackList.author_blacklist_tistory"  paddingTop="15" paddingBottom="15"  borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261" >
                                    <label :text="list.author" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'author','tistory')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout  backgroundColor="#eff2f7" width="360" height="100%" paddingTop="11" >
                    <StackLayout v-if="selectPlatform=='YOUTUBE'">
                        <StackLayout  width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299"v-for="list in blackList.post_blacklist_youtube"  paddingTop="15" paddingBottom="15"  borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'post','youtube')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else-if="selectPlatform=='NAVER'" >
                        <StackLayout width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299"  paddingTop="15" paddingBottom="15" v-for="list in blackList.post_blacklist_naver" borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'post','naver')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout width="360"  height="100%">
                            <StackLayout orientation="horizontal" width="299" v-for="list in blackList.post_blacklist_tistory"  paddingTop="15" paddingBottom="15"  borderBottomColor="#dddddd" borderBottomWidth="1" >
                                <StackLayout width="261" @tap="$navigateBack">
                                    <label :text="list.title" />
                                </StackLayout>
                                <StackLayout width="40" height="18" borderRadius="10" borderWidth="1" borderColor="#555555" style="text-align: center" @tap="blackListDelete(list.review_id,list.author,'post','daum')">
                                    <label text="취소" marginTop="3" style="font-family: nanumsquareroundr" fontSize="10" color="#555555"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
        </StackLayout>
    </Page>
</template>
<script>

    import Youtube from './platForm/youtube/Youtube'
    const appSettings = require("tns-core-modules/application-settings");
    import axios from 'axios';
    export default {
        name: "BlackList",
        components: {
            Youtube
        }, data() {
            return {
                blackList:[],
                selectButton: 0,
                selectPlatform:"YOUTUBE",
                selectTab:0
            }
        }, methods: {
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
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/blacklist',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division")
                    },
                }).then((response) => {
                    console.log("blackList"+response.data.dataList.post_blacklist_naver)
                    this.$data.blackList = response.data.dataList;
                }, (error) => {
                    console.log(error);
                });
            }
        },mounted(){
            this.getBlackList();
        }
    };
</script>

<style lang="scss">
    .blackListButtonWrap {
        width: 50;
        margin-left: 11;
        height: 20;
        border-radius: 4;
        background-color: #dddddd;
        text-align: center;
    }

    .blackListButtonWrap.active {
        width: 50;
        margin-left: 11;
        height: 20;
        border-radius: 4;
        background-color: #333333;
        text-align: center;
    }
    .blackListTabWrap{
        width: 33;
        margin-left: 22;
        height: 40.5;
    }
    .blackListTabWrap.active{
        width: 33;
        margin-left: 22;
        height: 40.5;
        border-bottom-color: #ffe074;
        border-bottom-width: 4;
    }
</style>
