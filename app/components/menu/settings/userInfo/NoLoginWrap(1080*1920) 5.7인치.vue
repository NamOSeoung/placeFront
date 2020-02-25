<template lang="html">
    <StackLayout backgroundColor="#eff2f7" height="100%">
        <StackLayout height="133.2" backgroundColor="#ffe074" width="480" style="text-align: center">
            <label text="오늘은 어떤 식사를 하나요?" height="21.2" marginTop="30.45" fontSize="16.45" style="font-family: nanumsquareroundeb" color="#b99000" />
        </StackLayout>
        <StackLayout width="326.55" height="163.45" marginLeft="53.2" marginRight="53.2" borderRadius="12" marginTop="-46.55" backgroundColor="white">
            <StackLayout  style="text-align: center">
                <label text="로그인을 해 주세요." fontSize="16.45" color="#555555"  marginTop="37.45" />
            </StackLayout>
            <StackLayout marginTop="25.55">
                <StackLayout width="269.5" height="53.2" backgroundColor="#ffe074" borderRadius="7" style="text-align: center" >
                    <label text="로그인하기" fontSize="16.45" color="#555555"  marginBottom="16" marginTop="16" height="21.2" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <StackLayout marginTop="35" width="480">
            <StackLayout  marginLeft="75.95" marginRight="292.95" width="51.45">
                <label text="공지사항" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb"/>
            </StackLayout>
            <StackLayout  marginLeft="75.95" marginRight="263.55" width="80.5" marginTop="38.5">
                <label text="자주하는 질문" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb"/>
            </StackLayout>
            <StackLayout  marginLeft="75.95" marginRight="273" width="72.065" marginTop="38.5">
                <label text="약관 및 정책" color="#555555" fontSize="14" style="font-family: nanumsquareroundeb"/>
            </StackLayout>
            <StackLayout  marginLeft="75.95" marginRight="302.05" width="42" marginTop="38.5">
                <label text="앱 정보" color="#555555" fontSize="14"  style="font-family: nanumsquareroundeb"/>
            </StackLayout>
        </StackLayout>
    </StackLayout>
</template>
<script>

    export default {
        name:"NoLoginWrap",
        components: {
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
