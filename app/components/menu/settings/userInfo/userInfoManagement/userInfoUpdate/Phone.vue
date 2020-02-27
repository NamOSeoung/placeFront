<template lang="html">
<Page actionBarHidden="true">
    <StackLayout>
        <StackLayout>
            <StackLayout class="findUserIdBarWrap" orientation="horizontal" height="65" >
                <StackLayout class="findUserIdBarTitleWrap"  marginLeft="38%" width="35%" >
                    <label class="findUserIdBarTitle" text="휴대폰 번호 변경" width="100%"  />
                </StackLayout>
                <StackLayout width="16" height="16" marginLeft="20%" marginTop="15" @tap="$navigateBack">
                    <image src="~/Resources/img/place/close_5_64_b.png"/>
                </StackLayout>
            </StackLayout>
            <StackLayout class="findPasswordPhoneCertWrap" orientation="horizontal" width="100%">
                <StackLayout>
                    <StackLayout class="findPasswordPhoneCertTitleWrap" width="100%">
                        <StackLayout class="" >
                            <label text="휴대폰번호" class="findPasswordPhoneCertTitle" />
                        </StackLayout>
                        <StackLayout class="findUserIdPhonerWrap"  width="100%" >
                            <StackLayout class="findUserIdPhoneNumberWrap" orientation="horizontal" width="90%" marginRight="5%" >
                                <StackLayout class="findPasswordPhoneCertNumberWrapWrap" width="260" >
                                    <TextField
                                            class="findUserIdPhoneNumber"
                                            width="260"
                                            hint="000-0000-0000"
                                            [text]='name'
                                            secure="false"
                                            returnKeyType="done"
                                            keyboardType="number"
                                            v-model="phone_no"
                                            ref="phone_no"
                                            (returnPress)="onReturnPress($event)"
                                            autocorrect="false"
                                            maxLength="13"
                                            backgroundColor="#ffffff"
                                            (focus)="onFocus($event)"
                                            (blur)="onBlur($event)">
                                    </TextField>
                                </StackLayout>
                                <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPhoneNo" ref="delPhone" v-if="phone_no.length>0">
                                    <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="findPasswordPhoneCertWrongWrap" v-if="phone_validation == 1">
                        <label class="findPasswordPhoneCertWrong" text="숫자만 기입 해 주세요." />
                    </StackLayout>
                    <StackLayout class="findUserIdOkButtomWrap">
                        <StackLayout v-if="button_ok == false">
                            <StackLayout class="findUserIdOkButtomWrapWrap"  >
                                <label class="findUserIdOkButtom" text="확인" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout  v-else>
                            <StackLayout class="findUserIdOkButtomWrapWrap2" @tap="phoneUpdate">
                                <label class="findUserIdOkButtom2" text="확인" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>

            </StackLayout>
        </StackLayout>
    </StackLayout>
</Page>
</template>
<script>

    import axios from 'axios';
    const appSettings = require("tns-core-modules/application-settings");
    var dialogs = require("tns-core-modules/ui/dialogs");
    export default {
        name:"Phone",
        components: {
        },data(){
            return {
                minute:'2:',
                second:'00',
                minute_check:true,
                codeSendFlag:0,
                phone_no:'',
                phone_validation:0,
                bottomFlag:0,
                code_validation:0,
                sms_code:'',
                button_ok:false
            }
        },methods: {
            delPhoneNo() {
                this.$data.phone_no = '';
            },codeSend(){
                this.$data.codeSendFlag = 2;
                this.$data.minute = '1:'
                this.$data.second = 59;
                this.$refs.phone_no.nativeView.editable=false;
                this.$refs.delPhone.nativeView.style.visibility="collapsed";
            },
            codeCheck(){
                if(this.$data.minute_check == false){
                    this.$data.code_validation = 2; //인증시간 만료 체크.
                    return;
                }else{
                    var sms_code = '111'; //테스트용 임시.
                    var user_sms_code = this.$data.sms_code;
                    if(sms_code != user_sms_code){
                        this.$data.code_validation = 1; //인증번호 다름.
                        return;
                    }else{
                       this.phoneUpdate();
                    }
                }
            },phoneUpdate(){
                axios({
                    method: 'put',
                    url: 'http://api.eatjeong.com/v1/users/general/phone',
                    params: {
                        user_id : appSettings.getString("user_id"),
                        phone_number : this.$data.phone_no,
                    },
                }).then((response) => {
                    console.log(response.data);
                    dialogs.alert({
                        title: "",
                        message: "변경되었습니다.",
                        okButtonText: "확인"
                    }).then(() =>{
                        console.log("Dialog closed!");
                        this.$navigateBack();
                    });
                }, (error) => {
                    console.log(error);
                });
            }
        },watch:{
            second:function () {
                if(this.$data.minute_check==true){
                    if(this.$data.second > 0){
                        setTimeout(() => {
                            if(this.$data.second > 0){
                                if(parseInt(this.$data.second) < 11){
                                    this.$data.second = '0'+(this.$data.second-1).toString()
                                }else{
                                    this.$data.second = this.$data.second-1
                                }
                            }
                        }, 1000);
                    }else{
                        if(this.$data.minute == '1:'){
                            this.$data.second = 59;
                            this.$data.minute = '';
                        }else{
                            this.$data.minute_check = false;
                        }

                    }
                }else{
                    this.$data.minute = '';
                }

            },
            phone_no:function(){
                var phone_no = this.$data.phone_no;
                const nativeView = this.$refs.phone_no.nativeView;
                var pattern1 = /[a-zA-Z]/; // 문자
                var pattern2 = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi; // 특수문자

                if(phone_no.length<12){

                    if(phone_no.indexOf('-')>-1){
                        this.$data.phone_validation = 1;
                        this.$data.button_ok = false;
                        return;
                    }
                    if(pattern1.test(phone_no)){
                        this.$data.phone_validation = 1;
                        this.$data.button_ok = false;
                        return;
                    }
                    if(pattern2.test(phone_no)){
                        this.$data.phone_validation = 1;
                        this.$data.button_ok = false;
                        return;
                    }

                }

                if(phone_no.length == ''){
                    this.$data.phone_validation = 0;
                    this.$data.codeSendFlag = 0;
                    this.$data.button_ok = false;
                    return;
                }else{
                    this.$data.phone_validation = 2;
                    if(phone_no.length == 12){
                        var phone_no1 = this.$data.phone_no.slice(0,3)
                        var phone_no2 = this.$data.phone_no.slice(4,8)
                        var phone_no3 = this.$data.phone_no.slice(9,12)

                        console.log(phone_no1)
                        console.log(phone_no2)
                        console.log(phone_no3)
                        this.$data.phone_no = phone_no1+phone_no2+phone_no3
                        this.$data.button_ok = false;
                        console.log(this.$data.phone_no)
                        setTimeout(() => {
                            nativeView.android.setSelection(10)
                        }, 10);
                        this.$data.codeSendFlag = 0;

                        return;
                    }
                    if(phone_no.length==11){
                        var phone_no1 = phone_no.slice(0,3);
                        var phone_no2 = phone_no.slice(3,7);
                        var phone_no3 = phone_no.slice(7,11);

                        this.$data.phone_no = phone_no1 + '-' + phone_no2 + '-' + phone_no3;
                        this.$data.button_ok = true;
                        setTimeout(() => {
                            nativeView.android.setSelection(13)
                        }, 10);



                        this.$data.phone_validation = 2;
                        this.$data.codeSendFlag = 1;

                    }
                }

            }
        }
    };
</script>

<style lang="scss">
TabView {
 font-family: nanumgothiccoding-bold;
 font-size: 14;
 highlighted-color: lightgrey;
 tab-text-color: #F2F2F2;
 selected-tab-text-color: black;
 android-selected-tab-highlight-color: #848484;
 tab-background-color: lightgray;
}
</style>
