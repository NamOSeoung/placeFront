<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout class="oneToOneBarWrap" orientation="horizontal"  >
          <StackLayout class="oneToOneBackIconWrap" @tap="$navigateBack">
              <image src="~/Resources/img/home/angle-left.png" class="oneToOneBackIcon" />
          </StackLayout>
          <StackLayout class="oneToOneBackWrap" @tap="$navigateBack">
              <label class="oneToOneBack" text="내정보"  />
          </StackLayout>
          <StackLayout class="oneToOneBarTitleWrap" >
              <label class="oneToOneBarTitle" text="1:1 문의"  />
          </StackLayout>
        </StackLayout>

       <StackLayout backgroundColor="#eff2f7" height="100%"  >
           <StackLayout width="100%" style="text-align: center;" marginTop="100">
               <Label text="jeetkn@naver.com(관리자) 에게 " />
               <Label text="메일 문의 주시기 바랍니다. " />
           </StackLayout>
<!--           <StackLayout class="oneToOneButtonWrap">-->
<!--               <label class="oneToOneButton" text="문의하기"/>-->
<!--           </StackLayout>-->
<!--           <ListView for="question in questionkList" separatorColor="transparent"-->
<!--                     style="height:100%" @itemTap="goNaver" >-->
<!--               <v-template>-->
<!--           <StackLayout class="answerListWrap" >-->
<!--               <StackLayout class="answerWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">-->
<!--                   <StackLayout class="answerTopWrap" orientation="horizontal">-->
<!--                       <StackLayout class="answerWaitWrap" v-if="question.answer_flag=='w'">-->
<!--                           <label class="answerWait"  text="답변대기"  />-->
<!--                       </StackLayout>-->
<!--                       <StackLayout class="answerCompleteWrap" v-if="question.answer_flag=='c'">-->
<!--                           <label class="answerComplete" text="답변완료"  />-->
<!--                       </StackLayout>-->
<!--                       <StackLayout class="answerDateWrap" >-->
<!--                           <label class="answerDate" :text="question.write_date"  />-->
<!--                       </StackLayout>-->
<!--                   </StackLayout>-->
<!--                   <StackLayout class="questionWrap" >-->
<!--                       <label class="question" :text="question.contents" />-->
<!--                   </StackLayout>-->
<!--               </StackLayout>-->
<!--               <StackLayout class="markUnderline">-->
<!--               </StackLayout>-->
<!--           </StackLayout>-->
<!--               </v-template>-->
<!--           </ListView>-->
<!--       </StackLayout>-->

       </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    import '~/Resources/css/menu/settings/etcList/OneToOneQuestion/oneToOneQuestion_320.scss';
    import '~/Resources/css/menu/settings/etcList/OneToOneQuestion/oneToOneQuestion_360.scss';
    import '~/Resources/css/menu/settings/etcList/OneToOneQuestion/oneToOneQuestion_420.scss';
    import '~/Resources/css/menu/settings/etcList/OneToOneQuestion/oneToOneQuestion_480.scss';

    export default {
        name:"OneToOneQuestion",
        components: {
        },data(){
            return {
                questionkList:[
                    {
                        'contents' : '문의중입니다!문의합니다.',
                        'write_date':'2019.01.03',
                        'answer_flag' : 'w'
                    },
                    {
                        'contents' : '문의중입니다!문의합니다222.',
                        'write_date':'2019.01.03',
                        'answer_flag' : 'w'
                    },
                    {
                        'contents' : '문의중입니다!문의합니다3333.',
                        'write_date':'2019.01.03',
                        'answer_flag' : 'c'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>
