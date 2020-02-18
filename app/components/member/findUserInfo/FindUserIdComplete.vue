<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
            <StackLayout>
                <StackLayout class="findIdCompleteBar"  >
                    <StackLayout class="findCompleteTitleWrap"  >
                        <label class="findCompleteTitle" text="아이디 찾기" />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findCompleteMainWrap" >
                    <StackLayout class="findCompleteMainTitleWrap" >
                        <label class="findCompleteMainTitle" text="아이디를 찾았습니다." />
                    </StackLayout>
                    <StackLayout v-for="list in idList">
                        <StackLayout class="findCompleteEmailWrap" >
                            <label class="findCompleteEmail" :text="list.toString().split('@')[0].substr(0,list.toString().split('@')[0].length-2) + '**@' + list.toString().split('@')[1]"  />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="findCompleteButtomWrap" orientation="horizontal">
                        <StackLayout class="findCompletePasswordWrap" @tap="$navigateTo(findUserPasswordPage)">
                            <label class="findCompletePassword" text="비밀번호찾기" />
                        </StackLayout>
                        <StackLayout class="findCompleteLoginWrap" @tap="$navigateTo(loginPage)" >
                            <label class="findCompleteLogin" text="로그인"   />
                    </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
       </Page>
</template>

<script>
       const platformModule = require("tns-core-modules/platform");

       //import platformcss from '../../platformcss';

       import Login from '../Login';
       import FindUserPassword from './FindUserPassword'
       import '~/Resources/css/member/findUserInfo/FindUserIdComplete/findUserIdComplete_320.scss';
       import '~/Resources/css/member/findUserInfo/FindUserIdComplete/findUserIdComplete_360.scss';
       import '~/Resources/css/member/findUserInfo/FindUserIdComplete/findUserIdComplete_420.scss';
       import '~/Resources/css/member/findUserInfo/FindUserIdComplete/findUserIdComplete_480.scss';
       export default {
              name:'FindUserIdComplete',
              props:['idList'],
              components : {
              },
              data: () => {
                     return {
                         loginPage:Login,
                         findUserPasswordPage:FindUserPassword
                     }
              },
              mounted() {
                    console.log(this.idList)
              }
       };
</script>

<style scoped lang="scss">

</style>
