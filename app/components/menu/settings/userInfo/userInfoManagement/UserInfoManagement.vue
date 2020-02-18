<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd" paddingBottom="21">
          <StackLayout width="32.55" height="32.55" marginLeft="7" marginTop="30.5" @tap="$navigateBack">
           <FIcon name="fa-angle-left" color="#555555"  fontSize="32.55"/>
          </StackLayout>
          <StackLayout marginLeft="0"  marginTop="29.95" @tap="$navigateBack" height="15.05">
              <label text="내정보" color="#333333" fontSize="14" style="font-family: nanumsquareroundeb" />
          </StackLayout>
          <StackLayout marginTop="24.5" marginLeft="101.55" width="82.95" height="18.55">
              <label text="내 정보 관리"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
          </StackLayout>
        </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout  orientation="horizontal">
                 <StackLayout  marginLeft="29.05"  width="39.6" height="14.05">
                     <label text="연동코드" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout marginLeft="197">
                     <image src="~/Resources/img/user/kakaoicon.png" width="17.5" height="17.5" />
                 </StackLayout>
                 <StackLayout marginLeft="1.05">
                     <label text="KA00390208301" width="110.95" height="14.05" />
                 </StackLayout>

             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout  orientation="horizontal">
                 <StackLayout  marginLeft="29.05"  width="39.6" height="14.05">
                     <label text="이메일" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout marginLeft="120" style="text-align: right" width="175" height="14.05">
                     <label text="aaaaa@naver.com" style="font-family: nanumsquareroundr" fontSize="14" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal" @tap="$navigateTo(NickNamePage)">
                 <StackLayout marginLeft="29.05"  width="39.6" height="14.05">
                     <label text="닉네임" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout marginLeft="120" style="text-align: right" width="175" height="14.05">
                     <label text="닉네임닉네임닉네임닉" style="font-family: nanumsquareroundr" fontSize="14" />
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9">
                     <FIcon name="fa-angle-right"  size="27.9" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal"  @tap="$navigateTo(PhonePage)">
                 <StackLayout marginLeft="29.05"  width="39.6" height="14.05">
                     <label text="휴대폰" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout marginLeft="120" style="text-align: right" width="175" height="14.05">
                     <label text="010-0000-0000" style="font-family: nanumsquareroundr" fontSize="14" />
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9">
                     <FIcon name="fa-angle-right"  size="27.9" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal" @tap="$navigateTo(PasswordPage)">
                 <StackLayout marginLeft="29.05"  width="80.5" height="14.05">
                     <label text="비밀번호 변경" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9" marginLeft="254.45">
                     <FIcon name="fa-angle-right"  size="27.9" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
         <StackLayout marginTop="37.45">
             <StackLayout orientation="horizontal">
                 <StackLayout marginLeft="29.05"  width="51.45" height="14.05" @tap="$navigateTo(UserSecessionPage)">
                     <label text="탈퇴하기" color="#333333" style="font-family: nanumsquareroundeb"  fontSize="14"/>
                 </StackLayout>
                 <StackLayout  width="27.9" height="27.9" marginLeft="283.45">
                     <FIcon name="fa-angle-right"  size="27.9" />
                 </StackLayout>
             </StackLayout>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>
    import Password from './userInfoUpdate/Password'
    import NickName from './userInfoUpdate/NickName'
    import Phone from './userInfoUpdate/Phone'
    import UserSecession from './userInfoUpdate/UserSecession'
    export default {
        name:"UserInfoManagement",
        components: {
        },data(){
            return {
                PasswordPage:Password,
                NickNamePage:NickName,
                PhonePage:Phone,
                UserSecessionPage:UserSecession
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
