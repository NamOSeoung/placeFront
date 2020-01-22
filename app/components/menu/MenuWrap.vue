<template lang="html">
 <Page actionBarHidden="true" marginTop="24">
  <StackLayout>
   <BottomNavigation>
    <TabStrip>
     <TabStripItem  >
      <Label text="Home" ></Label>
      <Image src="res://home"></Image>
     </TabStripItem>
     <TabStripItem>
      <Label text="Search"></Label>
      <Image src="res://search"></Image>
     </TabStripItem>
     <TabStripItem>
      <Label text="Bookmark"></Label>
      <Image src="res://settings"></Image>
     </TabStripItem>
     <TabStripItem>
      <Label text="Settings"></Label>
      <Image src="res://settings"></Image>
     </TabStripItem>
    </TabStrip>
    <TabContentItem>
     <GridLayout>
      <Label text="Home Page" class="h2 text-center">
      </Label>
     </GridLayout>
    </TabContentItem>
    <TabContentItem>
     <PlaceSearch/> <!-- 장소관련 탭 -->
    </TabContentItem>
    <TabContentItem>
      <BookmarkWrap/> <!-- 북마크 관련 탭 -->
    </TabContentItem>
    <TabContentItem>
     <GridLayout>
      <Label text="Settings Page" class="h2 text-center">
      </Label>
     </GridLayout>
    </TabContentItem>
   </BottomNavigation>
  </StackLayout>
 </Page>
</template>

<script>
    import PlaceSearch from './search/place/PlaceSearch'
    import BookmarkWrap from "./bookmark/BookmarkWrap";
    export default {
        name:"MenuWrap",
        components: {
         PlaceSearch,BookmarkWrap
        }
    };
</script>

<style lang="scss">
    // Start custom common variables
      @import "~@nativescript/theme/scss/variables/orange";
    // End custom common variables

    // Custom styles

</style>
