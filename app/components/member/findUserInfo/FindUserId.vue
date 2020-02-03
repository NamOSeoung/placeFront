<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
            <StackLayout>
                <StackLayout class="findUserIdBarWrap" orientation="horizontal"  >
                    <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                        <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
                    </StackLayout>
                    <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                        <label class="findUserIdBack" text="로그인"  />
                    </StackLayout>
                    <StackLayout class="findUserIdBarTitleWrap" >
                        <label class="findUserIdBarTitle" text="아이디 찾기"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap"  >
                        <label text="휴대폰번호" class="findUserIdPhoneTitle"/>
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                        <TextField
                                                class="findUserIdPhoneNumber"
                                                hint="000-0000-0000"
                                                [text]='name'
                                                secure="false"
                                                returnKeyType="done"
                                                (returnPress)="onReturnPress($event)"
                                                autocorrect="false"
                                                maxLength="10"
                                                backgroundColor="#ffffff"
                                                (focus)="onFocus($event)"
                                                (blur)="onBlur($event)">
                                        </TextField>
                                    </StackLayout>
                                    <StackLayout class="findUserIdPhoneDeleteWrap">
                                        <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                    </StackLayout>
                            </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap">
                        <label text="생년월일(6자리)" class="findUserIdPhoneTitle" />
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap" orientation="horizontal">
                            <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                <TextField
                                        class="findUserIdPhoneNumber"
                                        hint="00/00/00"
                                        [text]='name'
                                        secure="false"
                                        returnKeyType="done"
                                        (returnPress)="onReturnPress($event)"
                                        autocorrect="false"
                                        maxLength="10"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdOkButtomWrap">
                    <StackLayout class="findUserIdOkButtomWrapWrap" >
                        <label class="findUserIdOkButtom" text="확인" />
                    </StackLayout>
                    <StackLayout class="findUserIdOkButtomWrapWrap2">
                        <label class="findUserIdOkButtom2" text="확인" />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
       </Page>
</template>

<script>
       const platformModule = require("tns-core-modules/platform");

       //import platformcss from '../../platformcss';

       import '~/Resources/css/member/findUserInfo/FindUserId/findUserId_320.scss';
       import '~/Resources/css/member/findUserInfo/FindUserId/findUserId_360.scss';
       import '~/Resources/css/member/findUserInfo/FindUserId/findUserId_420.scss';
       import '~/Resources/css/member/findUserInfo/FindUserId/findUserId_480.scss';
       export default {
              name:'FindUserId',
              components : {
              },
              data: () => {
                     return {
                     }
              },
              mounted() {

              }
       };
</script>

<style scoped lang="scss">

</style>
