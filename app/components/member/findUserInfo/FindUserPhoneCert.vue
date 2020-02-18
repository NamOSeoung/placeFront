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
                    <StackLayout class="findUserPasswordBarTitleWrap" >
                        <label class="findUserPasswordBarTitle" text="비밀번호 찾기"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap"  >
                        <label text="이메일" class="findUserIdPhoneTitle"/>
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                            <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                <TextField
                                        class="findUserIdPhoneNumber"
                                        hint="abcd@abcd.com"
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
                        <label text="휴대폰번호" class="findUserIdPhoneTitle" />
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap" orientation="horizontal">
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
            <StackLayout>
                <StackLayout width="360" orientation="horizontal">
                    <StackLayout>
                        <StackLayout class="findUserIdPhoneTitleWrap"width="193" marginLeft="25">
                            <StackLayout class="findUserIdPhoneTitleWrapWrap" width="193" >
                                <label text="휴대폰번호" class="" fontSize="10" color="#555555" style="font-family: nanumsquareroundr"/>
                            </StackLayout>
                            <StackLayout class="findUserIdPhonerWrap" >
                                <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                    <StackLayout class="findUserIdPhoneNumberWrapWrap" width="170">
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
                    <StackLayout width="100" marginTop="43" height="31" backgroundColor="#dddddd" borderRadius="6" style="text-align: center" marginLeft="18">
                        <label text="인증번호받기" style="font-family: nanumsquareroundb" color="#ffffff" fontSize="12" marginTop="7" height="14" />
                    </StackLayout>
                </StackLayout>

            </StackLayout>
            <StackLayout>
                <StackLayout width="360" orientation="horizontal">
                    <StackLayout>
                        <StackLayout class="findUserIdPhoneTitleWrap"width="193" marginLeft="25">
                            <StackLayout class="findUserIdPhoneTitleWrapWrap" width="193" >
                                <label text="인증번호" class="" fontSize="10" color="#555555" style="font-family: nanumsquareroundr"/>
                            </StackLayout>
                            <StackLayout class="findUserIdPhonerWrap" >
                                <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                    <StackLayout class="findUserIdPhoneNumberWrapWrap" width="170">
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
                    <StackLayout width="100" marginTop="43" height="31"style="text-align: center" marginLeft="18">
                        <label text="남은시간 01:59" style="font-family: nanumsquarerounr" color="#333333" fontSize="12" marginTop="7" height="14" />
                    </StackLayout>
                </StackLayout>
                <StackLayout marginTop="10.5" marginLeft="25">
                    <label text="인증번호가 틀립니다." fontSize="10" style="font-family: nanumsquareroundr" color="#db522b"/>
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
    </Page>
</template>

<script>
    const platformModule = require("tns-core-modules/platform");

    //import platformcss from '../../platformcss';

    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_320.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_360.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_420.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_480.scss';



    export default {
        name:'FindUserPassword',
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
