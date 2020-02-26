<template lang="html">
 <Page actionBarHidden="true" marginTop="24">
  <StackLayout>
   <BottomNavigation :selectedIndex="data.tab" @selectedIndexChanged="tabChangedEvent"  @loaded="aaa">
    <TabStrip @itemTap="aaa">
     <TabStripItem>
      <image v-if="tabIconSet==0" width="26" height="26" src="~/Resources/img/home/home_5_64.png"/>
      <image v-else width="26" height="26" src="~/Resources/img/home/home_d_64.png"/>
     </TabStripItem>
     <TabStripItem>
      <image v-if="tabIconSet==1" width="26" height="26" src="~/Resources/img/home/search.png"/>
      <image v-else width="26" height="26" src="~/Resources/img/home/search_d_64.png"/>
     </TabStripItem>
     <TabStripItem>
      <image v-if="tabIconSet==2" width="26" height="26" src="~/Resources/img/home/agenda_5_64.png"/>
      <image v-else width="26" height="26" src="~/Resources/img/home/agenda_d_64.png"/>
     </TabStripItem>
     <TabStripItem>
      <image v-if="tabIconSet==3" width="26" height="26" src="~/Resources/img/home/user_5_64.png"/>
      <image v-else width="26" height="26" src="~/Resources/img/home/user_d_64.png"/>
     </TabStripItem>
    </TabStrip>
    <TabContentItem>
     <HomeWrap/>
    </TabContentItem>
    <TabContentItem>
     <PlaceSearch/> <!-- 장소관련 탭 -->
    </TabContentItem>
    <TabContentItem >
      <BookmarkWrap v-if="user_id !=undefined" /> <!-- 북마크 관련 탭 -->
      <BookmarkWrap2 v-else/> <!-- 북마크 관련 탭 -->
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
    import BookmarkWrap2 from "./bookmark/BookmarkWrap2"
    import HomeWrap from './home/HomeWrap';
    import SettingsWrap from './settings/SettingsWrap';
    const appSettings = require("tns-core-modules/application-settings");
    const platformModule = require("tns-core-modules/platform");
    import platformcss from '../../platformcss';
    import Login from '../member/Login'
    import PlaceBookark from '../menu/bookmark/bookmarkList/PlaceBookmark'

    var data = {tab : 0}

    export default {
        name:"MenuWrap",
       data(){
        return {
         data,
         tabIconSet:0,
         user_id:appSettings.getString("user_id")
         }
        },
        components: {
         HomeWrap,PlaceSearch,BookmarkWrap,SettingsWrap,BookmarkWrap2
        },methods:{
            tabChange(tab){
               data.tab = tab;
            },tabChangedEvent(args){
               console.log(args.oldIndex)
      // PlaceBookark.methods.getPlaceBookmark();
       //BookmarkWrap.created()
               this.$data.tabIconSet = args.newIndex;
               if(args.newIndex == 0){
                data.tab = 0;
               }
            },aaa(){
               console.log(this.$data.user_id)

               return;
            }
        },mounted(){
            platformcss.sizeGroupings([480,440,400,360,320]);
            console.log("디피아이" + platformModule.screen.mainScreen.widthDIPs)
            console.log("픽셀" + platformModule.screen.mainScreen.widthPixels)
            console.log(`screen.mainScreen.scale ${platformModule.screen.mainScreen.scale}`);
        }
    };
</script>

<style lang="scss">
    // Start custom common variables
      @import "~@nativescript/theme/scss/variables/orange";
    // End custom common variables

    // Custom styles

</style>
