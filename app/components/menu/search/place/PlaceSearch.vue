<template lang="html">
 <StackLayout backgroundColor="#ffffff" >
  <StackLayout class="placeSearchBarWrap" orientation="horizontal" >
   <StackLayout class="placeSearchBarMapIconWrap"  @tap="goMap()">
    <image class="placeSearchBarMapIcon" src="~/Resources/img/place/Orion_map.png" />
   </StackLayout>
   <StackLayout class="placeSearchBarTextWrap"orientation="horizontal" >
    <StackLayout class="placeSearchBarTextWrapWrap" >
     <TextView class="placeSearchBarText"  v-model="data.keyword" @textChange="changeWrap"hint="검색어를 입력해주세요."  maxLength="50"  editable="true" ></TextView>
    </StackLayout>
    <StackLayout class="placeSearchBarDeleteIconWrap" >
     <image class="placeSearchBarDeleteIcon" src="~/Resources/img/place/close_d_64.png" @tap="keywordDelete"/>
    </StackLayout>
   </StackLayout>
   <StackLayout  class="placeSearchBarSearchIconWrap">
    <image class="placeSearchBarSearchIcon" src="~/Resources/img/home/search.png"   @tap="placeSearch(data.keyword)" />
   </StackLayout>
  </StackLayout>

  <StackLayout v-if="listViewing=='keyword'"> <!-- 최근검색어 인기검색어 section-->
   <StackLayout class="placeSearchKeywordListWrap">
    <StackLayout class="placeSearchKeywordListWrapWrap" orientation="horizontal">
     <StackLayout  :class="keywordWrap=='late'?'active':''" class="placeSearchLatelyKeywordWrap" @tap="keyWordChange(0)" >
      <label class="placeSearchLatelyKeyword" text="최근검색어"  />
     </StackLayout>
     <StackLayout :class="keywordWrap=='popu'?'active':''" class="placeSearchLatelyKeywordWrap" @tap="keyWordChange(1)">
      <label class="placeSearchPopularKeyword" text="인기검색어"  />
     </StackLayout>
    </StackLayout>

    <StackLayout v-if="keywordWrap == 'late'">
     <StackLayout backgroundColor="#ffffff">
      <StackLayout v-for="list in latelyKeywordList" >
       <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" @tap="placeSearch(list.keyword)">
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
      <StackLayout class="latelyKeywordAllDeleteWrap" @tap="removeLatelyKeyword('ALL')" height="100%">
       <label class="latelyKeywordAllDelete" text="검색 기록 전체삭제" />
<!--       <label v-else text="최근 검색어가 없습니다." marginTop="59.5" width="120" height="15" style="font-family: nanumsquareroundr" fontSize="12" color="#333333"/>-->
      </StackLayout>
     </StackLayout>
    </StackLayout>

    <StackLayout v-else  >
     <StackLayout backgroundColor="#ffffff">
      <StackLayout class="popularKeywordWrap"  v-for="keyword in popularKeywordList" >
       <StackLayout class="latelyKeywordHeaderWrap" orientation="horizontal" @tap="placeSearch(keyword.search_word)" >
        <StackLayout class="latelyKeywordKeywordWrap">
         <label class="latelyKeywordKeyword" :text="keyword.index +'. '+keyword.search_word" />
        </StackLayout>
       </StackLayout>
      </StackLayout>
     </StackLayout>
    </StackLayout>
<!--    <LatelyKeywordWrap  />-->
<!--    <PopularKeywordWrap  />-->
   </StackLayout>
  </StackLayout>

  <StackLayout v-else-if="listViewing=='auto'"> <!-- auto complete section -->
   <StackLayout >
    <ListView for="item in items" style="height:100%" @itemTap="listPlaceSelect">
     <v-template>
      <StackLayout class="placeSearchAutoCompleteListWrap" >
       <label class="placeSearchAutoCompleteList" :text="item" />
      </StackLayout>
     </v-template>
    </ListView>
   </StackLayout>
  </StackLayout>

     <StackLayout class="placeSearchPlaceListWrap" v-else-if="listViewing=='place'"  marginTop="0" > <!-- 장소리스트 section -->
      <ListView class="placeSearchPlaceList" for="place in placeList" separatorColor="transparent"
                style="height:100%" @itemTap="goPlaceDetail" >
       <v-template>
        <StackLayout class="storeMarkDetailSubWrap" >
         <StackLayout orientation="horizontal" class="storeMarkDetailWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
          <StackLayout class="storeLeftWrap" v-if="place.blog_thumbnail !=null ">
           <image class="storeImage" stretch="aspectFill" :src="place.blog_thumbnail"/>
          </StackLayout>
          <StackLayout class="storeLeftWrap" v-else backgroundColor="#dddddd" borderRadius="10">
           <image class="storeImage" width="55" height="55" marginTop="8" stretch="aspectFill" src="~/Resources/img/home/dinner_w_64.png"/>
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
             <image class="storeMarkAIcon" stretch="aspectFill"  src="~/Resources/img/bookmark/tistory-circle.png" />
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
</template>
<script>
 import axios from "axios";
 import PlaceDetail from "./placeDetail/PlaceDetail";
 import AreaSearch from "./placeSearchDetail/AreaSearch";
 import {isAndroid, isIOS} from 'tns-core-modules/ui/page';

 import LatelyKeywordWrap from './keywordComponents/LatelyKeywordWrap';
 import PopularKeywordWrap from './keywordComponents/PopularKeywordWrap';

 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_320.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_360.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_420.scss';
 import '~/Resources/css/menu/search/place/PlaceSearch/placeSearch_480.scss';

 var cache = require("nativescript-cache");
 const appSettings = require("tns-core-modules/application-settings"); //sharedpreferences;
 var data = {keyword : '',areaFlag:false}

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
    setPlace_id:'',
    latelyKeywordList:[],
    opening_flag:'',
    popularKeywordList:[],
    popularKeywordFlag:false,
   }
  },
 watch :{

 },mounted() {
   for(var i = 1; i < 11;i++){
     if(appSettings.getString('keyword'+i.toString()) != ''){
        if(appSettings.getString('keyword'+i.toString()) != undefined){
            this.$data.latelyKeywordList.push({keyword :appSettings.getString('keyword'+i.toString()),writeDate:appSettings.getString('writeDate'+i.toString())});
        }
     }
   }

 this.popularKeyword();
 console.log('sadasd');
 },
 components: {
   LatelyKeywordWrap,PopularKeywordWrap
  },methods:{
   removeLatelyKeyword(num){
       if(num == 'ALL'){ //검색기록 전체 삭제.
        for(var i = 1;i<11 ; i++){
         appSettings.remove("keyword"+i.toString())
         appSettings.remove("writeDate"+i.toString());
        }
        this.$data.latelyKeywordList=[]
       }
   },
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
   },
   placeSearch(keyword){
    console.log(data.keyword)
    data.keyword = keyword;
    var date = new Date();
    var year = date.getFullYear();
    var month = new String(date.getMonth()+1);
    var day = new String(date.getDate());
    var toDay = '';
// 한자리수일 경우 0을 채워준다.
    if(month.length == 1){
     month = "0" + month;
    }
    if(day.length == 1){
     day = "0" + day;
    }

    toDay = year+'.'+month+'.'+day;

    if(keyword == ""){
     alert('키워드를 입력 해 주세요.');
     return;
    }
    data.keyword = keyword;

    for(var i = 10; i > 0; i --){
     if(i==1){
      appSettings.setString("keyword1",keyword);
      appSettings.setString('writeDate1',toDay)
     }else{
      if(appSettings.getString("keyword"+(i-1).toString())!=undefined){
       appSettings.setString("keyword" + i.toString(), appSettings.getString("keyword" + (i - 1).toString()));
       appSettings.setString('writeDate'+ i.toString(),appSettings.getString('writeDate' + (i - 1).toString()));
      }
     }
    }
    axios({
     method: 'get',
        url: 'http://202.182.117.173:8080/v1/places',
     params: {
      q: keyword,
      user_id:appSettings.getString("user_id")
     },
    }).then((response) => {
     this.$data.placeList = response.data.dataList;
     this.$data.listViewing = 'place';
     data.areaFlag = false;
    }, (error) => {
     console.log(error);
    });
   },listPlaceSelect(args){
     const view = args.view;
     const tappedItem = view.bindingContext;
     data.keyword = tappedItem;
     this.placeSearch(data.keyword);
     this.$data.listViewing = 'place';
  },keywordDelete(){
     data.keyword = "";
  },goPlaceDetail(args){
     const view = args.view;
     const page = view.page;
     const tappedItem = view.bindingContext;
     this.$data.setPlace_id = tappedItem.place_id;
     cache.set('place_id',tappedItem.place_id)
     cache.set('place_name',tappedItem.place_name)
     cache.set('place_address',tappedItem.place_address);
     this.$navigateTo(PlaceDetail, {
      props: {
       context: tappedItem}});
  },getPlaceId(){
    return this.$data.setPlace_id;
  },setKeyword(keyword){
    data.keyword = keyword;
    this.placeSearch(keyword);
  },setArea(area){
    this.placeSearch(area);
  },changeWrap(){
    console.log(data.keyword)
    this.$data.listViewing = 'auto'
    if(data.keyword==''){
     this.$data.listViewing = 'keyword'
     return;

    }else {
     this.$data.listViewing = 'auto'
     axios({
      method: 'get',
      url: 'http://202.182.117.173:8080/v1/autocomplete',
      //  url: 'http://192.168.1.85:9090/v1/places?',
      params: {
        term: data.keyword
      },
     }).then((response) => {
      console.log(response.data);
      this.$data.items = response.data;
      this.$data.placeList = []

      console.log(data.areaFlag)
      if(data.areaFlag == true){
         this.placeSearch(data.keyword);
      }
     }, (error) => {
      this.$data.placeList = []
      console.log(error);
     });
    }
  },goMap(){
      this.$data.listViewing = 'keyword';
      this.$navigateTo(this.$data.areaSearch);
  },keyWordChange(division){
     if(division == 0){ //최근검색어 클릭 시
       this.$data.keywordWrap = 'late';
     }else if(division == 1){ //인기검색어 클릭 시
       this.$data.keywordWrap = 'popu';
     }
  },openingCheck(open_hours){
    var date = new Date();
    var day = date.toDateString().split(" ")[0];
    var before_day;
    var time ;
    var hour;
    var minute;
    var dayList = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var opening_hours = JSON.parse(open_hours);

    //구글에서아예 서치를 못해 온 경우
    if (opening_hours == null){
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
       return "영업중";
      }else{
       if(open_time == ""){
        return "휴무"
       }else{
        if(close_nextday_flag == 'Y'){
         close_time = parseInt(close_time) + 2400;
        }
        if(time < open_time ){
         return "영업종료"
        }else{
         if(time > close_time){
          return "영업종료"
         }else{
          return "영업중"
         }
        }
       }
      }
     }else{
      if(open_time == ""){
       return "영업종료"
      }else{
       if(close_nextday_flag == 'Y'){
        close_time = parseInt(close_time) + 2400;
       }
       if(time < open_time ){
        return "영업종료"
       }else{
        if(time > close_time){
         return "영업종료"
        }else{
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

<style lang="scss">


</style>
