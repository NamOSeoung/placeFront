<template lang="html">
     <StackLayout width="100%" height="100%" backgroundColor="#dddddd" style="text-align: center">
         <label text="숨김처리된 게시자가 없습니다.." style="font-family: nanumsquareroundr" fontSize="14" color="#555555" marginTop="256.55"/>
     </StackLayout>
</template>
<script>
    export default {
        name:"NonWriterMessage",
        components: {
        },data(){
            return {
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
