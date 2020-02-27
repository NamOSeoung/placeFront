<template lang="html">
 <StackLayout backgroundColor="#ffffff" height="100%" width="100%">
  <AbsoluteLayout height="100%">
   <StackLayout height="100%">
    <StackLayout v-if="mapFlag == false" width="100%">
     <StackLayout class="placeSearchBarWrap" orientation="horizontal" width="100%">
      <StackLayout class="placeSearchBarMapIconWrap"  @tap="goMap()">
       <image class="placeSearchBarMapIcon" src="~/Resources/img/place/Orion_map.png" />
      </StackLayout>
      <StackLayout class="placeSearchBarTextWrap"orientation="horizontal" >
       <StackLayout class="placeSearchBarTextWrapWrap" >
        <TextField class="placeSearchBarText"  v-model="data.keyword" returnKeyType="search" @returnPress="placeSearch(data.keyword)" @textChange="changeWrap"hint="검색어를 입력해주세요."  maxLength="50"  editable="true" ></TextField>
       </StackLayout>
       <StackLayout class="placeSearchBarDeleteIconWrap" v-if="data.keyword.length>0">
        <image class="placeSearchBarDeleteIcon" src="~/Resources/img/place/close_d_64.png" @tap="keywordDelete"/>
       </StackLayout>
      </StackLayout>
      <StackLayout  class="placeSearchBarSearchIconWrap">
       <image class="placeSearchBarSearchIcon" src="~/Resources/img/home/search.png"   @tap="placeSearch(data.keyword)" />
      </StackLayout>
     </StackLayout>
     <StackLayout v-if="listViewing=='keyword'" height="100%"> <!-- 최근검색어 인기검색어 section-->
      <StackLayout class="placeSearchKeywordListWrap" height="100%">
       <StackLayout class="placeSearchKeywordListWrapWrap" orientation="horizontal">
        <StackLayout  :class="keywordWrap=='late'?'active':''" class="placeSearchLatelyKeywordWrap" @tap="keyWordChange(0)" >
         <label :class="keywordWrap=='late'?'active':''" class="placeSearchLatelyKeyword" text="최근검색어"  />
        </StackLayout>
        <StackLayout :class="keywordWrap=='popu'?'active':''" class="placeSearchLatelyKeywordWrap" @tap="keyWordChange(1)">
         <label :class="keywordWrap=='popu'?'active':''" class="placeSearchPopularKeyword" text="인기검색어"  />
        </StackLayout>
       </StackLayout>

       <StackLayout v-if="keywordWrap == 'late'" height="100%">
        <ScrollView height="100%">
         <StackLayout backgroundColor="#ffffff" width="90%">
          <StackLayout v-for="(list,index) in latelyKeywordList">
           <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" >
            <StackLayout class="latelyKeywordKeywordWrap" @tap="placeSearch(list.keyword)">
             <label class="latelyKeywordKeyword" :text="list.keyword" />
            </StackLayout>
            <StackLayout class="latelyKeyWordDateWrap">
             <label class="latelyKeywordDate" :text="list.writeDate" />
            </StackLayout>
            <StackLayout class="latelyKeywordDeleteIconWrap"  @tap="deleteLatelyKeyword(list.keyword)" >
             <image class="latelyKeywordDeleteIcon" width="10" height="10" src="~/Resources/img/place/close_5_64.png" />
            </StackLayout>
           </StackLayout>
          </StackLayout>
          <StackLayout class="latelyKeywordAllDeleteWrap" @tap="removeLatelyKeyword('ALL')">
           <label class="latelyKeywordAllDelete" text="최근 검색어가 없습니다." marginBottom="20"  v-if="latelyKeywordList.length < 1" />
           <label class="latelyKeywordAllDelete" text="검색 기록 전체삭제" />
           <!--       <label v-else text="최근 검색어가 없습니다." marginTop="59.5" width="120" height="15" style="font-family: nanumsquareroundr" fontSize="12" color="#333333"/>-->
          </StackLayout>
         </StackLayout>
        </ScrollView>
       </StackLayout>

     <StackLayout v-else height="100%">
      <ScrollView height="100%">
       <StackLayout backgroundColor="#ffffff">
        <StackLayout v-for="keyword in popularKeywordList">
         <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" @tap="placeSearch(keyword.search_word)">
          <StackLayout class="latelyKeywordKeywordWrap">
           <label class="latelyKeywordKeyword" :text="keyword.index +'. '+keyword.search_word"/>
          </StackLayout>
         </StackLayout>
        </StackLayout>
       </StackLayout>
      </ScrollView>
     </StackLayout>

    </StackLayout>
   </StackLayout>

   <StackLayout v-else-if="listViewing=='auto'"> <!-- auto complete section -->
    <StackLayout>
     <ListView for="item in items" style="height:100%" @itemTap="listPlaceSelect">
      <v-template>
       <StackLayout class="placeSearchAutoCompleteListWrap">
        <label class="placeSearchAutoCompleteList" :text="item"/>
       </StackLayout>
      </v-template>
     </ListView>
    </StackLayout>
   </StackLayout>

     <StackLayout class="placeSearchPlaceListWrap" v-else-if="listViewing=='place'"  marginTop="0" > <!-- 장소리스트 section -->
      <StackLayout class="latelyKeywordAllDeleteWrap" height="20" v-if="placeList.length < 1" >
       <label class="latelyKeywordAllDelete" text="검색 결과가 없습니다." />
       <!--       <label v-else text="최근 검색어가 없습니다." marginTop="59.5" width="120" height="15" style="font-family: nanumsquareroundr" fontSize="12" color="#333333"/>-->
      </StackLayout>
      <ListView class="placeSearchPlaceList" for="place in placeList" separatorColor="transparent"
                style="height:100%" @itemTap="goPlaceDetail" >
       <v-template v-if="placeList.length > 0">
        <StackLayout class="storeMarkDetailSubWrap" >
         <StackLayout orientation="horizontal" class="storeMarkDetailWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
          <StackLayout class="storeLeftWrap" v-if="place.blog_thumbnail !=null ">
           <image class="storeImageTrue" stretch="aspectFill" :src="place.blog_thumbnail"/>
          </StackLayout>
          <StackLayout class="storeLeftWrap" v-else backgroundColor="#dddddd" borderRadius="10">
           <image class="storeImageFalse" stretch="aspectFill" src="~/Resources/img/home/dinner_w_64.png"/>
          </StackLayout>
          <StackLayout class="storeMarkRightWrap">
           <StackLayout orientation="horizontal" class="storeMarkTopWrap">
            <StackLayout v-if="openingCheck(place.open_hours) != '영업종료'" class="storeMarkTimeWrap" backgroundColor="#ffe074" >
             <label :text="openingCheck(place.open_hours)" class="storeTime" />
            </StackLayout>
            <StackLayout v-else  class="storeMarkTimeWrap" backgroundColor="#dddddd" >
             <label :text="openingCheck(place.open_hours)" class="storeTime" />
            </StackLayout>
            <StackLayout class="storeMarkTimeWrap" v-else>
             <label :text="openingCheck(place.open_hours)" class="storeTime" />
            </StackLayout>
            <StackLayout class="storeStarIconWrap">
             <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
            </StackLayout>
            <StackLayout class="storeRatingWrap">
             <label :text="place.google_rating" v-if="place.app_rating == null&&place.google_rating != null"  class="storeRating"/>
             <label :text="place.app_rating" v-if="place.app_rating != null"  class="storeRating"/>
             <label text="0" v-else class="storeRating"/>
            </StackLayout>
           </StackLayout>
           <StackLayout class="storeMarkMiddleWrap">
            <label :text="place.place_name" class="storeMarkName"/>
           </StackLayout>
           <StackLayout orientation="horizontal" class="storeMarkBottomWrap">
            <StackLayout class="storeMarkCategoryWrap">
             <label :text="place.category_name" class="storeMarkCategory"/>
            </StackLayout>
            <StackLayout class="storeMarkYIconWrap">
             <image v-if="place.youtube_review_count != '0'" class="storeMarkYIcon" stretch="aspectFill" src="~/Resources/img/bookmark/youtube-circle.png"/>
             <image v-else class="storeMarkYIcon" stretch="aspectFill" src="~/Resources/img/bookmark/youtube-circle_g.png"/>
            </StackLayout>
            <StackLayout class="storeMarkNIconWrap">
             <image v-if="place.naver_blog_count != '0'" class="storeMarkNIcon"stretch="aspectFill"  src="~/Resources/img/bookmark/naver-circle.png"/>
             <image v-else class="storeMarkNIcon"stretch="aspectFill"  src="~/Resources/img/bookmark/naver-circle_g.png"/>
            </StackLayout>
            <StackLayout class="storeMarkTIconWrap">
             <image  v-if="place.daum_blog_count != '0'" class="storeMarkTIcon" stretch="aspectFill" src="~/Resources/img/bookmark/tistory-circle.png"/>
             <image v-else class="storeMarkTIcon" stretch="aspectFill" src="~/Resources/img/bookmark/tistory-circle_g.png"/>
            </StackLayout>
            <StackLayout v-if="place.google_review_count != '0'" class="storeMarkGIconWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 50 }">
             <image class="storeMarkGIcon"stretch="aspectFill" src="~/Resources/img/bookmark/google-circle.png" />
            </StackLayout>
            <StackLayout v-else class="storeMarkGIconWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: '#888888', cornerRadius: 50 }">
             <image  class="storeMarkGIcon"stretch="aspectFill" src="~/Resources/img/bookmark/google-circle_g.png" />
            </StackLayout>
            <StackLayout class="storeMarkAIconWrap" >
             <image class="storeMarkAIcon" stretch="aspectFill"  src="~/Resources/img/place/playstore-icon.png" />
            </StackLayout>
           </StackLayout>
          </StackLayout>
         </StackLayout>
         <StackLayout class="markUnderline">
         </StackLayout>
        </StackLayout>
       </v-template>
      </ListView>
     </StackLayout>
    </StackLayout>
    <StackLayout v-else width="100%">
     <StackLayout width="100%">
      <StackLayout>
       <StackLayout orientation="horizontal"class="areaSearchHeaderWrap">
        <StackLayout class="areaSearchHeaderWrapWrap" >
         <TextField className="areaSearchHeader" v-model="areaKeyword" returnKeyType="done" hint="지역을 입력해주세요." maxLength="50"  editable="true" @textChange="changeWrap2" ></TextField>
        </StackLayout>
        <StackLayout class="placeSearchBarDeleteIconWrap" visibility="collapsed" ref="keywordDelete" @tap="deleteKeyword">
         <image class="placeSearchBarDeleteIcon" src="~/Resources/img/place/close_d_64.png"/>
        </StackLayout>
       </StackLayout>
       <StackLayout ref="placeKeywordListWrap" visibility="collapsed">
        <ListView for="item in settingItems" style="height:100%" width="100%">
         <v-template>
          <StackLayout class="placeSearchAutoCompleteListWrap" @tap="search(item)">
           <label class="placeSearchAutoCompleteList" :text="item" />
          </StackLayout>
         </v-template>
        </ListView>
       </StackLayout>
       <StackLayout ref="placeList" height="100%">
<!--        <StackLayout class="areaSearchCurrentLocationWrap" orientation="horizontal">-->
<!--         <StackLayout class="areaSearchCurrentLocationIconWrap" >-->
<!--          <image class="areaSearchCurrentLocationIcon"  src="~/Resources/img/place/place_3_64.png" />-->
<!--         </StackLayout>-->
<!--         <StackLayout class="areaSearchCurrentLocationTitleWrap" @tap="enableLocationServices" >-->
<!--          <label class="areaSearchCurrentLocationTitle" text="현재위치" />-->
<!--         </StackLayout>-->
<!--        </StackLayout>-->
        <StackLayout  class="areaSearchMainWrap">
         <StackLayout class="areaSearchMainWrapWrap"orientation="horizontal">
          <ScrollView class="areaSearchLeftScrollWrap">
           <StackLayout class="areaSearchLeftMainWrap">
            <StackLayout class="areaSearchLeftMainWrapWrap" v-for="category in fitstArea_category">
             <StackLayout class="areaSearchLeftAreaWrap" :class="selectedTabview==category.area?'active':''" @tap="tabSelect(category.area,category.area_name)">
              <label class="areaSearchLeftArea"  :text="category.area_name" />
             </StackLayout>
            </StackLayout>
           </StackLayout>
          </ScrollView>
          <ScrollView class="areaSearchRightScrollWrap" >
           <StackLayout class="areaSearchRightMainWrap">
            <StackLayout class="areaSearchRightMainWrapWrap" orientation="vertical" v-for="sub in secondArea_category" >
             <StackLayout class="areaSearchRightMainWrapWrapWrap" orientation="horizontal" @tap="subCategorySelect(sub.area,sub.area_name)">
              <StackLayout class="areaSearchRightAreaWrap"  >
               <label class="areaSearchRightArea" :class="selectedSubCategory==sub.area?'active':''" :text="sub.area_name"/>
              </StackLayout>
              <StackLayout class="" v-if="sub.area == selectedSubCategory">
               <image class="areaSearchRightCheckIcon"  src="~/Resources/img/place/correct_y_64.png"  />
              </StackLayout>
             </StackLayout>
            </StackLayout>
           </StackLayout>
          </ScrollView>
         </StackLayout>
        </StackLayout>
        <StackLayout>
         <StackLayout class="areaSearchBottomWrap" orientation="horizontal">
          <StackLayout class="areaSearchCancelWrap"  @tap="mapSearchDel">
           <label class="areaSearchCancel" text="지역검색취소"   />
          </StackLayout>
          <StackLayout class="areaSearchConfirmWrap" @tap="search('N')">
           <label class="areaSearchConfirm"  text="검색하기" :class="selectedSubCategory!=''?'active':''"   />
          </StackLayout>
         </StackLayout>
        </StackLayout>
       </StackLayout>
      </StackLayout>
     </StackLayout>
    </StackLayout>
   </StackLayout>
   <StackLayout top="0" width="100%" height="100%" backgroundColor="#dddddd" opacity="0.5" v-if="busy==true" >
   </StackLayout>
   <StackLayout width="100%" top="0">
    <ActivityIndicator :busy="busy" marginTop="300" color="#ffe074" width="100" height="100" />
   </StackLayout>
  </AbsoluteLayout>
  </StackLayout>
</template>
<script>
 import axios from "axios";
 import PlaceDetail from "./placeDetail/PlaceDetail";
 import AreaSearch from "./placeSearchDetail/AreaSearch";
 import {isAndroid, isIOS} from 'tns-core-modules/ui/page';

 import LatelyKeywordWrap from './keywordComponents/LatelyKeywordWrap';
 import PopularKeywordWrap from './keywordComponents/PopularKeywordWrap';


 import HomeWrap from '../../home/HomeWrap';
 import MenuWrap from '../../MenuWrap'

 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_320.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_360.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_420.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_480.scss';

 import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_320.scss';
 import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_360.scss';
 import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_420.scss';
 import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_480.scss';

 var cache = require("nativescript-cache");
 const appSettings = require("tns-core-modules/application-settings"); //sharedpreferences;
 var data = {keyword : '',areaFlag:false}

 // const geoLocation = require("nativescript-geolocation");
 var Toast = require("nativescript-toast");
 const dialogs = require('ui/dialogs')
export default {
  name:"PlaceSearch",
  data(){
   return {
    data,
    areaSearch: AreaSearch,
    items: [],
    placeList:[],
    rating:'',
    keywordWrap:'late',
    listViewing:'keyword',
    isAndroid:isAndroid,
    keywordHeaderWrap:false,
    isIOS:isIOS,
    busy:false,
    setPlace_id:'',
    latelyKeywordList:[],
    opening_flag:'',
    popularKeywordList:[],
    popularKeywordFlag:false,
    mapFlag:false,


    name:"AreaSearch",
    area:'',
    medium_category:'',
    isAndroid:isAndroid,
    areaKeyword:'',
    isIOS:isIOS,
    selectedTabview: '0',
    selectedSubCategory:'',
    fitstArea_category:[],
    secondArea_category:[],
    settingItems:[],
    allArea:[],
    firstAreaName:'',
    secondAreaName:'',

    currentGeoLocation: {
     latitude: null,
     longitude: null,
     altitude: null,
     direction: null,
    },

   }
  },
 watch :{

 },mounted() {

   // var layely_count = 0;
   // for(var i = 1; i < 11; i++){
   //      if(appSettings.getString('keyword'+i.toString()) != ''){
   //         if(appSettings.getString('keyword'+i.toString()) != undefined){
   //           if(appSettings.getString('keyword'+i.toString() == data.keyword)){
   //             layely_count++;
   //           }
   //       }
   //    }
   // }

 //  if(layely_count>0){
      for(var i = 1; i < 21;i++){
         if(appSettings.getString('keyword'+i.toString()) != ''){
            if(appSettings.getString('keyword'+i.toString()) != undefined){
              this.$data.latelyKeywordList.push({keyword :appSettings.getString('keyword'+i.toString()),writeDate:appSettings.getString('writeDate'+i.toString())});
            }
         }
      }
   //}


 this.popularKeyword();
 console.log('sadasd');

  this.callAllArea();
  this.getFirstAreaList();
 },
 components: {
   LatelyKeywordWrap,PopularKeywordWrap
  },methods: {
  resetLatelyKeyword() {

  },
  deleteLatelyKeyword(keyword) {
   this.$data.latelyKeywordList = []
   for (var i = 1; i < 21; i++) {
    if (appSettings.getString('keyword' + i.toString()) != '') {
     if (appSettings.getString('keyword' + i.toString()) != undefined) {
      var keyword1 = String(appSettings.getString('keyword' + i.toString()));
      var keyword2 = String(keyword);
      if (keyword1 == keyword2) {
       appSettings.remove('keyword' + i.toString());
      }
     }
    }
   }

   for (var i = 1; i < 21; i++) {
    if (appSettings.getString('keyword' + i.toString()) != '') {
     if (appSettings.getString('keyword' + i.toString()) != undefined) {
      this.$data.latelyKeywordList.push({
       keyword: appSettings.getString('keyword' + i.toString()),
       writeDate: appSettings.getString('writeDate' + i.toString())
      });
     }
    }
   }
  },
  removeLatelyKeyword(num) {
   if (num == 'ALL') { //검색기록 전체 삭제.
    for (var i = 1; i < 21; i++) {
     appSettings.remove("keyword" + i.toString())
     appSettings.remove("writeDate" + i.toString());
    }
    this.$data.latelyKeywordList = []
   }
  },
  popularKeyword() {
   console.log('2222')
   axios({
    method: 'get',
    url: 'http://202.182.117.173:8080/v1/popularsearches',
    params: {},
   }).then((response) => {
    console.log(response.data.dataList)
    this.$data.popularKeywordList = response.data.dataList;

   }, (error) => {
    console.log(error);
   });
  }, selectKeyword(keyword) {
   console.log(keyword)
   PlaceSearch.methods.placeSearch(keyword)
   PlaceSearch.data.popularKeywordFlag = true;
  },
  placeSearch(keyword) {
   console.log(data.keyword)
   data.keyword = keyword;
   var date = new Date();
   var year = date.getFullYear();
   var month = new String(date.getMonth() + 1);
   var day = new String(date.getDate());
   var toDay = '';
// 한자리수일 경우 0을 채워준다.
   if (month.length == 1) {
    month = "0" + month;
   }
   if (day.length == 1) {
    day = "0" + day;
   }

   toDay = year + '.' + month + '.' + day;

   if (keyword == "") {
    //alert('키워드를 입력 해 주세요.');
    return;
   }
   data.keyword = keyword;


   var layely_count = 0;
   for (var i = 20; i > 0; i--) {
    if (appSettings.getString('keyword' + (i - 1).toString()) != '') {
     if (appSettings.getString('keyword' + (i - 1).toString()) != undefined) {
      console.log("kekeke222" + appSettings.getString('keyword' + (i - 1).toString()))
      console.log("keke123123ke" + keyword.toString());
      console.log("keke ??" + String(appSettings.getString('keyword' + (i - 1).toString()) == String(keyword.toString())))
      var keyword1 = String(appSettings.getString('keyword' + (i - 1).toString()));
      var keyword2 = String(keyword.toString());
      if (keyword1 == keyword2) {
       console.log("kekeke22222" + appSettings.getString('keyword' + (i - 1).toString()))
       layely_count++;
      } else {
       console.log('falsefalsefalse')
      }
     }
    }
   }
   console.log(layely_count + "kekekekeke")
   if (layely_count == 0) {
    for (var i = 20; i > 0; i--) {
     if (i == 1) {
      appSettings.setString("keyword1", keyword);
      appSettings.setString('writeDate1', toDay)
     } else {
      if (appSettings.getString("keyword" + (i - 1).toString()) != undefined) {
       appSettings.setString("keyword" + i.toString(), appSettings.getString("keyword" + (i - 1).toString()));
       appSettings.setString('writeDate' + i.toString(), appSettings.getString('writeDate' + (i - 1).toString()));
      }
     }
    }
   }

   this.$data.busy = true;
   setTimeout(() => {
    axios({
     method: 'get',
     url: 'http://202.182.117.173:8080/v1/places',
     params: {
      q: keyword,
      user_id: appSettings.getString("user_id")
     },
    }).then((response) => {
     this.$data.placeList = response.data.dataList;
     this.$data.listViewing = 'place';
     data.areaFlag = false;
     this.$data.busy = false;
    }, (error) => {
     console.log(error);
     this.$data.busy = false;
    });
   }, 500);

  }, listPlaceSelect(args) {
   const view = args.view;
   const tappedItem = view.bindingContext;
   data.keyword = tappedItem;
   this.placeSearch(data.keyword);
   this.$data.listViewing = 'place';
  }, keywordDelete() {
   data.keyword = "";
  }, goPlaceDetail(args) {
   const view = args.view;
   const page = view.page;
   const tappedItem = view.bindingContext;
   this.$data.setPlace_id = tappedItem.place_id;
   cache.set('place_id', tappedItem.place_id)
   cache.set('place_name', tappedItem.place_name)
   cache.set('place_address', tappedItem.place_address);
   this.$navigateTo(PlaceDetail, {
    props: {
     context: tappedItem
    }
   });
  }, getPlaceId() {
   return this.$data.setPlace_id;
  }, setKeyword(keyword) {
   data.keyword = keyword;
   this.placeSearch(keyword);
  }, setArea(area) {
   this.placeSearch(area);
  }, changeWrap() {
   console.log(data.keyword)
   this.$data.listViewing = 'auto'
   console.log('1231231231231231231331231231215312531561215635612')
   if (data.keyword == '') {
    this.$data.listViewing = 'keyword'
    return;

   } else {
    //this.$data.listViewing = 'auto'
    // axios({
    //  method: 'get',
    //  url: 'http://202.182.117.173:8080/v1/autocomplete',
    //  //  url: 'http://192.168.1.85:9090/v1/places?',
    //  params: {
    //   term: data.keyword
    //  },
    // }).then((response) => {
    //  console.log(response.data);
    //  this.$data.items = response.data;
    //  this.$data.placeList = []
    //
    //  console.log(data.areaFlag)
    //  if (data.areaFlag == true) {
    //   this.placeSearch(data.keyword);
    //  }
    // }, (error) => {
    //  this.$data.placeList = []
    //  console.log(error);
    // });
   }
  }, goMap() {
   //this.$data.listViewing = 'keyword';
  // this.$navigateTo(this.$data.areaSearch);
   this.$data.mapFlag = true;
  }, keyWordChange(division) {
   if (division == 0) { //최근검색어 클릭 시
    this.$data.keywordWrap = 'late';
    this.$data.latelyKeywordList = [];
    for (var i = 1; i < 21; i++) {
     if (appSettings.getString('keyword' + i.toString()) != '') {
      if (appSettings.getString('keyword' + i.toString()) != undefined) {
       this.$data.latelyKeywordList.push({
        keyword: appSettings.getString('keyword' + i.toString()),
        writeDate: appSettings.getString('writeDate' + i.toString())
       });
      }
     }
    }
   } else if (division == 1) { //인기검색어 클릭 시
    this.$data.keywordWrap = 'popu';
   }
  }, openingCheck(open_hours) {
   var date = new Date();
   var day = date.toDateString().split(" ")[0];
   var before_day;
   var time;
   var hour;
   var minute;
   var dayList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
   var opening_hours = JSON.parse(open_hours);

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
      return "영업중";
     } else {
      if (open_time == "") {
       return "휴무"
      } else {
       if (close_nextday_flag == 'Y') {
        close_time = parseInt(close_time) + 2400;
       }
       if (time < open_time) {
        return "영업종료"
       } else {
        if (time > close_time) {
         return "영업종료"
        } else {
         return "영업중"
        }
       }
      }
     }
    } else {
     if (open_time == "") {
      return "영업종료"
     } else {
      if (close_nextday_flag == 'Y') {
       close_time = parseInt(close_time) + 2400;
      }
      if (time < open_time) {
       return "영업종료"
      } else {
       if (time > close_time) {
        return "영업종료"
       } else {
        return "영업중"
       }
      }
     }
    }
   }
  },


  tabSelect(num, area_name) {
   console.log(num);
   this.selectedTabview = num;
   this.getSecondAreaList(num);
   this.$data.firstAreaName = area_name;
   this.$data.selectedSubCategory = '';
   this.$data.secondAreaName = '';
  },
  deleteKeyword() {
   this.$data.areaKeyword = '';
  },
  subCategorySelect(num, area_name) {
   console.log(num);
   this.selectedSubCategory = num;
   this.$data.secondAreaName = area_name;
  },
  getFirstAreaList() {
   axios({
    method: 'get',
    url: 'http://202.182.117.173:8080/v1/area/first',
    params: {},
   }).then((response) => {
    //console.log(response.data)
    //console.log(response.data.large_category)
    //console.log(response.data.medium_category)

    this.$data.fitstArea_category = response.data.dataList;
    //this.$data.large_category = response.data.large_category;
    //this.$data.medium_category = response.data.medium_category;
   }, (error) => {
    console.log(error);
   });
  }, getSecondAreaList(num) {
   axios({
    method: 'get',
    url: 'http://202.182.117.173:8080/v1/area/second',
    params: {
     area: num
    },
   }).then((response) => {
    //console.log(response.data)
    //console.log(response.data.large_category)
    //console.log(response.data.medium_category)

    this.$data.secondArea_category = response.data.dataList;
    //this.$data.large_category = response.data.large_category;
    //this.$data.medium_category = response.data.medium_category;
   }, (error) => {
    console.log(error);
   });
  }, goToMulti: function () {
   this.$navigateTo(Multi)
  }, setMedeumCategory(medeumCategory) {
   console.log(medeumCategory)
   this.$navigateBack();
   PlaceSearch.methods.setArea(medeumCategory)
   // HomeWrap.methods.setArea(medeumCategory);
   // MenuWrap.methods.tabChange(0)
  }, locationCheck() {
   dialogs.confirm('위치 접근을 허용하겠습니까?')
           .then(result => {
            console.log(result)
           })
  }, changeWrap2() {
   if (this.$data.areaKeyword == '') {
    this.$refs.placeKeywordListWrap.nativeView.style.visibility = "collapsed";
    this.$refs.placeList.nativeView.style.visibility = "";
    this.$refs.keywordDelete.nativeView.style.visibility = "collapsed";
   } else {
    this.$refs.placeKeywordListWrap.nativeView.style.visibility = "";
    this.$refs.placeList.nativeView.style.visibility = "collapsed";
    this.$refs.keywordDelete.nativeView.style.visibility = "";
    console.log(this.$data.allArea.length)
    this.$data.settingItems = [];
    for (var i = 0; i < this.$data.allArea.length; i++) {
     console.log(this.$data.allArea[i])
     if (this.$data.areaKeyword != '') {
      if (this.$data.allArea[i].indexOf(this.$data.areaKeyword) > -1) {
       if (this.$data.settingItems.indexOf(this.$data.allArea[i]) < 0) {
        this.$data.settingItems.push(this.$data.allArea[i])
       }
       console.log(this.$data.allArea[i])
      }
     }

    }
    console.log(this.$data.settingItems);
   }
  }, callAllArea() {
   axios({
    method: 'get',
    url: 'http://202.182.117.173:8080/v1/area/suggest',
    //  url: 'http://192.168.1.85:9090/v1/places?',
    params: {},
   }).then((response) => {
    console.log(response.data);
    this.$data.allArea = response.data.dataList;
   }, (error) => {

    console.log(error);
   });
  }, search(keyword_name) {
   console.log(this.$data.firstAreaName);
   console.log(this.$data.secondAreaName);

   try {
     if(keyword_name == "N"){
        if (this.$data.firstAreaName == '') {
         Toast.makeText("지역(대분류) 을 선택 해 주세요.").show();
         return;
        }
        ;
        if (this.$data.secondAreaName == '') {
         Toast.makeText("지역(중분류) 을 선택 해 주세요.").show();
         return;
        }
        var keyword = this.$data.firstAreaName + " " + this.$data.secondAreaName;
        if(keyword.indexOf('전체') > -1){
         keyword = keyword.split(" ")[1];
        }
        this.data.areaFlag = true;
        this.data.keyword = keyword;
        this.$data.mapFlag = false;
        this.placeSearch(keyword)
     }else{
        this.data.areaFlag = true;
        this.data.keyword = keyword_name;
        this.$data.mapFlag = false;
        this.placeSearch(keyword_name)
     }

    //PlaceSearch.data().data.areaFlag = true;
   // PlaceSearch.data().data.keyword = keyword;
    //  PlaceSearch.methods.placeSearch(keyword)
   // this.$navigateBack();
   } catch (e) {
    console.log(e)
   }
  },mapSearchDel(){
     console.log('?')
     this.$data.mapFlag = false
  },
  // enableLocationServices: function() {
  //  geoLocation.isEnabled().then(enabled => {
  //   if (!enabled) {
  //    console.log(geoLocation.enableLocationRequest() + "여부?")
  //    geoLocation
  //            .enableLocationRequest()
  //            .then(() => this.showLocation());
  //    console.log("1?")
  //
  //   } else {
  //    this.showLocation();
  //    console.log("2?")
  //   }
  //  });
  // },
  // showLocation: function() {
  //  geoLocation.watchLocation(
  //          location => {
  //           this.currentGeoLocation = location;
  //           console.log(location + "asdasdasdasd")
  //           cache.set("keyword","키워드다!");
  //           console.log(cache.get("keyword"))
  //           axios({
  //            method: 'get',
  //            url: 'https://dapi.kakao.com/v2/local/geo/coord2address.json',
  //            params: {
  //             x:this.currentGeoLocation.longitude,
  //             y:this.currentGeoLocation.latitude
  //            },
  //            headers: { 'Authorization': 'KakaoAK b4bd7e75365a705323622c57d0b7e406' }
  //           }).then((response) => {
  //            console.log('호출함??')
  //            //console.log(response.data.documents[0].address.address_name)
  //            console.log(response.data)
  //            console.log(response)
  //            this.$data.address = response.data.documents[0].address.address_name
  //            data.locationKeyword = response.data.documents[0].address.address_name
  //            console.log(response.data.documents[0].address.address_name)
  //            var current_location_arr =  data.locationKeyword.split(" ");
  //            var current_location="";
  //            for(var i = 0; i < current_location_arr.length; i++){
  //             if(i < 3){
  //              if(i > 0 ){
  //               current_location += " " + current_location_arr[i];
  //              }else {
  //               current_location += current_location_arr[i];
  //              }
  //             }
  //            }
  //            data.locationKeyword = current_location;
  //            this.search(current_location)
  //            //cache.set("location_name",current_location+" 맛집")
  //           }, (error) => {
  //            console.log(error);
  //           });
  //          },
  //          error => {
  //           alert(error);
  //          }, {
  //           desiredAccuracy: 3,
  //           updateDistance: 10,
  //           minimumUpdateTime: 1000 * 1
  //          }
  //  );
  // }
 }
};
</script>

<style lang="scss">


</style>
