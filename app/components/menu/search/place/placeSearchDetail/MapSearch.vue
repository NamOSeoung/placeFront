<template lang="html">
    <Page actionBarHidden="true" marginTop="30" xmlns:FS="nativescript-filter-select">
        <StackLayout>
            <StackLayout orientation="horizontal">
                <Button text="뒤로" @tap="$navigateBack" color="black" style="font-weight:bold;border-width : 0;z-index: 0; background-color: transparent;font-family: nanumgothiccoding-bold;font-size: 17" width="15%" />
                <TextView  style="margin-top: 15px" v-if="isAndroid" borderColor="#DEDEDE" borderWidth="1"  borderRadius="10" hint="지역을 입력 해 주세요."  returnKeyType="send" width="80%"> </TextView>
                <TextView  style="margin-top: 15px" v-if="isIOS" fontSize="20" paddingTop="5" borderColor="#DEDEDE" borderWidth="1"  borderRadius="10" hint="지역을 입력 해 주세요."  returnKeyType="send" width="80%"> </TextView>
            </StackLayout>
            <!--<Button text="View Multi Template" @tap="goToMulti"></Button> -->
            <StackLayout>
                <label text="현재위치" fontSize="21" paddingLeft="20" marginTop="10" style="border-bottom-width: 1;padding-bottom: 10;border-bottom-color: #E6E6E6" @tap="locationCheck"/>
            </StackLayout>
            <Accordion row="1" for="item of area_category">
                <v-template name="title">
                    <StackLayout orientation="horizontal"  backgroundColor="white" paddingTop="10" paddingBottom="5" width="100%" borderBottomWidth="1" borderBottomColor="#d3d3d3">
                        <Label :text="item.large_category" fontSize="20" width="85%" paddingLeft="20"  />
                        <FIcon name="fa-angle-down" color="black"  width="15%" size="30" />
                    </StackLayout>
                </v-template>
                <v-template name="content">
                    <GridLayout rows="auto,auto" @tap="setMedeumCategory(item.medium_category)" >
                        <Label row="0" :text="item.medium_category" fontSize="15" paddingTop="10" paddingBottom="5" paddingLeft="35"></Label>
                    </GridLayout>
                </v-template>
            </Accordion>
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

    const dialogs = require('ui/dialogs')
 export default {
  data() {
   return {
        name:"MapSearch",
        area:'',
        large_category:'',
        medium_category:'',
        isAndroid:isAndroid,
        isIOS:isIOS,
        area_category: [
           {
               "large_category": "서울특별시",
               "items": [
                   { "medium_category": "동작구"},
                   { "medium_category": "마포구"},
                   { "medium_category": "성북구"},
                   { "medium_category": "송파구"}
               ]
           },
           {
               "large_category": "인천광역시",
               "items": [
                   { "medium_category": "계양구"},
                   { "medium_category": "남구"},
                   { "medium_category": "서구"},
                   { "medium_category": "중구"}
               ]
           },
           {
               "large_category": "부산광역시",
               "items": [
                   { "medium_category": "금정구"},
                   { "medium_category": "동래구"},
                   { "medium_category": "사하구"},
                   { "medium_category": "중구"}
               ]
           }
       ]
   }
  },
  methods: {
      getAreaList(){
          axios({
              method: 'get',
              url: 'http://api.matitzung.shop/v1/area',
              params: {
              },
          }).then((response) => {
              //console.log(response.data)
              //console.log(response.data.large_category)
              //console.log(response.data.medium_category)

              //this.$data.categorys = response.data;
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
      }
  },mounted(){
         this.getAreaList();
 }
 };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
