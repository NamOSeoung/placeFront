<template lang="html">
 <Page>
  <StackLayout>
   <WebView height="100%" :src="tisroryBookmark.url" />
  </StackLayout>
 </Page>
</template>

<script>
    export default {
        props: ["context"],
        name:"TBookmarkDetail",
       data(){
        return {
        }
       },computed: {
          tisroryBookmark() {
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
