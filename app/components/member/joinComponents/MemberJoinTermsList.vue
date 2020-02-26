<template>
       <Page  actionBarHidden="true" backgroundSpanUnderStatusBar="true">
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
                                  <StackLayout orientation="horizontal" v-if="serviceTerms==false" @tap="termsCheck('S',true)">
                                         <StackLayout class="memberJoinTermsIconNWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinServiceTermsWrap" >
                                                <label class="memberJoinServiceTerms" text="[필수] 서비스 이용약관" />
                                         </StackLayout>
                                  </StackLayout>
                                  <StackLayout orientation="horizontal" v-else @tap="termsCheck('S',false)">
                                         <StackLayout class="memberJoinTermsIconCWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinServiceTermsWrap" >
                                                <label class="memberJoinServiceTerms" text="[필수] 서비스 이용약관" />
                                         </StackLayout>
                                  </StackLayout>

                                  <StackLayout class="memberJoinTermsViewWrap" @tap="$navigateTo(serviceTermsPage)">
                                          <label class="memberJoinTermsView" text="보기"  />
                                  </StackLayout>
                           </StackLayout>
                           <StackLayout orientation="horizontal">
                                  <StackLayout orientation="horizontal" v-if="policyTerms==false" @tap="termsCheck('P',true)">
                                         <StackLayout class="memberJoinTermsIconNWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinServiceInfoWrap" >
                                                <label class="memberJoinServiceInfo" text="[필수] 개인정보처리방침"  />
                                         </StackLayout>
                                  </StackLayout>
                                  <StackLayout orientation="horizontal" v-else @tap="termsCheck('P',false)">
                                         <StackLayout class="memberJoinTermsIconCWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinServiceInfoWrap" >
                                                <label class="memberJoinServiceInfo" text="[필수] 개인정보처리방침"  />
                                         </StackLayout>
                                  </StackLayout>

                                  <StackLayout class="memberJoinTermsViewWrap2" >
                                         <label class="memberJoinTermsView" text="보기"/>
                                  </StackLayout>
                           </StackLayout>
                           <StackLayout orientation="horizontal">
                                  <StackLayout orientation="horizontal" v-if="serviceTerms==false||policyTerms==false" @tap="termsCheck('A',true)">
                                         <StackLayout class="memberJoinTermsIconNWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinALlAgreeWrap" >
                                                <label class="memberJoinALlAgree" text="전체동의"  />
                                         </StackLayout>
                                  </StackLayout>
                                  <StackLayout orientation="horizontal" v-else @tap="termsCheck('A',false)">
                                         <StackLayout class="memberJoinTermsIconCWrap" >
                                                <image src="~/Resources/img/login/checkmark.png" />
                                         </StackLayout>
                                         <StackLayout class="memberJoinALlAgreeWrap" >
                                                <label class="memberJoinALlAgree" text="전체동의"  />
                                         </StackLayout>
                                  </StackLayout>

                           </StackLayout>
                           <StackLayout class="findUserIdOkButtomWrap">
                                  <StackLayout class="findUserIdOkButtomWrapWrap" v-if="serviceTerms==false||policyTerms==false">
                                         <label class="findUserIdOkButtom" text="다음" />
                                  </StackLayout>
                                  <StackLayout class="findUserIdOkButtomWrapWrap2" v-else @tap="nextPage">
                                         <label class="findUserIdOkButtom2" text="다음" />
                                  </StackLayout>
                           </StackLayout>
                    </StackLayout>
              </StackLayout>
       </Page>
</template>

<script>
       import Login from '../Login';
       import ServiceTerms from '../serviceTerms/ServiceTerms';
       import MemberJoin from '../MemberJoin'
       import PhoneCert from '../phoneCert/PhoneCert';
       import InfoEnter from "../infoEnter/InfoEnter";


       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_320.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_360.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_420.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_480.scss';

       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_320.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_360.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_420.scss';
       import '~/Resources/css/member/joinComponents/MemberJoinTermsList/memberJoinTermsList_480.scss';

       export default {
              name:'MemberJoinTermsList',
              components : {
              },
              data: () => {
                     return {
                            loginPage:Login,
                            serviceTermsPage:ServiceTerms,
                            serviceTerms:false,
                            policyTerms:false,
                     }
              },
              mounted() {

              },methods :{
                     termsCheck(division,flag){
                            if(division == 'S'){
                                   if(flag == true){
                                          this.$data.serviceTerms = true;
                                   }else {
                                          this.$data.serviceTerms = false;
                                   }

                            }else if(division == 'P'){
                                   if(flag == true){
                                          this.$data.policyTerms = true;
                                   }else {
                                          this.$data.policyTerms = false;
                                   }
                            }else if(division == 'A'){
                                   if(flag == true){
                                          this.$data.serviceTerms = true;
                                          this.$data.policyTerms = true;
                                   }else {
                                          this.$data.serviceTerms = false;
                                          this.$data.policyTerms = false;
                                   }
                            }
                     },nextPage(){
                            // this.$navigateTo(PhoneCert)
                             this.$navigateTo(InfoEnter)
                     }
              }
       };
</script>

<style scoped lang="scss">

</style>
