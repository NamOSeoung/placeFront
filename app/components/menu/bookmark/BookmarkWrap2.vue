<template lang="html">
 <StackLayout backgroundColor="#eff2f7" height="100%">
  <StackLayout class="loginTitleWrap" >
   <label class="loginTitleContents" text="오늘은 어떤 식사를 하나요?" />
  </StackLayout>
  <StackLayout class="loginInfoWrap" >
   <StackLayout class="infoTextWrap">
    <label class="infoText" text="로그인을 해 주세요." />
   </StackLayout>
   <StackLayout class="loginTextWrap" @tap="goLogin">
    <label class="loginText" text="로그인하기" />
   </StackLayout>
  </StackLayout>
 </StackLayout>
</template>

<script>
 import Login from '../../member/Login'

 import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_320.scss';
 import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_360.scss';
 import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_420.scss';
 import '~/Resources/css/menu/settings/userInfo/LogoutWrap/logoutWrap_480.scss';

    export default {
        name:"BookmarkWrap2",
        components: {
     },

     mounted () {
      // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
     },
     data() {
      return {
      };
     },
     methods: {
      goLogin(){
        this.$navigateTo(Login)
      }
     }
    };
</script>

<style lang="scss">

</style>
