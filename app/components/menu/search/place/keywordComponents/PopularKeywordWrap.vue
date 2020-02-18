<template lang="html">
    <ScrollView height="100%">
    <StackLayout backgroundColor="#ffffff">
        <StackLayout class="popularKeywordWrap"  v-for="keyword in popularKeywordList" >
            <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" @tap="selectKeyword(keyword.search_word)" >
                <StackLayout class="latelyKeywordKeywordWrap">
                    <label class="latelyKeywordKeyword" :text="keyword.index +'. '+keyword.search_word" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </StackLayout>
    </ScrollView>
</template>
<script>

import axios from 'axios';
    import '~/Resources/css/menu/search/place/keywordComponents/PopularKeywordWrap/popularKeywordWrap_320.scss';
    import '~/Resources/css/menu/search/place/keywordComponents/PopularKeywordWrap/popularKeywordWrap_360.scss';
    import '~/Resources/css/menu/search/place/keywordComponents/PopularKeywordWrap/popularKeywordWrap_420.scss';
    import '~/Resources/css/menu/search/place/keywordComponents/PopularKeywordWrap/popularKeywordWrap_480.scss';

import PlaceSearch from "../PlaceSearch"
export default {
  name:"PopularKeywordWrap",
  data(){
   return {
       popularKeywordList:[]
   }
  },
  components: {
  },methods:{
      popularKeyword(){
          console.log('2222')
           axios({
              method: 'get',
              url: 'http://202.182.117.173:8080/v1/popularsearches',
              params: {
              },
          }).then((response) => {
              console.log(response.data.dataList)
              this.$data.popularKeywordList = response.data.dataList;

          }, (error) => {
              console.log(error);
          });
      },selectKeyword(keyword){
        console.log(keyword)
         PlaceSearch.methods.placeSearch(keyword)
         PlaceSearch.data.popularKeywordFlag = true;
      }
  },mounted() {
      console.log('qweqwe')
      this.popularKeyword();
  }
};
</script>

<style lang="scss">
// Start custom common variables
//@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
