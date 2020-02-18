<template lang="html">
 <StackLayout backgroundColor="#eff2f7" height="100%">
     <StackLayout height="133.2" backgroundColor="#ffe074" width="480" style="text-align: center">
         <label text="오늘은 어떤 식사를 하나요?" height="21.2" marginTop="34.8" fontSize="14" style="font-family: nanumsquareroundeb" color="#b99000" />
     </StackLayout>
     <StackLayout width="373.2" height="186.8" marginLeft="53.2" marginRight="53.2" borderRadius="12" marginTop="-53.2" backgroundColor="white">
         <StackLayout  style="text-align: center">
             <label text="로그인을 해 주세요." fontSize="14" color="#555555"  marginTop="42.8" />
         </StackLayout>
         <StackLayout marginTop="29.2">
             <StackLayout width="308" height="53.2" backgroundColor="#ffe074" borderRadius="8" style="text-align: center" >
                 <label text="로그인하기" fontSize="14" color="#555555"  marginBottom="16" marginTop="16" height="21.2" />
             </StackLayout>
         </StackLayout>
     </StackLayout>
     <StackLayout marginTop="40" width="480">
         <StackLayout  marginLeft="86.8" marginRight="334.8" width="58.8">
             <label text="공지사항" color="#555555" fontSize="12" style="font-family: nanumsquareroundeb"/>
         </StackLayout>
         <StackLayout  marginLeft="86.8" marginRight="301.2" width="92" marginTop="44">
             <label text="자주하는 질문" color="#555555" fontSize="12" style="font-family: nanumsquareroundeb"/>
         </StackLayout>
         <StackLayout  marginLeft="86.8" marginRight="312" width="81.2" marginTop="44">
             <label text="약관 및 정책" color="#555555" fontSize="12" style="font-family: nanumsquareroundeb"/>
         </StackLayout>
         <StackLayout  marginLeft="86.8" marginRight="345.2" width="48" marginTop="44">
             <label text="앱 정보" color="#555555" fontSize="12"  style="font-family: nanumsquareroundeb"/>
         </StackLayout>
     </StackLayout>
 </StackLayout>
</template>
<script>

    export default {
        name:"NoLoginWrap",
        components: {
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
