<template lang="html">
 <StackLayout>
  <TabView :selectedIndex="0" style="background-color: lightgray">
   <TabViewItem title="매장">
    <PlaceBookmark/>
   </TabViewItem>
   <TabViewItem title="잇정리뷰">
    <label text="잇정리뷰" />
   </TabViewItem>
   <TabViewItem title="유튜브">
    <YoutubeBookmark/>
   </TabViewItem>
   <TabViewItem title="네이버">
    <NaverBookmark/>
   </TabViewItem>
   <TabViewItem title="티스토리">
    <TistoryBookmark/>
   </TabViewItem>
  </TabView>
 </StackLayout>
</template>

<script>

 import PlaceBookmark from "./bookmarkList/PlaceBookmark";
 import YoutubeBookmark from "./bookmarkList/YoutubeBookmark";
 import NaverBookmark from "./bookmarkList/NaverBookmark";
 import TistoryBookmark from "./bookmarkList/TistoryBookmark";
    export default {
        name:"BookmarkWrap",
        components: {
         PlaceBookmark,YoutubeBookmark,NaverBookmark,TistoryBookmark
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
