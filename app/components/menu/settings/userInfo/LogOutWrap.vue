<template lang="html">
    <StackLayout backgroundColor="#eff2f7" height="100%" width="100%">
        <StackLayout class="loginTitleWrap" width="100%">
            <label class="loginTitleContents" text="오늘은 어떤 식사를 하나요?" />
        </StackLayout>
        <StackLayout class="loginInfoWrap">
            <StackLayout class="infoTextWrap">
                <label class="infoText" text="로그인을 해 주세요." />
            </StackLayout>
            <StackLayout class="loginTextWrap" @tap="goLogin">
                <label class="loginText" text="로그인하기" />
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
</template>
<script>
    import Notice from '../etcList/Notice';
    import FAQ from '../etcList/FAQ';
    import TermsAndPolicy from '../etcList/TermsAndPolicy';
    import Login from '../../../../components/member/Login'

    import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_320.scss';
    import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_360.scss';
    import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_420.scss';
    import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_480.scss';

    export default {
        name: "LogOutWrap",
        components: {}, data() {
            return {
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
                    // }
                ]
            }
        }, mounted() {


        },methods :{
            onItemTap(item){
                console.log(item.index)
                var index = item.index;
                if(index == 0){
                    this.$navigateTo(Notice);
                }else if(index == 1){
                    this.$navigateTo(TermsAndPolicy);
                   // this.$navigateTo(FAQ);
                }else if(index == 2){

                }else if(index == 3){

                }
            },goLogin(){
                this.$navigateTo(Login)
            }
        }
    }
</script>

<style lang="scss">

</style>
