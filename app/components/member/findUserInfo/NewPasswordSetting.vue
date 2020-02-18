<script src="../../app.js"></script>
<template>
    <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <StackLayout>
            <StackLayout>
                <StackLayout class="findUserIdBarWrap" orientation="horizontal"  >
                    <StackLayout class="findUserIdBackIconWrap"  @tap="$navigateTo(loginPage)">
                        <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
                    </StackLayout>
                    <StackLayout class="findUserIdBackWrap"  @tap="$navigateTo(loginPage)">
                        <label class="findUserIdBack" text="로그인"  />
                    </StackLayout>
                    <StackLayout class="findUserPasswordBarTitleWrap" >
                        <label class="findUserPasswordBarTitle" text="비밀번호 찾기"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap"  >
                        <label text="새 비밀번호" class="findUserIdPhoneTitle"/>
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                            <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                <TextField
                                        class="findUserIdPhoneNumber"
                                        hint="비밀번호 기입"
                                        [text]='name'
                                        secure="true"
                                        returnKeyType="done"
                                        (returnPress)="onReturnPress($event)"
                                        autocorrect="false"
                                        maxLength="50"
                                        v-model="password"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPassword">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
<!--                <StackLayout>-->
<!--                    <label class="newPasswordCheck1" text="8~15자 이내로 영문,숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요."/>-->
<!--                </StackLayout>-->
                <StackLayout class="infoEnterValidation" v-if="password_validation == 0">
                    <label class="infoEnterValidationGray" text="8~15자 이내로 영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요." />
                </StackLayout>
                <StackLayout class="infoEnterValidation" v-else-if="password_validation == 1" >
                    <label class="infoEnterValidationRed" text="8~15자 이내로 영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요." />
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap">
                        <label text="새 비밀번호 확인" class="findUserIdPhoneTitle" />
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap" orientation="horizontal">
                            <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                <TextField
                                        class="findUserIdPhoneNumber"
                                        hint="비밀번호 확인"
                                        [text]='name'
                                        secure="true"
                                        returnKeyType="done"
                                        (returnPress)="onReturnPress($event)"
                                        autocorrect="false"
                                        maxLength="50"
                                        v-model="password2"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPassword2">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
<!--                <StackLayout>-->
<!--                    <label class="newPasswordCheck2" text="비밀번호와 일치하지 않습니다."/>-->
<!--                </StackLayout>-->
                <StackLayout class="infoEnterValidation" v-if="password2_validation==0" >
                    <label class="infoEnterValidationRed" text="비밀번호 확인란을 입력 해 주세요." />
                </StackLayout>
                <StackLayout class="infoEnterValidation" v-else-if="password2_validation==1" >
                    <label class="infoEnterValidationRed" text="비밀번호가 일치하지 않습니다." />
                </StackLayout>
                <StackLayout class="infoEnterValidation" v-else-if="password2_validation==2" >
                    <label class="infoEnterValidationRed" text="상단 비밀번호 설정 후 기입 해 주세요." />
                </StackLayout>
                <StackLayout class="findUserIdOkButtomWrap">
                    <StackLayout v-if="input_check == false">
                        <StackLayout class="findUserIdOkButtomWrapWrap" >
                            <label class="findUserIdOkButtom" text="확인" />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout class="findUserIdOkButtomWrapWrap2" @tap="newPasswordSetting">
                            <label class="findUserIdOkButtom2" text="확인" />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
            <StackLayout visibility="collapsed">
                <FindPasswordPhoneCert />
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

    import '~/Resources/css/member/findUserInfo/NewPasswordSetting/newPasswordSetting_320.scss';
    import '~/Resources/css/member/findUserInfo/NewPasswordSetting/newPasswordSetting_360.scss';
    import '~/Resources/css/member/findUserInfo/NewPasswordSetting/newPasswordSetting_420.scss';
    import '~/Resources/css/member/findUserInfo/NewPasswordSetting/newPasswordSetting_480.scss';

    import axios from 'axios';
    var Toast = require("nativescript-toast");
    import FindPasswordPhoneCert from './FindPasswordPhoneCert'
    import Login from '../Login'

    export default {
        name:'NewPasswordSetting',
        props:['user_id'],
        components : {
            FindPasswordPhoneCert
        },
        data: () => {
            return {
                loginPage:Login,
                password_validation:0,
                password2_validation:0,
                input_check:false,
                password:'',
                password2:''
            }
        },
        mounted() {
            console.log(this.user_id);
        },methods:{
            delPassword(){
                this.$data.password = '';
            },delPassword2(){
                this.$data.password2 = '';
            },newPasswordSetting(){
                axios({
                    method: 'put',
                    url: 'http://api.eatjeong.com/v1/users/general/password',
                    params: {
                        email:this.user_id,
                        sns_division:'C',
                        password:this.$data.password
                    },
                }).then((response) => {
                    console.log(response.data)
                    if(response.data.dataList.result_flag == true){
                        Toast.makeText('변경이 완료되었습니다. 다시 로그인 해 주세요.').show();
                        this.$navigateTo(Login);
                    }else{
                        Toast.makeText('비밀번호 변경 실패하였습니다.').show();
                    }

                }, (error) => {
                    console.log(error);
                    Toast.makeText('비밀번호 변경 실패하였습니다.').show();
                });
            }
        },
        watch:{
            password:function(){
                var password = this.$data.password;

                if(password == ''){
                    this.$data.password_validation = 0;
                    this.$data.input_check = false;
                    return;
                }
                if(password.length > 15 || password.length < 8){
                    this.$data.password_validation = 1;
                    return;
                }else{
                    var validation_count=0;
                    var pattern1 = /[0-9]/; // 숫자
                    var pattern2 = /[a-zA-Z]/; // 문자
                    var pattern3 = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자

                    if(pattern1.test(password)){
                        validation_count++;
                    }
                    if(pattern2.test(password)){
                        validation_count++;
                    }
                    if(pattern3.test(password)){
                        validation_count++;
                    }
                    if(validation_count < 2){
                        this.$data.password_validation = 1;
                        this.$data.input_check = false;
                        return;
                    }else {
                        this.$data.password_validation = 2;
                    }
                }

                    if(this.$data.password_validation == 2){
                        if(this.$data.password2_validation == 3){
                            this.$data.input_check = true;
                        }else {
                            this.$data.input_check = false;
                        }
                    }else {
                        this.$data.input_check = false;
                    }
            },
            password2:function() {
                var password = this.$data.password;
                var password2 = this.$data.password2;

                if (password2 == '') {
                    this.$data.password2_validation = 0;
                    this.$data.input_check = false;
                    return;
                }

                if (this.$data.password_validation < 2) {
                    this.$data.password2_validation = 2;
                    this.$data.input_check = false;
                    return;
                }

                if (password != password2) {
                    this.$data.password2_validation = 1;
                } else {
                    this.$data.password2_validation = 3;
                }

                if (this.$data.password_validation == 2) {
                    if (this.$data.password2_validation == 3) {
                        this.$data.input_check = true;
                    } else {
                        this.$data.input_check = false;
                    }
                } else {
                    this.$data.input_check = false;
                }
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
