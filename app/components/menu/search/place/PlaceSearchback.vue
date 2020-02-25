<template lang="html">
 <StackLayout backgroundColor="white">
  <StackLayout orientation="horizontal" >
   <StackLayout  marginLeft="20" marginTop="24" >
    <FIcon name="fa-map"  color="#333333" width="20" heigh="20" size="20"  @tap="$navigateTo(mapSearch)"/>
   </StackLayout>
   <StackLayout marginLeft="24" marginTop="15">
    <TextView width="217" style="font-family: nanumsquareroundr"  fontSize="13" maxLength="50" color="#aaaaaa" v-model="data.keyword" @textChange="changeWrap" borderColor="white" hint="검색어를 입력해주세요." editable="true" backgroundColor="white"></TextView>
   </StackLayout>
   <StackLayout  marginTop="24" visibility="collapsed" ref="keywordDelete">
    <FIcon name="fa-times-circle"  color="#888888" width="20" height="20" size="20" @tap="keywordDelete"/>
   </StackLayout>
   <StackLayout  marginTop="24" marginLeft="20">
    <FIcon name="fa-search"  color="#333333" @tap="placeSearch" width="20" height="20" size="20"/>
   </StackLayout>
  </StackLayout>
  <StackLayout height="4" backgroundColor="#ffe074" marginTop="20">
  </StackLayout>
  <StackLayout marginTop="18.5" v-if="keywordHeaderWrap==true">
   <StackLayout orientation="horizontal">
    <StackLayout orientation="horizontal"  marginLeft="20.5"  @tap="keyWordChange(0)" borderBottomWidth="4" paddingBottom="9" borderBottomColor="#ffe074" ref="latelyKeyword">
       <label text="최근검색어" width="64" height="16" style="color: #333333;font-family: nanumsquareroundr" />
    </StackLayout>
   <StackLayout @tap="keyWordChange(1)" paddingBottom="5" marginLeft="20" borderBottomColor="#ffe074" borderBottomWidth="0" ref="popularKeyword">
    <label text="인기검색어"  width="64" height="16" style="color: #333333;font-family: nanumsquareroundr"  />
   </StackLayout>
   </StackLayout>
   <LatelyKeywordWrap ref="latelyKeywordWrap" />
   <PopularKeywordWrap ref="popularKeywordWrap" visibility="collapsed" />
 </StackLayout>
  <StackLayout :style="{color:'red'}" visibility="collapsed">
   <label :text="isAndroid"  />
   <label :text="isIOS" />
  </StackLayout>
  <StackLayout ref="placeKeywordListWrap" visibility="collapsed">
   <ListView for="item in items" style="height:100%" @itemTap="listPlaceSelect">
    <v-template>
     <StackLayout borderBottomColor="#eeeeee"  paddingBottom="14.5" paddingLeft="20" paddingTop="14.5">
      <label :text="item" style="font-family: nanumsquareroundr" fontSize="12" color="#333333" />
     </StackLayout>
    </v-template>
   </ListView>
  </StackLayout>
  <StackLayout ref="placeListWrap" visibility="collapsed" marginTop="-10">
   <ListView for="place in placeList" style="height:100%" separatorColor="transparent" @itemTap="goPlaceDetail">
    <v-template>
     <StackLayout orientation="horizontal">
      <StackLayout width="70" height="70" marginLeft="20" marginTop="20">
        <image :src="place.thumbnail" width="100%" height="100%" borderRadius="8" stretch="aspectFill"/>
      </StackLayout>
      <StackLayout marginLeft="11" marginTop="20">
        <StackLayout orientation="horizontal" style="text-align:center">
          <label text="영업중" backgroundColor="#ffe074" borderRadius="8" paddingTop="3" width="50" height="18" fontSize="10" style="font-family: nanumsquareroundeb" />
          <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="10" />
          <label text="4.3" paddingTop="3" fontSize="12" color="#333333" marginLeft="1" style="font-family: nanumsquareroundeb"/>
        </StackLayout>
        <StackLayout>
         <StackLayout orientation="horizontal" marginTop="10">
          <label :text="place.place_name" fontSize="14" style="font-family: nanumsquareroundeb"/>
         </StackLayout>
        </StackLayout>
       <StackLayout marginTop="9">
        <label :text="place.category_name" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"/>
       </StackLayout>
      </StackLayout>
     </StackLayout>
    </v-template>
   </ListView>
  </StackLayout>
 </StackLayout>
</template>
<script>
 import axios from "axios";
 import PlaceDetail from "./placeDetail/PlaceDetail";
 import MapSearch from "./placeSearchDetail/AreaSearch";
 import {isAndroid, isIOS} from 'tns-core-modules/ui/page';

 import LatelyKeywordWrap from './keywordComponents/LatelyKeywordWrap';
 import PopularKeywordWrap from './keywordComponents/PopularKeywordWrap';

 var data = {keyword : '강남 맛집'}
export default {
  name:"PlaceSearch",
  data(){
   return {
    data,
    mapSearch: MapSearch,
    items: [],
    placeList:[],
    isAndroid:isAndroid,
    isIOS:isIOS,
    setPlace_id:'',
    keywordHeaderWrap:true
   }
  },
 watch :{
   aaa(){
    console.log('2222')
   }
 },
  components: {
   LatelyKeywordWrap,PopularKeywordWrap
  },methods:{
   placeSearch(){
    //this.$data.keyword = ""
    if(data.keyword == ""){
     alert('키워드를 입력 해 주세요.');
     return;
    }
    axios({
     method: 'get',
        url: 'http://192.168.1.86:8080/v1/places?',
     params: {
      q: data.keyword
     },
    }).then((response) => {
     console.log(data.keyword);
     console.log(response.data);
     this.$data.placeList = response.data.dataList;
     console.log("기입확인 : "+this.$data.placeList)
     this.$refs.placeListWrap.nativeView.style.visibility="";
     this.$refs.placeKeywordListWrap.nativeView.style.visibility="collapsed";
     this.$refs.latelyKeywordWrap.nativeView.style.visibility="collapsed";
     this.$refs.popularKeywordWrap.nativeView.style.visibility="collapsed";
     this.$refs.latelyKeyword.nativeView.style.visibility="collapsed";
     this.$refs.popularKeyword.nativeView.style.visibility="collapsed";
    }, (error) => {
     console.log(error);
    });
   },listPlaceSelect(args){
     const view = args.view;
     const tappedItem = view.bindingContext;
     data.keyword = tappedItem;
     this.placeSearch();
  },keywordDelete(){
     data.keyword = "";
  },goPlaceDetail(args){
     const view = args.view;
     const page = view.page;
     const tappedItem = view.bindingContext;
     this.$data.setPlace_id = tappedItem.place_id;
   var cache = require("nativescript-cache");
   cache.set('place_id',tappedItem.place_id)
     this.$navigateTo(PlaceDetail, {
      props: {
       context: tappedItem}});
  },getPlaceId(){
    return this.$data.setPlace_id;
  },setKeyword(keyword){
    data.keyword = keyword;
    this.placeSearch();
  },setArea(area){
    data.keyword = area;
    this.placeSearch();
  },changeWrap(){
    console.log(data.keyword)
    if(data.keyword==''){
     console.log('키워드 비워있음');
     this.$data.keywordHeaderWrap = true;
     /*this.$refs.keywordDelete.nativeView.style.visibility="collapsed";
     this.$refs.latelyKeyword.nativeView.style.visibility="";
     this.$refs.popularKeyword.nativeView.style.visibility="";
     this.$refs.latelyKeyword.nativeView.style.color="black";
     this.$refs.popularKeyword.nativeView.style.color="#E6E6E6";
     this.$refs.latelyKeywordWrap.nativeView.style.visibility="";
     this.$refs.popularKeywordWrap.nativeView.style.visibility="collapsed";
     this.$refs.placeKeywordListWrap.nativeView.style.visibility="collapsed";
     this.$refs.placeListWrap.nativeView.style.visibility="collapsed";*/
    }else {
     console.log('키워드 작성 됨');
     this.$data.keywordHeaderWrap = false;
     /*this.$refs.keywordDelete.nativeView.style.visibility="";
     this.$refs.placeListWrap.nativeView.style.visibility="collapsed";*/
     axios({
      method: 'get',
      url: 'http://api.matitzung.shop/v1/autocomplete',
      //  url: 'http://192.168.1.85:9090/v1/places?',
      params: {
       term: data.keyword
      },
     }).then((response) => {
      console.log(response.data);
      this.$data.items = response.data;
     }, (error) => {

      console.log(error);
     });
     /*this.$refs.latelyKeyword.nativeView.style.visibility="collapsed";
     this.$refs.popularKeyword.nativeView.style.visibility="collapsed";
     this.$refs.latelyKeywordWrap.nativeView.style.visibility="collapsed";
     this.$refs.popularKeywordWrap.nativeView.style.visibility="collapsed";
     this.$refs.placeKeywordListWrap.nativeView.style.visibility="";*/
    }
   //this.$refs.aaaaa.nativeView.style.fontSize="50";
  },keyWordChange(division){
     if(division == 0){ //최근검색어 클릭 시
       console.log('최근검색어 클릭')
      this.$refs.latelyKeywordWrap.nativeView.style.visibility="";
      this.$refs.popularKeywordWrap.nativeView.style.visibility="collapsed";

      this.$refs.latelyKeyword.nativeView.style.borderBottomWidth="4"
      this.$refs.popularKeyword.nativeView.style.borderBottomWidth="0";

     }else if(division == 1){ //인기검색어 클릭 시
       console.log('인기검색어 클릭');
      this.$refs.latelyKeywordWrap.nativeView.style.visibility="collapsed";
      this.$refs.popularKeywordWrap.nativeView.style.visibility="";

      this.$refs.popularKeyword.nativeView.style.borderBottomWidth="4"
      this.$refs.latelyKeyword.nativeView.style.borderBottomWidth="0";
     }
  }
 }
};
</script>

<style lang="scss">
// Start custom common variables
//@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles

</style>
