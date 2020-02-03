<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
              <ScrollView>
              <StackLayout class="loginPageWrap" >
                     <StackLayout class="loginScreenTopWrap"backgroundImage="~/Resources/img/login/christopher_jolly_1_ib_8243_c_u_8_q_unsplash.png">
                            <StackLayout class="loginTitleMessageWrap" orientation="horizontal">
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
                                          <label text="둘러보기" class="loginBarogo"  />
                                   </StackLayout>
                                   <StackLayout class="loginBarogoRightWrap">
                                          <image class="loginBarogoRight"  src="~/Resources/img/login/arrow-circle-right.png" />
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
                                              maxLength="10"
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
                                              returnKeyType="done"
                                              (returnPress)="onReturnPress($event)"
                                              autocorrect="false"
                                              maxLength="10"
                                              (focus)="onFocus($event)"
                                              (blur)="onBlur($event)">
                                   </TextField>
                            </StackLayout>
                            <StackLayout class="loginFindWrap" orientation="horizontal" >
                                   <StackLayout class="loginIdFindWrapWrap" orientation="horizontal" >
                                          <StackLayout class="loginIdFindWrap" @tap="$navigateTo(findUserIdPage)">
                                                 <label class="loginIdFind" text="아이디찾기 | " />
                                          </StackLayout>
                                          <StackLayout class="loginPasswordFindWrap">
                                                 <label class="loginPasswordFind" text="비밀번호찾기" />
                                          </StackLayout>
                                   </StackLayout>
                                   <StackLayout class="loginButtonWrap" >
                                          <label class="loginButton" text="로그인" />
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout  class="loginSocialWrap">
                                   <StackLayout class="loginEmailJoinWrap" >
                                          <label text="이메일 회원가입" class="loginEmailJoin"  />
                                   </StackLayout>
                                   <StackLayout class="loginKakaoJoinWrap" orientation="horizontal">
                                          <StackLayout class="loginKakaoIconWrap" >
                                                 <image class="loginKakaoIcon"  src="~/Resources/img/login/kakao-circle.png" />
                                          </StackLayout>
                                          <StackLayout class="loginKakaoLoginWrap">
                                                 <label class="loginKakaoLogin" text="카카오 로그인"  />
                                          </StackLayout>
                                   </StackLayout>
                                   <StackLayout class="loginNaverJoinWrap" orientation="horizontal" >
                                          <StackLayout class="loginNaverIconWrap">
                                                 <image class="loginNaverIcon" src="~/Resources/img/login/naver-circle.png" />
                                          </StackLayout>
                                          <StackLayout class="loginNaverLoginWrap" >
                                                 <label class="loginNaverLogin" text="네이버 로그인"  style="font-family: nanumsquareroundeb" />
                                          </StackLayout>
                                   </StackLayout>
                            </StackLayout>
                     </StackLayout>
              </StackLayout>
              </ScrollView>
       </Page>
</template>

<script>
       import MenuWrap from "../menu/MenuWrap";
       import FindUserId from "./findUserInfo/FindUserId"
       const platformModule = require("tns-core-modules/platform");

       import platformcss from '../../platformcss';

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
                            findUserIdPage : FindUserId
                     }
              },
              mounted() {
                     platformcss.sizeGroupings([480,440,400,360,320]);
                     console.log("디피아이" + platformModule.screen.mainScreen.widthDIPs)
                     console.log("픽셀" + platformModule.screen.mainScreen.widthPixels)
                     console.log(`screen.mainScreen.scale ${platformModule.screen.mainScreen.scale}`);


              }
       };
</script>

<style scoped lang="scss">

</style>
