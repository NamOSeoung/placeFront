<template lang="html">
<Page actionBarHidden="true">
     <StackLayout width="100%">
         <StackLayout class="findUserIdBarWrap" orientation="horizontal"  width="100%">
             <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                 <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
             </StackLayout>
             <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                 <label class="findUserIdBack" text="내정보"  />
             </StackLayout>
             <StackLayout class="noticeBarTitleWrap"  marginLeft="25%" >
                 <label class="noticeBarTitle" text="공지사항"  />
             </StackLayout>
<!--             <StackLayout class="findUserIdBarTitleWrap"  marginLeft="90" >-->
<!--                 <label class="findUserIdBarTitle" text="공지사항"  />-->
<!--             </StackLayout>-->
         </StackLayout>
         <Accordion row="1" for="notice of noticeList" height="100%">
             <v-template name="title">
                 <StackLayout orientation="horizontal" class="noticeListWrap" >
                    <StackLayout class="noticeSubjectWrap" >
                        <Label :text="notice.subject" class="noticeSubject"  textWrap="true" />
                    </StackLayout>
                    <StackLayout class="noticeImageWrap" >
                        <image class="noticeImage" src="~/Resources/img/settings/down.png" />
                    </StackLayout>
                 </StackLayout>
             </v-template>
             <v-template name="content">
                 <GridLayout rows="auto,auto"  class="noticeContentsWrap">
                     <TextView :text="notice.contents" class="noticeContents"  editable="false"/>
                 </GridLayout>
             </v-template>
         </Accordion>
     </StackLayout>
</Page>
</template>
<script>

import axios from 'axios';

import '~/Resources/css/menu/settings/etcList/Notice/notice_320.scss';
import '~/Resources/css/menu/settings/etcList/Notice/notice_360.scss';
import '~/Resources/css/menu/settings/etcList/Notice/notice_420.scss';
import '~/Resources/css/menu/settings/etcList/Notice/notice_480.scss';


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

</style>
