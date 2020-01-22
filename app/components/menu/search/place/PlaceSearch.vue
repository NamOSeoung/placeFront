<template lang="html">
 <StackLayout backgroundColor="#d3d3d3">
  <FlexboxLayout flexDirection="row-reverse">
   <Button text="Button" width="30%" @tap="placeSearch" />
   <SearchBar hint="키워드를 입력 해 주세요." width="70%" v-model="keyword"/>
  </FlexboxLayout>
  <StackLayout width="95%" marginTop="10"height="96%" backgroundColor="white">
   <ListView for="item in items"
             style="height:100%" @itemTap="goPlaceDetail">
    <v-template>
     <StackLayout width="100%" padding="0" orientation="horizontal" >
      <StackLayout paddingRight="-15">
       <Image :src="item.thumbnail" class="thumb img-thumbnail" width="40%" height="100" />
      </StackLayout>
      <StackLayout width="60%" paddingLeft="0">
       <StackLayout orientation="horizontal" style="text-align: center">
        <Label text="영업중" row="0" col="0" fontSize="14" backgroundColor="#d3d3d3" style="border-radius: 50px" width="30%" />
        <Label :text="item.place_name" row="0" col="1" fontSize="18" width="70%" style="text-align: left" />
       </StackLayout>
       <StackLayout orientation="horizontal"  style="text-align: center" >
        <Label text="고기떡볶이" row="1" col="0" fontSize="14" width="30%"/>
        <Image src="res://star"  width="10%"></Image>
        <Label text="1.5" row="1" col="1" width="50%" fontSize="17" style="text-align: left"/>
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

export default {
  name:"PlaceSearch",
  data(){
   return {
    keyword:'강남 맛집',
    items: []
   }
  },
  components: {
  },methods:{
   placeSearch(){
    this.$data.keyword = "강남 맛집"
    if(this.$data.keyword == ""){
     alert('키워드를 입력 해 주세요.');
     return;
    }
    axios({
     method: 'get',
        url: 'http://api.matitzung.shop/v1/places?',
        //  url: 'http://192.168.1.85:9090/v1/places?',
     params: {
      q: this.$data.keyword
     },
    }).then((response) => {
     console.log(this.$data.keyword);
     console.log(response.data);
     this.$data.items = response.data.dataList;
     console.log("기입확인 : "+this.$data.items)
    }, (error) => {

     console.log(error);
    });
   },goPlaceDetail(args){
   const view = args.view;
   const page = view.page;
   const tappedItem = view.bindingContext;
   this.$navigateTo(PlaceDetail, {
    props: {
     context: tappedItem}});
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
