<template lang="html">
    <StackLayout v-if="data.placeBookmarkList!= null" @swipe="onSwipe" >
        <ListView for="placeBookmark in data.placeBookmarkList" separatorColor="transparent"
                  style="height:100%" @itemTap="" @swipe="onSwipe">
            <v-template>
                <StackLayout class="storeMarkDetailSubWrap" @swipe="onSwipe">
                    <StackLayout orientation="horizontal" class="storeMarkDetailWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                        <StackLayout class="storeLeftWrap" v-if="placeBookmark.thumbnail != ''">
                            <image class="storeImage" stretch="aspectFill" :src="placeBookmark.thumbnail"/>
                        </StackLayout>
                        <StackLayout class="storeLeftWrap" v-else backgroundColor="#dddddd" borderRadius="10">
                            <image class="storeImage" width="55" height="55" marginTop="8" stretch="aspectFill" src="~/Resources/img/home/dinner_w_64.png"/>
                        </StackLayout>
                        <StackLayout class="storeMarkRightWrap">
                            <StackLayout orientation="horizontal" class="storeMarkTopWrap">
                                <StackLayout class="storeMarkTimeWrap" v-if="placeBookmark.open_hours !=''">
                                    <label :text="openingCheck(placeBookmark.open_hours)" class="storeTime" />
                                </StackLayout>
                                <StackLayout class="storeMarkTimeWrap" v-else>
                                    <label text="정보없음" class="storeTime" />
                                </StackLayout>
                                <StackLayout class="storeStarIconWrap">
                                    <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
                                </StackLayout>
                                <StackLayout class="storeRatingWrap" v-if="placeBookmark.rating_point != ''">
                                    <label :text="placeBookmark.rating_point" class="storeRating"/>
                                </StackLayout>
                                <StackLayout class="storeRatingWrap" v-else >
                                    <label text="0" class="storeRating"/>
                                </StackLayout>
                            </StackLayout>
                            <StackLayout class="storeMarkMiddleWrap">
                                <label :text="placeBookmark.place_name" class="storeMarkName"/>
                            </StackLayout>
                            <StackLayout orientation="horizontal" class="storeMarkBottomWrap">
                                <StackLayout class="storeMarkCategoryWrap">
                                    <label :text="placeBookmark.category" class="storeMarkCategory"/>
                                </StackLayout>
                                <StackLayout class="storeMarkYIconWrap">
                                    <image class="storeMarkYIcon" stretch="aspectFill" src="~/Resources/img/bookmark/youtube-circle.png"/>
                                </StackLayout>
                                <StackLayout class="storeMarkNIconWrap">
                                    <image class="storeMarkNIcon"stretch="aspectFill"  src="~/Resources/img/bookmark/naver-circle.png"/>
                                </StackLayout>
                                <StackLayout class="storeMarkTIconWrap">
                                    <image class="storeMarkTIcon" stretch="aspectFill" src="~/Resources/img/bookmark/tistory-circle.png"/>
                                </StackLayout>
                                <StackLayout class="storeMarkGIconWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 50 }">
                                    <image class="storeMarkGIcon"stretch="aspectFill" src="~/Resources/img/bookmark/google-circle.png" />
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
    <StackLayout v-else @swipe="onSwipe">
        <label text="없음" />
    </StackLayout>
</template>
<script>
 import axios from 'axios';


 //import TistoryWebview from '../../search/place/placeDetail/reviewMore/reviewMoreWebview/TistoryWebview'

 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_480.scss';

 let data = {placeBookmarkList:[]};
 const frameModule = require("ui/frame"); // #A
 const appSettings = require("tns-core-modules/application-settings");

 // other imports here
 import * as application from "application";
 import * as frame from "ui/frame";

 application.on(application.launchEvent, (args) => {
     if (args.android) {
         // For Android applications, args.android is an android.content.Intent class.
         console.log("Launched Android application with the following intent: " + args.android + ".");
     } else if (args.ios !== undefined) {
         // For iOS applications, args.ios is NSDictionary (launchOptions).
         console.log("Launched iOS application with options: " + args.ios);
     }
 });

 application.on(application.suspendEvent, (args) => {
     if (args.android) {
         // For Android applications, args.android is an android activity class.
         console.log("Activity: " + args.android);
     } else if (args.ios) {
         // For iOS applications, args.ios is UIApplication.
         console.log("UIApplication: " + args.ios);
     }
 });

 application.on(application.resumeEvent, (args) => {
     if (args.android) {
         // For Android applications, args.android is an android activity class.
         console.log("Activity: " + args.android);
     } else if (args.ios) {
         // For iOS applications, args.ios is UIApplication.
         console.log("UIApplication: " + args.ios);
     }
 });

 application.on(application.displayedEvent, (args) => {
     // args is of type ApplicationEventData
     console.log("displayedEvent");
 });

 application.on(application.orientationChangedEvent, (args) => {
     // args is of type OrientationChangedEventData
     console.log(args.newValue); // "portrait", "landscape", "unknown"
 });


 application.on(application.exitEvent, (args) => {
     if (args.android) {
         // For Android applications, args.android is an android activity class.
         console.log("Activity: " + args.android);
         if (args.android.isFinishing()) {
             console.log("Activity: " + args.android + " is exiting");
         } else {
             console.log("Activity: " + args.android + " is restarting");
         }
     } else if (args.ios) {
         // For iOS applications, args.ios is UIApplication.
         console.log("UIApplication: " + args.ios);
     }
 });

 application.on(application.lowMemoryEvent, (args) => {
     if (args.android) {
         // For Android applications, args.android is an android activity class.
         console.log("Activity: " + args.android);
     } else if (args.ios) {
         // For iOS applications, args.ios is UIApplication.
         console.log("UIApplication: " + args.ios);
     }
 });

 application.on(application.uncaughtErrorEvent, (args) => {
     console.log("Error: " + args.error);
 });

 export default {
        name:"PlaceBookmark",
        data(){
            return {
                data
            }
        },
        components: {
        },mounted() {
            //this.getPlaceBookmark();
     },created(){
        // this.getPlaceBookmark();
     },methods: {
            onSwipe(args){
                console.log('wwdasda')
                console.log("Swipe!");
                console.log("Object that triggered the event: " + args.object);
                console.log("View that triggered the event: " + args.view);
                console.log("Event name: " + args.eventName);
                console.log("Swipe Direction: " + args.direction);
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/bookmarks',
                    params: {
                        gubun: 'place',
                        user_id : appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division")
                    },
                }).then((response) => {
                    console.log(response.data.dataList)
                    console.log("zzzzzzzzzz"+response.data.dataList);
                    this.data.placeBookmarkList = response.data.dataList;
                }, (error) => {
                    console.log(error);
                });
            },
            aa(){
               console.log('123123123123123123123')
            },

            getPlaceBookmark(){

                // after class code:
                setTimeout(() => {
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/bookmarks',
                        params: {
                            gubun: 'place',
                            user_id : appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division")
                        },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        console.log("zzzzzzzzzz"+response.data.dataList.length + "asdasd");
                        this.data.placeBookmarkList = response.data.dataList;
                    }, (error) => {
                        console.log(error);
                    });
                }, 2000);

            },openingCheck(open_hours){
                try{
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
                }catch (e) {
                    console.log(e)
                }

            }
        }
    };
</script>

<style lang="scss">


</style>

