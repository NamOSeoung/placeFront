<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true">
              <StackLayout>
                     <StackLayout class="findUserIdBarWrap" orientation="horizontal" height="65" >
                            <StackLayout class="findUserIdBarTitleWrap"  marginLeft="140" width="80" >
                                   <label class="findUserIdBarTitle" text="비밀번호 변경" width="80"  />
                            </StackLayout>
                     </StackLayout>
                     <StackLayout width="320" backgroundColor="#eee" marginTop="25" height="100" style="text-align: center" paddingTop="25">
                            <StackLayout>
                                   <label text="비밀번호를 90일동안 변경하지 않았습니다."  fontSize="12" fontFamily="nanumsquarer" color="#333333"/>
                            </StackLayout>
                            <StackLayout marginTop="15">
                                   <label text="개인 정보 보호를 위해 비밀번호를 변경해주세요." fontSize="12" fontFamily="nanumsquarer" color="#333333" />
                            </StackLayout>
                     </StackLayout>
                     <StackLayout>
                            <StackLayout>
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
                                          <StackLayout class="findUserIdPhoneDeleteWrap" v-if="password.length>0" @tap="passwordDel(1)">
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
                                          <StackLayout class="findUserIdPhoneDeleteWrap"  v-if="password2.length>0" @tap="passwordDel(2)">
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
                            <StackLayout orientation="horizontal" marginLeft="65">
                                   <StackLayout marginTop="23.45" width="100" height="32" borderRadius="16" backgroundColor="#dddddd" style="text-align: center">
                                          <label text="다음에 변경" width="100"  color="#555555" fontSize="12" style="font-family: nanumsquareroundb"  height="13" marginTop="9" marginBottom="9"/>
                                   </StackLayout>
                                   <StackLayout marginTop="23.45" width="100" marginLeft="30" height="32" borderRadius="16" backgroundColor="#dddddd" style="text-align: center" v-if="input_check==false" >
                                          <label text="변경 하기" width="100"  color="#555555" fontSize="12" style="font-family: nanumsquareroundb" height="13" marginTop="9" marginBottom="9"/>
                                   </StackLayout>
                                   <StackLayout marginTop="23.45" width="100" marginLeft="30" height="32" borderRadius="16" backgroundColor="#ffe074" style="text-align: center" v-else @tap="chagePassword">
                                          <label text="변경 하기" width="100"  color="#555555" fontSize="12" style="font-family: nanumsquareroundb" height="13" marginTop="9" marginBottom="9"/>
                                   </StackLayout>
                            </StackLayout>

                     </StackLayout>
              </StackLayout>
       </Page>
</template>

<script>

       import axios from 'axios';
       const appSettings = require("tns-core-modules/application-settings"); //sharedpreferences;
       import MenuWrap from '../../menu/MenuWrap'
       export default {
              name:'PasswordExcess',
              props:['user_id'],
              components : {
              },
              data: () => {
                     return {
                            password_validation:0,
                            password2_validation:0,
                            password:'',
                            password2:'',
                            input_check:false
                     }
              },
              mounted() {
                     console.log(this.user_id)
              },methods:{
                     chagePassword(){
                            console.log('2')

                            axios({
                                   method: 'put',
                                   url: 'http://api.eatjeong.com/v1/users/general/password',
                                   params: {
                                          email:this.user_id,
                                          password:this.$data.password,
                                          sns_division:'C'
                                   },
                            }).then((response) => {
                                   console.log(response.data.dataList)
                                   if(response.data.dataList.result_flag == true){
                                          appSettings.setString("user_id",this.user_id);
                                          appSettings.setString("sns_division","C");
                                          console.log(appSettings.getString("user_id"))
                                          this.$navigateTo(MenuWrap,{ clearHistory: true });
                                   }
                            }, (error) => {
                                   console.log(error)
                                   Toast.makeText("로그인 오류가 발생하였습니다. 잠시 후 다시 시도 해 주세요.").show();
                            });

                     },passwordDel(division){
                            if(division == 1){
                                   this.$data.password = '';
                            }else{
                                   this.$data.password2 = '';
                            }
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
              }
       };
</script>

<style scoped lang="scss">

</style>
