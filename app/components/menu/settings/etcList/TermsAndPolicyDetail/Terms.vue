<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd">
          <StackLayout width="32.55" height="32.55" marginLeft="7" marginTop="17.5" @tap="$navigateBack">
           <FIcon name="fa-angle-left" color="#555555"  fontSize="32.55"/>
          </StackLayout>
          <StackLayout marginTop="24.5" marginLeft="95.55">
              <label text="서비스 이용약관"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
          </StackLayout>
        </StackLayout>
     </StackLayout>
</Page>
</template>
<script>

    export default {
        name:"Terms",
        components: {
        },data(){
            return {
                area_category: [
                    {
                        "large_category": "서비스 이용약관",
                        "items": [
                            { "medium_category": "제 1 조 목적 및 정의\n" +
                                    "주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 회사가 제공하는 다양한 인터넷과 모바일 서비스(카카오 서비스, Daum 서비스, 멜론 서비스 등을 의미하며 이하 해당 서비스들을 모두 합하여 “통합서비스” 또는 “서비스”라 함)에 더 가깝고 편리하게 다가갈 수 있도록 ‘카카오 통합서비스약관’(이하 ‘본 약관’)을 마련하였습니다. 여러분은 본 약관에 동의함으로써 통합서비스에 가입하여 통합서비스를 이용할 수 있습니다. 단, 여러분은 회사가 아닌 계열사를 포함한 제3자가 제공하는 서비스 (예: ㈜카카오모빌리티가 제공하는 카카오 T 택시 서비스)에 가입되지는 않으며, 회사가 제공하는 유료서비스 (예: 멜론 유료서비스)의 경우 여러분이 별도의 유료이용약관에 대한 동의한 때에 회사와 여러분 간의 유료서비스 이용계약이 성립합니다. 본 약관은 여러분이 통합서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.\n" +
                                    "\n" +
                                    "제 2 조 약관의 효력 및 변경\n" +
                                    "① 본 약관의 내용은 통합서비스의 화면에 게시하거나 기타의 방법으로 공지하고, 본 약관에 동의한 여러분 모두에게 그 효력이 발생합니다.\n" +
                                    "② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다. 본 약관이 변경되는 경우 회사는 변경사항을 시행일자 15일 전부터 여러분에게 서비스 공지사항에서 공지 또는 통지하는 것을 원칙으로 하며, 피치 못하게 여러분에게 불리한 내용으로 변경할 경우에는 그 시행일자 30일 전부터 카카오계정에 등록된 이메일 주소로 이메일(이메일주소가 없는 경우 서비스 내 전자쪽지 발송, 서비스 내 알림 메시지를 띄우는 등의 별도의 전자적 수단) 발송 또는 여러분이 등록한 휴대폰번호로 카"}
                        ]
                    },
                    {
                        "large_category": "개인정보 처리방침",
                        "items": [
                            { "medium_category": "공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시" +
                                    "공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시" +
                                    "공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시" +
                                    "공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시공지내용표시 공지내용 표시"}
                        ]
                    }
                ]
            }
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
