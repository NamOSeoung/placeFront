<template lang="html">
 <Page actionBarHidden="true">
     <ScrollView height="100%">
         <StackLayout  backgroundColor="#eff2f7" paddingBottom="15">
                 <StackLayout orientation="horizontal" backgroundColor="#ffffff" height="55" width="100%" borderBottomColor="#eff2f7" borderBottomWidth="1">
                     <StackLayout width="58" marginTop="21" marginLeft="47%" height="16">
                         <label text="리뷰" style="font-family: nanumsquareroundb" fontSize="14" color="#333333"/>
                     </StackLayout>
                     <StackLayout width="30" height="30" marginLeft="27%" marginTop="25" @tap="$navigateBack">
                        <image src="~/Resources/img/login/close.png" />
                     </StackLayout>
                 </StackLayout>
                 <StackLayout marginLeft="15%" marginTop="20">
                     <StackLayout v-if="selectStar==1" orientation="horizontal">
                         <image width="11%"  @tap="selectedStar(1)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(2)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"   />
                         <image width="11%"  @tap="selectedStar(3)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"  />
                         <image width="11%"  @tap="selectedStar(4)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                         <image width="11%"  @tap="selectedStar(5)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                     </StackLayout>
                     <StackLayout v-else-if="selectStar==2" orientation="horizontal">
                         <image width="11%" @tap="selectedStar(1)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(2)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(3)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"  />
                         <image width="11%"  @tap="selectedStar(4)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                         <image width="11%"   @tap="selectedStar(5)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                     </StackLayout>
                     <StackLayout v-else-if="selectStar==3" orientation="horizontal">
                         <image width="11%"  @tap="selectedStar(1)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%" @tap="selectedStar(2)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(3)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"   @tap="selectedStar(4)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                         <image width="11%"   @tap="selectedStar(5)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                     </StackLayout>
                     <StackLayout v-else-if="selectStar==4" orientation="horizontal">
                         <image width="11%"  @tap="selectedStar(1)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%" @tap="selectedStar(2)" marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(3)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(4)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(5)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_d_64.png"    />
                     </StackLayout>
                     <StackLayout v-else orientation="horizontal">
                         <image width="11%"  @tap="selectedStar(1)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(2)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(3)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(4)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                         <image width="11%"  @tap="selectedStar(5)"marginLeft="5%" height="12%" src="~/Resources/img/place/star_y1_64.png"  />
                     </StackLayout>
                 </StackLayout>
                 <StackLayout marginTop="20" backgroundColor="#ffffff" width="90%" height="266">
                     <TextView  height="266" width="100%%" backgroundColor="#ffffff" maxLength="1000" hint="10자 이상 입력해주세요." style="font-family: nanumsquareroundr"   color="#333333"  returnKeyType="done" v-model="contents" fontSize="12" hintColor="#cccccc" @textChange="wordLengthCehck" ></TextView>
                 </StackLayout>
                 <StackLayout width="330" style="text-align: right" orientation="horizontal" marginTop="10">
                     <label v-model="wordLength" :text="wordLength" width="290" style="font-family: nanumsquareroundb" fontSize="13" color="#555555"/>
                     <label text="/1000" style="font-family: nanumsquareroundb" fontSize="13" color="#555555"/>
                 </StackLayout>
                 <StackLayout width="360" orientation="horizontal" marginTop="10">
                     <StackLayout width="70" height="70" marginLeft="14"  v-for="image in imageAssets">
                         <StackLayout width="70" height="70" @tap="pictureDetail(image)">
                             <image :src="image" stretch="aspectFill" width="70" height="70"/>
                         </StackLayout>
                     </StackLayout>
                     <StackLayout v-if="imageAssets.length < 4" width="70" height="70" marginLeft="14" backgroundColor="#dddddd"  @tap="onSelectMultipleTap" >
                         <image marginTop="20" width="30" height="30" src="~/Resources/img/place/photo_f_64.png"/>
                     </StackLayout>
                 </StackLayout>
                 <StackLayout width="330" marginTop="23" height="40" backgroundColor="#dddddd" @tap="pictureDelete">
                     <image width="30" height="30" marginTop="5" src="~/Resources/img/place/trash_64.png" />
                 </StackLayout>
                 <StackLayout v-if="update_flag==true" width="330" marginTop="23" backgroundColor="#ffe074" borderRadius="8" height="40" style="text-align: center" @tap="updateReview">
                    <label text="리뷰등록" fontSize="14" style="font-family: nanumsquareroundb" color="#555555" marginTop="12" />
                 </StackLayout>
             <StackLayout v-else width="330" marginTop="23" backgroundColor="#ffe074" borderRadius="8" height="40" style="text-align: center" @tap="fileUpload">
                 <label text="리뷰등록" fontSize="14" style="font-family: nanumsquareroundb" color="#555555" marginTop="12" />
             </StackLayout>
<!--             <Button row="1" text="리뷰작성완료" @tap="fileUpload" horizontalAlignment="center" />-->
         </StackLayout>
     </ScrollView>
 </Page>
</template>

<script>
 import { Observable } from 'tns-core-modules/data/observable';
 import * as imagepicker from "nativescript-imagepicker";
 import { ItemEventData } from "tns-core-modules/ui/list-view";
 import { Label } from "tns-core-modules/ui/label";
 import * as bghttp from "nativescript-background-http";
 import axios from "axios";
 import AppReviewMore from "../reviewMore/AppReviewMore";
 const httpModule = require("tns-core-modules/http");
 import PictureDetail from './PictureDetail';
 var cache = require("nativescript-cache");
 const appSettings = require("tns-core-modules/application-settings");
 var dialogs = require("tns-core-modules/ui/dialogs");
 export default {
     props:['itemList'],
  data() {
   return {
        name:"ReviewWrite",
        isSingleMode: true,
        imageAssets: [],
        imageSrc: null,
        previewSize: 300,
        thumbSize: 80,
        rating:1,
        fileList:[],
        contents: '',
        thumbSize: null,
        index:0,
        image:'',
        wordLength:0,
        textFieldValue:"",
        selectStar:1,
        update_flag:false,
        image_url:[],
        update_image_file:[]
     }
  },
     mounted(){
         if(this.itemList != undefined){
             this.$data.contents = this.itemList.review_contents;
             this.$data.wordLength = this.itemList.review_contents.length;
             this.$data.selectStar = this.itemList.rating_point;
             this.$data.update_flag = true;


             for(var i = 0; i < this.itemList.image_url.length ; i++){
                 this.$data.imageAssets.push(this.itemList.image_url[i]);
             }

             // for(var i = 0; i < this.itemList.image_url.length ; i++){
             //     this.$data.image_url.push(this.itemList.image_url[i]);
             // }

             // console.log(this.$data.image_url)
             // console.log(this.$data.image_url.length)
         }

     },
     methods: {
      pictureDetail(image){
         cache.set('image',image._android)
          this.$navigateTo(PictureDetail)
      },
      pictureDelete(){
            // if(this.$data.imageAssets.indexOf("http") > -1) {
            //     this.$data.image_url.pop();
            // }
          this.$data.imageAssets.pop();
      },
      showModal() {
          //ModalComponent.methods.test();
      },
      wordLengthCehck(){
          this.$data.wordLength = this.$data.contents.length;
      },
      selectedStar(rating){
          this.$data.selectStar = rating;
          console.log(rating)
      },
      updateReview(){
          var url = "http://api.eatjeong.com/v1/places/"+cache.get('place_id') +"/reviews/"+this.itemList.review_id;
          var name ='';

          // upload configuration
          var bghttp = require("nativescript-background-http");
          var session = bghttp.session("image-upload");


          for(var i = 0;i < this.$data.imageAssets.length;i++){
              var check = JSON.stringify(this.$data.imageAssets[i]).indexOf("http");
              if(check>-1){
                  this.$data.image_url.push(this.$data.imageAssets[i])
              }
          }

          console.log(this.$data.image_url);

          for(var i = 0;i < this.$data.imageAssets.length;i++){
              var check = JSON.stringify(this.$data.imageAssets[i]).indexOf("http");
              if(check<0){
                  console.log(this.$data.imageAssets[i])
                  this.$data.update_image_file.push(this.$data.imageAssets[i])
              }
          }

          var request = {
              url: url,
              method: "put",
              headers: {
                  "Content-Type": "multipart/form-data"
              },
              description: "Uploading " + name
          };
          var params = [
              { name: "review_user_id", value: appSettings.getString("user_id") },
              { name: "review_contents", value: encodeURI(this.$data.contents)},
              { name: "rating_point", value: this.$data.selectStar },
              { name: "sns_division", value: appSettings.getString("sns_division")},
              { name: "image_url" , value:this.$data.image_url}
          ];


          if(this.$data.update_image_file.length > 0){
              for(var i = 0; i <this.$data.update_image_file.length; i++ ){
                  params.push({ name: "file", filename: this.$data.update_image_file[i]._android, mimeType: "image/*" })
              }
          }

          console.log(this.$data.update_image_file)
          console.log(this.$data.image_url)
          var task = session.multipartUpload(params, request);
          //task.on("progress", logEvent);
          task.on("error", this.logEvent);
          task.on("complete", this.logEvent);
         // function logEvent(e){

             // this.$navigateBack;
          //}


      },logEvent(e){
             console.log('333kmalksmdkmasldmlk')
             console.log(e.eventName);
             console.log(e);
             if(e.eventName == 'complete'){
                 dialogs.alert({
                     title: "",
                     message: "리뷰가 등록되었습니다.",
                     okButtonText: "확인"
                 }).then(() =>{
                     console.log("Dialog closed!");
                     this.$navigateTo(AppReviewMore);
                    // this.$navigateBack();
                     return;
                     // this.$navigateBack();
                 });

             }
         },
      fileUpload(){

          if(this.$data.contents.length < 10 ){
              dialogs.alert({
                  title: "",
                  message: "10자 이상 입력해주세요.",
                  okButtonText: "확인"
              }).then(() =>{
                  console.log("Dialog closed!");
                  return;
                  // this.$navigateBack();
              });
              return;
          }
          //console.log(this.$data.fileList[0])
          //console.log(this.$data.fileList[0]._android)
          var file = '';
          if(this.$data.imageAssets.length > 0){
              file = this.$data.imageAssets[0]._android;
          }
          var url = "http://api.eatjeong.com/v1/places/"+cache.get('place_id') +"/reviews";
          var name = file.substr(file.lastIndexOf("/") + 1);

          // upload configuration
          var bghttp = require("nativescript-background-http");
          var session = bghttp.session("image-upload");

          var request = {
              url: url,
              method: "POST",
              headers: {
                  "Content-Type": "multipart/form-data"
              },
              description: "Uploading " + name
          };

          var params = [
              { name: "review_user_id", value: appSettings.getString("user_id") },
              { name: "review_contents", value: encodeURI(this.$data.contents)},
              { name: "rating_point", value: this.$data.selectStar },
              { name: "sns_division", value: appSettings.getString("sns_division")}
          ];

          for(var i = 0; i <this.$data.imageAssets.length; i++ ){
              params.push({ name: "file", filename: this.$data.imageAssets[i]._android, mimeType: "image/*" })
          }

          var task = session.multipartUpload(params, request);
          //task.on("progress", logEvent);
          task.on("error", this.logEvent);
          task.on("complete", this.logEvent);

      },
       onSelectMultipleTap: function() {
        this.isSingleMode = false;
        let context = imagepicker.create({
         mode: "multiple"
        });
        this.startSelection(context);
       },
        startSelection(context) {
            context
            .authorize()
            .then(() => {
             //this.imageAssets = [];
             this.imageSrc = null;
             return context.present();
            })
            .then((selection) => {
             console.log("Selection done: " + JSON.stringify(selection));
             this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;
             console.log(selection)
                this.$data.fileList =  selection;
             if(selection.length > 4){
                 dialogs.alert({
                     title: "",
                     message: "최대 4장까지 등록 가능합니다.",
                     okButtonText: "확인"
                 }).then(() =>{
                     console.log("Dialog closed!");
                     // this.$navigateBack();
                 });
                 //alert('이미지 첨부는 4개까지만 가능합니다.');
                 return
             }
                // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
             selection.forEach(element => {
              element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
              element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
             });

                   if ((this.imageAssets.length + selection.length) > 4) {
                       dialogs.alert({
                           title: "",
                           message: "최대 4장까지 등록 가능합니다.",
                           okButtonText: "확인"
                       }).then(() => {
                           console.log("Dialog closed!");
                           // this.$navigateBack();
                       });
                       //alert('이미지 첨부는 4개까지만 가능합니다.'+(4-this.imageAssets.length)+'개 추가 첨부 가능합니다.');
                       return;
                   } else if ((this.imageAssets.length == 3) && (selection.length == 1)) {
                       this.imageAssets.push(selection[0])
                       // this.$data.update_image_file.push(selection[0])
                   } else if ((this.imageAssets.length == 2) && (selection.length == 1)) {
                       this.imageAssets.push(selection[0])
                      // this.$data.update_image_file.push(selection[0])
                   } else if ((this.imageAssets.length == 2) && (selection.length == 1)) {
                       this.imageAssets.push(selection[0])
                       this.imageAssets.push(selection[1])

                       // this.$data.update_image_file.push(selection[0])
                       // this.$data.update_image_file.push(selection[1])
                   } else if ((this.imageAssets.length == 1) && (selection.length == 1)) {
                       this.imageAssets.push(selection[0])

                       // this.$data.update_image_file.push(selection[0])
                   } else if ((this.imageAssets.length == 1) && (selection.length == 2)) {
                       this.imageAssets.push(selection[0])
                       this.imageAssets.push(selection[1])

                       // this.$data.update_image_file.push(selection[0])
                       // this.$data.update_image_file.push(selection[1])

                   } else if ((this.imageAssets.length == 1) && (selection.length == 3)) {
                       this.imageAssets.push(selection[0])
                       this.imageAssets.push(selection[1])
                       this.imageAssets.push(selection[2])

                       // this.$data.update_image_file.push(selection[0])
                       // this.$data.update_image_file.push(selection[1])
                       // this.$data.update_image_file.push(selection[2])
                   } else {
                       this.imageAssets = selection;
                       //this.$data.update_image_file = selection;
                   }
            }).catch(function (e) {
     console.log(e);
    });
   },
  }
 };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
