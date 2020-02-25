<template lang="html">
    <Page actionBarHidden="true">
        <StackLayout>
            <StackLayout orientation="horizontal"class="areaSearchHeaderWrap">
                <StackLayout class="areaSearchHeaderWrapWrap" >
                    <TextView className="areaSearchHeader" v-model="areaKeyword" hint="지역을 입력해주세요." maxLength="50" returnKeyType="done"  editable="true" @textChange="changeWrap" ></TextView>
                </StackLayout>
                <StackLayout class="placeSearchBarDeleteIconWrap" visibility="collapsed" ref="keywordDelete" @tap="deleteKeyword">
                    <image class="placeSearchBarDeleteIcon" src="~/Resources/img/place/close_d_64.png"/>
                </StackLayout>
            </StackLayout>
                <StackLayout ref="placeKeywordListWrap" visibility="collapsed">
                    <ListView for="item in settingItems" style="height:100%" >
                        <v-template>
                            <StackLayout class="placeSearchAutoCompleteListWrap" >
                                <label class="placeSearchAutoCompleteList" :text="item" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </StackLayout>
               <StackLayout ref="placeList">
                <StackLayout class="areaSearchCurrentLocationWrap" orientation="horizontal" >
                    <StackLayout class="areaSearchCurrentLocationIconWrap" >
                        <image class="areaSearchCurrentLocationIcon"  src="~/Resources/img/place/place_3_64.png" />
                    </StackLayout>
                    <StackLayout class="areaSearchCurrentLocationTitleWrap" >
                        <label class="areaSearchCurrentLocationTitle" text="현재위치" />
                    </StackLayout>
                </StackLayout>
                <StackLayout  class="areaSearchMainWrap" >
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
                <StackLayout class="areaSearchBottomWrap" orientation="horizontal" >
                    <StackLayout class="areaSearchCancelWrap"  @tap="$navigateBack">
                        <label class="areaSearchCancel" text="지역검색취소"   />
                    </StackLayout>
                    <StackLayout class="areaSearchConfirmWrap" @tap="search">
                        <label class="areaSearchConfirm"  text="검색하기" :class="selectedSubCategory!=''?'active':''"   />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import axios from 'axios';
    import Multi from './Multi'
    import {isAndroid, isIOS} from 'tns-core-modules/ui/page';

    import HomeWrap from '../../../home/HomeWrap';
    import MenuWrap from '../../../MenuWrap'
    import PlaceSearch from '../PlaceSearch'

    import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_320.scss';
    import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_360.scss';
    import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_420.scss';
    import '~/Resources/css/menu/search/place/placeSearchDetail/AreaSearch/areaSearch_480.scss';

    var Toast = require("nativescript-toast");
    const dialogs = require('ui/dialogs')
 export default {
  data() {
   return {
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
         secondAreaName:''
   }
  },
  methods: {
      tabSelect(num,area_name) {
          console.log(num);
          this.selectedTabview = num;
          this.getSecondAreaList(num);
          this.$data.firstAreaName = area_name;
          this.$data.selectedSubCategory = '';
          this.$data.secondAreaName = '';
      },
      deleteKeyword(){
        this.$data.areaKeyword = '';
      },
      subCategorySelect(num,area_name){
          console.log(num);
          this.selectedSubCategory = num;
          this.$data.secondAreaName = area_name;
      },
      getFirstAreaList(){
          axios({
              method: 'get',
              url: 'http://202.182.117.173:8080/v1/area/first',
              params: {
              },
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
      }, getSecondAreaList(num){
          axios({
              method: 'get',
              url: 'http://202.182.117.173:8080/v1/area/second',
              params: {
                  area:num
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
      },goToMulti: function () {
          this.$navigateTo(Multi)
      },setMedeumCategory(medeumCategory){
          console.log(medeumCategory)
          this.$navigateBack();
          PlaceSearch.methods.setArea(medeumCategory)
         // HomeWrap.methods.setArea(medeumCategory);
         // MenuWrap.methods.tabChange(0)
      },locationCheck(){
          dialogs.confirm('위치 접근을 허용하겠습니까?')
              .then(result => {
                  console.log(result)
              })
      },changeWrap(){
        if(this.$data.areaKeyword == ''){
            this.$refs.placeKeywordListWrap.nativeView.style.visibility="collapsed";
            this.$refs.placeList.nativeView.style.visibility="";
            this.$refs.keywordDelete.nativeView.style.visibility="collapsed";
        }else{
            this.$refs.placeKeywordListWrap.nativeView.style.visibility="";
            this.$refs.placeList.nativeView.style.visibility="collapsed";
            this.$refs.keywordDelete.nativeView.style.visibility="";
            console.log( this.$data.allArea.length)
            this.$data.settingItems = [];
            for(var i = 0; i < this.$data.allArea.length; i++){
                console.log(this.$data.allArea[i])
                if(this.$data.areaKeyword != ''){
                    if(this.$data.allArea[i].indexOf(this.$data.areaKeyword)>-1){
                        if(this.$data.settingItems.indexOf(this.$data.allArea[i])<0){
                            this.$data.settingItems.push(this.$data.allArea[i])
                        }
                        console.log(this.$data.allArea[i])
                    }
                }

            }
            console.log(this.$data.settingItems);
        }
      },callAllArea(){
           axios({
            method: 'get',
            url: 'http://202.182.117.173:8080/v1/area/suggest',
            //  url: 'http://192.168.1.85:9090/v1/places?',
            params: {
            },
            }).then((response) => {
            console.log(response.data);
            this.$data.allArea = response.data.dataList;
            }, (error) => {

            console.log(error);
            });
      },search(){
          console.log(this.$data.firstAreaName);
          console.log(this.$data.secondAreaName);

          try{
              if(this.$data.firstAreaName==''){
                  Toast.makeText("지역(대분류) 을 선택 해 주세요.").show();
                  return;
              };
              if(this.$data.secondAreaName==''){
                  Toast.makeText("지역(중분류) 을 선택 해 주세요.").show();
                  return;
              }

              var keyword = this.$data.firstAreaName + " " + this.$data.secondAreaName;
              PlaceSearch.data().data.areaFlag = true;
              PlaceSearch.data().data.keyword = keyword;
              //  PlaceSearch.methods.placeSearch(keyword)
              this.$navigateBack();
          }catch (e) {
              console.log(e)
          }


      }
  },mounted(){
         this.callAllArea();
         this.getFirstAreaList();

 }
 };
</script>

<style lang="scss">


</style>
