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
                                        v-model="user_id"
                                        maxLength="50"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delEmail">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="infoEnterValidation" v-if="email_valication == 1">
                        <label class="infoEnterValidationRed" text="올바른 이메일 형식이 아닙니다." />
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
                                        maxLength="13"
                                        v-model="phone_no"
                                        ref="phone_no"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPhone">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="findPasswordPhoneCertWrongWrap" v-if="phone_validation == 1">
                        <label class="findPasswordPhoneCertWrong" text="숫자만 기입 해 주세요." />
                    </StackLayout>
                    <StackLayout class="infoEnterValidation" v-if="user_exist==false">
                        <label class="infoEnterValidationRed" text="계정이 존재하지 않습니다." />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdOkButtomWrap">
                    <StackLayout v-if="input_check == false">
                        <StackLayout class="findUserIdOkButtomWrapWrap">
                            <label class="findUserIdOkButtom" text="확인" />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout class="findUserIdOkButtomWrapWrap2" @tap="userExistCheck">
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

    import axios from 'axios';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_320.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_360.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_420.scss';
    import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_480.scss';

    import FindPasswordPhoneCert from './FindPasswordPhoneCert'
    import NewPasswordSetting from './NewPasswordSetting'

    export default {
        name:'FindUserPassword',
        components : {
            FindPasswordPhoneCert
        },
        data: () => {
            return {
                newPasswordSettingPage:NewPasswordSetting,
                phone_no:'',
                user_id:'',
                phone_validation:'',
                email_valication:'',
                input_check:false,
                user_exist:true
            }
        },
        watch:{
            user_id:function(){
                this.$data.user_exist=true;
                var user_id = this.$data.user_id;
                let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                if(user_id == ''){
                    this.$data.email_valication = 0;
                    this.$data. input_check = false;
                    return;
                }
                if(re.test(user_id) == true){
                    this.$data.email_valication = 3;
                }else{
                    this.$data.email_valication = 1;
                }

                if(this.$data.email_valication == 3){
                    if(this.$data.phone_validation == 2){
                        this.$data.input_check = true;
                    }else {
                        this.$data.input_check = false;
                    }
                }else {
                    this.$data.input_check = false;
                }
            },
            phone_no:function(){
                this.$data.user_exist = true;
                var phone_no = this.$data.phone_no;
                const nativeView = this.$refs.phone_no.nativeView;
                var pattern1 = /[a-zA-Z]/; // 문자
                var pattern2 = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자

                if(phone_no.length<12){

                    if(phone_no.indexOf('-')>-1){
                        this.$data.phone_validation = 1;
                        this.$data.input_check = false;
                        return;
                    }else {
                        this.$data.phone_validation = 0;
                    }
                    if(pattern1.test(phone_no)){
                        this.$data.phone_validation = 1;
                        this.$data.input_check = false;
                        return;
                    }else {
                        this.$data.phone_validation = 0;
                    }
                    if(pattern2.test(phone_no)){
                        this.$data.phone_validation = 1;
                        this.$data.input_check = false;
                        return;
                    }else{
                        this.$data.phone_validation = 0;
                    }
                    this.$data.input_check = false;
                }

                if(phone_no.length == ''){
                    this.$data.phone_validation = 0;
                    this.$data.input_check = false;
                    return;
                }else{
                    if(phone_no.length == 12){
                        var phone_no1 = this.$data.phone_no.slice(0,3)
                        var phone_no2 = this.$data.phone_no.slice(4,8)
                        var phone_no3 = this.$data.phone_no.slice(9,12)

                        this.$data.phone_no = phone_no1+phone_no2+phone_no3
                        setTimeout(() => {
                            nativeView.android.setSelection(10)
                        }, 10);

                        this.$data.phone_validation = 0;
                        this.$data.input_check = false;
                        return;
                    }
                    if(phone_no.length==11){
                        var phone_no1 = phone_no.slice(0,3);
                        var phone_no2 = phone_no.slice(3,7);
                        var phone_no3 = phone_no.slice(7,11);

                        this.$data.phone_no = phone_no1 + '-' + phone_no2 + '-' + phone_no3;

                        setTimeout(() => {
                            nativeView.android.setSelection(13)
                        }, 10);

                        this.$data.phone_validation = 2;
                    }

                }
                if(this.$data.email_valication == 3){
                    if(this.$data.phone_validation == 2){
                        this.$data.input_check = true;
                    }else {
                        this.$data.input_check = false;
                    }
                }else {
                    this.$data.input_check = false;
                }

            }
        },
        mounted() {

        },methods:{
            userExistCheck(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/users/general/accountcheck',
                    params: {
                        email:this.$data.user_id,
                        phone_number:this.$data.phone_no,
                    },
                }).then((response) => {
                    console.log(response.data.dataList)

                    if(response.data.dataList.account_flag == true){ //계정이 존재함.
                        this.$navigateTo(NewPasswordSetting, {
                            props: {
                                user_id: this.$data.user_id}
                        });
                    }else{
                        this.$data.user_exist=false;
                    }

                }, (error) => {
                    console.log(error);
                });
            },delEmail(){
                this.$data.user_id = '';
            },delPhone(){
                this.$data.phone_no = '';
            }
        }
    };
</script>

<style scoped lang="scss">

</style>
