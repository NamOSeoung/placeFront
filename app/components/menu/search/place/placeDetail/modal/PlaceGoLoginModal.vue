<template lang="html">
    <Page padding="0 0 0 0" >
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout backgroundColor="#ffffff" width="250" borderRadius="8" height="140" style="text-align: center">
                <StackLayout marginTop="23" width="100%">
                    <label text="로그인을 해주세요." style="font-family: nanumsquareroundb" fontSize="14" color="#333333"/>
                </StackLayout>
                <StackLayout orientation="horizontal">
                    <StackLayout  @tap="$modal.close"  marginLeft="10" marginTop="40" width="110" height="30" backgroundColor="#eeeeee" borderRadius="15" style="text-align: center">
                        <label text="취소" marginTop="8" style="font-family: nanumsquareroundb" fontSize="12" color="#494949"/>
                    </StackLayout>
                    <StackLayout  @tap="goLogin" marginLeft="10"   marginTop="40" width="110" height="30" backgroundColor="#ffe074" borderRadius="15" style="text-align: center">
                        <label text="로그인하기" marginTop="8" style="font-family: nanumsquareroundb" fontSize="12" color="#494949"/>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>
 import axios from 'axios';
 var clipboard = require("nativescript-clipboard");
 var Toast = require("nativescript-toast");
 var cache = require("nativescript-cache");
 var phone = require( "nativescript-phone" );

 import Login from '../../../../../member/Login'


 export default {
        name:"GoLoginModal",
        props:['phone_no'],
       data(){
           return {
               place_name : cache.get('place_name')
           }
       },
        components: {
        },mounted() {

     },methods:{
            goLogin(){
                this.$navigateTo(Login);
                this.$modal.close()
                //phone.dial(this.phone_no,true);
            }
     }
    };

</script>

<style lang="scss">

</style>
