<template>
 <Page actionBarHidden="true">
  <ScrollView orientation="vertical" style="z-index: 1">
   <StackLayout>
   <StackLayout orientation="horizontal" height="30" marginTop="50" width="100%">
    <label text="뒤로" width="15%" @tap="$navigateBack"></label>
    <label text="매장정보" width="50%"></label>
    <StackLayout orientation="horizontal" width="35%">
     <FIcon name="fa-bookmark" size="15" color="#333333" width="50%" />
     <FIcon name="fa-share-alt" size="15" color="#333333" width="50%" />
    </StackLayout>
   </StackLayout>
  <FlexboxLayout flexDirection="column" width="100%" backgroundColor="lightgray">
   <FlexboxLayout flexDirection="column" width="100%" backgroundColor="lightgray" height="500">
   <StackLayout orientation="horizontal" backgroundColor="white" height="7%">
    <label :text="placeInfo.category_name" width="30%" />
    <label :text="item.place_name" width="70%"/>
   </StackLayout>
   <StackLayout orientation="horizontal" backgroundColor="white" height="7%" style="z-index: 10000">
    <label :text="opening_flag" width="33.3%" backgroundColor="#7fffd4" />
    <label :text="placeInfo.rating" width="33.3%"/>
    <label text="메뉴" width="33.3%" />
   </StackLayout>
   <AbsoluteLayout orientation="horizontal" height="71%">
    <WebView height="100%" width="100%" :src="'http://192.168.1.86:8080/?latitude='+item.latitude+'&longitude='+item.longitude" @tap="mapClick" @doubletap="aa"/>
   </AbsoluteLayout>
    <StackLayout orientation="horizontal" backgroundColor="white" height="5%">
     <label :text="placeInfo.road_place_address" width="70%" backgroundColor="#7fffd4" />
     <label text="복사" width="30" @tap="addressCopy(placeInfo.road_place_address)"/>
    </StackLayout>
    <StackLayout orientation="horizontal" backgroundColor="white" height="5%">
     <label :text="placeInfo.place_address" width="70%" backgroundColor="#7fffd4" />
    </StackLayout>
    <StackLayout orientation="horizontal" backgroundColor="white" height="5%" >
     <label :text="placeInfo.tel_no" width="70%" backgroundColor="#7fffd4" />
     <label text="전화걸기" width="30" @tap="callStore(placeInfo.tel_no)"/>
    </StackLayout>
   </FlexboxLayout>
   <StackLayout orientation="horizontal" height="130">
    <image src="res://kakaomap" height="130"/>
    <image src="res://instagram" height="130"/>
   </StackLayout>
   <FlexboxLayout flexDirection="column" width="100%" backgroundColor="#2e8b57" height="500">
    <StackLayout orientation="horizontal" height="130">
     <label text="유튜브" />
    </StackLayout>
   <ScrollView orientation="horizontal">
   <StackLayout orientation="horizontal" backgroundColor="blue" style="text-align: left;">
    <WrapLayout orientation="horizontal"
                backgroundColor="white" v-for="y_reviews in youTubeReview" height="300" paddingBottom="20">
       <StackLayout paddingRight="7" >

         <image :src="y_reviews.y_thumbnail_url" height="120" />
        <TextView :text="y_reviews.y_description" height="50" width="120" backgroundColor="aqua" editable="false" style="border-bottom-width: 0;"/>
      </StackLayout>
    </WrapLayout>
     <!-- <label :text="y_reviews.y_description" /> -->
   </StackLayout>
   </ScrollView>
    <StackLayout orientation="horizontal" height="130" marginTop="0">
     <label text="네이버" />
    </StackLayout>
    <ScrollView orientation="horizontal">
     <StackLayout orientation="horizontal" backgroundColor="#3c495e" height="200">
      <WrapLayout orientation="horizontal"
                  backgroundColor="yellow" v-for="n_reviews in naverReviews">
       <StackLayout>
        <label :text="n_reviews.description" width="200" height=""/>
        <label :text="n_reviews.author" width="200" height=""/>
       </StackLayout>
      </WrapLayout>
      <!-- <label :text="y_reviews.y_description" /> -->
     </StackLayout>
   </ScrollView>
   <StackLayout orientation="horizontal" height="130" marginTop="0">
   <label text="티스토리" />
  </StackLayout>
   <ScrollView orientation="horizontal">
    <StackLayout orientation="horizontal" backgroundColor="#3c495e" height="200">
     <WrapLayout orientation="horizontal"
                 backgroundColor="yellow" v-for="d_reviews in daumReviews">
      <StackLayout>
       <label :text="d_reviews.description" width="200" height=""/>
       <label :text="d_reviews.author" width="200" height=""/>
      </StackLayout>
     </WrapLayout>
     <!-- <label :text="y_reviews.y_description" /> -->
    </StackLayout>
   </ScrollView>
   <StackLayout orientation="horizontal" height="130" marginTop="0">
    <label text="잇정리뷰" />
   </StackLayout>
   <ScrollView orientation="horizontal">
    <StackLayout orientation="horizontal" backgroundColor="#3c495e" height="200">
     <WrapLayout orientation="horizontal"
                 backgroundColor="yellow" v-for="a_reviews in appReviews">
      <StackLayout>
       <label :text="a_reviews.review_contents" width="200" height=""/>
       <label :text="a_reviews.review_id" width="200" height=""/>
      </StackLayout>
     </WrapLayout>
     <!-- <label :text="y_reviews.y_description" /> -->
    </StackLayout>
   </ScrollView>
   </FlexboxLayout>
   <Button text="리뷰작성" @tap="$navigateTo(reviewWritePage)"></Button>
  </FlexboxLayout>
   </StackLayout>
  </ScrollView>
 </Page>
</template>

<script>
import axios from 'axios';
import ReviewWrite from "../../../../review/ReviewWrite";
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
   // mapDetail:DetailMap,
    reviewWritePage:ReviewWrite
   }
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

   console.log(this.item.place_id)
   axios({
    method: 'get',
   // url: 'http://192.168.1.85:9090/v1/places/'+this.item.place_id+'/portalreviews',
    url: 'http://api.matitzung.shop/v1/places/'+this.item.place_id+'/portalreviews',
    params: {
     page : '1',
     portal : 'youtube'
    },
   }).then((response) => {
    //console.log(response.data);
    console.log("유튜브" + response.data.dataList.YOUTUBE)
    this.$data.youTubeReview = response.data.dataList.YOUTUBE;
    //this.$data.place_detail = response.data.dataList;
    //console.log(response.data);
   }, (error) => {
    console.log(error);
   });

   axios({
    method: 'get',
    url: 'http://api.matitzung.shop/v1/places/'+this.item.place_id + '/portalblogs',
    //url: 'http://192.168.1.85:8080/v1/places/'+this.place_id + '/portalblogs',
    params: {
    },
   }).then((response) => {
    console.log(response.data);
    this.$data.naverReviews = response.data.dataList.NAVER;
    this.$data.daumReviews = response.data.dataList.DAUM;
    //this.$data.youtubeReviews = response.data.dataList.DAUM;
   }, (error) => {
    console.log(error);
   });

   axios({
    method: 'get',
    url: 'http://api.matitzung.shop/v1/places/'+'24766059K' + '/reviews',
    //url: 'http://api.matitzung.shop/v1/places/'+this.item.place_id + '/reviews',
    //url: 'http://192.168.1.85:8080/v1/places/'+this.place_id + '/portalblogs',
    params: {
    },
   }).then((response) => {
    console.log(response.data);
    this.$data.appReviews = response.data.dataList;
    console.log(this.$data.appReviews)
    //this.$data.youtubeReviews = response.data.dataList.DAUM;
   }, (error) => {
    console.log(error);
   });

  },methods: {
   mapClick(){
    console.log(this.item.place_id)
    //this.$navigateTo(DetailMap, {
    // props: {
    //  }});

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
