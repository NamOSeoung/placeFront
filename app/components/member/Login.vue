<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">

              <ScrollView height="100%"  width="100%">
              <AbsoluteLayout>
                     <StackLayout class="loginPageWrap">
                            <StackLayout class="loginScreenTopWrap" >
                                   <StackLayout class="loginTitleMessageWrap" orientation="horizontal" @tap="aaa">
                                          <label text="맛잇는 장소" class="loginTitleMessageMain" />
                                          <label text="를" class="loginTitleMessageMain2"  />
                                   </StackLayout>
                                   <StackLayout class="loginTitleMessageSubWrap" >
                                          <label text="찾아보세요." class="loginTitleMessageSub"  />
                                   </StackLayout>
                                   <StackLayout class="loginBrandLogoWrap" >
                                          <label text="Brand Logo" class="loginBrandLogo"/>
                                   </StackLayout>
                                   <StackLayout orientation="horizontal" class="loginBarogoMainWrap"  @tap="$navigateTo(detailPage)">
                                          <StackLayout  class="loginBarogoWrap">
                                                 <label text="둘러보기" class="loginBarogo" />
                                          </StackLayout>
                                          <StackLayout class="loginBarogoRightWrap">
                                                 <image class="loginBarogoRight"  src="~/Resources/img/login/arrow-cricle-right.png"  />
                                          </StackLayout>
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="loginScreenBottomWrap" >
                                   <StackLayout class="loginEmailWrap">
                                          <TextField
                                                  class="loginEmail"
                                                  hint="이메일"
                                                  [text]='name'
                                                  secure="false"
                                                  color="white"
                                                  returnKeyType="done"
                                                  (returnPress)="onReturnPress($event)"
                                                  autocorrect="false"
                                                  maxLength="50"
                                                  v-model="user_id"
                                                  (focus)="onFocus($event)"
                                                  (blur)="onBlur($event)">
                                          </TextField>
                                   </StackLayout>
                                   <StackLayout class="loginPasswordWrap" >
                                          <TextField hint="비밀번호"
                                                     class="loginPassword"
                                                     [text]='name'
                                                     secure="true"
                                                     color="white"
                                                     v-model="password"
                                                     returnKeyType="done"
                                                     (returnPress)="onReturnPress($event)"
                                                     autocorrect="false"
                                                     maxLength="20"
                                                     (focus)="onFocus($event)"
                                                     (blur)="onBlur($event)">
                                          </TextField>
                                   </StackLayout>

                                   <StackLayout class="loginFindWrap" orientation="horizontal" >
                                          <StackLayout class="loginIdFindWrapWrap" orientation="horizontal" >
                                                 <StackLayout class="loginIdFindWrap" @tap="$navigateTo(findUserIdPage)">
                                                        <label class="loginIdFind" text="아이디찾기 | " />
                                                 </StackLayout>
                                                 <StackLayout class="loginPasswordFindWrap" @tap="$navigateTo(findUserPasswordPage)">
                                                        <label class="loginPasswordFind" text="비밀번호찾기" />
                                                 </StackLayout>
                                          </StackLayout>
                                          <StackLayout class="loginButtonWrap" @tap="userLogin" >
                                                 <label class="loginButton" text="로그인" />
                                          </StackLayout>
                                   </StackLayout>
                                   <StackLayout  class="loginSocialWrap">
                                          <StackLayout class="loginEmailJoinWrap"  @tap="userJoin">
                                                 <label text="이메일 회원가입" class="loginEmailJoin"  />
                                          </StackLayout>
                                          <!--                                   <StackLayout class="loginKakaoJoinWrap" orientation="horizontal">-->
                                          <!--                                          <StackLayout class="loginKakaoIconWrap" >-->
                                          <!--                                                 <image class="loginKakaoIcon"  src="~/Resources/img/login/kakao-circle.png" />-->
                                          <!--                                          </StackLayout>-->
                                          <!--                                          <StackLayout class="loginKakaoLoginWrap">-->
                                          <!--                                                 <label class="loginKakaoLogin" text="카카오 로그인"  />-->
                                          <!--                                          </StackLayout>-->
                                          <!--                                   </StackLayout>-->
                                          <!--                                   <StackLayout class="loginNaverJoinWrap" orientation="horizontal" >-->
                                          <!--                                          <StackLayout class="loginNaverIconWrap">-->
                                          <!--                                                 <image class="loginNaverIcon" src="~/Resources/img/login/naver-circle.png" />-->
                                          <!--                                          </StackLayout>-->
                                          <!--                                          <StackLayout class="loginNaverLoginWrap" >-->
                                          <!--                                                 <label class="loginNaverLogin" text="네이버 로그인"  style="font-family: nanumsquareroundeb" />-->
                                          <!--                                          </StackLayout>-->
                                          <!--                                   </StackLayout>-->
                                   </StackLayout>
                            </StackLayout>
                     </StackLayout>

                     <StackLayout top="0" width="100%" height="100%" >
                            <ActivityIndicator :busy="busy" color="#ffe074" width="100" height="100" marginTop="300" />
                     </StackLayout>
              </AbsoluteLayout>

              </ScrollView>

       </Page>
</template>

<script>
       var dialogs = require("tns-core-modules/ui/dialogs");
      // require("nativescript-slideshow-busy-indicator");
       import MenuWrap from "../menu/MenuWrap";
       import FindUserId from "./findUserInfo/FindUserId"
       import FindUserPassword from './findUserInfo/FindUserPassword'
       const platformModule = require("tns-core-modules/platform");
       var Toast = require("nativescript-toast");
       import axios from 'axios';
       import platformcss from '../../platformcss';
       var phone = require( "nativescript-phone" );
       import MemberJoinTermsList from '../member/joinComponents/MemberJoinTermsList'

       import PasswordExcess from './passwordExcess/PasswordExcess'
       //public images = ["~/Resources/img/place/google.png", "~/Resources/img/place/phone.png", "~/Resources/img/place/link_64.png", "~/images/share.png"];

       const appSettings = require("tns-core-modules/application-settings"); //sharedpreferences;
       import '~/Resources/css/member/Login/login_320.scss';
       import '~/Resources/css/member/Login/login_360.scss';
       import '~/Resources/css/member/Login/login_420.scss';
       import '~/Resources/css/member/Login/login_480.scss';
       export default {
              components : {
              },
              data: () => {
                     return {
                            detailPage: MenuWrap,
                            findUserIdPage : FindUserId,
                            findUserPasswordPage:FindUserPassword,
                            user_id:'',
                            password:'',
                            loginFlag:false,
                            busy:false,
                            isBusy:false,
                            images:["~/Resources/img/place/google.png", "~/Resources/img/place/phone.png", "~/Resources/img/place/link_64.png", "~/images/share.png"],
                           // infoEnderPage : InfoEnter
                     }
              },
              mounted() {
                     platformcss.sizeGroupings([480,440,400,360,320]);
                     console.log("디피아이" + platformModule.screen.mainScreen.widthDIPs)
                     console.log("픽셀" + platformModule.screen.mainScreen.widthPixels)
                     console.log(`screen.mainScreen.scale ${platformModule.screen.mainScreen.scale}`);


              },methods:{
                     userJoin(){
                            this.$navigateTo(MemberJoinTermsList);
                     },
                     userLogin(){

                            this.$data.isBusy = true;
                            if(this.$data.user_id == ''){
                                   Toast.makeText("이메일을 입력해주세요.").show();
                                   return;
                            }

                            if(this.$data.password == ''){
                                   Toast.makeText("비밀번호를 입력해주세요.").show();
                                   return;
                            }

                            this.$data.busy = true;
                            setTimeout(() => {
                                   axios({
                                          method: 'get',
                                          url: 'http://api.eatjeong.com/v1/users/general/signin?',
                                          params: {
                                                 user_id:this.$data.user_id,
                                                 password:this.$data.password
                                          },
                                   }).then((response) => {
                                          console.log(response.data.dataList);
                                          if(response.data.dataList.result == true){

                                                 console.log(response.data.dataList.login90_flag);
                                                 if(response.data.dataList.login90_flag == false){ //90일 경과
                                                        //this.$navigateTo(PasswordExcess);
                                                        this.$navigateTo(PasswordExcess, {
                                                               props: {
                                                                      user_id: this.$data.user_id}
                                                        })
                                                 }else{
                                                        //Toast.makeText(response.data.dataList.result_message).show();
                                                        appSettings.setString("user_id",this.$data.user_id);
                                                        appSettings.setString("sns_division","C");
                                                        console.log(appSettings.getString("user_id"))
                                                        this.$navigateTo(MenuWrap,{ clearHistory: true });
                                                 }
                                          }else {
                                                 dialogs.alert({
                                                        title: "",
                                                        message: "이메일이나 비밀번호가 다릅니다.",
                                                        okButtonText: "확인"
                                                 }).then(function () {
                                                        console.log("Dialog closed!");
                                                 });
                                                 // dialogs.alert("").then(function() {
                                                 //        console.log("이메일이나 비밀번호가 다릅니다.");
                                                 // });
                                                 //alert("이메일이나 비밀번호가 다릅니다.");
                                                 // Toast.makeText(response.data.dataList.result_message).show();
                                          }
                                          this.$data.busy = false;

                                   }, (error) => {
                                          console.log(error)
                                          Toast.makeText("로그인 오류가 발생하였습니다. 잠시 후 다시 시도 해 주세요.").show();
                                          this.$data.busy = false;
                                   });
                            }, 1000);

                     },
                     aaaa(){
                            console.log('123123213')
                     },
                     aaa(){
                            this.$navigateTo(PasswordExcess);
                            // phone.sms("010-4163-8565","My Message") //New Method for single number is phone.sms(["212-555-1234"],"My Message")
                            //         .then(function(args){
                            //                        /// args.reponse: "success", "cancelled", "failed"
                            //                        console.log(JSON.stringify(args));
                            //                 },
                            //                 function(err){
                            //                        console.log("Error: " + err);
                            //                 }
                            //         );
                            //var app = require("application");
                           // var context = app.android.context;
                           // console.log("3333")
                            //let intent = android.content.Intent(context, com.dev.testintent.MainActivity.class);

                           // app.android.context.startActivity(intent);

                            //console.log(new com.dev.module.Test().test());
                            //com.google.firebase.auth.PhoneAuthProvider.getInstance().verifyPhoneNumber(arg.phoneOptions.phoneNumber, timeout, java.util.concurrent.TimeUnit.SECONDS, appModule.android.foregroundActivity, new OnVerificationStateChangedCallbacks());
                           // firebase.phoneAuthCredential();
                           // firebase.phoneAuthCredential();

                            /*firebase.login({
                                   type: firebase.LoginType.PHONE,
                                   phoneOptions: {
                                          phoneNumber: '+821041638565',
                                          verification: "휴대폰 인증번호를 기입 해 주세요.", // default "Verification code"
                                          // Optional
                                          android: {
                                                 timeout: 30 // The maximum amount of time you are willing to wait for SMS auto-retrieval to be completed by the library
                                          }
                                   }

                            }).then(
                                    function (result) {
                                           console.log(" 성공"+JSON.stringify(result));
                                           firebase.logout()
                                    },
                                    function (errorMessage) {
                                           console.log("에러" + errorMessage);
                                    }
                            );*/
                     }
              }
       };
</script>

<style scoped lang="scss">

</style>
