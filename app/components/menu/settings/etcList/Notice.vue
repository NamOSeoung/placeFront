<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
         <StackLayout class="findUserIdBarWrap" orientation="horizontal"  >
             <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                 <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
             </StackLayout>
             <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                 <label class="findUserIdBack" text="내정보"  />
             </StackLayout>
             <StackLayout class="findUserIdBarTitleWrap" >
                 <label class="findUserIdBarTitle" text="공지사항"  />
             </StackLayout>
         </StackLayout>
         <Accordion row="1" for="notice of noticeList" height="100%">
             <v-template name="title">
                 <StackLayout orientation="horizontal"  backgroundColor="white" width="100%" borderBottomWidth="1" borderBottomColor="#dddddd">
                    <StackLayout paddingTop="26.95" paddingBottom="25.275" width="310">
                        <Label :text="notice.subject" fontSize="12" marginLeft="17.5" color="#333333"  style="font-family: nanumsquareroundb" textWrap="true" />
                    </StackLayout>
                    <StackLayout marginTop="25">
                        <image src="~/Resources/img/settings/down.png" width="18" height="18" />
                    </StackLayout>
                 </StackLayout>
             </v-template>
             <v-template name="content">
                 <GridLayout rows="auto,auto" backgroundColor="#eff2f7" padding="15 15 15 15">
                     <TextView :text="notice.contents" backgroundColor="#eff2f7" color="#333333" lineHeight="15" fontSize="11" width="100%"  editable="false" style="border-bottom-width: 0;"/>
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
