<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd" paddingBottom="21">
             <StackLayout marginTop="24.5" marginLeft="164.5" width="93.45" height="18.55">
                 <label text="비밀번호 변경"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
             </StackLayout>
             <StackLayout width="23.45" height="23.45" marginLeft="122.5" marginTop="22.45" @tap="$navigateBack">
                 <FIcon name="fa-times" color="#555555"  fontSize="23.45"/>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="28">
             <StackLayout marginLeft="28.7">
                 <label text="새 비밀번호" style="font-family: nanumsquareroundr" fontSize="11.55"/>
             </StackLayout>
             <StackLayout orientation="horizontal" width="362.95" borderBottomWidth="1.05" borderBottomColor="#dddddd" marginTop="17.5" marginLeft="28.7" marginRight="28.7">
                 <StackLayout width="335.95">
                     <TextField hint="비밀번호"
                                [text]='name'
                                secure="true"
                                color="#555555"
                                returnKeyType="done"
                                (returnPress)="onReturnPress($event)"
                                autocorrect="false"
                                maxLength="10"
                                backgroundColor="#ffffff"
                                style="font-family: nanumsquareroundr;font-size: 20;placeholder-color:white;text-align: left;"
                                (focus)="onFocus($event)"
                                (blur)="onBlur($event)">
                     </TextField>
                 </StackLayout>
                 <StackLayout marginTop="11.55">
                     <FIcon name="fa-times-circle" color="#cccccc"  fontSize="23.45"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout marginLeft="28.7" marginTop="12.25" height="14" >
                 <label text="8~15자 이내로 영문, 숫자, 특수문자 중 2가지 이상 조합으로 입력해주세요." fontSize="11.55" color="#888888" style="font-family: nanumsquareroundr" />
             </StackLayout>
             <StackLayout marginLeft="28.7" marginTop="23.45">
                 <label text="새 비밀번호 확인" fontSize="11.55" style="font-family: nanumsquareroundr" color="#555555" />
             </StackLayout>
             <StackLayout orientation="horizontal" width="362.95" borderBottomWidth="1.05" borderBottomColor="#dddddd" marginTop="17.5" marginLeft="28.7" marginRight="28.7">
                 <StackLayout width="335.95">
                     <TextField hint="비밀번호"
                                [text]='name'
                                secure="true"
                                color="#555555"
                                returnKeyType="done"
                                (returnPress)="onReturnPress($event)"
                                autocorrect="false"
                                maxLength="10"
                                backgroundColor="#ffffff"
                                style="font-family: nanumsquareroundr;font-size: 20;placeholder-color:white;text-align: left;"
                                (focus)="onFocus($event)"
                                (blur)="onBlur($event)">
                     </TextField>
                 </StackLayout>
                 <StackLayout marginTop="11.55">
                     <FIcon name="fa-times-circle" color="#cccccc"  fontSize="23.45"/>
                 </StackLayout>
             </StackLayout>
             <StackLayout marginTop="12.25" marginLeft="28.7">
                 <label text="비밀번호와 일치하지 않습니다." color="#db522b" style="font-family: nanumsquareroundr" fontSize="11.55" />
             </StackLayout>
             <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#dddddd" style="text-align: center">
                 <label text="변경" color="#ffffff" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
             </StackLayout>
             <StackLayout marginTop="23.45" width="116.55" height="37.45" borderRadius="18.55" backgroundColor="#ffe074" style="text-align: center">
                 <label text="변경" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb" width="25.55" height="15.05" marginTop="11.55" marginBottom="11.55"/>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    export default {
        name:"Password",
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
