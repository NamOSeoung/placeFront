<template>
       <Page actionBarHidden="true" backgroundSpanUnderStatusBar="true">
              <StackLayout>
                     <StackLayout class="serviceTermsHeaderWrap" orientation="horizontal">
                            <StackLayout class="serviceTermsHeaderWrapWrap">
                                   <label class="serviceTermsHeader" text="서비스 이용약관" />
                            </StackLayout>
                            <StackLayout class="serviceTermsHeaderIconWrap" @tap="$navigateBack">
                                   <image class="serviceTermsHeaderIcon" src="~/Resources/img/login/close.png" />
                            </StackLayout>
                     </StackLayout>
                     <StackLayout class="serviceTermsTitleWrap">
                            <label class="serviceTermsTitle" text="서비스 이용약관"  />
                     </StackLayout>
                     <StackLayout>
                            <StackLayout class="serviceTermsListWrap" >
                                   <label class="serviceTermsList" text="제 1 조 목적 및 정의" />
                            </StackLayout>
                            <StackLayout class="serviceTermsContentsWrap">
                                   <Textview class="serviceTermsContents" editable="false"
                                             textWrap="true" text="주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 회사가 제공하는 다양한 인터넷과 모바일 서비스(카카오 서비스, Daum 서비스, 멜론 서비스 등을 의미하며 이하 해당 서비스들을 모두 합하여 “통합서비스” 또는 “서비스”라 함)에 더 가깝고 편리하게 다가갈 수 있도록 ‘카카오 통합서비스약관’(이하 ‘본 약관’)을 마련하였습니다. 여러분은 본 약관에 동의함으로써 통합서비스에 가입하여 통합서비스를 이용할 수 있습니다. 단, 여러분은 회사가 아닌 계열사를 포함한 제3자가 제공하는 서비스 (예: ㈜카카오모빌리티가 제공하는 카카오 T 택시 서비스)에 가입되지는 않으며, 회사가 제공하는 유료서비스 (예: 멜론 유료서비스)의 경우 여러분이 별도의 유료이용약관에 대한 동의한 때에 회사와 여러분 간의 유료서비스 이용계약이 성립합니다. 본 약관은 여러분이 통합서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다." />
                            </StackLayout>
                     </StackLayout>
              </StackLayout>
       </Page>
</template>

<script>
       import '~/Resources/css/member/serviceTerms/ServiceTerms/serviceTerms_320.scss';
       import '~/Resources/css/member/serviceTerms/ServiceTerms/serviceTerms_360.scss';
       import '~/Resources/css/member/serviceTerms/ServiceTerms/serviceTerms_420.scss';
       import '~/Resources/css/member/serviceTerms/ServiceTerms/serviceTerms_480.scss';

       export default {
              name:'ServiceTerms',
              components : {
              },
              data: () => {
                     return {

                     }
              },
              mounted() {

              }
       };
</script>

<style scoped lang="scss">


</style>
