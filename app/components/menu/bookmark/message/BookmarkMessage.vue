<template lang="html">
     <StackLayout class="contentsWrap" >
         <label class="contents" text="저장된 내용이 없습니다."/>
     </StackLayout>
</template>
<script>
    export default {
        name:"BookmarkMessage",
        components: {
        },data(){
            return {
            }
        }
    };
</script>

<style lang="scss">
    .android360 .contentsWrap{
        width: 100%;
        height: 100%;
        background-color: #eff2f7;
        text-align: center;
    }
    .android360 .contents{
        font-family: nanumsquareroundr;
        font-size:12;
        color:#555555;
        margin-top:260;
    }
</style>
