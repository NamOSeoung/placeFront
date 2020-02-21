<template lang="html">
<Page actionBarHidden="true">
    <StackLayout>
        <StackLayout class="findUserIdBarWrap" orientation="horizontal" height="65"  >
            <StackLayout class="findUserIdBackIconWrap" @tap="$navigateBack">
                <image src="~/Resources/img/home/angle-left.png" class="findUserIdBackIcon" />
            </StackLayout>
            <StackLayout class="findUserIdBackWrap" @tap="$navigateBack">
                <label class="findUserIdBack" text="내정보"  />
            </StackLayout>
            <StackLayout class="findUserIdBarTitleWrap"  width="80">
                <label class="findUserIdBarTitle" text="자주하는 질문"  width="80" />
            </StackLayout>
        </StackLayout>
        <Accordion row="1" for="faq of faq_list" height="100%">
            <v-template name="title">
                <StackLayout orientation="horizontal"  backgroundColor="white" width="100%" borderBottomWidth="1" borderBottomColor="#dddddd">
                    <StackLayout paddingTop="26.95" paddingBottom="25.275" width="310">
                        <Label :text="'Q. ' + faq.subject" fontSize="12" marginLeft="17.5" color="#333333"  style="font-family: nanumsquareroundb" textWrap="true" />
                    </StackLayout>
                    <StackLayout marginTop="25">
                        <image src="~/Resources/img/settings/down.png" width="18" height="18" />
                    </StackLayout>
                </StackLayout>
            </v-template>
            <v-template name="content">
                <GridLayout rows="auto,auto" backgroundColor="#eff2f7" padding="15 15 15 15">
                    <TextView :text="faq.contents" backgroundColor="#eff2f7" color="#333333" lineHeight="15" fontSize="11" width="100%"  editable="false" style="border-bottom-width: 0;"/>
                </GridLayout>
            </v-template>
        </Accordion>
    </StackLayout>
</Page>
</template>
<script>

    import '~/Resources/css/menu/settings/etcList/FAQ/faq_320.scss';
    import '~/Resources/css/menu/settings/etcList/FAQ/faq_360.scss';
    import '~/Resources/css/menu/settings/etcList/FAQ/faq_420.scss';
    import '~/Resources/css/menu/settings/etcList/FAQ/faq_480.scss';

    import axios from 'axios'
    export default {
        name:"FAQ",
        components: {
        },data(){
            return {
                faq_list: []
            }
        },methods:{
            getFaq(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/users/faqs',
                    params: {
                    },
                }).then((response) => {
                    this.$data.faq_list = response.data.dataList;
                    console.log(response.data.dataList[0].subject)
                }, (error) => {
                    console.log(error);
                });
            }
        },mounted(){
          this.getFaq();
        }
    };
</script>

<style lang="scss">


</style>
