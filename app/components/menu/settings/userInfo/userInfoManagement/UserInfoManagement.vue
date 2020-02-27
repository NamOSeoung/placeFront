<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" height="65" borderBottomWidth="1" borderBottomColor="#dddddd">
          <StackLayout width="28" height="28" marginLeft="6" marginTop="34" @tap="$navigateBack">
              <image src="~/Resources/img/home/angle-left.png" width="16" height="16"/>
          </StackLayout>
          <StackLayout marginTop="23" @tap="$navigateBack" height="13">
              <label text="내정보" color="#333333" fontSize="12" style="font-family: nanumsquareroundb" />
          </StackLayout>
          <StackLayout class="myInfoTitleWrap" >
              <label text="내 정보 관리" class="myInfoTitle"/>
          </StackLayout>
        </StackLayout>
         <StackLayout marginTop="37.45" v-if="sns_division=='K'">
             <StackLayout  orientation="horizontal">
                 <StackLayout  marginLeft="25"  width="44" height="13">
                     <label text="연동코드" color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout marginLeft="126">
                     <image src="~/Resources/img/user/kakaoicon.png" width="15" height="15" />
                 </StackLayout>
                 <StackLayout marginLeft="10" width="100">
                     <label text="KA00390208301" width="100" height="13" fontSize="12" color="#333333" fontFamily="nanumsquareroundr" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout  orientation="horizontal">
                 <StackLayout  marginLeft="25"  width="44" height="13">
                     <label text="이메일" color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout marginLeft="16%" style="text-align: right" width="55%" height="14.05">
                     <label :text="user_id" style="font-family: nanumsquareroundr" fontSize="12" color="#494949"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal" @tap="$navigateTo(NickNamePage)">
                 <StackLayout   marginLeft="25"  width="44" height="13">
                     <label text="닉네임"  color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout marginLeft="30%" style="text-align: right" width="40%" height="14.05">
                     <label :text="nickname" style="font-family: nanumsquareroundr" fontSize="12" color="#494949"/>
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9">
                     <image src="~/Resources/img/home/angle-right.png"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal"  @tap="$navigateTo(PhonePage)">
                 <StackLayout  marginLeft="25"  width="44" height="13">
                     <label text="휴대폰"  color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout marginLeft="26%" style="text-align: right" width="45%" height="14.05">
                     <label :text="phone_no" style="font-family: nanumsquareroundr" fontSize="12" color="#494949" />
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9">
                     <image src="~/Resources/img/home/angle-right.png"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45" v-if="sns_division=='C'">
             <StackLayout orientation="horizontal" @tap="$navigateTo(PasswordPage)">
                 <StackLayout marginLeft="25"  width="80" height="13">
                     <label text="비밀번호 변경" color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9" marginLeft="62%">
                     <image src="~/Resources/img/home/angle-right.png"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45"  v-if="sns_division=='C'">
             <StackLayout orientation="horizontal" @tap="$navigateTo(UserSecessionPage)">
                 <StackLayout marginLeft="25"  width="44" height="13" >
                     <label text="탈퇴하기" color="#333333" style="font-family: nanumsquareroundb"  fontSize="12"/>
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9" marginLeft="70%">
                     <image src="~/Resources/img/home/angle-right.png"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>
    import Password from './userInfoUpdate/Password'
    import NickName from './userInfoUpdate/NickName'
    import Phone from './userInfoUpdate/Phone'
    import UserSecession from './userInfoUpdate/UserSecession'

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        name:"UserInfoManagement",
        props:['my_info'],
        components: {
        },data(){
            return {
                PasswordPage:Password,
                NickNamePage:NickName,
                PhonePage:Phone,
                UserSecessionPage:UserSecession,
                sns_division:appSettings.getString("sns_division"),
                user_id:appSettings.getString("user_id"),
                nickname:this.my_info.nickname,
                phone_no:this.my_info.phone_number,
            }
        },mounted(){
            console.log(this.my_info.nickname)
        }
    };
</script>

<style lang="scss">

    $small:0.9;
    $medium:1.142;
    $large:1.5;


    .android320 .myInfoTitleWrap{
        margin-top: 21*$small;
        margin-left: 82*$small;
        width: 71*$small;
        height: 16*$small;
    }
    .android320 .myInfoTitle{
        font-family: nanumsquareroundb;
        font-size: 14*$small;
        color: #333333;
    }


    .android360 .myInfoTitleWrap{
        margin-top: 21;
        margin-left: 82;
        width: 71;
        height: 16;
    }
    .android360 .myInfoTitle{
        font-family: nanumsquareroundb;
        font-size: 14;
        color: #333333;
    }

    .android400 .myInfoTitleWrap{
        margin-top: 21*$medium;
        margin-left: 102*$medium;
        width: 71*$medium;
        height: 16*$medium;
    }
    .android400 .myInfoTitle{
        font-family: nanumsquareroundb;
        font-size: 14*$medium;
        color: #333333;
    }

    .android480 .myInfoTitleWrap{
        margin-top: 21*$large;
        margin-left: 82*$large;
        width: 71*$large;
        height: 16*$large;
    }
    .android480 .myInfoTitle{
        font-family: nanumsquareroundb;
        font-size: 14*$large;
        color: #333333;
    }



</style>
