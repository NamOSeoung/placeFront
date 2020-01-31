<template lang="html">
<Page actionBarHidden="true">
    <StackLayout class="faqWrap">
        <StackLayout class="faqHeaderWrap" orientation="horizontal">
            <StackLayout class="leftWrap" @tap="$navigateBack">
                <image src="~/Resources/img/settings/left.png" class="leftIcon" />
            </StackLayout>
            <StackLayout class="myInfoBackWrap"@tap="$navigateBack">
                <label class="myInfoBack" text="내정보" />
            </StackLayout>
            <StackLayout class="faqTitleWrap">
                <label class="faqTitle" text="자주하는 질문" />
            </StackLayout>
        </StackLayout>
        <Accordion row="1" for="item of faq_list">
            <v-template name="title">
                <StackLayout orientation="horizontal" >
                    <StackLayout class="faqHeaderTitleWrap">
                        <Label :text="item.faq_header" class="faqHeaderTitle" />
                    </StackLayout>
                    <StackLayout class="faqDownIconWrap">
                        <image src="~/Resources/img/settings/down.png" class="faqDownIcon" />
                    </StackLayout>
                </StackLayout>
            </v-template>
            <v-template name="content">
                <GridLayout rows="auto,auto" class="faqDetailWrap">
                    <TextView :text="item.faq_detail" class="faqDetail"/>
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


    export default {
        name:"FAQ",
        components: {
        },data(){
            return {
                faq_list: [
                    {
                        "faq_header": "Q 질문입니다 질문입니다 질문입니다 질문입니다.",
                        "items": [
                            { "faq_detail": "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다."}
                        ]
                    },
                    {
                        "faq_header": "Q 질문입니다 질문입니다 질문입니다 질문입니다.",
                        "items": [
                            { "faq_detail": "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다."}
                        ]
                    },
                    {
                        "faq_header": "Q 질문입니다 질문입니다 질문입니다 질문입니다.",
                        "items": [
                            { "faq_detail": "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다." +
                                    "답변내용입니다.답변내용입니다.답변내용입니다.답변내용입니다."}
                        ]
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">


</style>
