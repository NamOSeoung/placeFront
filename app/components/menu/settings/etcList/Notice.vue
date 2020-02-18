<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd">
          <StackLayout width="32.55" height="32.55" marginLeft="7" marginTop="17.5" @tap="$navigateBack">
           <FIcon name="fa-angle-left" color="#555555"  fontSize="32.55"/>
          </StackLayout>
          <StackLayout marginLeft="0"  marginTop="29.95" @tap="$navigateBack">
              <label text="내정보" color="#333333" fontSize="14" style="font-family: nanumsquareroundeb" width="38.5" height="15.05" />
          </StackLayout>
          <StackLayout marginTop="24.5" marginLeft="107.45">
              <label text="공지사항"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
          </StackLayout>
        </StackLayout>
         <Accordion row="1" for="notice of noticeList" height="100%">
             <v-template name="title">
                 <StackLayout orientation="horizontal"  backgroundColor="white" width="100%" borderBottomWidth="1" borderBottomColor="#dddddd">
                    <StackLayout paddingTop="26.95" paddingBottom="25.275" width="287">
                        <Label :text="notice.subject" fontSize="14" marginLeft="17.5" color="#333333"  style="font-family: nanumsquareroundeb" />
                    </StackLayout>
                    <StackLayout marginTop="18.5" marginLeft="64.05">
                        <FIcon name="fa-angle-down" color="#888888"  width="32.55" height="32.55" size="32.55" />
                    </StackLayout>
                 </StackLayout>
             </v-template>
             <v-template name="content">
                 <GridLayout rows="auto,auto" backgroundColor="#eff2f7">
                     <TextView :text="notice.contents" backgroundColor="#eff2f7" color="#333333" marginLeft="17.5" marginRight="17.5" marginTop="16.45" lineHeight="25.55" fontSize="12.95" height="308" width="100%"  editable="false" style="border-bottom-width: 0;"/>
                 </GridLayout>
             </v-template>
         </Accordion>
     </StackLayout>
</Page>
</template>
<script>

import axios from 'axios';

    export default {
        name:"Notice",
        components: {
        },data(){
            return {
                noticeList:[],
            }
        },methods:{
            getNotice(){
                   axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/users/notice',
                    params: {
                    },
                }).then((response) => {
                    this.$data.noticeList = response.data.dataList;
                }, (error) => {
                    console.log(error);
                });
            }
        },mounted(){
            this.getNotice();
        }
    };
</script>

<style lang="scss">
TabView {
 font-family: nanumgothiccoding-bold;
 font-size: 14;
 highlighted-color: lightgrey;
 tab-text-color: #F2F2F2;
 selected-tab-text-color: black;
 android-selected-tab-highlight-color: #848484;
 tab-background-color: lightgray;
}
</style>
