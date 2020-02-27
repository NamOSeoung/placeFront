<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout orientation="horizontal" height="55" width="100%" borderBottomWidth="1" borderBottomColor="#dddddd" >
             <StackLayout class="findUserIdBarTitleWrap"  marginLeft="42%" width="25%" >
                 <label class="findUserIdBarTitle" text="탈퇴 안내" width="100%"  />
             </StackLayout>
             <StackLayout width="16" height="16" marginLeft="27%" marginTop="15" @tap="$navigateBack">
                 <image src="~/Resources/img/place/close_5_64_b.png"/>
             </StackLayout>
         </StackLayout>
         <StackLayout backgroundColor="#eff2f7" width="320" height="120" marginTop="30" padding="20 25">
             <StackLayout>
                 <label text="탈퇴 전 꼭 확인해 주세요!" style="font-family: nanumsquareroundr" fontSize="14" color="#444"/>
             </StackLayout>
             <StackLayout marginTop="20">
                 <label text="- 리뷰와 북마크 기록이 모두 삭제됩니다." style="font-family: nanumsquareroundr" fontSize="12" color="#444"/>
             </StackLayout>
             <StackLayout marginTop="15">
                 <label text="- 재가입 하셔도 데이터는 복구할 수 없습니다."  style="font-family: nanumsquareroundr" fontSize="12" color="#444"/>
             </StackLayout>
         </StackLayout>
         <StackLayout class="findUserIdPhoneTitleWrap" v-if="sns_division == 'C'">
             <StackLayout class="findUserIdPhoneTitleWrapWrap"  >
                 <label text="비밀번호" class="findUserIdPhoneTitle"/>
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
         <StackLayout class="infoEnterValidation" v-if="password_check_flag==false">
             <label class="infoEnterValidationRed" text="비밀번호가 일치하지 않습니다." />
         </StackLayout>
         <StackLayout orientation="horizontal">
             <StackLayout marginTop="23.45" marginLeft="20%" width="25%" height="32" borderRadius="49" backgroundColor="#dddddd" style="text-align: center" @tap="$navigateBack">
                 <label text="취소" color="#555555" fontSize="13" style="font-family: nanumsquareroundr" width="100%" height="15.05" marginTop="10" marginBottom="10"/>
             </StackLayout>
             <StackLayout v-if="password.length<1">
                 <StackLayout marginTop="23.45" marginLeft="15%" width="45%" height="32" borderRadius="49" backgroundColor="#dddddd" style="text-align: center">
                     <label text="탈퇴" color="#555555" fontSize="13" style="font-family: nanumsquareroundr" width="100%" height="15.05" marginTop="10" marginBottom="10"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout v-else>
                 <StackLayout marginTop="23.45" marginLeft="15%" width="45%" height="32" borderRadius="49" backgroundColor="#ffe074" style="text-align: center" @tap="userSeccession">
                     <label text="탈퇴" color="#555555" fontSize="13" style="font-family: nanumsquareroundr" width="100%" height="15.05" marginTop="10" marginBottom="10"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>
    import SeccessionCompleteModal from '../userModal/SeccesionCompleteModal'
    import Login from '../../../../../member/Login'
    import axios from 'axios'
    var Toast = require("nativescript-toast");
    const appSettings = require("tns-core-modules/application-settings");
    export default {
        name:"UserSecession",
        components: {
        },data(){
            return {
                password:'',
                password_check_flag:true,
                sns_division:appSettings.getString("sns_division")
            }
        },methods :{
            userSeccession(){
                var sns_division = this.$data.sns_division;
                if(sns_division == 'C') { //일반 사용자일 경우 처리.
                    axios({
                        method: 'put',
                        url: 'http://api.eatjeong.com/v1/users/general/accountclose',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            password:this.$data.password,
                        },
                    }).then((response) => {
                        console.log(response.data)
                        if(response.data.dataList.result_flag ==true){
                            appSettings.remove("user_id")
                            appSettings.remove("sns_divisoin")
                            //  this.$navigateTo(Login);
                            this.seccessionModal();
                        }else {
                            this.$data.password_check_flag = false;
                        }

                    }, (error) => {
                        console.log(error);
                        Toast.makeText('탈퇴 실패하였습니다. 잠시 후 다시 시도 해 주세요.').show();
                    });
                    // this.$data.password_check_flag = false;
                }

            },
            seccessionModal(){
                this.$showModal(SeccessionCompleteModal,{
                    props: {
                    },
                    fullscreen: true,
                    animated: true,
                    stretched: false,
                    dismissEnabled:true,
                    dimAmount: 0.5 // Sets the alpha of the background dim,
                });
            },delPassword(){
                this.$data.password=''
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
