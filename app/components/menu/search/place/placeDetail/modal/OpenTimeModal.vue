<template lang="html">
    <Page padding="0 0 0 0" >
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout backgroundColor="#ffffff" width="212" borderRadius="8" height="275">
                <StackLayout marginTop="23" width="100%" style="text-align: center">
                    <label text="영업시간" style="font-family: nanumsquareroundb" fontSize="14" color="#494949"/>
                </StackLayout>
                <StackLayout  marginTop="5" paddingLeft="20" paddingRight="20">
                   <StackLayout v-for="(list,index) in dataList" marginTop="10">
                        <StackLayout v-if="index == toDay">
                           <StackLayout>
                               <label :text="list" fontSize="12" color="#555555" fontFamily="nanumsquareroundeb"/>
                           </StackLayout>
                        </StackLayout>
                       <StackLayout v-else>
                           <StackLayout>
                               <label :text="list" fontSize="12" color="#888888" fontFamily="nanumsquareroundr"/>
                           </StackLayout>
                       </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout  @tap="$modal.close" marginTop="16" width="174" height="26" backgroundColor="#eeeeee" borderRadius="6" style="text-align: center">
                    <label text="닫기" marginTop="7" style="font-family: nanumsquareroundb" fontSize="12" color="#494949"/>
                </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>
 import axios from 'axios';
 var clipboard = require("nativescript-clipboard");
 var Toast = require("nativescript-toast");

    export default {
        name:"OpenTimeModal",
        props:['openTimeList'],
       data(){
           return {
               dataList:[],
               toDay:'',
           }
       },
        components: {
        },mounted() {
            console.log("openTimeList"+this.openTimeList)
            this.$data.dataList = JSON.parse(this.openTimeList);
            console.log(this.$data.dataList)


            var date = new Date();
            var day = date.toDateString().split(" ")[0];
            console.log(day);
            if(day == 'Mon'){
                this.$data.toDay = 0
            }else if(day == 'Tue'){
                this.$data.toDay = 1
            }else if(day == 'Wed'){
                this.$data.toDay = 2
            }else if(day == 'Thu'){
                this.$data.toDay = 3
            }else if(day == 'Fri'){
                this.$data.toDay = 4
            }else if(day == 'Sat'){
                this.$data.toDay = 5
            }else if(day == 'Sun'){
                this.$data.toDay = 6
            }

            console.log(this.$data.toDay);
     },methods:{
            copyUrl(){
                Toast.makeText("복사되었습니다.").show();
            }
     }
    };

</script>

<style lang="scss">

</style>
