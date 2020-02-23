<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
            <StackLayout>
                <StackLayout class="findUserIdBarWrap" orientation="horizontal"  >
                    <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                        <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
                    </StackLayout>
                    <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                        <label class="findUserIdBack" text="로그인"  />
                    </StackLayout>
                    <StackLayout class="findUserIdBarTitleWrap" >
                        <label class="findUserIdBarTitle" text="아이디 찾기"  />
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap"  >
                        <label text="휴대폰번호" class="findUserIdPhoneTitle"/>
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap"  orientation="horizontal">
                                <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                        <TextField
                                                class="findUserIdPhoneNumber"
                                                hint="000-0000-0000"
                                                [text]='name'
                                                secure="false"
                                                v-model="phone_no"
                                                ref="phone_no"
                                                keyboardType="number"
                                                returnKeyType="search"
                                                @returnPress="submit"
                                                autocorrect="false"
                                                maxLength="13"
                                                backgroundColor="#ffffff"
                                                (blur)="onBlur($event)">
                                        </TextField>
                                    </StackLayout>
                                    <StackLayout class="findUserIdPhoneDeleteWrap" @tap="phone_del" v-if="phone_no.length > 0">
                                        <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png"/>
                                    </StackLayout>
                            </StackLayout>
                        <StackLayout class="findPasswordPhoneCertWrongWrap" v-if="phone_validation == 1">
                            <label class="findPasswordPhoneCertWrong" text="숫자만 기입 해 주세요." />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdPhoneTitleWrap">
                    <StackLayout class="findUserIdPhoneTitleWrapWrap">
                        <label text="생년월일(6자리)" class="findUserIdPhoneTitle" />
                    </StackLayout>
                    <StackLayout class="findUserIdPhonerWrap" >
                        <StackLayout class="findUserIdPhoneNumberWrap" orientation="horizontal">
                            <StackLayout class="findUserIdPhoneNumberWrapWrap">
                                <TextField
                                        class="findUserIdPhoneNumber"
                                        hint="00/00/00"
                                        [text]='name'
                                        secure="false"
                                        returnKeyType="done"
                                        returnPressEvent="submit"
                                        autocorrect="false"
                                        maxLength="8"
                                        keyboardType="number"
                                        v-model="birthday"
                                        ref="birthday"
                                        backgroundColor="#ffffff"
                                        (focus)="onFocus($event)"
                                        (blur)="onBlur($event)">
                                </TextField>
                            </StackLayout>
                            <StackLayout class="findUserIdPhoneDeleteWrap" @tap="birth_del" v-if="birthday.length> 0">
                                <image class="findUserIdPhoneDelete" src="~/Resources/img/login/delete-circle.png" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout class="infoEnterValidation" v-if="birthday_validation == 1">
                            <label class="infoEnterValidationRed" text="6자리 숫자만 기입 해 주세요 " />
                        </StackLayout>
                        <StackLayout class="infoEnterValidation" v-else-if="birthday_validation == 2">
                            <label class="infoEnterValidationRed" text="올바른 생년월일을 입력 해 주세요." />
                        </StackLayout>

                        <StackLayout class="infoEnterValidation" v-if="user_exist==false">
                            <label class="infoEnterValidationRed" text="계정이 존재하지 않습니다." />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="findUserIdOkButtomWrap" >
                    <StackLayout v-if="input_check == false">
                        <StackLayout class="findUserIdOkButtomWrapWrap" >
                            <label class="findUserIdOkButtom" text="확인" />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout v-else>
                        <StackLayout class="findUserIdOkButtomWrapWrap2" @tap="idExistCheck">
                            <label class="findUserIdOkButtom2" text="확인" />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
       </Page>
</template>

<script>
       const platformModule = require("tns-core-modules/platform");

       import axios from 'axios'
       import findUserIdComplete from './FindUserIdComplete'

       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_320.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_360.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_420.scss';
       import '~/Resources/css/member/findUserInfo/FindCommon/findCommon_480.scss';

       export default {
              name:'FindUserId',
              components : {
              },
              data: () => {
                     return {
                         phone_no:'',
                         birthday:'',
                         phone_validation:'',
                         birthday_validation:'',
                         input_check:false,
                         user_exist:true,
                     }
              },methods:{
                   phone_del(){
                       this.$data.phone_no = '';
                   },birth_del(){
                       this.$data.birthday = '';
                   },idExistCheck(){
                   var birthday = this.$data.birthday;
                   console.log(birthday)
                       if(birthday.slice(0,2)=='00'){
                           birthday = birthday.replace(birthday.slice(0,2),20+birthday.slice(0,2)).replace('/','-').replace('/','-')
                       }else if(parseInt(birthday.slice(0,2))>21&&parseInt(birthday.slice(0,2))<=99){
                           birthday = birthday.replace(birthday.slice(0,2),19+birthday.slice(0,2)).replace('/','-').replace('/','-')
                       }else if(parseInt(birthday.slice(0,2))>0&&parseInt(birthday.slice(0,2))<21){
                           birthday = birthday.replace(birthday.slice(0,2),20+birthday.slice(0,2)).replace('/','-').replace('/','-')
                       }
                   axios({
                       method: 'get',
                       url: 'http://api.eatjeong.com/v1/users/general/findid',
                       params: {
                           phone_number:this.$data.phone_no,
                           birthday:birthday,
                       },
                   }).then((response) => {
                       console.log(response.data.dataList.length)
                       if(response.data.dataList.length == 0){
                          this.$data.user_exist = false;
                          return;
                       }else {
                           this.$data.user_exist = true;//계정이 존재함.
                           this.$navigateTo(findUserIdComplete);
                           this.$navigateTo(findUserIdComplete, {
                               props: {
                                   idList: response.data.dataList}});
                       }
                   }, (error) => {
                       console.log(error);
                   });
                   },submit(event){
                       console.log("333")
               }
              },
              mounted() {

              },watch:{
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
                       }else{
                           this.$data.phone_validation = 0;
                       }
                       if(pattern1.test(phone_no)){
                           this.$data.phone_validation = 1;
                           this.$data.input_check = false;
                           return;
                       }else{
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
                   if(this.$data.phone_validation == 2){
                       if(this.$data.birthday_validation == 4){
                           this.$data.input_check = true;
                       }else{
                           this.$data.input_check = false;
                       }
                   }else {
                       this.$data.input_check = false;
                   }

               }, birthday:function(){
                   this.$data.user_exist = true;
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
                               this.$data. input_check = false;
                               return;
                           }
                           this.$data.birthday =  birth1 + '/' + birth2 + '/' + birth3;
                           this.$data.birthday_validation = 4;
                           setTimeout(() => {
                               nativeView.android.setSelection(8)
                           }, 10);

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

                   if(this.$data.phone_validation == 2){
                       if(this.$data.birthday_validation == 4){
                           this.$data.input_check = true;
                       }else{
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
