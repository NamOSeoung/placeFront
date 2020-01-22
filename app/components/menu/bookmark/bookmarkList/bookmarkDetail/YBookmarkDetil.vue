<template lang="html">
 <Page>
  <StackLayout>
   <WebView height="100%" :src="'https://www.youtube.com/watch?v='+youtubeBookmark.y_video_id" />
  </StackLayout>
 </Page>
</template>

<script>
    export default {
        props: ["context"],
        name:"YBookmarkDetail",
       data(){
        return {
        }
       },computed: {
          youtubeBookmark() {
          return this.context || {};
         }
        },
        components: {
        },mounted() {
     }
    };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
