<template lang="html">
<Page actionBarHidden="true">
     <StackLayout class="termsWrap">
        <StackLayout class="termsHeaderWrap" orientation="horizontal">
          <StackLayout class="leftWrap" @tap="$navigateBack">
            <image src="~/Resources/img/settings/left.png" class="leftIcon" />
          </StackLayout>
          <StackLayout class="myInfoBackWrap"@tap="$navigateBack">
              <label class="myInfoBack" text="내정보" />
          </StackLayout>
          <StackLayout class="termsTitleWrap">
              <label class="termsTitle" text="약관 및 정책" />
          </StackLayout>
        </StackLayout>
        <StackLayout class="termsListWrap" height="594">
             <ListView for="item in area_category" @itemTap="listPlaceSelect"  class="termsList">
                 <v-template>
                     <StackLayout orientation="horizontal" class="termsListWrap">
                         <StackLayout class="termsListTitleWrap">
                             <Label :text="item.large_category" class="termsListTitle" />
                         </StackLayout>
                         <StackLayout class="termsListIconWrap">
                             <image src="~/Resources/img/settings/right.png" class="termsListTcon" />
                         </StackLayout>
                     </StackLayout>
                 </v-template>
             </ListView>
         </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    import Policy from './TermsAndPolicyDetail/Policy';
    const platformModule = require("tns-core-modules/platform");
    import platformcss from '~/platformcss';

    import '~/Resources/css/menu/settings/etcList/TermsAndPolicy/TermsAndPolicy_320.scss';
    import '~/Resources/css/menu/settings/etcList/TermsAndPolicy/TermsAndPolicy_360.scss';
    import '~/Resources/css/menu/settings/etcList/TermsAndPolicy/TermsAndPolicy_420.scss';
    import '~/Resources/css/menu/settings/etcList/TermsAndPolicy/TermsAndPolicy_480.scss';

    export default {
        name:"TermsAndPolicy",
        components: {
        },data(){
            return {
                area_category: [
                    {
                        "large_category": "서비스 이용약관",
                        "category_id": "1"
                    },
                    {
                        "large_category": "개인정보 처리방침",
                        "category_id": "2"
                    }
                ]
            }
        },methods:{
            listPlaceSelect(args){
                const view = args.view;
                const tappedItem = view.bindingContext;
                console.log(tappedItem.category_id)
                if(tappedItem.category_id == 1){
                    this.$navigateTo(Policy);
                }
             }
        },mounted() {
            console.log("디피아이2" + platformModule.screen.mainScreen.widthDIPs)
            console.log("픽셀2" + platformModule.screen.mainScreen.widthPixels)

            platformcss.sizeGroupings([480,400,360,320]);
        }
    }
</script>

<style lang="scss">


</style>
