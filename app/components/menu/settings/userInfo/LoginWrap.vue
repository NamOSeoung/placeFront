<template lang="html">
    <ScrollView height="100%">
    <StackLayout backgroundColor="#eff2f7" height="100%">
        <StackLayout class="loginTitleWrap" >
            <label class="loginTitleContents" text="오늘은 어떤 식사를 하나요?" />
        </StackLayout>
        <StackLayout class="infoWrap">
            <StackLayout class="infoPicture">
            </StackLayout>
            <StackLayout class="infoCameraWrap" >
                <FIcon name="fa-camera" class="infoCamera" />
            </StackLayout>
            <StackLayout class="infoNickNameWrap" >
                <label text="둥둥둥둥둥둥둥둥둥" class="infoNickName"  />
            </StackLayout>
            <StackLayout class="infoMyinfoWrap"  @tap="$navigateTo(userInfoManagementPage)">
                <label text="내 정보 관리" class="infoMyinfo" />
            </StackLayout>
            <StackLayout orientation="horizontal" class="myListWrap" >
                <StackLayout class="myReviewWrap" @tap="$navigateTo(MyReviewListPage)" >
                    <StackLayout class="myReviewIconWrap">
                        <image src="~/Resources/img/settings/myreview.png" class="myReviewIcon" />
                    </StackLayout>
                    <StackLayout class="myReviewTextWrap" >
                        <label text="내 리뷰" class="myReviewText" />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="blackListWrap" @tap="$navigateTo(BlackListPage)">
                    <StackLayout class="blackListIconWrap" >
                        <image src="~/Resources/img/settings/blackList.png" class="blackListIcon" />
                    </StackLayout>
                    <StackLayout class="blackListTextWrap">
                        <label text="블랙리스트" class="blackListText"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="oneToOneWrap" @tap="$navigateTo(OneToOneQuestionPage)">
                    <StackLayout class="oneToOneIconWrap" >
                        <image src="~/Resources/img/settings/onetoone.png" class="oneToOneIcon" />
                    </StackLayout>
                    <StackLayout marginTop="5.95" class="oneToOneTextWrap" >
                        <label text="1:1문의" class="oneToOneText"  />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>

        <StackLayout class="etcListWrap">
            <ListView for="etc in EtcList" style="height:100%" @itemTap="onItemTap" separatorColor="transparent" >
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
</template>
<script>

    import Notice from '../etcList/Notice';
    import FAQ from '../etcList/FAQ';
    import OneToOneQuestion from '../etcList/OneToOneQuestion';
    import TermsAndPolicy from '../etcList/TermsAndPolicy';
    import UserInfoManagement from './userInfoManagement/UserInfoManagement'
    import MyReviewList from './myReview/MyReviewList'
    import BlackList from './blackList/BlackList'

    const platformModule = require("tns-core-modules/platform");
    import platformcss from '~/platformcss';

    import '~/Resources/css/menu/settings/userInfo/loginWrap_360.scss';
    import '~/Resources/css/menu/settings/userInfo/loginWrap_320.scss';
    import '~/Resources/css/menu/settings/userInfo/loginWrap_420.scss';


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
                EtcList: [{
                        name: "공지사항"
                    },
                    {
                        name: "자주하는 질문"
                    },
                    {
                        name: "약관 및 정책"
                    },
                    {
                        name: "앱 정보"
                    },
                    {
                        name: "로그아웃"
                    }
                ]
            }
        },mounted() {
            console.log("디피아이2" + platformModule.screen.mainScreen.widthDIPs)
            console.log("픽셀2" + platformModule.screen.mainScreen.widthPixels)

            platformcss.sizeGroupings([480,400,360,320]);
        },methods :{
            onItemTap(item){
                console.log(item.index)
                var index = item.index;
                if(index == 0){
                    this.$navigateTo(Notice);
                }else if(index == 1){
                    this.$navigateTo(FAQ);
                }else if(index == 2){
                    this.$navigateTo(TermsAndPolicy);
                }else if(index == 3){

                }else if(index == 4){

                }
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
