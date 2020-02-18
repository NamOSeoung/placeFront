<template lang="html">
<Page actionBarHidden="true">
     <StackLayout>
        <StackLayout orientation="horizontal" height="64.05" borderBottomWidth="1.05" borderBottomColor="#dddddd">
          <StackLayout width="32.55" height="32.55" marginLeft="7" marginTop="17.5" @tap="$navigateBack">
           <FIcon name="fa-angle-left" color="#555555"  fontSize="32.55"/>
          </StackLayout>
          <StackLayout marginTop="30.5" marginLeft="116.55">
              <label text="서비스 이용약관"  style="font-family: nanumsquareroundeb" fontSize="16.45" color="#333333" />
          </StackLayout>
        </StackLayout>
        <StackLayout>
            <StackLayout orientation="horizontal">
                <StackLayout marginTop="23.45" marginLeft="17.5">
                    <label text="서비스 이용약관" fontSize="16.45" color="#333333"  style="font-family: nanumsquareroundeb"  />
                </StackLayout>
                <StackLayout marginTop="24.5" marginLeft="113.05">
                    <label text="시행일자" color="#333333" fontSize="14" style="font-family: nanumsquareroundr"/>
                </StackLayout>
                <StackLayout width="114.55" marginTop="18.68" marginLeft="24.5" borderWidth="1" borderRadius="3.5" borderColor="#888888">
                    <!--Dropdown List widget-->
                    <DropDown #dd
                              col="1" id="ddlColors"
                              itemsRowHeight="30"
                              :items="listPickerDate" selectedIndex="0" color="#888888" marginLeft="9.45" >
                    </DropDown>
                </StackLayout>
            </StackLayout>
            <StackLayout marginTop="15.05" marginLeft="17.5" color="#333333">
                <StackLayout>
                    <label :text="policy.title" style="font-family: nanumsquareroundeb" fontSize="12.95" />
                    <TextView :text="policy.contents" style="font-family: nanumsquareroundr" backgroundColor="#ffffff" color="#333333" lineHeight="23.45" fontSize="12.95" width="100%"  editable="false"/>
                </StackLayout>
            </StackLayout>
        </StackLayout>
     </StackLayout>
</Page>
</template>
<script>
    import { SelectedIndexChangedEventData } from "nativescript-drop-down";

    export default {
        name:"TermsAndPolicy",
        components: {
        },data(){
            return {
                listPickerDate: ["2020.01.03", "2019.12.12", "2018.12.18"
                ],
                selectedListPickerIndex: 0,
                policy:
                    {
                        "title": "제 1 조 목적 및 정의",
                        "contents": "주식회사 카카오(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다. 회사는 여러분이 회사가 제공하는 다양한 인터넷과 모바일 서비스(카카오 서비스, Daum 서비스, 멜론 서비스 등을 의미하며 이하 해당 서비스들을 모두 합하여 “통합서비스” 또는 “서비스”라 함)에 더 가깝고 편리하게 다가갈 수 있도록 ‘카카오 통합서비스약관’(이하 ‘본 약관’)을 마련하였습니다. 여러분은 본 약관에 동의함으로써 통합서비스에 가입하여 통합서비스를 이용할 수 있습니다. 단, 여러분은 회사가 아닌 계열사를 포함한 제3자가 제공하는 서비스 (예: ㈜카카오모빌리티가 제공하는 카카오 T 택시 서비스)에 가입되지는 않으며, 회사가 제공하는 유료서비스 (예: 멜론 유료서비스)의 경우 여러분이 별도의 유료이용약관에 대한 동의한 때에 회사와 여러분 간의 유료서비스 이용계약이 성립합니다. 본 약관은 여러분이 통합서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.\n" +
                            "\n"
                    }
            }
        },methods :{
            onchange() {
                console.log(`Drop Down selected index changed from `);
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
