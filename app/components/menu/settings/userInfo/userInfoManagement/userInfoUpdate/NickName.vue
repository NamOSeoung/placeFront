<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
             <StackLayout class="findUserIdBarWrap" orientation="horizontal" height="65" >
                 <StackLayout class="findUserIdBarTitleWrap"  marginLeft="150" width="68" >
                     <label class="findUserIdBarTitle" text="닉네임 수정" width="68"  />
                 </StackLayout>
                 <StackLayout width="16" height="16" marginLeft="95" marginTop="15" @tap="$navigateBack">
                     <image src="~/Resources/img/place/close_5_64_b.png"/>
                 </StackLayout>
             </StackLayout>
         <StackLayout marginTop="28">
             <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal" >
                 <StackLayout class="infoEnterCommonContentsWrapWrap" >
                     <TextField
                             class="infoEnterCommonContents"
                             hint="닉네임을 입력 해 주세요."
                             [text]='name'
                             secure="false"
                             v-model="nickname"
                             returnKeyType="done"
                             (returnPress)="onReturnPress($event)"
                             autocorrect="false"
                             maxLength="12"
                             (focus)="onFocus($event)"
                             (blur)="onBlur($event)">
                     </TextField>
                 </StackLayout>
                 <StackLayout class="findUserIdPhoneDeleteWrap">
                     <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-if="nickname_validation == 0" >
                 <label class="infoEnterValidationGray" text="한글, 영문, 숫자 2~10자"/>
             </StackLayout>
             <StackLayout class="infoEnterValidation" v-else-if="nickname_validation == 1">
                 <label class="infoEnterValidationRed" text="특수문자를 제외한 한글,영문,숫자 2~10자이내로 기입 해 주세요." />
             </StackLayout>

             <StackLayout marginTop="23.45" width="100" height="32" borderRadius="16" backgroundColor="#dddddd" style="text-align: center" v-if="input_check == false">
                 <label text="저장" color="#ffffff" fontSize="12" style="font-family: nanumsquareroundb" width="22" height="13" marginTop="9" marginBottom="9"/>
             </StackLayout>
             <StackLayout marginTop="23.45" width="100" height="32" borderRadius="16" backgroundColor="#ffe074" style="text-align: center" v-else @tap="nicknameUpdate">
                 <label text="저장" color="#555555" fontSize="12" style="font-family: nanumsquareroundb" width="22" height="13" marginTop="9" marginBottom="9"/>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>
    import axios from 'axios'
    const appSettings = require("tns-core-modules/application-settings");

    export default {
        name:"NickName",
        components: {
        },data(){
            return {
                nickname_validation:0,
                nickname:'',
                input_check:false
            }
        },watch:{
            nickname:function(){
                var nickname = this.$data.nickname;

                let re = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
                // console.log(re.test(nickname));
                // console.log(nickname.search(/\s/))
                if(nickname == ''){
                    this.$data.nickname_validation = 0;
                    this.$data.input_check = false;
                    return;
                }

                if(nickname.length < 2){
                    this.$data.nickname_validation = 1;
                    this.$data.input_check = false;
                    return;
                }
                if(re.test(nickname) == true){
                    this.$data.nickname_validation = 1;
                }else{
                    if(nickname.search(/\s/)!= -1){
                        this.$data.nickname_validation = 1;
                    }else{
                        this.$data.nickname_validation = 2;
                    }
                }

                    if(this.$data.nickname_validation == 2){
                        this.$data.input_check = true;
                    }else {
                        this.$data.input_check = false;
                    }
            }
        },methods:{
            nicknameUpdate(){
                axios({
                    method: 'put',
                    url: 'http://api.eatjeong.com/v1/users/general/nickname',
                    params: {
                        user_id : appSettings.getString("user_id"),
                        nickname : this.$data.nickname,
                    },
                }).then((response) => {
                    console.log(response.data);
                }, (error) => {
                    console.log(error);
                });
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
