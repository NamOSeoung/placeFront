<template lang="html">
    <StackLayout height="100%" width="100%">
    <ScrollView height="100%" width="100%">
    <StackLayout backgroundColor="#eff2f7" height="100%" width="100%">
        <StackLayout class="loginTitleWrap" width="100%">
            <label class="loginTitleContents" text="오늘은 어떤 식사를 하나요?" />
        </StackLayout>
        <StackLayout class="infoWrap">
            <StackLayout v-if="user_info.profile_image!=null">
                <StackLayout class="infoPicture" @tap="onSelectMultipleTap" >
                    <image  width="100%" height="100%" stretch="aspectFill" borderRadius="50" :src="profile_image" />
                </StackLayout>
            </StackLayout>
            <StackLayout v-else>
                <StackLayout class="infoPicture" @tap="onSelectMultipleTap">
<!--                        <image  width="60" height="60" marginTop="5" stretch="aspectFill" src="~/Resources/img/home/user_5_64.png" />&ndash;&gt;-->
                   </StackLayout>
            </StackLayout>
                    <!--            <StackLayout v-else>-->
<!--                <StackLayout class="infoPicture">-->
<!--                    <image  width="60" height="60" marginTop="5" stretch="aspectFill" src="~/Resources/img/home/user_5_64.png" />-->
<!--                </StackLayout>-->
<!--            </StackLayout>-->
            <StackLayout class="infoCameraWrap" >
                <image width="13" height="13" marginTop="3" src="~/Resources/img/settings/camera_f_64.png" />
            </StackLayout>
            <StackLayout class="infoNickNameWrap" >
                <label :text="user_info.nickname" class="infoNickName"  />
            </StackLayout>
            <StackLayout class="infoMyinfoWrap"  @tap="goUserInfoManagement">
                <label text="내 정보 관리" class="infoMyinfo" />
            </StackLayout>
            <StackLayout orientation="horizontal" class="myListWrap" >
                <StackLayout class="myReviewWrap" @tap="$navigateTo(MyReviewListPage)" >
                    <StackLayout class="myReviewIconWrap">
                        <image src="~/Resources/img/user/review_5_64.png" class="myReviewIcon" />
                    </StackLayout>
                    <StackLayout class="myReviewTextWrap" >
                        <label text="내 리뷰" class="myReviewText" />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="blackListWrap" @tap="$navigateTo(BlackListPage)">
                    <StackLayout class="blackListIconWrap" >
                        <image src="~/Resources/img/user/balcklist_5_64.png" class="blackListIcon" />
                    </StackLayout>
                    <StackLayout class="blackListTextWrap">
                        <label text="블랙리스트" class="blackListText"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="oneToOneWrap" @tap="$navigateTo(OneToOneQuestionPage)">
                    <StackLayout class="oneToOneIconWrap" >
                        <image src="~/Resources/img/user/edit_5_64.png" class="oneToOneIcon" />
                    </StackLayout>
                    <StackLayout marginTop="5.95" class="oneToOneTextWrap" >
                        <label text="1:1문의" class="oneToOneText"  />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>

        <StackLayout class="etcListWrap">
            <ListView for="etc in EtcList" style="height:100%" @itemTap="onItemTap" separatorColor="transparent"  height="100%">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <StackLayout  class="etcTextWrap">
                            <Label :text="etc.name" class="etcText"/>
                        </StackLayout>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </StackLayout>
    </ScrollView>
    </StackLayout>
</template>
<script>

    import Notice from '../etcList/Notice';
    import FAQ from '../etcList/FAQ';
    import OneToOneQuestion from '../etcList/OneToOneQuestion';
    import TermsAndPolicy from '../etcList/TermsAndPolicy';
    import UserInfoManagement from './userInfoManagement/UserInfoManagement'
    import MyReviewList from './myReview/MyReviewList'
    import Login from '../../../../components/member/Login'
    import BlackList from './blackList/BlackList'

    import axios from 'axios';

    import '~/Resources/css/menu/settings/userInfo/LoginWrap/loginWrap_360.scss';
    import '~/Resources/css/menu/settings/userInfo/LoginWrap/loginWrap_320.scss';
    import '~/Resources/css/menu/settings/userInfo/LoginWrap/loginWrap_420.scss';
    import '~/Resources/css/menu/settings/userInfo/LoginWrap/loginWrap_480.scss';

    const appSettings = require("tns-core-modules/application-settings");
    import * as imagepicker from "nativescript-imagepicker";

    export default {
        name:"LoginWrap",
        components: {
        }, data () {
            return {
                noticePage:Notice,
                FAQPage:FAQ,
                OneToOneQuestionPage:OneToOneQuestion,
                TermsAndPolicyPage:TermsAndPolicy,
                userInfoManagementPage : UserInfoManagement,
                MyReviewListPage:MyReviewList,
                BlackListPage:BlackList,
                user_info:[],
                profile_image:'',
                isSingleMode: true,
                imageAssets: [],
                imageSrc: null,
                EtcList: [{
                        name: "공지사항"
                    },
                    // {
                    //     name: "자주하는 질문"
                    // },
                    {
                        name: "약관 및 정책"
                    },
                    // {
                    //     name: "앱 정보"
                    // },
                    {
                        name: "로그아웃"
                    }
                ]
            }
        },mounted() {
            this.getUserInfo()
        },methods :{
            onItemTap(item){
                console.log(item.index)
                var index = item.index;
                if(index == 0){
                    this.$navigateTo(Notice);
                }else if(index == 1){
                    this.$navigateTo(TermsAndPolicy);
                }else if(index == 2){
                    appSettings.remove("user_id")
                    appSettings.remove("sns_division")
                    this.$navigateTo(Login,{ clearHistory: true });
                    //this.$navigateTo(TermsAndPolicy);
                }else if(index == 3){ //로그아웃일때

                }else if(index == 4){ //로그아웃일때

                }
            },getUserInfo(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/users/user',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division")
                    },
                }).then((response) => {
                    console.log("asdfasdfasdf"+response.data.dataList)
                    this.$data.profile_image = response.data.dataList.profile_image;
                    this.$data.user_info = response.data.dataList;
                }, (error) => {
                    console.log(error);
                });
            },onSelectMultipleTap: function() {
                this.isSingleMode = true;
                let context = imagepicker.create({
                    mode: "single"
                });
                this.startSelection(context);
            },
            startSelection(context) {
                context
                    .authorize()
                    .then(() => {
                        //this.imageAssets = [];
                        this.imageSrc = null;
                        return context.present();
                    })
                    .then((selection) => {
                        console.log("Selection done: " + JSON.stringify(selection));
                        this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;
                        console.log(selection)
                        this.$data.fileList =  selection;
                        // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
                        selection.forEach(element => {
                            element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
                            element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
                        });
                            this.imageAssets = selection;
                            this.$data.profile_image = selection[0]._android;
                            console.log(selection[0]._android)
                            this.fileUpload();
                    }).catch(function (e) {
                    console.log(e);
                });
            },fileUpload(){
                var file = this.$data.profile_image;
                var url = "http://api.eatjeong.com/v1/users/profile";

                // upload configuration
                var bghttp = require("nativescript-background-http");
                var session = bghttp.session("image-upload");

                var request = {
                    url: url,
                    method: "put",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                };

                var params = [
                    { name: "user_id", value: appSettings.getString("user_id") },
                    { name: "sns_division", value: appSettings.getString("sns_division") },
                    { name: "file", filename: this.$data.profile_image, mimeType: "image/*" }
                ];

                var task = session.multipartUpload(params, request);
                task.on("error", logEvent);
                task.on("complete", logEvent);
                function logEvent(e){
                    console.log(e.eventName);
                    console.log(e);
                }
            },goUserInfoManagement(){
                this.$navigateTo(UserInfoManagement, {
                    props: {
                        my_info: this.$data.user_info}});
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
