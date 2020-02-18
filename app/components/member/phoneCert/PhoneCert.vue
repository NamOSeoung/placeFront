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
                            <StackLayout class="findUserIdBarTitleWrap" >
                                   <label class="findUserIdBarTitle" text="휴대폰인증"  />
                            </StackLayout>
                     </StackLayout>
                     <StackLayout class="findPasswordPhoneCertWrap"  orientation="horizontal">
                            <StackLayout>
                                   <StackLayout class="findPasswordPhoneCertTitleWrap">
                                          <StackLayout class="" >
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
                                                        <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPhoneNo" ref="delPhone">
                                                               <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                                        </StackLayout>
                                                 </StackLayout>
                                          </StackLayout>
                                   </StackLayout>
                                   <StackLayout class="infoEnterValidation" v-if="phone_validation == 0" >
                                          <label class="infoEnterValidationGray" text="아이디, 비밀번호 찾기 시 필요한 정보입니다."/>
                                   </StackLayout>
                                   <StackLayout class="findPasswordPhoneCertWrongWrap" v-else-if="phone_validation == 1">
                                          <label class="findPasswordPhoneCertWrong" text="숫자만 기입 해 주세요." />
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="phoneCertWrap" v-if="codeSendFlag == 0" >
                                   <label class="findPasswordPhoneCertNumberRespone" text="인증번호받기" />
                            </StackLayout>
                            <StackLayout class="phoneCertWrap2" v-else-if="codeSendFlag==1" @tap="codeSend">
                                   <label class="findPasswordPhoneCertNumberRespone2" text="인증번호받기" />
                            </StackLayout>
                            <StackLayout class="phoneCertWrap2" v-else-if="codeSendFlag==2">
                                   <label class="findPasswordPhoneCertNumberRespone2" text="재전송"  />
                            </StackLayout>
                     </StackLayout>
              </StackLayout>
              <StackLayout v-if="codeSendFlag == 2">
                     <StackLayout class="findPasswordPhoneCertBottomWrap" orientation="horizontal">
                            <StackLayout>
                                   <StackLayout class="findPasswordPhoneCertTitleWrap">
                                          <StackLayout class="findPasswordPhoneCertTitleWrapWrap44" >
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
                                                                       v-model="sms_code"
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
                                   <label class="findPasswordPhoneCertCount" :text="'남은시간 '+minute+second " />
                            </StackLayout>
                     </StackLayout>
                     <StackLayout class="findPasswordPhoneCertWrongWrap" v-if="code_validation==1" >
                            <label class="findPasswordPhoneCertWrong" text="인증번호가 틀립니다." />
                     </StackLayout>
                     <StackLayout class="findPasswordPhoneCertWrongWrap" v-if="code_validation==2" >
                            <label class="findPasswordPhoneCertWrong" text="인증시간이 만료되었습니다 재전송 해 주세요." />
                     </StackLayout>
                     <StackLayout class="findUserIdOkButtomWrap">
                            <StackLayout v-if="sms_code.length==0">
                                   <StackLayout class="findUserIdOkButtomWrapWrap">
                                          <label class="findUserIdOkButtom" text="확인" />
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout v-else>
                                   <StackLayout class="findUserIdOkButtomWrapWrap2" @tap="codeCheck">
                                          <label class="findUserIdOkButtom2" text="확인" />
                                   </StackLayout>
                            </StackLayout>
                     </StackLayout>
              </StackLayout>
       </StackLayout>
       </Page>
</template>

<script>
       import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_320.scss';
       import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_360.scss';
       import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_420.scss';
       import '~/Resources/css/member/findUserInfo/FindPhoneCert/findPhoneCert_480.scss';

       import '~/Resources/css/member/phoneCert/PhoneCert/phoneCert_320.scss';
       import '~/Resources/css/member/phoneCert/PhoneCert/phoneCert_360.scss';
       import '~/Resources/css/member/phoneCert/PhoneCert/phoneCert_420.scss';
       import '~/Resources/css/member/phoneCert/PhoneCert/phoneCert_480.scss';

       import InfoEnter from '../infoEnter/InfoEnter'

       export default {
              name: 'PhoneCert',
              components: {},
              data: () => {
                     return {
                            minute:'2:',
                            second:'00',
                            minute_check:true,
                            codeSendFlag:0,
                            phone_no:'',
                            phone_validation:0,
                            bottomFlag:0,
                            code_validation:0,
                            sms_code:''
                     }
              },
              mounted() {
                     //setTimeout(() => {
                     //      this.$data.minute = '1:'
                     //      this.$data.second = 59
                     //}, 1000);
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
                                        this.$navigateTo(InfoEnter);
                                 }
                          }
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
                                                 return;
                                          }
                                          if(pattern1.test(phone_no)){
                                                 this.$data.phone_validation = 1;
                                                 return;
                                          }
                                          if(pattern2.test(phone_no)){
                                                 this.$data.phone_validation = 1;
                                                 return;
                                          }

                                   }

                                   if(phone_no.length == ''){
                                          this.$data.phone_validation = 0;
                                          this.$data.codeSendFlag = 0;
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

<style scoped lang="scss">

</style>
