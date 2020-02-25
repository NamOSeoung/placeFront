<template>
    <StackLayout>
        <StackLayout>
            <StackLayout class="findPasswordPhoneCertWrap"  orientation="horizontal">
                <StackLayout>
                    <StackLayout class="findPasswordPhoneCertTitleWrap">
                        <StackLayout class="findPasswordPhoneCertTitleWrapWrap"  >
                            <label text="휴대폰번호" class="findPasswordPhoneCertTitle" />
                        </StackLayout>
                        <StackLayout class="findUserIdPhonerWrap" >
                            <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                <StackLayout class="findPasswordPhoneCertNumberWrapWrap">
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
                </StackLayout>
                <StackLayout class="findPasswordPhoneCertNumberResponeWrap" >
                    <label class="findPasswordPhoneCertNumberRespone" text="인증번호받기" />
                </StackLayout>
                <StackLayout class="findPasswordPhoneCertNumberResponeWrap2" visibility="collapsed" >
                    <label class="findPasswordPhoneCertNumberRespone2" text="인증번호받기" />
                </StackLayout>
                <StackLayout class="findPasswordPhoneCertNumberResponeWrap2" visibility="collapsed" >
                    <label class="findPasswordPhoneCertNumberRespone2" text="재전송" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <StackLayout>
            <StackLayout class="findPasswordPhoneCertBottomWrap" orientation="horizontal">
                <StackLayout>
                    <StackLayout class="findPasswordPhoneCertTitleWrap">
                        <StackLayout class="findPasswordPhoneCertTitleWrapWrap2" >
                            <label text="인증번호" class="findPasswordPhoneCertTitle" />
                        </StackLayout>
                        <StackLayout class="findUserIdPhonerWrap" >
                            <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                <StackLayout class="findPasswordPhoneCertNumberWrapWrap">
                                    <TextField
                                            class="findUserIdPhoneNumber"
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
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findPasswordPhoneCertCountWrap">
                    <label class="findPasswordPhoneCertCount" text="남은시간 01:59" />
                </StackLayout>
            </StackLayout>
            <StackLayout class="findPasswordPhoneCertWrongWrap" >
                <label class="findPasswordPhoneCertWrong" text="인증번호가 틀립니다." />
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
    </StackLayout>
</template>

<script>
    import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_320.scss';
    import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_360.scss';
    import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_420.scss';
    import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_480.scss';

       export default {
              name:'FindUserPasswordPhoneCert',
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
