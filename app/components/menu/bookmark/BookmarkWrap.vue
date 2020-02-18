<template lang="html">
 <GridLayout rows="auto,auto,*,auto" columns="auto">
  <GridLayout  row="1" ref="navTab" class="navTab"
               width="100%"  rows="auto" columns="auto,auto,auto,auto">

   <GridLayout class="tabview" :class="selectedTabview==0?'active':''"
               @tap="tabSelect(0)" rows="*,auto" cols="auto" col="0" row="0"
               width="60" >
    <Label :class="selectedTabview==0?'active':''" row="0"
           text="매장" class="tabviewText"></Label>
   </GridLayout>
   <GridLayout class="tabview" :class="selectedTabview==1?'active':''"
               @tap="tabSelect(1)" rows="*,auto" cols="auto" col="1" row="0"
               width="60" marginLeft="20">
    <Label :class="selectedTabview==1?'active':''" row="0"
           text="유튜브" class="tabviewText"></Label>
   </GridLayout>
   <GridLayout class="tabview" :class="selectedTabview==2?'active':''"
               @tap="tabSelect(2)" rows="*,auto" cols="auto" col="2" row="0"
               width="60" marginLeft="20">
    <Label :class="selectedTabview==2?'active':''" row="0"
           text="네이버" class="tabviewText"></Label>
   </GridLayout>
   <GridLayout class="tabview" :class="selectedTabview==3?'active':''"
               @tap="tabSelect(3)" rows="*,auto" cols="auto" col="3" row="0"
               width="60" marginLeft="20">
    <Label :class="selectedTabview==3?'active':''" row="0"
           text="티스토리" class="tabviewText"></Label>
   </GridLayout>
  </GridLayout>

  <GridLayout v-show="selectedTabview == 0" row="2" width="100%" paddingTop="18" height="100%" backgroundColor="#eff2f7" >
   <PlaceBookmark/>
 <!--  <ListView ref="listview" separatorColor="transparent" for="item in items" :key="index">
    <v-template>
     <item :item="item" @clicked="showItem(item)" />
    </v-template>
   </ListView>-->
  </GridLayout>

  <GridLayout v-show="selectedTabview == 1" row="2" width="100%"  paddingTop="18" height="100%" backgroundColor="#eff2f7">
   <YoutubeBookmark />
  </GridLayout>

  <GridLayout v-show="selectedTabview == 2" row="2" width="100%"  paddingTop="18" height="100%" backgroundColor="#eff2f7">
   <NaverBookmark />
 </GridLayout>

  <GridLayout v-show="selectedTabview == 3" row="2" width="100%" paddingTop="18" height="100%" backgroundColor="#eff2f7">
    <TistoryBookmark />
    <BookmarkMessage visibility="collapsed"/>
  </GridLayout>

 </GridLayout>
</template>

<script>

 import { isIOS, isAndroid } from 'tns-core-modules/platform'
 import navBottom from "./custom/navBottom";
 import Item from "./custom/item";
 import Category from "./custom/category";
 import ItemDetails from "./ItemDetails";
 import BookmarkMessage from "./message/BookmarkMessage";
 import YoutubeBookmark from "./bookmarkList/YoutubeBookmark"
 import NaverBookmark from "./bookmarkList/NaverBookmark"
 import TistoryBookmark from "./bookmarkList/TistoryBookmark"
 import PlaceBookmark from "./bookmarkList/PlaceBookmark"

 const gestures = require("ui/gestures");
 const app = require("application");
    export default {
        name:"BookmarkWrap",
        components: {
         navBottom,
         Item,
         Category,
         BookmarkMessage,
         YoutubeBookmark,
         NaverBookmark,
         TistoryBookmark,
         PlaceBookmark
        },computed: {
      itemsCategory(){
       return this.category.slice().reverse();
      }
     },

     mounted () {
      // SwissArmyKnife.setAndroidStatusBarColor("#b51213");
     },
     data() {
      return {
       lastDelY: 0,
       headerCollapsed: false,
       selectedTab: 0,
       selectedTabview: 0,
       items: [{
        name: "Manila Ultimate Tombstone Burger",
        cover: "~/assets/images/food/burger640.jpg",
        images: [
         {src: "~/assets/images/food/burger/burger1.jpg"},
         {src: "~/assets/images/food/burger/burger2.jpg"},
         {src: "~/assets/images/food/burger/burger3.jpg"},
         {src: "~/assets/images/food/burger/burger4.jpg"},
         {src: "~/assets/images/food/burger/burger5.jpg"},
         {src: "~/assets/images/food/burger/burger6.jpg"}
        ],
        category: "Burger",
        categoryTag: "#2D9CDB",
        price: "300.00",
        likes: 987,
        isLike: false,
        isFavorite: true,
        comments: 13,
        rating: "4.5",
        description: "a"
       },
        {
         name: "Quezon Chocolate Marble Pancake",
         cover: "~/assets/images/food/pancake640.jpg",
         images: [
          {src: "~/assets/images/food/pancake/pancake1.jpg"},
          {src: "~/assets/images/food/pancake/pancake2.jpg"},
          {src: "~/assets/images/food/pancake/pancake3.jpg"},
          {src: "~/assets/images/food/pancake/pancake4.jpg"},
          {src: "~/assets/images/food/pancake/pancake5.jpg"},
          {src: "~/assets/images/food/pancake/pancake6.jpg"}
         ],
         category: "Pancake",
         categoryTag: "#e4ce0d",
         price: "230.00",
         likes: 891,
         isLike: true,
         isFavorite: true,
         comments: 7,
         rating: "4.0",
         description: "a"
        },
        {
         name: "Binondo Black Forest Cake",
         cover: "~/assets/images/food/cake640.jpg",
         images: [
          {src: "~/assets/images/food/cake/cake1.jpg"},
          {src: "~/assets/images/food/cake/cake2.jpg"},
          {src: "~/assets/images/food/cake/cake3.jpg"},
          {src: "~/assets/images/food/cake/cake4.jpg"}
         ],
         category: "Cake",
         categoryTag: "#27AE60",
         price: "300.00",
         likes: 730,
         isLike: true,
         isFavorite: true,
         comments: 11,
         rating: "4.0",
         description: "a"
        },
       ],
       category: [
        {
         cover: "~/assets/images/food/burger640.jpg",
         category: "BURGER",
         count: "13",
        },
        {
         cover: "~/assets/images/food/pancake640.jpg",
         category: "PANCAKE",
         count: "5",
        },
        {
         cover: "~/assets/images/food/cake640.jpg",
         category: "CAKE",
         count: "9",
        },
        {
         cover: "~/assets/images/food/beer640.jpg",
         category: "BEER",
         count: "7",
        },

       ]
      };
     },
     methods: {
      tabSelect(num){
       if(num == 0){
         this.selectedTabview = 0;
       }else if(num == 1){
         this.selectedTabview = 1;
       }else if(num == 2){
         this.selectedTabview = 2;
       }else if(num == 3) {
         this.selectedTabview = 3;
       }


      },
      search(){
       console.log('search')
      },
      bell(){
       console.log('bell')
      },
      showItem(payload) {
       this.$navigateTo(ItemDetails,{
        props: {
         item: payload
        },
        animated: true,
        transition: {
         name: "slideTop",
         duration: 380,
         curve: "easeIn"
        }
       })
      },
      home() {
       this.selectedTab = 0;
      },
      cart() {
       this.selectedTab = 1;
      },
      history() {
       this.selectedTab = 2;
      },
      about() {
       this.selectedTab = 3;
      }
     }
    };
</script>

<style lang="scss">
 .tabview.active { //언더라인 속성
  border-bottom-color: #ffe074;
  border-bottom-width: 4;
  margin: 0;
  height: 40;
 }

 .tabviewText {
  font-family: nanumsquareroundeb;
  margin-top: 10;
  font-size: 14;
  color: #cccccc;
  horizontal-align: center;
 }
 .tabviewText.active { //tabbar 선택될때마다 이벤트
  margin-top: 0;
  color: #333333;
  vertical-align: center;
  font-family: nanumsquareroundeb;
  font-size: 14;
 }
 .navTab {
  background-color: #ffffff; //tabbar 세팅부분
 }
 .navTabview {
  background-color: blue;
 }
 .status-img {
  margin-top: 4;
  margin-right: 20;
  width: 30;
  height: 30;
 }
 .status-profile {
  border-width: 1;
  border-color: #ffffff;
  background-color: #f1ebeb;
  border-radius: 50%;
  margin-top: 4;
  margin-right: 15;
  width: 30;
  height: 30;
 }
 .status-title {
  color: white;
  font-size: 18;
  margin-left: 15;
  margin-top: 8;
  horizontal-align: left;
  vertical-align: center;
 }
</style>
