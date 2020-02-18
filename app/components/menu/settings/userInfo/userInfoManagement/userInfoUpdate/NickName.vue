<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd" paddingBottom="21">
             <StackLayout marginTop="24.5" marginLeft="171.5" width="79.45" height="18.55">
                 <label text="닉네임 수정"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
             </StackLayout>
             <StackLayout width="23.45" height="23.45" marginLeft="129.5" marginTop="22.45" @tap="$navigateBack">
                 <FIcon name="fa-times" color="#555555"  fontSize="23.45"/>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="28">
             <StackLayout orientation="horizontal" width="362.95" borderBottomWidth="1.05" borderBottomColor="#dddddd" marginLeft="28.7" marginRight="28.7">
                 <StackLayout width="335.95">
                     <StackLayout width="335.95">
                         <TextView
                                 borderColor="#DEDEDE"
                                 returnKeyType="send"
                                 color="#555555"
                                 backgroundColor="#ffffff"
                                 text="닉네임닉네임닉"
                                 row="1"
                                 style="font-family: nanumsquareroundr;font-size: 20;placeholder-color:white;text-align: left;" />
                     </StackLayout>
                 </StackLayout>
                 <StackLayout marginTop="11.55">
                     <FIcon name="fa-times-circle" color="#cccccc"  fontSize="23.45"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout orientation="horizontal">
                 <StackLayout marginLeft="28.7" marginTop="12.25" height="14"  >
                     <label text="한글, 영문, 숫자 2~10자" fontSize="11.55" color="#888888" style="font-family: nanumsquareroundr" />
                 </StackLayout>
                 <StackLayout marginLeft="28.7" marginTop="12.25" height="14" >
                     <label text="한글, 영문, 숫자 2~10자" fontSize="11.55" color="#db522b" style="font-family: nanumsquareroundr" />
                 </StackLayout>
                 <StackLayout marginLeft="28.7" marginTop="12.25" height="14" >
                     <label text="중복된 닉네임이 있습니다." fontSize="11.55" color="#db522b" style="font-family: nanumsquareroundr" />
                 </StackLayout>
             </StackLayout>
             <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#dddddd" style="text-align: center">
                 <label text="저장" color="#ffffff" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
             </StackLayout>
             <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#ffe074" style="text-align: center">
                 <label text="저장" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    export default {
        name:"NickName",
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
