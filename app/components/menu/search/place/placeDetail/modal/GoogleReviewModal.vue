<template lang="html">
    <Page padding="0 0 0 0" >
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout>
                <StackLayout class="googleReviewMoreWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }"  >
                    <StackLayout class="googleReviewMoreTopWrap" orientation="horizontal">
                        <StackLayout class="googleReviewMoreRatingWrap" orientation="horizontal">
                            <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="rating > 0"/>
                            <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="rating > 1"/>
                            <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="rating > 2"/>
                            <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="rating > 3"/>
                            <image class="googleReviewMoreRating"  src="~/Resources/img/place/star.png" v-if="rating > 4"/>
                        </StackLayout>
                        <StackLayout class="googleReviewMoreDateWrap">
                            <label class="googleReviewMoreDate" :text="write_date"  />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout class="googleReviewMoreContentsWrap" >
                        <TextView class="googleReviewMoreContents" :text="contents"   editable="false"  returnKeyType="send" textWrap="true" />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>
 export default {
       name:"GoogleReviewModal",
       props:['rating','contents','write_date'],
       data(){
           return {
           }
       },
        components: {
        },mounted() {

     },methods:{
     }
    };

</script>

<style lang="scss">

</style>
