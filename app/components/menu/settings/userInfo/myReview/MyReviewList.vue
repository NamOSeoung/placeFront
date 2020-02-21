<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" width="360" height="55" borderBottomWidth="1.05" borderBottomColor="#dddddd" >
          <StackLayout width="28" height="28" marginLeft="6" marginTop="30.5" @tap="$navigateBack">
              <image width="16" height="16" src="~/Resources/img/home/angle-left.png" />
          </StackLayout>
          <StackLayout marginLeft="2"  marginTop="20" @tap="$navigateBack" height="13" width="33">
              <label text="내정보" color="#333333" fontSize="12" style="font-family: nanumsquareroundb" />
          </StackLayout>
          <StackLayout marginTop="24.5" marginLeft="90" width="49" height="18.55">
              <label text="내 리뷰"  style="font-family: nanumsquareroundb" fontSize="14" color="#333333" />
          </StackLayout>
        </StackLayout>
         <ScrollView  orientation="horizontal" height="40.05" >
        <StackLayout orientation="horizontal">
            <StackLayout :class="selectTab==0?'active':''" class="aa" @tap="categorySetting('전체',0)"   >
                <label text="전체"  :class="selectTab==0?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout :class="selectTab==1?'active':''" class="aa" @tap="categorySetting('카페',1)">
                <label text="카페" :class="selectTab==1?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout :class="selectTab==2?'active':''" class="aa" @tap="categorySetting('한식',2)">
                <label text="한식" :class="selectTab==2?'active':''" class="aaa"/>
            </StackLayout>
            <StackLayout  :class="selectTab==3?'active':''" class="aa" @tap="categorySetting('중식',3)" >
                <label text="중식" :class="selectTab==3?'active':''" class="aaa" />
            </StackLayout>
            <StackLayout  :class="selectTab==4?'active':''" class="aa" @tap="categorySetting('양식',4)" >
                <label text="양식"  :class="selectTab==4?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout  :class="selectTab==5?'active':''" class="aa" @tap="categorySetting('일식',5)" >
                <label text="일식" :class="selectTab==5?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout  :class="selectTab==6?'active':''" class="aa" @tap="categorySetting('뷔페',6)" >
                <label text="뷔페"  :class="selectTab==6?'active':''" class="aaa" />
            </StackLayout>
            <StackLayout  :class="selectTab==7?'active':''" class="aa" @tap="categorySetting('술집',7)" >
                <label text="술집"  :class="selectTab==7?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout  :class="selectTab==8?'active':''" class="aa" @tap="categorySetting('분식',8)" >
                <label text="분식"  :class="selectTab==8?'active':''" class="aaa"  />
            </StackLayout>
            <StackLayout  :class="selectTab==9?'active':''" class="aa" @tap="categorySetting('기타',9)" >
                <label text="기타"  :class="selectTab==9?'active':''" class="aaa"  />
            </StackLayout>
        </StackLayout>
         </ScrollView>
         <ScrollView height="100%" >
            <StackLayout width="360" height="100%" backgroundColor="#eff2f7"  @swipe="onSwipeDataReset">
                <StackLayout marginLeft="16" marginTop="15">
                    <label :text="category_count+'개 리뷰'" style="font-family: nanumsquareroundr" font-size="12" color="#333333" />
                </StackLayout>
                <StackLayout  v-if="category=='전체'" height="551" >
                    <StackLayout marginTop="15"padding="15 15 15 15"  @tap="goMyReviewListDetail(index)" v-for="(list,index) in myReviewList" backgroundColor="#ffffff" width="330" height="70"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 6 }">>
                        <StackLayout orientation="horizontal" >
                            <StackLayout width="158" height="40" borderRightWidth="1" borderRightColor="#eff2f7">
                                <StackLayout>
                                    <label :text="list.place_name" style="font-family:nanumsquareroundb" fontSize="14" color="#333333" textWrap="true" />
                                </StackLayout>
                                <StackLayout marginTop="7">
                                    <label :text="'전체평점 '+list.rating_avg" style="font-family:nanumsquareroundr" fontSize="11" color="#888888" />
                                </StackLayout>
                            </StackLayout>
                            <StackLayout paddingLeft="14">
                                <StackLayout orientation="horizontal" height="12" marginLeft="3" >
                                    <StackLayout width="88">
                                        <label height="12" :text="list.write_date" fontSize="10" color="#888888" style="font-family: nanumsquareroundr" />
                                    </StackLayout>
                                    <StackLayout width="11" height="11" v-if="list.like_flag == true">
                                        <image width="11" height="11" src="~/Resources/img/user/like_r_64.png" />
                                    </StackLayout>
                                    <StackLayout width="11" height="11" v-else>
                                        <image width="11" height="11" src="~/Resources/img/user/heart_d_64.png" />
                                    </StackLayout>
                                    <StackLayout marginLeft="2">
                                        <label :text="list.like_count" fontSize="10" color="#888888" style="font-family: nanumsquareroundr" />
                                    </StackLayout>
                                </StackLayout>
                                <StackLayout width="213" height="25" orientation="horizontal" marginTop="6" >
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 0" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 1"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 2" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 3"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 4"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 5" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 4" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 3" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 2" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 1" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout v-else>
                    <StackLayout marginTop="15" v-if="list.category_name==category" padding="15 15 15 15" v-for="list in myReviewList" backgroundColor="#ffffff" width="330" height="70"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 6 }">
                        <StackLayout orientation="horizontal" >
                            <StackLayout width="158" height="40" borderRightWidth="1" borderRightColor="#eff2f7">
                                <StackLayout>
                                    <label :text="list.place_name" style="font-family:nanumsquareroundb" fontSize="14" color="#333333" textWrap="true" />
                                </StackLayout>
                                <StackLayout marginTop="7">
                                    <label :text="'전체평점 '+list.rating_avg" style="font-family:nanumsquareroundr" fontSize="11" color="#888888" />
                                </StackLayout>
                            </StackLayout>
                            <StackLayout paddingLeft="14">
                                <StackLayout orientation="horizontal" height="12" marginLeft="3" >
                                    <StackLayout width="88">
                                        <label height="12" :text="list.write_date" fontSize="10" color="#888888" style="font-family: nanumsquareroundr" />
                                    </StackLayout>
                                    <StackLayout width="11" height="11" v-if="list.like_flag == true">
                                        <image width="11" height="11" src="~/Resources/img/user/like_r_64.png" />
                                    </StackLayout>
                                    <StackLayout width="11" height="11" v-else>
                                        <image width="11" height="11" src="~/Resources/img/user/heart_d_64.png" />
                                    </StackLayout>
                                    <StackLayout marginLeft="2">
                                        <label :text="list.like_count" fontSize="10" color="#888888" style="font-family: nanumsquareroundr" />
                                    </StackLayout>
                                </StackLayout>
                                <StackLayout width="213" height="25" orientation="horizontal" marginTop="6" >
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 0" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 1"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 2" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 3"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/place/star_yellow.png" v-if="list.rating > 4"  />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 5" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 4" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 3" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 2" />
                                    <image width="20" marginLeft="3" height="20"  src="~/Resources/img/user/star_g.png" v-if="list.rating < 1" />
                                </StackLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
     </StackLayout>
</Page>
</template>
<script>
    import NonReviewMessage from './message/NoneReviewMessage'

    import MyReviewListDetail from './myReviewListDetail/MyReviewListDetail'
    import axios from 'axios'
    const appSettings = require("tns-core-modules/application-settings");
    var cache = require("nativescript-cache");
    export default {
        name:"MyReviewList",
        components: {
            NonReviewMessage
        },data(){
            return {
                beforeCategoryNum:'',
                myReviewList:[],
                category:'전체',
                category_count:0,
                selectTab:0,
                MyReviewListDetailPage:MyReviewListDetail
            }
        },methods:{
            onSwipeDataReset(args){
                console.log('wwdasda')
                console.log("Swipe!");
                console.log("Object that triggered the event: " + args.object);
                console.log("View that triggered the event: " + args.view);
                console.log("Event name: " + args.eventName);
                console.log("Swipe Direction: " + args.direction);
                this.getMyReviewList();
               /* axios({
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
                });*/
            },
            category(division){
            },categorySetting(category_name,tab){
                this.$data.category_count = 0;
                this.$data.category = category_name;
                this.$data.selectTab = tab;
                if(category_name == '전체'){
                    this.$data.category_count = this.$data.myReviewList.length;
                }else{
                    for(var i = 0; i < this.$data.myReviewList.length; i++){
                        console.log(this.$data.myReviewList[i].category_name)
                        if(this.$data.myReviewList[i].category_name == category_name){
                            console.log(this.$data.myReviewList[i].category_name)
                            this.$data.category_count++;
                        }
                    }
                }
            },getMyReviewList(){
                console.log(appSettings.getString("user_id"))
                console.log(appSettings.getString("sns_division"))
                axios({
                    method: 'get',
                    url: 'http://202.182.117.173:8080/v1/myreviews?',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division")
                    },
                }).then((response) => {
                    console.log(response.data.dataList)
                    this.$data.myReviewList = response.data.dataList;
                    this.$data.category_count = response.data.dataList.length;
                }, (error) => {
                    console.log(error);
                });
            },goMyReviewListDetail(index){
                cache.set('place_id',this.$data.myReviewList[index].place_id);
                this.$navigateTo(MyReviewListDetail, {
                    props: {
                        itemList: this.$data.myReviewList[index]}
                })
            }
        },mounted(){
            this.getMyReviewList();
        }
    };
</script>

<style lang="scss">
.aa{
    padding-top: 10;
    width: 60;
    text-align: center;
    border-bottom-width: 0;
    border-bottom-color: #ffffff;
}

.aa.active{
    border-bottom-width: 4.55;
    border-bottom-color: #ffe074;
    width: 60;
    padding-top: 10;
    text-align: center;
}
    .aaa{
        font-size: 12;
        font-family: nanumsquareroundb;
        color:#cccccc;
    }
    .aaa.active{
        font-size: 12;
        font-family: nanumsquareroundb;
        color:#333333;
    }
</style>
