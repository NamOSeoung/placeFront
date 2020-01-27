<template>
 <Page actionBarHidden="true">
  <ScrollView orientation="vertical" backgroundColor="#eff2f7">
   <StackLayout>
    <StackLayout orientation="horizontal" marginTop="23" backgroundColor="white" paddingBottom="19">
     <StackLayout @tap="$navigateBack">
      <FIcon name="fa-angle-left" size="28" color="#333333" width="28" height="28" />
     </StackLayout>
     <StackLayout marginTop="7" width="44" @tap="$navigateBack">
      <label text="검색결과" fontSize="12" color="#494949"  style="font-family: nanumsquareroundeb"/>
     </StackLayout>
     <StackLayout marginTop="8" marginLeft="216" >
        <FIcon name="fa-bookmark"  color="#ffe074" width="14" height="18" size="18" />
        <FIcon name="fa-bookmark"  width="14" height="18"size="18" visibility="collapsed"/>
     </StackLayout>
     <StackLayout marginTop="8" marginLeft="17">
       <FIcon name="fa-share-alt" width="20" height="20" size="20" color="#555555"/>
     </StackLayout>
    </StackLayout>
    <StackLayout >
     <StackLayout marginTop="16" paddingLeft="16">
       <label :text="placeInfo.category_name" fontSize="11" color="#555555" style="font-family: nanumsquareroundeb" />
     </StackLayout>
     <StackLayout marginTop="8" paddingLeft="16">
      <label :text="item.place_name" fontSize="16" color="#555555" style="font-family: nanumsquareroundeb" />
     </StackLayout>
     <StackLayout width="90%" marginTop="13">
      <WebView height="100%" width="100%" :src="'http://192.168.35.57:8080/?latitude='+item.latitude+'&longitude='+item.longitude" @tap="mapClick" @doubletap="aa"/>
     </StackLayout>
     <StackLayout marginLeft="20" marginTop="13">
       <label :text="placeInfo.tel_no" color="#555555" fontSize="11"style="font-family: nanumsquareroundeb" />
     </StackLayout>
     <StackLayout marginLeft="20" marginTop="8">
      <label :text="placeInfo.road_place_address" color="#555555" fontSize="11"style="font-family: nanumsquareroundeb" />
     </StackLayout>
     <StackLayout orientation="horizontal">
      <StackLayout marginLeft="25">
      <StackLayout width="34" height="34" backgroundColor="#ffe074" :borderRadius="50" marginTop="25">
       <FIcon name="fa-clock" width="24" size="24" height="24" color="white" marginTop="6" />
      </StackLayout>
     </StackLayout>
      <StackLayout marginLeft="53">
      <StackLayout width="34" height="34" backgroundColor="#ffe074" :borderRadius="50" marginTop="25">
       <FIcon name="fa-star" width="24" size="24" height="24" color="white" marginTop="6" />
      </StackLayout>
     </StackLayout>
      <StackLayout marginLeft="58" @tap="callStore(placeInfo.tel_no)">
       <StackLayout width="34" height="34" backgroundColor="#ffe074" :borderRadius="50" marginTop="25">
        <FIcon name="fa-phone-alt" width="24" size="24" height="24" color="white" marginTop="6" />
       </StackLayout>
      </StackLayout>
      <StackLayout marginLeft="63"  @tap="addressCopy(placeInfo.road_place_address)">>
       <StackLayout width="34" height="34" backgroundColor="#ffe074" :borderRadius="50" marginTop="25">
        <FIcon name="fa-map-marked-alt" width="24" size="24" height="24" color="white" marginTop="6" />
       </StackLayout>
      </StackLayout>
     </StackLayout>
     <StackLayout orientation="horizontal">
      <StackLayout marginTop="7" marginLeft="26">
      <label text="영업중" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"  />
     </StackLayout>
      <StackLayout marginTop="7" marginLeft="65">
       <label text="2.5" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"  />
      </StackLayout>
      <StackLayout marginTop="7" marginLeft="65" @tap="callStore(placeInfo.tel_no)">
       <label text="전화걸기" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"  />
      </StackLayout>
      <StackLayout marginTop="7" marginLeft="58" @tap="addressCopy(placeInfo.road_place_address)">
       <label text="주소복사" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"  />
      </StackLayout>
     </StackLayout>
     <StackLayout>
     <YoutubeList />
    </StackLayout>
     <StackLayout>
      <NaverList />
     </StackLayout>
     <StackLayout>
      <TistoryList />
     </StackLayout>
     <StackLayout>
      <GoogleList />
     </StackLayout>
     <StackLayout>
      <AppReviewList />
     </StackLayout>
    </StackLayout>
<!--   <StackLayout orientation="horizontal" backgroundColor="white" height="7%" style="z-index: 10000">-->
<!--    <label :text="opening_flag" width="33.3%" backgroundColor="#7fffd4" />-->
<!--    <label :text="placeInfo.rating" width="33.3%"/>-->
<!--    <label text="메뉴" width="33.3%" />-->
<!--   </StackLayout>-->
    <StackLayout  @tap="$navigateTo(reviewWritePage)" width="100" height="30" borderRadius="15" backgroundColor="#ffe074" marginBottom="22">
      <label text="리뷰쓰기" color="#555555" fontSize="13"  style="font-family: nanumsquareroundeb" marginLeft="26" marginTop="8" />
    </StackLayout>
   </StackLayout>
  </ScrollView>
 </Page>
</template>

<script>
import axios from 'axios';
import ReviewWrite from "../../../../review/ReviewWrite";
import YoutubeList from './reviewComponents/YoutubeList';
import NaverList from './reviewComponents/NaverList';
import TistoryList from './reviewComponents/TistoryList';
import GoogleList from './reviewComponents/GoogleList';
import AppReviewList from './reviewComponents/AppReviewList';

import Tistory from "../../../home/homeComponents/TistoryList";
//import DetailMap from "./DetailMaps/DetailMap";

var clipboard = require("nativescript-clipboard");
var Toast = require("nativescript-toast");
var phone = require( "nativescript-phone" );

var dialogs = require("tns-core-modules/ui/dialogs");

 export default {
  props: ["context"],
  data () {
   return {
    place_detail_q:'',
    placeInfo:[],
    youTubeReview:[],
    naverReviews:[],
    daumReviews:[],
    appReviews:[],
    opening_flag:'',
    setPlace_id:'',
   // mapDetail:DetailMap,
    reviewWritePage:ReviewWrite
   }
  },components: {
   Tistory,
    YoutubeList,NaverList,TistoryList,GoogleList,AppReviewList
  }, computed: {
   item() {
    return this.context || {};
   }
  },mounted() {
   this.$data.place_detail_q = this.item.place_id + '?latitude=' + this.item.latitude + '&longitude=' + this.item.longitude;
   console.log(this.place_detail_q)
   axios({
    method: 'get',
   // url: 'http://192.168.1.85:9090/v1/places/'+this.place_detail_q,
    url: 'http://api.matitzung.shop/v1/places/'+this.place_detail_q,
    params: {
    },
   }).then((response) => {
    //console.log(response.data);
    this.$data.placeInfo = response.data.dataList;
    this.$data.opening_flag = this.openingCheck();
    console.log(response.data);
   }, (error) => {
    console.log(error);
   });
  },created() {
   this.$data.setPlace_id = this.item.place_id
  },methods: {
   mapClick(){
    console.log(this.item.place_id)
    //this.$navigateTo(DetailMap, {
    // props: {
    //  }});

   },youtubeReview(){
      console.log(this.$data.setPlace_id + "2222222222222222222222")
      return this.$data.setPlace_id
   },aa(){
    console.log('??')
    return;
   },addressCopy(address){

    clipboard.setText(address).then(function() {
     Toast.makeText("복사되었습니다.").show();
    })

    clipboard.getText().then(function(content) {
     console.log("확인 " + content);
    })
   },callStore(tel_no){
    console.log(tel_no)

    dialogs.confirm({
     title: this.item.place_name,
     message: tel_no,
     okButtonText: "전화걸기",
     cancelButtonText: "취소"
    }).then(function (result) {
     // result argument is boolean
     if(result){
      phone.dial(tel_no,true);
     }
    });

   },openingCheck(){
    var date = new Date();
    var day = date.toDateString().split(" ")[0];
    var before_day;
    var time ;
    var hour;
    var minute;
    var dayList = ['Mon','Tue','Wed','Thu','Fir','Sat','Sun'];
    var opening_hours = JSON.parse(this.placeInfo.open_hours);


    //구글에서아예 서치를 못해 온 경우
    if (opening_hours == null){
     console.log("정보없음")
     return "정보없음";
    }else{
     //오늘 날짜에 대한 정보 초기화
     var close_time;
     var open_time;
     var close_nextday_flag;

     //이전 날짜에 대한 정보 초기화
     var before_nextday_flag;
     var before_close_time;

     //이전 날짜 확인
     if(day == "Mon"){
      before_day = dayList[dayList.indexOf(day)+6];
     }else {
      before_day = dayList[dayList.indexOf(day)-1];
     }

     //오늘 날짜 체크를위한 데이터 추가
     close_time = opening_hours[day].close;
     open_time = opening_hours[day].open;
     close_nextday_flag = opening_hours[day].close_nextday;

     //이전 날짜 체크를위한 데이터 추가
     before_nextday_flag =  opening_hours[before_day].close_nextday;
     before_close_time = opening_hours[before_day].close;


     //현재의 시간 세팅
     if(date.getHours().toString().length == 1){
      hour = "0" + date.getHours().toString();
     }else{
      hour = date.getHours().toString();
     }
     if(date.getMinutes().toString().length == 1){
      minute = "0" + date.getMinutes().toString();
     }else {
      minute = date.getMinutes().toString();
     }
     time = hour + minute; //접속 된 현재 시간 체크

     if(before_nextday_flag == 'Y'){
      if(time < before_close_time){
       console.log("영업중");
       return "영업중";
      }else{
       if(open_time == ""){
        console.log("휴무");
        return "휴무"
       }else{
        if(close_nextday_flag == 'Y'){
         close_time = parseInt(close_time) + 2400;
        }
        console.log(open_time)
        console.log(close_time)
        if(time < open_time ){
         console.log('영업종료')
         return "영업종료"
        }else{
         if(time > close_time){
          console.log('영업종료');
          return "영업종료"
         }else{
          console.log('영업중');
          return "영업중"
         }
        }
       }
      }
     }else{
      if(open_time == ""){
       console.log("영업종료");
       return "영업종료"
      }else{
       if(close_nextday_flag == 'Y'){
        close_time = parseInt(close_time) + 2400;
       }
       console.log(open_time)
       console.log(close_time)
       if(time < open_time ){
        console.log('영업종료')
        return "영업종료"
       }else{
        if(time > close_time){
         console.log('영업종료');
         return "영업종료"
        }else{
         console.log('영업중');
         return "영업중"
        }
       }
      }
     }
    }
   }
  }
 };
</script>

<style scoped lang="scss">
 // Start custom common variables
 //@import "~@nativescript/theme/scss/variables/blue";
 // End custom common variables

 // Custom styles


</style>
