<template lang="html">
 <Page>
   <ActionBar class="action-bar">
    <Label class="action-bar-title" text="Image Picker"></Label>
   </ActionBar>
     <StackLayout>
         <TextView  style="margin-top: 15px" borderColor="#DEDEDE" borderWidth="1" height="200" hint="Enter Note"  returnKeyType="send" class="input input-border"></TextView>
         <label v-model="wordLength" :text="wordLength"/>
     </StackLayout>
   <<GridLayout rows="*, auto, auto">

    <ListView @itemLoading="onItemLoading" for="item in imageAssets" :visibility="isSingleMode?'collapsed':'visible'">
     <v-template>
      <GridLayout columns="auto, *">
       <Image width="80" height="80" :src="item" stretch="aspectFill" />
       <Label class="m-10" id="imageLabel" col="1" />
      </GridLayout>
     </v-template>
    </ListView>
    <Image :src="imageSrc" :visibility="isSingleMode?'visible':'collapsed'" :width="previewSize" :height="previewSize" stretch="aspectFit" />
    <Button row="2" text="Pick Multiple" @tap="onSelectMultipleTap" horizontalAlignment="center" />
    <Button row="1" text="리뷰작성완료" @tap="fileUpload" horizontalAlignment="center" />
   </GridLayout>
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
        contents: "리뷰리뷰리뷰다앙",
        thumbSize: null,
       wordLength:0,
        textFieldValue:""
   }
  },
  methods: {
      fileUpload(){
          console.log(this.$data.fileList[0])
          console.log(this.$data.fileList[0]._android)
          var file = this.$data.fileList[0]._android;
          var url = "http://192.168.1.85:8080/v1/places/2222222/reviews";
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
              { name: "review_user_id", value: "nos2222@naver.com" },
              { name: "review_contents", value: "123123124124124124" },
              { name: "rating_point", value: 1 }
          ];

          for(var i = 0; i <this.$data.fileList.length; i++ ){
              params.push({ name: "file", filename: this.$data.fileList[i]._android, mimeType: "image/*" })
          }

          var task = session.multipartUpload(params, request);
          //task.on("progress", logEvent);
          task.on("error", logEvent);
          task.on("complete", logEvent);
          function logEvent(e){
              console.log(e.eventName);
              console.log(e);
          }

          /*const formData = new FormData()
          for(var i = 0; i < this.fileList.length; i++){
              formData.append("file", this.fileList[i]._android,this.fileList[i]._android.lastIndexOf("/") + 1);
          }
          //  console.log(this.fileList);


          let settings = { headers: { 'Content-Type': 'multipart/form-data' } }
          axios.post('http://192.168.1.85:8080/v1/places/2222222/reviews', formData, settings)
              .then(response => {
                  console.log(response)
              }).catch(response => {
              console.log(response)
          })*/
      },
      wordCheck(){
          console.log("접근하나?")
          this.wordLength = this.textFieldValue.length;
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
             this.imageAssets = [];
             this.imageSrc = null;
             return context.present();
            })
            .then((selection) => {
             console.log("Selection done: " + JSON.stringify(selection));
             this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;
             console.log(selection)
                this.$data.fileList =  selection;
             if(selection.length > 5){
                 alert('이미지 첨부는 5개까지만 가능합니다.');
                 return
             }
                // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
             selection.forEach(element => {
              element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
              element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
             });
             this.imageAssets = selection;
            }).catch(function (e) {
     console.log(e);
    });
   },
   onItemLoading(args) {
    let label = args.view.getViewById("imageLabel");
    label.text = "image " + args.index;
   }
  }
 };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles

</style>
