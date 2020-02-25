<template lang="html">
 <StackLayout>
  <LoginWrap v-if="loginFlag" />
  <LogOutWrap v-else />
 </StackLayout>
</template>
<script>
    import LogOutWrap from './userInfo/LogOutWrap'
    import LoginWrap from './userInfo/LoginWrap'

    const appSettings = require("tns-core-modules/application-settings");

    export default {
        name:"SettingsWrap",
        components: {
         LogOutWrap,LoginWrap
        },data(){
         return{
             loginFlag:false,
         }
     },mounted() {
      if (appSettings.getString("user_id") != undefined) {

       if (appSettings.getString("user_id") != '') {
         this.$data.loginFlag = true;
       } else {
        this.$data.loginFlag = false;
       }
      } else {
       this.$data.loginFlag = false;
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
