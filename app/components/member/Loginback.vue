<script src="../../app.js"></script>
<template>
    <Page actionBarHidden="true" backgroundImage="~/Resources/img/place/food.jpg" style="background-repeat: no-repeat;background-size : cover;" backgroundSpanUnderStatusBar="true">
        <StackLayout>
            <StackLayout>
                <!--                   <Button text="건너뛰기" @tap="$navigateTo(detailPage)" color="white" style="font-weight:bold;border-width : 0;z-index: 0; background-color: transparent;font-family: nanumgothiccoding-bold;font-size: 17" width="25%" marginLeft="75%"/>-->
                <Button text="건너뛰기" @tap="$navigateTo(detailPage)" color="white" style="font-weight:bold;border-width : 0;z-index: 0; background-color: transparent;font-family: nanumgothiccoding-bold;font-size: 17" width="25%" marginLeft="75%" />
            </StackLayout>
            <StackLayout style="text-align: center" marginTop="20%">
                <label text="MAT" color="white" style="font-family: nanumgothiccoding-bold;font-size: 50;"/>
                <label text="EAT JUNG" color="white" style="font-family: nanumgothiccoding-bold;font-size: 50;"/>
            </StackLayout>
            <StackLayout style="text-align: center">
                <TextField hint="이메일"
                           [text]='name'
                           secure="false"
                           color="white"
                           returnKeyType="done"
                           (returnPress)="onReturnPress($event)"
                           autocorrect="false"
                           maxLength="10"
                           style="font-family: nanumgothiccoding-bold;font-size: 20;placeholder-color:white;text-align: left;"
                           (focus)="onFocus($event)"
                           (blur)="onBlur($event)">
                </TextField>
                <TextField hint="비밀번호"
                           [text]='name'
                           secure="true"
                           color="white"
                           returnKeyType="done"
                           (returnPress)="onReturnPress($event)"
                           autocorrect="false"
                           maxLength="10"
                           style="font-family: nanumgothiccoding-bold;font-size: 20;placeholder-color:white;text-align: left;"
                           (focus)="onFocus($event)"
                           (blur)="onBlur($event)">
                </TextField>
                <Button text="로그인"  class="login" backgroundColor="#d3d3d3" color="#6E6E6E" style="opacity: 0.7;"/>
                <StackLayout orientation="horizontal" width="90%">
                    <StackLayout orientation="horizontal" style="width:87%">
                        <label text="아이디찾기" color="white" style="font-family: nanumgothiccoding-bold;font-size: 10;"/>
                        <label text=" | " color="white" style="font-family: nanumgothiccoding-bold;font-size: 10;"/>
                        <label text="비밀번호 찾기" color="white" style="font-family: nanumgothiccoding-bold;font-size: 10;"/>
                    </StackLayout>
                    <StackLayout orientation="horizontal">
                        <label text="회원가입" color="white" style="font-family: nanumgothiccoding-bold;font-size: 10;" />
                    </StackLayout>
                </StackLayout>
                <image src="~/Resources/img/user/kakao_account_login_btn_large_narrow.png" width="90%" height="70" marginTop="10"/>
                <image src="~/Resources/img/user/naverLoginButton.png" width="90%" height="70" marginTop="10"/>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import MenuWrap from "../menu/MenuWrap";
    const platformModule = require("tns-core-modules/platform");

    import platformcss from '../../platformcss';
    export default {
        components : {
        },
        data: () => {
            return {
                detailPage: MenuWrap
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

    $a : 106;
    $large : 1.6;
    $large : 1.5;
    $small : 1.3;

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }

    .android480 button.login {
        width: ($a*$large);
        font-size: 15;
    }
    .android480 button.login {
        width: ($a*1.5);
        font-size: 15;
    }
    .android480 button.login {
        width: ($a*0.5);
        font-size: 15;
    }
</style>
