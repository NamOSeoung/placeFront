<template lang="html">
 <StackLayout backgroundColor="#eff2f7" height="100%">
  <StackLayout height="150" backgroundColor="#ffe074" width="540" style="text-align: center">
   <label text="오늘은 어떤 식사를 하나요?" height="24" marginTop="34.8" fontSize="21" style="font-family: nanumsquareroundeb" color="#b99000" />
  </StackLayout>
  <StackLayout width="420" height="210" marginLeft="53.2" marginRight="53.2" borderRadius="12" marginTop="-53.2" backgroundColor="white">
   <StackLayout  style="text-align: center">
    <label text="로그인을 해 주세요." fontSize="21" color="#555555"  marginTop="48" />
   </StackLayout>
   <StackLayout marginTop="33">
    <StackLayout width="346.5" height="60" backgroundColor="#ffe074" borderRadius="8" style="text-align: center" >
     <label text="로그인하기" fontSize="21" color="#555555"  marginBottom="18" marginTop="18" height="24" />
    </StackLayout>
   </StackLayout>
  </StackLayout>
  <StackLayout marginTop="45" width="480">
   <StackLayout  marginLeft="97.5" marginRight="376.5" width="66">
    <label text="공지사항" color="#555555" fontSize="18" style="font-family: nanumsquareroundeb"/>
   </StackLayout>
   <StackLayout  marginLeft="97.5" marginRight="339" width="103.5" marginTop="49.5">
    <label text="자주하는 질문" color="#555555" fontSize="18" style="font-family: nanumsquareroundeb"/>
   </StackLayout>
   <StackLayout  marginLeft="97.5" marginRight="351" width="91.5" marginTop="49.5">
    <label text="약관 및 정책" color="#555555" fontSize="18" style="font-family: nanumsquareroundeb"/>
   </StackLayout>
   <StackLayout  marginLeft="97.5" marginRight="388.5" width="54" marginTop="49.5">
    <label text="앱 정보" color="#555555" fontSize="18"  style="font-family: nanumsquareroundeb"/>
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
