<template lang="html">
 <Page>
  <ScrollView orientation="horizontal">
   <StackLayout orientation="horizontal" backgroundColor="#3c495e" height="150">
    <!--<WrapLayout orientation="horizontal"
                backgroundColor="yellow" v-for="y_reviews in youTubeReview">
     <StackLayout> -->
      <HtmlView backgroundColor="darkgray" html="<div style='width:100px;height:75px;'>" />
      <!--<image :src="y_reviews.y_thumbnail_url"/> -->
      <HtmlView backgroundColor="darkgray" html="</div>" />
      <!--<TextField :text="y_reviews.y_title" width="100" height="30" /> -->
     </StackLayout>
   <!-- </WrapLayout> -->
    <!-- <label :text="y_reviews.y_description" /> -->
  </ScrollView>
 </Page>
</template>

<script>
    export default {
        name:"MenuWrap",
        components: {
         PlaceSearch
        }
    };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "../../../../../../node_modules/@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
