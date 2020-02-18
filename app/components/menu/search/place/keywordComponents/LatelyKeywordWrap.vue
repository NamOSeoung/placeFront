<template lang="html">
 <ScrollView height="100%">
 <StackLayout backgroundColor="#ffffff">
  <StackLayout v-for="list in latelyKeywordList" >
   <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" @tap="aaa">
    <StackLayout class="latelyKeywordKeywordWrap">
     <label class="latelyKeywordKeyword" :text="list.keyword" />
    </StackLayout>
    <StackLayout class="latelyKeyWordDateWrap">
     <label class="latelyKeywordDate" :text="list.writeDate" />
    </StackLayout>
    <StackLayout class="latelyKeywordDeleteIconWrap" >
     <image class="latelyKeywordDeleteIcon" width="10" height="10" src="~/Resources/img/place/close_5_64.png" />
    </StackLayout>
   </StackLayout>
  </StackLayout>
  <StackLayout class="latelyKeywordAllDeleteWrap">
   <label class="latelyKeywordAllDelete" text="검색 기록 전체삭제" />
  </StackLayout>
 </StackLayout>
 </ScrollView>
</template>
<script>
 var cache = require("nativescript-cache");
 import PlaceSearch from '../PlaceSearch'
 import '~/Resources/css/menu/search/place/keywordComponents/LatelyKeywordWrap/latelyKeywordWrap_320.scss';
 import '~/Resources/css/menu/search/place/keywordComponents/LatelyKeywordWrap/latelyKeywordWrap_360.scss';
 import '~/Resources/css/menu/search/place/keywordComponents/LatelyKeywordWrap/latelyKeywordWrap_420.scss';
 import '~/Resources/css/menu/search/place/keywordComponents/LatelyKeywordWrap/latelyKeywordWrap_480.scss';


 export default {
  name:"LatelyKetwordWrap",
  data(){
   return {
    latelyKeywordList:[]
   }
  },
  mounted: void {
  },
  watch :{
   components: {

   },methods:{
      setKeywordList(){
       this.$data.latelyKeywordList.push(cache.get('keyword1'))
       this.$data.latelyKeywordList.push(cache.get('keyword2'))
       this.$data.latelyKeywordList.push(cache.get('keyword3'))
       this.$data.latelyKeywordList.push(cache.get('keyword4'))
       this.$data.latelyKeywordList.push(cache.get('keyword5'))
       this.$data.latelyKeywordList.push(cache.get('keyword6'))
       this.$data.latelyKeywordList.push(cache.get('keyword7'))
       this.$data.latelyKeywordList.push(cache.get('keyword8'))
       this.$data.latelyKeywordList.push(cache.get('keyword9'))
       this.$data.latelyKeywordList.push(cache.get('keyword10'))
      },
    }
  },created(){
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword1'),writeDate:cache.get('writeDate1')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword2'),writeDate:cache.get('writeDate2')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword3'),writeDate:cache.get('writeDate3')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword4'),writeDate:cache.get('writeDate4')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword5'),writeDate:cache.get('writeDate5')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword6'),writeDate:cache.get('writeDate6')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword7'),writeDate:cache.get('writeDate7')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword8'),writeDate:cache.get('writeDate8')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword9'),writeDate:cache.get('writeDate9')});
   this.$data.latelyKeywordList.push({keyword :cache.get('keyword10'),writeDate:cache.get('writeDate10')});
  }
 };
</script>

<style lang="scss">

</style>
