<template lang="html">
 <Page actionBarHidden="true" marginTop="24">
  <StackLayout>
   <BottomNavigation :selectedIndex="data.tab" @selectedIndexChanged="tabChangedEvent" >
    <TabStrip>
     <TabStripItem >
      <FIcon name="fa-home" color="#A4A4A4"  fontSize="26" paddingTop="12"  />
     </TabStripItem>
     <TabStripItem>
      <FIcon name="fa-search" color="#A4A4A4"  fontSize="26" paddingTop="12"  />
     </TabStripItem>
     <TabStripItem>
      <FIcon name="fa-bookmark" color="#A4A4A4"  fontSize="26" paddingTop="12"  />
     </TabStripItem>
     <TabStripItem>
      <FIcon name="fa-user" color="#A4A4A4"  fontSize="26" paddingTop="12"  />
     </TabStripItem>
    </TabStrip>
    <TabContentItem>
     <HomeWrap/>
    </TabContentItem>
    <TabContentItem>
     <PlaceSearch/> <!-- 장소관련 탭 -->
    </TabContentItem>
    <TabContentItem>
      <BookmarkWrap/> <!-- 북마크 관련 탭 -->
    </TabContentItem>
    <TabContentItem>
     <SettingsWrap/>
    </TabContentItem>
   </BottomNavigation>
  </StackLayout>
 </Page>
</template>

<script>
    import PlaceSearch from './search/place/PlaceSearch'
    import BookmarkWrap from "./bookmark/BookmarkWrap";
    import HomeWrap from './home/HomeWrap';
    import SettingsWrap from './settings/SettingsWrap';

    var data = {tab : 0}

    export default {
        name:"MenuWrap",
       data(){
        return {
         data
         }
        },
        components: {
         HomeWrap,PlaceSearch,BookmarkWrap,SettingsWrap
        },methods:{
            tabChange(tab){
               data.tab = tab;
            },tabChangedEvent(args){
               console.log(args.oldIndex)
               console.log(args.newIndex)
               if(args.newIndex == 0){
                data.tab = 0;
               }
            }
        }
    };
</script>

<style lang="scss">
    // Start custom common variables
      @import "~@nativescript/theme/scss/variables/orange";
    // End custom common variables

    // Custom styles

</style>
