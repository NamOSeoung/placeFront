<template>
 <Page actionBarHidden="true">
  <StackLayout>
   <ActivityIndicator :busy="isBusy" v-if="isBusy==true" class="activity-indicator"/>
   <StackLayout orientation="horizontal" class="placeDetailBarWrap">
    <StackLayout class="placeDetailBackIconWrap" @tap="$navigateBack">
     <image class="placeDetailBackIcon" src="~/Resources/img/home/angle-left.png"/>
    </StackLayout>
    <StackLayout class="placeDetailBackTitleWrap" @tap="$navigateBack">
     <label class="placeDetailBackTitle" text="검색결과"/>
    </StackLayout>
    <StackLayout class="placeDetailBookmarkWrap" v-if="bookmark == true" @tap="bookmarkDelete">
     <image class="placeDetailBookmark" src="~/Resources/img/place/bookmark_y_64.png"/>
    </StackLayout>
    <StackLayout class="placeDetailBookmarkWrap" v-else @tap="bookmarkSetting">
     <image class="placeDetailBookmark" src="~/Resources/img/place/bookmark_d_64.png"/>
    </StackLayout>
<!--    <StackLayout class="placeDetailShareWrap">-->
<!--     <image class="placeDetailShare" src="~/Resources/img/place/share_3_64.png"/>-->
<!--    </StackLayout>-->
   </StackLayout>
   <ScrollView class="placeDetailScrollWrap"  id="ScrollView" orientation="vertical" height="100%" > <!--//@scroll -->
    <StackLayout>
     <StackLayout>
      <StackLayout class="placeDetailCategoryWrap">
       <label class="placeDetailCategory" :text="placeInfo.category"/>
      </StackLayout>
      <StackLayout class="placeDetailPlaceNameWrap">
       <label class="placeDetailPlaceName" :text="item.place_name"/>
      </StackLayout>
      <StackLayout class="placeDetailMapWrap" >
       <WebView class="placeDetailMap"
                :src="'http://api.eatjeong.com:8211/?latitude='+item.latitude+'&longitude='+item.longitude+'&map_height='+map_height" />
      </StackLayout>
      <StackLayout class="placeDetailTelNoWrap">
       <label class="placeDetailTelNo" :text="placeInfo.phone_no"/>
      </StackLayout>
      <StackLayout class="placeDetailAddressWrap">
       <label class="placeDetailAddress" :text="placeInfo.road_address"/>
      </StackLayout>
      <StackLayout class="placeDetailInfoWrap" orientation="horizontal">
       <StackLayout>
        <StackLayout class="placeDetailOpenWrap" @tap="openTimeModal" v-if="placeInfo.opening_hours != null">
         <StackLayout class="placeDetailOpenIconWrap" backgroundColor="#ffe074">
          <image class="placeDetailOpenIcon" src="~/Resources/img/place/clock_f_64.png"/>
         </StackLayout>
         <StackLayout class="placeDetailOpenTitleWrap" >
          <!--         <label :text="placeInfo.opening_hours" />-->
          <label class="placeDetailOpenTitle" :text="openingCheck()"/>
         </StackLayout>
        </StackLayout>
        <StackLayout class="placeDetailOpenWrap" @tap="openTimeModal" v-else>
         <StackLayout class="placeDetailOpenIconWrap" backgroundColor="#dddddd">
          <image class="placeDetailOpenIcon" src="~/Resources/img/place/clock_f_64.png"/>
         </StackLayout>
         <StackLayout class="placeDetailOpenTitleWrap" >
          <!--         <label :text="placeInfo.opening_hours" />-->
          <label class="placeDetailOpenTitle" :text="openingCheck()"/>
         </StackLayout>
        </StackLayout>
       </StackLayout>


       <StackLayout >
        <StackLayout class="placeDetailRatingWrap"  v-if="placeInfo.rating > 0">
         <StackLayout class="placeDetailRatingIconWrap" backgroundColor="#ffe074">
          <image class="placeDetailRatingIcon" src="~/Resources/img/place/star_f_64.png"/>
         </StackLayout>
         <StackLayout class="placeDetailRatingTitleWrap">
          <label class="placeDetailRatingTitle" :text="placeInfo.rating"/>
         </StackLayout>
        </StackLayout>
         <StackLayout class="placeDetailRatingWrapNone" v-else>
          <StackLayout class="placeDetailRatingIconWrap"  backgroundColor="#dddddd" >
           <image class="placeDetailRatingIcon" src="~/Resources/img/place/star_f_64.png"/>
          </StackLayout>
          <StackLayout class="placeDetailRatingTitleWrap" >
           <label class="placeDetailRatingTitle" text="정보없음"/>
          </StackLayout>
         </StackLayout>
       </StackLayout>

       <StackLayout>
        <StackLayout v-if="placeInfo.phone_no != ''">
         <StackLayout class="placeDetailTellingWrap" @tap="placeCallModal(placeInfo.phone_no)">
          <StackLayout class="placeDetailTellingIconWrap" backgroundColor="#ffe074">
           <image class="placeDetailTellingIcon" src="~/Resources/img/place/call_f_64.png"/>
          </StackLayout>
          <StackLayout class="placeDetailTellingTitleWrap"
                       @tap="placeCallModal(placeInfo.phone_no)">
           <label class="placeDetailTellingTitle" text="전화걸기"/>
          </StackLayout>
         </StackLayout>
        </StackLayout>

        <StackLayout v-else>
         <StackLayout class="placeDetailTellingWrap">
          <StackLayout class="placeDetailTellingIconWrap" backgroundColor="#dddddd">
           <image class="placeDetailTellingIcon" src="~/Resources/img/place/call_f_64.png"/>
          </StackLayout>
          <StackLayout class="placeDetailTellingTitleWrap"
                       @tap="placeCallModal(placeInfo.phone_no)">
           <label class="placeDetailTellingTitle" text="정보없음"/>
          </StackLayout>
         </StackLayout>
        </StackLayout>
       </StackLayout>




       <StackLayout class="placeDetailMarkerWrap" @tap="addressCopy(placeInfo.road_address)">
        <StackLayout class="placeDetailMarkerIconWrap">
         <image class="placeDetailMarkerIcon" src="~/Resources/img/place/place_f_64.png"/>
        </StackLayout>
        <StackLayout class="placeDetailCopyTitleWrap"
                     @tap="addressCopy(placeInfo.road_address)">
         <label class="placeDetailCopyTitle" text="주소복사"/>
        </StackLayout>
       </StackLayout>
      </StackLayout>
      <StackLayout>
       <YoutubeList/>
      </StackLayout>
      <StackLayout>
       <NaverList/>
      </StackLayout>
      <StackLayout>
       <TistoryList/>
      </StackLayout>
      <StackLayout>
       <GoogleList/>
      </StackLayout>
      <StackLayout>
       <AppReviewList/>
      </StackLayout>
     </StackLayout>
     <!--   <StackLayout orientation="horizontal" backgroundColor="white" height="7%" style="z-index: 10000">-->
     <!--    <label :text="opening_flag" width="33.3%" backgroundColor="#7fffd4" />-->
     <!--    <label :text="placeInfo.rating" width="33.3%"/>-->
     <!--    <label text="메뉴" width="33.3%" />-->
     <!--   </StackLayout>-->
     <StackLayout @tap="goReviewWritePage" width="100" height="30" borderRadius="15"
                  backgroundColor="#ffe074" marginBottom="22">
      <label text="리뷰쓰기" color="#555555" fontSize="13" style="font-family: nanumsquareroundeb"
             marginLeft="26" marginTop="8"/>
     </StackLayout>
    </StackLayout>
   </ScrollView>
  </StackLayout>
 </Page>
</template>

<script>

 import axios from 'axios';
 import ReviewWrite from "./review/ReviewWrite"
 import YoutubeList from './reviewComponents/YoutubeList';
 import NaverList from './reviewComponents/NaverList';
 import TistoryList from './reviewComponents/TistoryList';
 import GoogleList from './reviewComponents/GoogleList';
 import AppReviewList from './reviewComponents/AppReviewList';

 import Login from '../../../../member/Login'


 import Tistory from "../../../home/homeComponents/TistoryList";

 import OpenTimeModal from './modal/OpenTimeModal';
 import PlaceCallModal from './modal/PlaceCallModal';
 import PlaceGoLoginModal from './modal/PlaceGoLoginModal';
 const platformModule = require("tns-core-modules/platform");
 var clipboard = require("nativescript-clipboard");
 var Toast = require("nativescript-toast");
 var phone = require("nativescript-phone");
 const appSettings = require("tns-core-modules/application-settings");
 import '~/Resources/css/menu/search/place/placeDetail/PlaceDetail/placeDetail_320.scss';
 import '~/Resources/css/menu/search/place/placeDetail/PlaceDetail/placeDetail_360.scss';
 import '~/Resources/css/menu/search/place/placeDetail/PlaceDetail/placeDetail_420.scss';
 import '~/Resources/css/menu/search/place/placeDetail/PlaceDetail/placeDetail_480.scss';
 var cache = require("nativescript-cache");
 var dialogs = require("tns-core-modules/ui/dialogs");

 export default {
  props: ["context"],
  data() {
   return {
    placeInfo: [],
    isBusy:false,
    bookmark:false,
    youTubeReview: [],
    naverReviews: [],
    daumReviews: [],
    appReviews: [],
    setPlace_id: '',
    openTimeList: [],
    reviewWritePage: ReviewWrite,
    map_height:220,
   }
  }, components: {
   Tistory, YoutubeList, NaverList, TistoryList, GoogleList, AppReviewList
  }, computed: {
   item() {
    return this.context || {};
   }
  }, mounted() {
   console.log("dpi" + platformModule.screen.mainScreen.widthDIPs)
   if(platformModule.screen.mainScreen.widthDIPs <= 360){
       this.$data.map_height = 220;
   }else if(platformModule.screen.mainScreen.widthDIPs > 360){
       this.$data.map_height = 300;
   }
   axios({
    method: 'get',
    url: 'http://api.eatjeong.com/v1/places/' + this.item.place_id,
    params: {
     latitude: this.item.latitude,
     longitude: this.item.longitude,
     user_id:appSettings.getString("user_id"),
     sns_division:appSettings.getString("sns_division")
    },
   }).then((response) => {
      this.$data.placeInfo = response.data.dataList;
      this.$data.openTimeList = response.data.dataList.business_day;
      console.log(this.$data.placeInfo)
      console.log(this.$data.placeInfo.opening_hours)
      if(this.$data.placeInfo.app_rating==0){
           this.$data.placeInfo.rating = this.$data.placeInfo.google_rating;
      }else{
           this.$data.placeInfo.rating = this.$data.placeInfo.app_rating;
      }
      if(response.data.dataList.bookmark_flag == true){
       this.$data.bookmark = true;
      }else{
       this.$data.bookmark = false;
      }
   }, (error) => {
      console.log(error);
   });
  }, created() {
   this.$data.setPlace_id = this.item.place_id

  }, methods: {
   goReviewWritePage(){
     if(appSettings.getString("user_id") != undefined ){
           if(appSettings.getString("user_id") !=''){
              if(cache.get("write_flag") == "true"){
               dialogs.alert({
                title: "",
                message: "이미 작성하신 리뷰가 존재합니다.",
                okButtonText: "확인"
               }).then(() => {
                console.log("Dialog closed22!");
               });
              }else{
                 this.$navigateTo(ReviewWrite)
              }

           }else{
              //this.$navigateTo(Login)
               this.$showModal(PlaceGoLoginModal)
               this.$modal.close()
           }
       }else{
          //this.$navigateTo(Login)
          this.$showModal(PlaceGoLoginModal)
          this.$modal.close()
       }
   },
   bookmarkSetting(){

    if(appSettings.getString("user_id") != undefined ){
     if(appSettings.getString("user_id") !=''){
      axios({
       method: 'post',
       url: 'http://api.eatjeong.com/v1/bookmarks',
       params: {
        gubun:'place',
        place_id:cache.get("place_id"),
        user_id:appSettings.getString("user_id"),
        sns_division:appSettings.getString("sns_division")
       },
      }).then((response) => {
       this.$data.bookmark = true;
      }, (error) => {
       console.log(error);
      });
     }else{
      this.$showModal(PlaceGoLoginModal)
     // this.$navigateTo(Login)
     }
    }else{
     this.$showModal(PlaceGoLoginModal)
    // this.$navigateTo(Login)
    }



   },bookmarkDelete(){

    if(appSettings.getString("user_id") != undefined ){
     if(appSettings.getString("user_id") !=''){
      axios({
       method: 'delete',
       url: 'http://api.eatjeong.com/v1/bookmarks',
       params: {
        gubun:'place',
        place_id:cache.get("place_id"),
        user_id:appSettings.getString("user_id"),
        sns_division:appSettings.getString("sns_division")
       },
      }).then((response) => {
       this.$data.bookmark = false;
      }, (error) => {
       console.log(error);
      });
     }else{
      this.$navigateTo(Login)
     }
    }else{
     this.$navigateTo(Login)
    }
   }, outubeReview() {
    return this.$data.setPlace_id
   }, addressCopy(address) {

    clipboard.setText(address).then(function () {
     Toast.makeText("복사되었습니다.").show();
    })

    clipboard.getText().then(function (content) {
     console.log("확인 " + content);
    })
   }, placeCallModal(phone_no) {
    console.log(phone_no + "???")

    this.$showModal(PlaceCallModal, {
     props: {
      phone_no: phone_no,
     },
     fullscreen: false,
     animated: true,
     stretched: false,
     dismissEnabled: true,
     dimAmount: 0.5 // Sets the alpha of the background dim,
    });
   }, openTimeModal() {
    if(this.$data.openTimeList != null){
      this.$showModal(OpenTimeModal, {
       props: {
        openTimeList: this.$data.openTimeList
       },
       fullscreen: false,
       animated: true,
       stretched: false,
       dismissEnabled: true,
       dimAmount: 0.5 // Sets the alpha of the background dim,
      });
    }

   }, openingCheck() {
    console.log(this.$data.placeInfo.opening_hours)
    if(this.$data.placeInfo.opening_hours == undefined){
     return "정보없음";
     return;
    }
    var date = new Date();
    var day = date.toDateString().split(" ")[0];
    var before_day;
    var time;
    var hour;
    var minute;
    var dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var opening_hours = JSON.parse(this.$data.placeInfo.opening_hours);

    //구글에서아예 서치를 못해 온 경우
    if (opening_hours == null) {
     return "정보없음";
    } else {
     //오늘 날짜에 대한 정보 초기화
     var close_time;
     var open_time;
     var close_nextday_flag;

     //이전 날짜에 대한 정보 초기화
     var before_nextday_flag;
     var before_close_time;

     //이전 날짜 확인
     if (day == "Mon") {
      before_day = dayList[dayList.indexOf(day) + 6];
     } else {
      before_day = dayList[dayList.indexOf(day) - 1];
     }

     //오늘 날짜 체크를위한 데이터 추가
     close_time = opening_hours[day].close;
     open_time = opening_hours[day].open;
     close_nextday_flag = opening_hours[day].close_nextday;

     //이전 날짜 체크를위한 데이터 추가
     before_nextday_flag = opening_hours[before_day].close_nextday;
     before_close_time = opening_hours[before_day].close;


     //현재의 시간 세팅
     if (date.getHours().toString().length == 1) {
      hour = "0" + date.getHours().toString();
     } else {
      hour = date.getHours().toString();
     }
     if (date.getMinutes().toString().length == 1) {
      minute = "0" + date.getMinutes().toString();
     } else {
      minute = date.getMinutes().toString();
     }
     time = hour + minute; //접속 된 현재 시간 체크

     if (before_nextday_flag == 'Y') {
      if (time < before_close_time) {
       console.log("영업중");
       return "영업중";
      } else {
       if (open_time == "") {
        console.log("휴무");
        return "휴무"
       } else {
        if (close_nextday_flag == 'Y') {
         close_time = parseInt(close_time) + 2400;
        }
        console.log(open_time)
        console.log(close_time)
        if (time < open_time) {
         console.log('영업종료')
         return "영업종료"
        } else {
         if (time > close_time) {
          console.log('영업종료');
          return "영업종료"
         } else {
          console.log('영업중');
          return "영업중"
         }
        }
       }
      }
     } else {
      if (open_time == "") {
       console.log("영업종료");
       return "영업종료"
      } else {
       if (close_nextday_flag == 'Y') {
        close_time = parseInt(close_time) + 2400;
       }
       console.log(open_time)
       console.log(close_time)
       if (time < open_time) {
        console.log('영업종료')
        return "영업종료"
       } else {
        if (time > close_time) {
         console.log('영업종료');
         return "영업종료"
        } else {
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


</style>
