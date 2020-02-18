<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd" paddingBottom="21">
             <StackLayout marginTop="24.5" marginLeft="154" width="113.05" height="18.55">
                 <label text="휴대폰 번호 변경"   style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
             </StackLayout>
             <StackLayout width="23.45" height="23.45" marginLeft="113.05" marginTop="22.45" @tap="$navigateBack">
                 <FIcon name="fa-times" color="#555555"  fontSize="23.45"/>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="28">
             <StackLayout marginLeft="28.7">
                 <label text="휴대폰번호" style="font-family: nanumsquareroundr" fontSize="11.55"/>
             </StackLayout>
             <StackLayout orientation="horizontal">
                 <StackLayout marginTop="11.55" orientation="horizontal" width="225.05" borderBottomWidth="1.05" borderBottomColor="#dddddd" marginLeft="28.7" >
                     <StackLayout width="200.05">
                         <StackLayout width="200.05">
                             <TextView
                                     borderColor="#DEDEDE"
                                     returnKeyType="send"
                                     color="#555555"
                                     backgroundColor="#ffffff"
                                     text="010-0000-0000"
                                     row="1"
                                     style="font-family: nanumsquareroundr;font-size: 20;placeholder-color:white;text-align: left;" />
                         </StackLayout>
                     </StackLayout>
                     <StackLayout marginTop="11.55">
                         <FIcon name="fa-times-circle" color="#cccccc"  fontSize="23.45"/>
                     </StackLayout>
                 </StackLayout>
                 <StackLayout backgroundColor="#dddddd" width="116.55" height="36.05" borderRadius="7" style="text-align: center" marginLeft="20.3" marginTop="8.05" visibility="collapsed">
                     <label
                             text="인증번호 받기"
                             style="font-family: nanumsquareroundeb"
                             fontSize="14"
                             color="#ffffff"
                             width="80.5"
                             height="15.05"
                             marginTop="10.5"
                             marginBottom="10.5"
                     />
                 </StackLayout>
                 <StackLayout backgroundColor="#333333" width="116.55" height="36.05" borderRadius="7" style="text-align: center" marginLeft="20.3" marginTop="8.05" visibility="collapsed">
                     <label
                             text="인증번호 받기"
                             style="font-family: nanumsquareroundeb"
                             fontSize="14"
                             color="#ffffff"
                             width="80.5"
                             height="15.05"
                             marginTop="10.5"
                             marginBottom="10.5"
                     />
                 </StackLayout>
                 <StackLayout backgroundColor="#333333" width="116.55" height="36.05" borderRadius="7" style="text-align: center" marginLeft="20.3" marginTop="8.05">
                     <label
                             text="재전송"
                             style="font-family: nanumsquareroundeb"
                             fontSize="14"
                             color="#ffffff"
                             width="80.5"
                             height="15.05"
                             marginTop="10.5"
                             marginBottom="10.5"
                     />
                 </StackLayout>
             </StackLayout>
             <StackLayout marginTop="28">
                 <StackLayout marginLeft="28.7">
                     <label text="인증번호" style="font-family: nanumsquareroundr" fontSize="11.55"/>
                 </StackLayout>
                 <StackLayout marginTop="11.55" orientation="horizontal" marginLeft="28.7">
                     <StackLayout width="225.05"  borderBottomWidth="1.05" borderBottomColor="#dddddd">
                         <TextView
                                 borderColor="#DEDEDE"
                                 returnKeyType="send"
                                 color="#555555"
                                 backgroundColor="#ffffff"
                                 row="1"
                                 style="font-family: nanumsquareroundr;font-size: 20;placeholder-color:white;text-align: left;" />
                     </StackLayout>
                     <StackLayout marginTop="18.55" marginLeft="20.3">
                         <label text="남은시간 01:59" fontSize="14" color="#333333"style="font-family: nanumsquareroundr" />
                     </StackLayout>
                 </StackLayout>
                 <StackLayout marginTop="12.25" marginLeft="28.7">
                     <label text="인증번호가 틀립니다." fontSize="11.55" color="#db522b" />
                 </StackLayout>
                 <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#dddddd" style="text-align: center">
                     <label text="변경" color="#ffffff" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
                 </StackLayout>
                 <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#ffe074" style="text-align: center">
                     <label text="변경" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    export default {
        name:"Phone",
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
