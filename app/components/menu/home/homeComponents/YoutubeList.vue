<template lang="html">
 <StackLayout backgroundColor="#ffffff" marginTop="10dp">
   <StackLayout orientation="horizontal">
       <image src="~/Resources/img/home/youtube.png" width="17" height="12" marginTop="16" marginLeft="15"/>
       <label text="유튜브" width="36" height="14" fontSize="13" marginTop="15"  style="font-family: nanumsquareroundeb" marginLeft="6" />
       <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="226dp"/>
       <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
   </StackLayout>
   <ScrollView orientation="horizontal">
       <StackLayout orientation="horizontal" marginTop="10" height="156">
            <StackLayout width="150" marginLeft="15">
                <StackLayout>
                    <StackLayout>
                        <image width="100%" height="84" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
                    </StackLayout>
                    <StackLayout marginTop="7">
                        <label width="150" text="영상 제목 두줄까지 영상제목 두줄까지"  marginTop="7" lineHeight="5sp" fontSize="13sp" style="font-family: nanumsquareroundeb" textWrap="true" row="2"/>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
           <StackLayout width="150" height="260" marginLeft="10">
               <StackLayout>
                   <StackLayout>
                       <image width="100%" height="84" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
                   </StackLayout>
                   <StackLayout marginTop="7">
                       <label width="150" text="영상 제목 두줄까지 영상제목 두줄까지"  marginTop="7" lineHeight="5sp" fontSize="13sp" style="font-family: nanumsquareroundeb" textWrap="true" row="2"/>
                   </StackLayout>
               </StackLayout>
           </StackLayout>
           <StackLayout width="150" height="260" marginLeft="10">
               <StackLayout>
                   <StackLayout>
                       <image width="100%" height="84" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
                   </StackLayout>
                   <StackLayout marginTop="7" row="1">
                       <label ref='a' width="150" text="영상 제목 두줄까지 영상제목 두줄까지영상 제목 두줄까지 영상제목 두줄까지" maxLength="15"  marginTop="7" lineHeight="5sp" fontSize="13sp" style="font-family: nanumsquareroundeb" textWrap="true"/>
                   </StackLayout>
               </StackLayout>
           </StackLayout>
       </StackLayout>
   </ScrollView>
 </StackLayout>
</template>

<script>
    export default {
        name:"YoutubeList",
        components: {

        }
    };
</script>

<style lang="scss">
</style>
