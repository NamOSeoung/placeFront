<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
           <StackLayout>
               <StackLayout>
                   <StackLayout class="findUserIdBarWrap" orientation="horizontal"  >
                       <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                           <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
                       </StackLayout>
                       <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                           <label class="findUserIdBack" text="로그인"  />
                       </StackLayout>
                       <StackLayout class="findUserIdBarTitleWrap" >
                           <label class="findUserIdBarTitle" text="이용약관"  />
                       </StackLayout>
                   </StackLayout>
                   <StackLayout>
                       <StackLayout orientation="horizontal">
                           <StackLayout class="memberJoinTermsIconCWrap" >
                               <image src="~/Resources/img/login/checkmark.png" />
                           </StackLayout>
                           <StackLayout class="memberJoinServiceTermsWrap" >
                               <label class="memberJoinServiceTerms" text="[필수] 서비스 이용약관" />
                           </StackLayout>
                           <StackLayout class="memberJoinTermsViewWrap" @tap="$navigateTo(serviceTermsPage)">
                               <label class="memberJoinTermsView" text="보기"  />
                           </StackLayout>
                       </StackLayout>
                       <StackLayout orientation="horizontal">
                           <StackLayout class="memberJoinTermsIconNWrap" >
                               <image src="~/Resources/img/login/checkmark.png" />
                           </StackLayout>
                           <StackLayout class="memberJoinServiceInfoWrap">
                               <label class="memberJoinServiceInfo" text="[필수] 개인정보처리방침"  />
                           </StackLayout>
                           <StackLayout class="memberJoinTermsViewWrap2" >
                               <label class="memberJoinTermsView" text="보기"/>
                           </StackLayout>
                       </StackLayout>
                       <StackLayout orientation="horizontal">
                           <StackLayout class="memberJoinTermsIconNWrap" >
                               <image src="~/Resources/img/login/checkmark.png" />
                           </StackLayout>
                           <StackLayout class="memberJoinALlAgreeWrap" >
                               <label class="memberJoinALlAgree" text="전체동의"  />
                           </StackLayout>
                       </StackLayout>
                   </StackLayout>
               </StackLayout>
               <StackLayout class="findUserIdOkButtomWrap" >
                   <StackLayout class="findUserIdOkButtomWrapWrap"@tap="$navigateTo(phoneCertPage)">
                       <label class="findUserIdOkButtom" text="다음" />
                   </StackLayout>
                   <StackLayout class="findUserIdOkButtomWrapWrap2">
                       <label class="findUserIdOkButtom2" text="다음" />
                   </StackLayout>
               </StackLayout>
           </StackLayout>

       </Page>
</template>

<script>
       import MemberJoinTermsList from './joinComponents/MemberJoinTermsList'
       import FindPasswordPhoneCert from './findUserInfo/FindPasswordPhoneCert'
       import PhoneCert from './phoneCert/PhoneCert'

       import Login from './Login';
       import ServiceTerms from './serviceTerms/ServiceTerms';
       import MemberJoin from './MemberJoin'

       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_320.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_360.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_420.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_480.scss';

       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_320.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_360.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_420.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_480.scss';

       export default {
              name:'MemberJoin',
              components : {
                     MemberJoinTermsList,
                     FindPasswordPhoneCert
              },
              data: () => {
                     return {
                         phoneCertPage:PhoneCert,
                         loginPage:Login,
                         serviceTermsPage:ServiceTerms
                     }
              },
              mounted() {

              },methods :{

              }
       };
</script>

<style scoped lang="scss">

</style>
