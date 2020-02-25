<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout orientation="horizontal" height="65" borderBottomWidth="1.05" borderBottomColor="#dddddd" paddingBottom="21">
             <StackLayout marginTop="26" marginLeft="140" width="80" height="16">
                 <label text="비밀번호 변경"  style="font-family: nanumsquareroundb" fontSize="14" color="#333333" />
             </StackLayout>
             <StackLayout width="16" height="16" marginLeft="110" marginTop="27" @tap="$navigateBack">
<!--                 <FIcon name="fa-times" color="#555555"  fontSize="23.45"/>-->
                 <image src="~/Resources/img/place/close_5_64_b.png"/>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="10">
             <StackLayout class="infoEnterCommonTitleWrap" >
                 <label class="infoEnterCommonTitle" text="새 비밀번호" />
             </StackLayout>
             <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal" >
                 <StackLayout class="infoEnterCommonContentsWrapWrap">
                     <TextField
                             class="infoEnterCommonContents"
                             hint="비밀번호"
                             [text]='name'
                             secure="true"
                             v-model="password"
                             returnKeyType="done"
                             (returnPress)="onReturnPress($event)"
                             autocorrect="false"
                             maxLength="50"
                             (focus)="onFocus($event)"
                             (blur)="onBlur($event)">
                     </TextField>
                 </StackLayout>
                 <StackLayout class="findUserIdPhoneDeleteWrap"  @tap="passwordDel(1)" v-if="password.length>0">
                     <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-if="password_validation == 0">
                 <label class="infoEnterValidationGray" text="8~15자 이내로 영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요." />
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-else-if="password_validation == 1" >
                 <label class="infoEnterValidationRed" text="8~15자 이내로 영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요." />
             </StackLayout>
             <StackLayout class="infoEnterCommonTitleWrap" >
                 <label class="infoEnterCommonTitle" text="새 비밀번호확인" />
             </StackLayout>
             <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal"  >
                 <StackLayout class="infoEnterCommonContentsWrapWrap" >
                     <TextField class="infoEnterCommonContents"
                                hint="비밀번호 확인"
                                [text]='name'
                                secure="true"
                                v-model="password2"
                                returnKeyType="done"
                                (returnPress)="onReturnPress($event)"
                                autocorrect="false"
                                maxLength="50"
                                (focus)="onFocus($event)"
                                (blur)="onBlur($event)">
                     </TextField>
                 </StackLayout>
                 <StackLayout class="findUserIdPhoneDeleteWrap" @tap="passwordDel(2)" v-if="password2.length>0">
                     <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-if="password2_validation==0" >
                 <label class="infoEnterValidationRed" text="비밀번호 확인란을 입력 해 주세요." />
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-else-if="password2_validation==1" >
                 <label class="infoEnterValidationRed" text="비밀번호가 일치하지 않습니다." />
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-else-if="password2_validation==2" >
                 <label class="infoEnterValidationRed" text="상단 비밀번호 설정 후 기입 해 주세요." />
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="23.45" width="100" height="32" borderRadius="16" backgroundColor="#dddddd" style="text-align: center" v-if="input_check==false">
             <label text="변경" color="#ffffff" fontSize="12" style="font-family: nanumsquareroundb" width="22" height="13" marginTop="9" marginBottom="9"/>
         </StackLayout>
         <StackLayout marginTop="23.45" width="100" height="32" borderRadius="16" backgroundColor="#ffe074" style="text-align: center" v-else @tap="chagePassword">
             <label text="변경" color="#555555" fontSize="12" style="font-family: nanumsquareroundb" width="22" height="13" marginTop="9" marginBottom="9"/>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    import axios from 'axios';
    const appSettings = require("tns-core-modules/application-settings");
    var dialogs = require("tns-core-modules/ui/dialogs");
    export default {
        name:"Password",
        components: {
        },data(){
            return {
                password_validation:0,
                password2_validation:0,
                password:'',
                password2:'',
                input_check:false
            }
        },watch :{
            password:function(){
                var password = this.$data.password;
                var password2 = this.$data.password2;

                if(password == ''){
                    this.$data.password_validation = 0;
                    this.$data.input_check = false;
                    return;
                }

                if(this.$data.input_check == true){
                    if(password != password2){
                        this.$data.input_check = false;
                        return;
                    }
                }

                if(password2!=''){
                    if(password != password2){
                        this.$data.input_check = false;
                        return;
                    }
                }
                if(password.length > 15 || password.length < 8){
                    this.$data.password_validation = 1;
                    this.$data.input_check = false;
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
            password2:function(){
                var password = this.$data.password;
                var password2 = this.$data.password2;

                if(password2 == ''){
                    this.$data.password2_validation = 0;
                    this.$data.input_check = false;
                    return;
                }

                if(this.$data.input_check == true){
                    if(password != password2){
                        this.$data.input_check = false;
                        return;
                    }
                }
                if(password2!=''){
                    if(password != password2){
                        this.$data.input_check = false;
                        return;
                    }
                }


                if(this.$data.password_validation<2){
                    this.$data.password2_validation = 2;
                    this.$data.input_check = false;
                    return;
                }

                if(password != password2){
                    this.$data.password2_validation = 1;
                }else{
                    this.$data.password2_validation = 3;
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
            }
        },methods :{
            passwordDel(division){
                if(division == 1){ //그냥 비밀번호일때
                     this.$data.password = '';
                }else{  //비밀번호 체크일때
                    this.$data.password2 = '';
                }
            },chagePassword(){

                axios({
                    method: 'put',
                    url: 'http://api.eatjeong.com/v1/users/general/password',
                    params: {
                        email : appSettings.getString("user_id"),
                        password : this.$data.password,
                        sns_division : appSettings.getString("sns_division")
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


                console.log('패스워드 변경')
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
