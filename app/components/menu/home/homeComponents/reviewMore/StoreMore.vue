<template lang="html">
<Page backgroundColor="#eff2f7" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <StackLayout width="100%">
        <StackLayout class="reviewMoreWrap" orientation="horizontal" width="100%">
            <StackLayout class="reviewMoreIconWrap" @tap="$navigateBack" >
                <image class="reviewMoreIcon"  src="~/Resources/img/home/angle-left.png" />
            </StackLayout>
            <StackLayout class="reviewMorePlaceNameWrap">
                <label class="reviewMorePlaceName" text="서울 맛집"/>
            </StackLayout>
        </StackLayout>
        <StackLayout marginTop="17">
            <ListView for="list in storeList" separatorColor="transparent" style="height:100%" @itemTap="" >
                <v-template>
                    <StackLayout class="storeMarkDetailSubWrap">
                        <StackLayout orientation="horizontal" class="storeMarkDetailWrap"
                                     v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
                            <StackLayout class="storeLeftWrap" v-if="list.blog_thumbnail != null">
                                <image class="storeImageTrue" stretch="aspectFill" :src="list.blog_thumbnail"/>
                            </StackLayout>
                            <StackLayout class="storeLeftWrap" v-else backgroundColor="#dddddd" borderRadius="10">
                                <image class="storeImageFalse" stretch="aspectFill" src="~/Resources/img/home/dinner_w_64.png"/>
                            </StackLayout>
                            <StackLayout class="storeMarkRightWrap">
                                <StackLayout orientation="horizontal" class="storeMarkTopWrap">
                                    <StackLayout class="storeMarkTimeWrap" v-if="list.open_hours !=null">
                                        <label :text="openingCheck(list.open_hours)" class="storeTime"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkTimeWrap" v-else>
                                        <label text="정보없음" class="storeTime"/>
                                    </StackLayout>
                                    <StackLayout class="storeStarIconWrap">
                                        <Image src="~/Resources/img/home/star.png" class="storeStarIcon"/>
                                    </StackLayout>
                                    <StackLayout class="storeRatingWrap" v-if="list.google_rating != ''">
                                        <label :text="list.google_rating" class="storeRating"/>
                                    </StackLayout>
                                    <StackLayout class="storeRatingWrap" v-else>
                                        <label text="0" class="storeRating"/>
                                    </StackLayout>
                                </StackLayout>
                                <StackLayout class="storeMarkMiddleWrap">
                                    <label :text="list.place_name" class="storeMarkName"/>
                                </StackLayout>
                                <StackLayout orientation="horizontal" class="storeMarkBottomWrap">
                                    <StackLayout class="storeMarkCategoryWrap">
                                        <label :text="list.category_name" class="storeMarkCategory"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkYIconWrap">
                                        <image class="storeMarkYIcon" stretch="aspectFill"
                                               src="~/Resources/img/bookmark/youtube-circle.png"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkNIconWrap">
                                        <image class="storeMarkNIcon" stretch="aspectFill"
                                               src="~/Resources/img/bookmark/naver-circle.png"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkTIconWrap">
                                        <image class="storeMarkTIcon" stretch="aspectFill"
                                               src="~/Resources/img/bookmark/tistory-circle.png"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkGIconWrap"
                                                 v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 50 }">
                                        <image class="storeMarkGIcon" stretch="aspectFill"
                                               src="~/Resources/img/bookmark/google-circle.png"/>
                                    </StackLayout>
                                    <StackLayout class="storeMarkAIconWrap">
                                        <image class="storeMarkAIcon" stretch="aspectFill"
                                               src="~/Resources/img/bookmark/tistory-circle.png"/>
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
</Page>
</template>

<script>
    import axios from 'axios';

    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_480.scss';

    export default {
        name:"StoreMore",
        data(){
            return{
                storeList:[]
        }
        },
        components: {
        },methods:{
               openingCheck(open_hours){
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

                },getStoreList(){
                    axios({
                        method: 'get',
                        url: 'http://api.eatjeong.com/v1/main/places',
                        params: {
                            query:"서울 동작구 상도동 맛집"
                        },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        this.$data.storeList = response.data.dataList;


                    }, (error) => {
                        console.log(error);
                    });
                },
            },
        mounted() {
            this.getStoreList();
        }
    };
</script>

<style lang="scss">

</style>
