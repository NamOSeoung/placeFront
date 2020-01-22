<template lang="html">
<Page>
 <WebView height="100%" width="100%" src="https://place.map.kakao.com/14851746" />
</Page>
</template>
<script>
export default {
  name:"KakaoReview",
   props: ["kakaoId"],
  data(){
   return {
    kakaoId :props.kakaoId
   }
  },
  components: {
  },methods:{
 },created() {
 },mounted() {
   console.log(this.$data.kakaoId);
 }
};
</script>

<style lang="scss">
// Start custom common variables
//@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
