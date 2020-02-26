<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
              <StackLayout>
                     <StackLayout>
                            <StackLayout class="findUserIdBarWrap" orientation="horizontal">
                                   <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                                          <image src="~/Resources/img/home/angle-left.png" className="findUserIdBackIcon"/>
                                   </StackLayout>
                                   <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                                          <label className="findUserIdBack" text="로그인"/>
                                   </StackLayout>
                                   <StackLayout class="findUserPasswordBarTitleWrap">
                                          <label className="findUserPasswordBarTitle" text="정보입력"/>
                                   </StackLayout>
                            </StackLayout>
                     </StackLayout>
                     <ScrollView height="100%">
                     <StackLayout>
                            <StackLayout class="infoEnterCommonTitleWrap" >
                                   <label class="infoEnterCommonTitle"  text="이메일"  />
                            </StackLayout>
                            <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal">
                                   <StackLayout class="infoEnterCommonContentsWrapWrap"  >
                                          <TextField class="infoEnterCommonContents"
                                                  hint="이메일을 기입 해 주세요."
                                                  [text]='name'
                                                  secure="false"
                                                  v-model="user_id"
                                                  returnKeyType="done"
                                                  (returnPress)="onReturnPress($event)"
                                                  autocorrect="false"
                                                  maxLength="50"
                                                  (focus)="onFocus($event)"
                                                  (blur)="onBlur($event)">
                                          </TextField>
                                   </StackLayout>
                                   <StackLayout class="findUserIdPhoneDeleteWrap" v-if="user_id.length>0">
                                          <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-if="email_valication == 0">
                                   <label class="infoEnterValidationRed" text="이메일을 기입 해 주세요." />
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="email_valication == 1">
                                   <label class="infoEnterValidationRed" text="올바른 이메일 형식이 아닙니다." />
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="email_valication == 2">
                                   <label class="infoEnterValidationRed" text="이미 가입 된 이메일입니다." />
                            </StackLayout>
                            <StackLayout class="infoEnterCommonTitleWrap" >
                                   <label class="infoEnterCommonTitle" text="닉네임" />
                            </StackLayout>
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
                                   <StackLayout class="findUserIdPhoneDeleteWrap" v-if="nickname.length > 0">
                                          <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-if="nickname_validation == 0" >
                                   <label class="infoEnterValidationGray" text="한글, 영문, 숫자 2~10자"/>
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="nickname_validation == 1">
                                   <label class="infoEnterValidationRed" text="특수문자를 제외한 한글,영문,숫자 2~10자이내로 기입 해 주세요." />
                            </StackLayout>

                            <StackLayout class="infoEnterCommonTitleWrap" orientation="horizontal" >
                                   <StackLayout class="infoEnterBirthTitleWrap">
                                          <label class="infoEnterCommonTitle" text="생년월일(6자리)" />
                                   </StackLayout>
                                  <StackLayout class="infoEnterBirthIconWrap">
                                          <image src="~/Resources/img/memberJoin/warning.png" />
                                  </StackLayout>
                                   <StackLayout class="infoEnterBirthMessageWrap" >
                                          <label class="infoEnterBirthMessage" text="만 14세 미만은 가입할 수 없습니다." />
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal" >
                                   <StackLayout class="infoEnterCommonContentsWrapWrap" >
                                          <TextField class="infoEnterCommonContents"
                                                     hint="00/00/00"
                                                     [text]='name'
                                                     secure="false"
                                                     v-model="birthday"
                                                     ref="birthday"
                                                     returnKeyType="done"
                                                     (returnPress)="onReturnPress($event)"
                                                     autocorrect="false"
                                                     maxLength="8"
                                                     (focus)="this.value = this.value"
                                                     (blur)="onBlur($event)">
                                          </TextField>
                                   </StackLayout>
                                   <StackLayout class="findUserIdPhoneDeleteWrap" v-if="birthday.length > 0">
                                          <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-if="birthday_validation==0" >
                                   <label class="infoEnterValidationGray" text="아이디 찾기 시 필요한 정보입니다." />
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="birthday_validation == 1">
                                   <label class="infoEnterValidationRed" text="6자리 숫자만 기입 해 주세요 " />
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="birthday_validation == 2">
                                   <label class="infoEnterValidationRed" text="올바른 생년월일을 입력 해 주세요." />
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-else-if="birthday_validation == 3">
                                   <label class="infoEnterValidationRed" text="만 14세 미만은 가입할 수 없습니다." />
                            </StackLayout>

                            <StackLayout class="infoEnterCommonTitleWrap" >
                                   <label class="infoEnterCommonTitle" text="비밀번호"/>
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
                                   <StackLayout class="findUserIdPhoneDeleteWrap" v-if="password.length>0">
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
                                   <label class="infoEnterCommonTitle" text="비밀번호확인" />
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
                                   <StackLayout class="findUserIdPhoneDeleteWrap" v-if="password2.length>0">
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

                            <StackLayout class="infoEnterCommonTitleWrap" >
                                   <label class="infoEnterCommonTitle" text="휴대폰번호" />
                            </StackLayout>
                            <StackLayout class="infoEnterCommonContentsWrap" orientation="horizontal"  >
                                   <StackLayout class="infoEnterCommonContentsWrapWrap" >
                                          <TextField class="infoEnterCommonContents"
                                                     hint="010-0000-0000"
                                                     [text]='name'
                                                     secure="false"
                                                     v-model="phone_no"
                                                     ref="phone_no"
                                                     keyboardType="number"
                                                     returnKeyType="done"
                                                     (returnPress)="onReturnPress($event)"
                                                     autocorrect="false"
                                                     maxLength="50"
                                                     (focus)="onFocus($event)"
                                                     (blur)="onBlur($event)">
                                          </TextField>
                                   </StackLayout>
                                   <StackLayout class="findUserIdPhoneDeleteWrap" @tap="delPhoneNo" v-if="phone_no.length > 0">
                                          <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="infoEnterValidation" v-if="phone_validation == 0" >
                                   <label class="infoEnterValidationGray" text="아이디, 비밀번호 찾기 시 필요한 정보입니다."/>
                            </StackLayout>
                            <StackLayout class="findPasswordPhoneCertWrongWrap" v-else-if="phone_validation == 1">
                                   <label class="findPasswordPhoneCertWrong" text="숫자만 기입 해 주세요." />
                            </StackLayout>

                            <StackLayout class="infoEnterCommonTitleWrap" >
                                   <label class="infoEnterCommonTitle" text="성별 선택"  />
                            </StackLayout>
                            <StackLayout class="infoEnterGenderWrap" orientation="horizontal">


                                   <StackLayout v-if="gender_select==0" @tap="genderSelect(0)">
                                          <StackLayout class="infoEnterGenderIconWrap" >
                                                 <StackLayout class="infoEnterGenderIcon" />
                                          </StackLayout>
                                   </StackLayout>

                                   <StackLayout v-else @tap="genderSelect(0)">
                                          <StackLayout class="infoEnterGenderIconWrap2" />
                                   </StackLayout>

                                   <StackLayout class="infoEnterGenderTitleWrap" @tap="genderSelect(0)">
                                          <label class="infoEnterGenderTitle" text="선택 안 함"  />
                                   </StackLayout>


                                   <StackLayout v-if="gender_select==1" @tap="genderSelect(1)">
                                          <StackLayout class="infoEnterGenderIconWrap" >
                                                 <StackLayout class="infoEnterGenderIcon" />
                                          </StackLayout>
                                   </StackLayout>

                                   <StackLayout v-else @tap="genderSelect(1)">
                                          <StackLayout class="infoEnterGenderIconWrap2" />
                                   </StackLayout>


                                   <StackLayout class="infoEnterGenderTitleWrap" @tap="genderSelect(1)">
                                          <label class="infoEnterGenderTitle" text="여자" />
                                   </StackLayout>

                                   <StackLayout v-if="gender_select==2" @tap="genderSelect(2)">
                                          <StackLayout class="infoEnterGenderIconWrap" >
                                                 <StackLayout class="infoEnterGenderIcon" />
                                          </StackLayout>
                                   </StackLayout>

                                   <StackLayout v-else @tap="genderSelect(2)">
                                          <StackLayout class="infoEnterGenderIconWrap2" />
                                   </StackLayout>

                                   <StackLayout  class="infoEnterGenderTitleWrap"  @tap="genderSelect(2)">
                                          <label class="infoEnterGenderTitle" text="남자"  />
                                   </StackLayout>
                            </StackLayout>
                            <StackLayout class="joinOkWrap" v-if="input_check == false">
                                   <label class="joinOk" text="가입하기"   />
                            </StackLayout>
                            <StackLayout class="joinOkWrap2" v-else @tap="userJoin">
                                   <label class="joinOk2" text="가입하기"   />
                            </StackLayout>
                     </StackLayout>
                     </ScrollView>
              </StackLayout>
       </Page>
</template>

<script>
       import axios from 'axios';
       var Toast = require("nativescript-toast");

       import Login from '../Login'
       import '~/Resources/css/member/infoEnter/InfoEnter/infoEnter_320.scss';
       import '~/Resources/css/member/infoEnter/InfoEnter/infoEnter_360.scss';
       import '~/Resources/css/member/infoEnter/InfoEnter/infoEnter_420.scss';
       import '~/Resources/css/member/infoEnter/InfoEnter/infoEnter_480.scss';

       export default {
              name: 'InfoEnter',
              components: {},
              data: () => {
                     return {
                            user_id:'',
                            email_valication:0,
                            nickname_validation:0,
                            birthday_validation:0,
                            password_validation:0,
                            password2_validation:0,
                            gender_select:0,
                            password:'',
                            password2:'',
                            gender:'none',
                            nickname:'',
                            birthday: '',
                            input_check:false,
                            phone_no:'',
                            phone_validation:0,
                     }
              },
              mounted() {

              },methods:{
                     delPhoneNo() {
                            this.$data.phone_no = '';
                     },
                     userJoin(){

                            var birthday = this.$data.birthday;
                            console.log(birthday)
                            if(birthday.slice(0,2)=='00'){
                                   birthday = birthday.replace(birthday.slice(0,2),20+birthday.slice(0,2)).replace('/','-').replace('/','-')
                            }else if(parseInt(birthday.slice(0,2))>21&&parseInt(birthday.slice(0,2))<=99){
                                   birthday = birthday.replace(birthday.slice(0,2),19+birthday.slice(0,2)).replace('/','-').replace('/','-')
                            }else if(parseInt(birthday.slice(0,2))>0&&parseInt(birthday.slice(0,2))<21){
                                   birthday = birthday.replace(birthday.slice(0,2),20+birthday.slice(0,2)).replace('/','-').replace('/','-')
                            }

                            console.log(birthday)
                            axios({
                                   method: 'post',
                                   url: 'http://api.eatjeong.com/v1/users/general/signup',
                                   params: {
                                          email:this.$data.user_id,
                                          password:this.$data.password,
                                          gender:this.$data.gender,
                                          nickname:this.$data.nickname,
                                          birthday:birthday,
                                          phone_number:this.$data.phone_no
                                   },
                            }).then((response) => {
                                   console.log(response.data.code)
                                   if(response.data.code == 409){
                                          this.$data.email_valication = 2;
                                          this.$data.input_check = false;
                                   }else {
                                          Toast.makeText("회원가입 성공하였습니다. 로그인 해 주세요.").show();
                                          this.$navigateTo(Login);
                                   }
                            }, (error) => {
                                   console.log(error);
                            });
                     },genderSelect(gender){
                            this.$data.gender_select = gender;

                            if(gender == 1){
                                   this.$data.gender = 'female'
                            }else if(gender == 2){
                                   this.$data.gender = 'male'
                            }else{
                                   this.$data.gender = 'none'
                            }
                            console.log( this.$data.gender_select);
                     }
              },watch :{
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

                     },
                     user_id:function(){
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
                                   if(this.$data.nickname_validation == 2){
                                          if(this.$data.birthday_validation == 4){
                                                 if(this.$data.password_validation == 2){
                                                        if(this.$data.password2_validation == 3){
                                                               this.$data.input_check = true;
                                                        }else {
                                                               this.$data.input_check = false;
                                                        }
                                                 }else {
                                                        this.$data.input_check = false;
                                                 }
                                          }else {
                                                 this.$data.input_check = false;
                                          }
                                   }else {
                                          this.$data.input_check = false;
                                   }
                            }else {
                                   this.$data.input_check = false;
                            }
                     },
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

                            if(this.$data.email_valication == 3){
                                   if(this.$data.nickname_validation == 2){
                                          if(this.$data.birthday_validation == 4){
                                                 if(this.$data.password_validation == 2){
                                                        if(this.$data.password2_validation == 3){
                                                               this.$data.input_check = true;
                                                        }else {
                                                               this.$data.input_check = false;
                                                        }
                                                 }else {
                                                        this.$data.input_check = false;
                                                 }
                                          }else {
                                                 this.$data.input_check = false;
                                          }
                                   }else {
                                          this.$data.input_check = false;
                                   }
                            }else {
                                   this.$data.input_check = false;
                            }
                     },
                     birthday:function(){
                            var today = new Date();
                            var dd = today.getDate();
                            var mm = today.getMonth()+1; //January is 0!
                            var yyyy = today.getFullYear();

                            var birthday = this.$data.birthday;
                            const nativeView = this.$refs.birthday.nativeView;

                            let re = /[^0-9]/g;
                            if(birthday == ''){
                                   this.$data.birthday_validation = 0;
                                   this.$data.input_check = false;
                                   return;
                            }
                            if(birthday.length < 6){
                                   this.$data.birthday_validation = 1;
                                   this.$data.input_check = false;
                                   return;
                            }else if(birthday.length==6){
                                   if(re.test(birthday) == true){
                                          this.$data.birthday_validation = 1;
                                   }else{
                                          var birth1 = this.$data.birthday.slice(0,2)
                                          var birth2 = this.$data.birthday.slice(2,4)
                                          var birth3 = this.$data.birthday.slice(4,6)

                                          if(birth2>12||parseInt(birth2)<1){
                                                 this.$data.birthday_validation = 2;
                                                 this.$data.input_check = false;
                                                 return;
                                          }

                                          if(birth3>31||parseInt(birth3)<1){
                                                 this.$data.birthday_validation = 2;
                                                 this.$data.input_check = false;
                                                 return;
                                          }

                                          if(parseInt(parseInt(birth1)+14) > parseInt(yyyy.toString().slice(2,4))){
                                                 if((parseInt(birth1)+14)<100){
                                                        this.$data.birthday_validation = 3;
                                                        this.$data.input_check = false;
                                                        return;
                                                 }
                                          }else{
                                                 if(parseInt(parseInt(birth1)+14) == parseInt(yyyy.toString().slice(2,4))){
                                                        if( mm < parseInt(birth2)){
                                                               this.$data.birthday_validation = 3;
                                                               this.$data.input_check = false;
                                                               return;
                                                        }else{
                                                               if( mm == parseInt(birth2)){
                                                                      if(dd < parseInt(birth3)){
                                                                             this.$data.birthday_validation = 3;
                                                                             this.$data.input_check = false;
                                                                             return;
                                                                      }
                                                               }
                                                        }
                                                 }
                                          }

                                          this.$data.birthday =  birth1 + '/' + birth2 + '/' + birth3;
                                          this.$data.birthday_validation = 4;
                                          setTimeout(() => {
                                                 nativeView.android.setSelection(8)
                                          }, 10);

                                          //this.$data.birthday_validation = 2;
                                   }
                            }else if(birthday.length==7){
                                   var birth1 = this.$data.birthday.slice(0,2)
                                   var birth2 = this.$data.birthday.slice(3,5)
                                   var birth3 = this.$data.birthday.slice(6,7)
                                   this.$data.birthday =  birth1 + birth2 + birth3;

                                   this.$data.birthday_validation = 1;
                                   setTimeout(() => {
                                          nativeView.android.setSelection(5)
                                   }, 10);
                                   this.$data.input_check = false;

                            } else{
                                   this.$data.birthday_validation = 4;

                            }
                            if(this.$data.email_valication == 3){
                                   if(this.$data.nickname_validation == 2){
                                          if(this.$data.birthday_validation == 4){
                                                 if(this.$data.password_validation == 2){
                                                        if(this.$data.password2_validation == 3){
                                                               this.$data.input_check = true;
                                                        }else {
                                                               this.$data.input_check = false;
                                                        }
                                                 }else {
                                                        this.$data.input_check = false;
                                                 }
                                          }else {
                                                 this.$data.input_check = false;
                                          }
                                   }else {
                                          this.$data.input_check = false;
                                   }
                            }else {
                                   this.$data.input_check = false;
                            }

                     },
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

                            if(this.$data.email_valication == 3){
                                   if(this.$data.nickname_validation == 2){
                                          if(this.$data.birthday_validation == 4){
                                                 if(this.$data.password_validation == 2){
                                                        if(this.$data.password2_validation == 3){
                                                               this.$data.input_check = true;
                                                        }else {
                                                               this.$data.input_check = false;
                                                        }
                                                 }else {
                                                        this.$data.input_check = false;
                                                 }
                                          }else {
                                                 this.$data.input_check = false;
                                          }
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

                            if(this.$data.email_valication == 3){
                                   if(this.$data.nickname_validation == 2){
                                          if(this.$data.birthday_validation == 4){
                                                 if(this.$data.password_validation == 2){
                                                        if(this.$data.password2_validation == 3){
                                                               this.$data.input_check = true;
                                                        }else {
                                                               this.$data.input_check = false;
                                                        }
                                                 }else {
                                                        this.$data.input_check = false;
                                                 }
                                          }else {
                                                 this.$data.input_check = false;
                                          }
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
