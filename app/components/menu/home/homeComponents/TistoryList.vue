<template lang="html">
    <StackLayout class="tistoryWrap">
        <StackLayout orientation="horizontal" class="tistoryHeaderWrap">
            <image src="~/Resources/img/home/tistory.png" class="tistoryIcon"/>
            <label text="티스토리" class="tistoryTitle"/>
            <label text="더보기" class="tistoryMore"/>
            <image src="~/Resources/img/home/angle-right.png" class="tistoryRightIcon" />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal"  class="tistorySubWrap">
                <StackLayout orientation="horizontal" class="tistoryMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                    <StackLayout class="tistoryImageWrap">
                        <Image class="tistoryImage" stretch="aspectFill" src="http://blogthumb2.naver.net/MjAxOTA4MDRfMTAy/MDAxNTY0ODY2MjQ5NjA0.THyQ3wCY4Bdq2A3hiODe0urYPYIfIiBX9A2azN__oWEg.sSUV2E7-g6QvJqYl7ylRS2yUwP3jE0kTn2QP-ywzwBwg.JPEG.appie14/%B0%AD%B3%B2%BF%AA_3%B9%F8%C3%E2%B1%B8_%B8%C0%C1%FD_%C1%B7%B9%DF09.jpg?type=w2"/>
                    </StackLayout>
                    <StackLayout class="tistoryRightWrap">
                        <StackLayout class="tistoryRightTop">
                            <label class="tistorySubject" text="[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점"  textWrap="true" row="2" />
                        </StackLayout>
                        <StackLayout class="tistoryRightBottom" orientation="horizontal">
                            <label class="tistoryWriteDate" text="2020.01.02"/>
                            <label class="tistoryWriter" text="방돌이"/>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" class="tistoryMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                    <StackLayout class="tistoryImageWrap">
                        <Image class="tistoryImage" stretch="aspectFill" src="http://blogthumb2.naver.net/MjAxOTA4MDRfMTAy/MDAxNTY0ODY2MjQ5NjA0.THyQ3wCY4Bdq2A3hiODe0urYPYIfIiBX9A2azN__oWEg.sSUV2E7-g6QvJqYl7ylRS2yUwP3jE0kTn2QP-ywzwBwg.JPEG.appie14/%B0%AD%B3%B2%BF%AA_3%B9%F8%C3%E2%B1%B8_%B8%C0%C1%FD_%C1%B7%B9%DF09.jpg?type=w2"/>
                    </StackLayout>
                    <StackLayout class="tistoryRightWrap">
                        <StackLayout class="tistoryRightTop">
                            <label class="tistorySubject" text="[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점"  textWrap="true" row="2" />
                        </StackLayout>
                        <StackLayout class="tistoryRightBottom" orientation="horizontal">
                            <label class="tistoryWriteDate" text="2020.01.02"/>
                            <label class="tistoryWriter" text="방돌이"/>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_480.scss';

    export default {
        name:"Tistory",
        components: {
        }
    };
</script>

<style lang="scss">

</style>

