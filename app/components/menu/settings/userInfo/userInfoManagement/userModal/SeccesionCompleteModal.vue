<template lang="html">
    <Page padding="0 0 0 0" @tap="alertClear">
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout backgroundColor="#ffffff" width="240" height="154" borderRadius="10">
                <StackLayout width="100%" style="text-align: center" marginTop="30">
                    <label text="탈퇴되었습니다." fontSize="14" color="#555555" />
                </StackLayout>
                <StackLayout  width="100%" style="text-align: center" marginTop="10">
                    <label text="이용해 주셔서 감사합니다." fontSize="14" color="#555555" />
                </StackLayout>
                <StackLayout marginTop="23.45" marginLeft="5" width="100" height="32" borderRadius="49" backgroundColor="#ffe074" style="text-align: center" @tap="alertClear">
                    <label text="확인" color="#555555" fontSize="13" style="font-family: nanumsquareroundr" width="25.55" height="15.05" marginTop="10" marginBottom="10"/>
                </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>

    import Login from '../../../../../member/Login'
 export default {
       name:"SeccessionCompleteModal",
       data(){
           return {
           }
       },
        components: {
        },mounted() {

     },methods:{
           alertClear(){

               this.$navigateTo(Login,{ clearHistory: true });
               this.$modal.close();
           }
     }
    };

</script>

<style lang="scss">

</style>
