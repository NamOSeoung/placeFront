<template lang="html">
 <Page actionBarHidden="true">
     <StackLayout  backgroundColor="#eff2f7">
             <StackLayout orientation="horizontal" backgroundColor="#ffffff" height="55" width="360" borderBottomColor="#eff2f7" borderBottomWidth="1">
                 <StackLayout width="58" marginTop="21" marginLeft="171" height="16">
                     <label text="리뷰" style="font-family: nanumsquareroundb" fontSize="14" color="#333333"/>
                 </StackLayout>
                 <StackLayout width="30" height="30" marginLeft="98" marginTop="25" @tap="$navigateBack">
                    <image src="~/Resources/img/login/close.png" />
                 </StackLayout>
             </StackLayout>
             <StackLayout marginLeft="35" marginTop="20">
                 <StackLayout v-if="selectStar==1" orientation="horizontal">
                     <image width="40"  @tap="selectedStar(1)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(2)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"   />
                     <image width="40"  @tap="selectedStar(3)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"  />
                     <image width="40"  @tap="selectedStar(4)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                     <image width="40"  @tap="selectedStar(5)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                 </StackLayout>
                 <StackLayout v-else-if="selectStar==2" orientation="horizontal">
                     <image width="40" @tap="selectedStar(1)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(2)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(3)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"  />
                     <image width="40"  @tap="selectedStar(4)"marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                     <image width="40"   @tap="selectedStar(5)"marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                 </StackLayout>
                 <StackLayout v-else-if="selectStar==3" orientation="horizontal">
                     <image width="40"  @tap="selectedStar(1)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40" @tap="selectedStar(2)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(3)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"   @tap="selectedStar(4)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                     <image width="40"   @tap="selectedStar(5)" marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                 </StackLayout>
                 <StackLayout v-else-if="selectStar==4" orientation="horizontal">
                     <image width="40"  @tap="selectedStar(1)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40" @tap="selectedStar(2)" marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(3)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(4)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(5)"marginLeft="15" height="40" src="~/Resources/img/place/star_d_64.png"    />
                 </StackLayout>
                 <StackLayout v-else orientation="horizontal">
                     <image width="40"  @tap="selectedStar(1)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(2)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(3)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(4)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                     <image width="40"  @tap="selectedStar(5)"marginLeft="15" height="40" src="~/Resources/img/place/star_y1_64.png"  />
                 </StackLayout>
             </StackLayout>
             <StackLayout marginTop="20" backgroundColor="#ffffff" width="330" height="266">
                 <TextView  height="266" width="330" backgroundColor="#ffffff" maxLength="1000" hint="10자 이상 입력해주세요." style="font-family: nanumsquareroundr"  color="#333333" v-model="contents" fontSize="12" hintColor="#cccccc" returnKeyType="send" @textChange="wordLengthCehck" ></TextView>
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
             <StackLayout width="330" marginTop="23" backgroundColor="#ffe074" borderRadius="8" height="40" style="text-align: center" @tap="fileUpload">
                <label text="리뷰등록" fontSize="14" style="font-family: nanumsquareroundb" color="#555555" marginTop="12" />
             </StackLayout>
<!--         <Button row="1" text="리뷰작성완료" @tap="fileUpload" horizontalAlignment="center" />-->
     </StackLayout>
 </Page>
</template>

<script>
 import { Observable } from 'tns-core-modules/data/observable';
 import * as imagepicker from "nativescript-imagepicker";
 import { ItemEventData } from "tns-core-modules/ui/list-view";
 import { Label } from "tns-core-modules/ui/label";
 import * as bghttp from "nativescript-background-http";
 import axios from "axios";
 const httpModule = require("tns-core-modules/http");

 import PictureDetail from './PictureDetail';
 var cache = require("nativescript-cache");
 const appSettings = require("tns-core-modules/application-settings");
 export default {
  data() {
   return {
        name:"ReviewWrite",
        isSingleMode: true,
        imageAssets: [],
        imageSrc: null,
        previewSize: 300,
        thumbSize: 80,
        rating:2,
        fileList:[],
        contents: "",
        thumbSize: null,
       index:0,
       image:'',
       wordLength:0,
        textFieldValue:"",
       selectStar:1
   }
  },
  methods: {
      pictureDetail(image){
         cache.set('image',image._android)
          this.$navigateTo(PictureDetail)
      },
      pictureDelete(){
          this.$data.imageAssets.pop();
      },
      showModal() {
          //ModalComponent.methods.test();
      },
      wordLengthCehck(){
          console.log('텍스트 바뀐다')
          console.log(this.$data.contents.length);
          this.$data.wordLength = this.$data.contents.length;
      },
      selectedStar(rating){
          this.$data.selectStar = rating;
          console.log(rating)
      },
      fileUpload(){
          console.log(this.$data.fileList[0])
          console.log(this.$data.fileList[0]._android)
          var file = this.$data.imageAssets[0]._android;
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
          task.on("error", logEvent);
          task.on("complete", logEvent);
          function logEvent(e){
              console.log(e.eventName);
              console.log(e);
          }
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
                 alert('이미지 첨부는 4개까지만 가능합니다.');
                 return
             }
                // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
             selection.forEach(element => {
              element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
              element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
             });
             if((this.imageAssets.length+selection.length)>4){
                 alert('이미지 첨부는 4개까지만 가능합니다.'+(4-this.imageAssets.length)+'개 추가 첨부 가능합니다.');
                 return;
             } else if((this.imageAssets.length == 3)&&(selection.length == 1)){
                 this.imageAssets.push(selection[0])
             }else if((this.imageAssets.length == 2)&&(selection.length == 1)){
                 this.imageAssets.push(selection[0])
             }else if((this.imageAssets.length == 2)&&(selection.length == 1)){
                    this.imageAssets.push(selection[0])
                    this.imageAssets.push(selection[1])
             }else if((this.imageAssets.length == 1)&&(selection.length == 1)){
                    this.imageAssets.push(selection[0])
             }else if((this.imageAssets.length ==1)&&(selection.length == 2)){
                    this.imageAssets.push(selection[0])
                    this.imageAssets.push(selection[1])
             }else if((this.imageAssets.length == 1)&&(selection.length == 3)){
                    this.imageAssets.push(selection[0])
                    this.imageAssets.push(selection[1])
                    this.imageAssets.push(selection[2])
             }else{
                 this.imageAssets = selection;
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
