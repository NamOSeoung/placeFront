<template lang="html">
 <StackLayout class="youtubeWrap">
     <StackLayout orientation="horizontal" class="youtubeHeaderWrap">
         <image src="~/Resources/img/home/youtube.png" class="youtubeIcon"/>
         <label text="유튜브" class="youtubeTitle"/>
         <label text="더보기" class="youtubeMore"/>
         <image src="~/Resources/img/home/angle-right.png" class="youtubeRightIcon" />
     </StackLayout>
   <ScrollView orientation="horizontal">
       <StackLayout orientation="horizontal" class="youtubeSubWrap">
            <StackLayout class="youtubeMainWrap">
                <StackLayout class="youtubeImageWrap">
                    <image class="youtubeImage" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
                </StackLayout>
                <StackLayout class="youtubeSubjectWrap" >
                    <Label row="2" class="youtubeSubject" text="영상 제목 두줄까지 영상제목 두줄까지영상 제목 두줄까지 영상제목 두줄까지영상 제목 두줄까지 영상제목 두줄까지영상 제목 두줄까지 영상제목 두줄까지" textWrap="true"  />
                </StackLayout>
            </StackLayout>
           <StackLayout class="youtubeMainWrap">
               <StackLayout class="youtubeImageWrap">
                   <image class="youtubeImage" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
               </StackLayout>
               <StackLayout class="youtubeSubjectWrap">
                   <label class="youtubeSubject" text="영상 제목 두줄까지 영상제목 두줄까지" textWrap="true" row="2" />
               </StackLayout>
           </StackLayout>
           <StackLayout class="youtubeMainWrap">
               <StackLayout class="youtubeImageWrap">
                   <image class="youtubeImage" stretch="aspectFill"  src="https://i.ytimg.com/vi/kFJQwcsXwjU/hqdefault.jpg"/>
               </StackLayout>
               <StackLayout class="youtubeSubjectWrap">
                   <label class="youtubeSubject" text="영상 제목 두줄까지 영상제목 두줄까지" textWrap="true" row="2" />
               </StackLayout>
           </StackLayout>
       </StackLayout>
   </ScrollView>
 </StackLayout>
</template>

<script>

    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/YoutubeList/youtubeList_480.scss';

    export default {
        name:"YoutubeList",
        components: {

        }
    };
</script>

<style lang="scss">

</style>
