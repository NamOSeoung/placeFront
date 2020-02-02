<template lang="html">
    <StackLayout class="naverWrap">
        <StackLayout orientation="horizontal" class="naverHeaderWrap">
            <image src="~/Resources/img/home/naver.png" class="naverIcon"/>
            <label text="네이버" class="naverTitle"/>
            <label text="더보기" class="naverMore"/>
            <image src="~/Resources/img/home/angle-right.png" class="naverRightIcon" />
        </StackLayout>
         <ScrollView orientation="horizontal">
             <StackLayout orientation="horizontal"  class="naverSubWrap">
                 <StackLayout orientation="horizontal" class="naverMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                     <StackLayout class="naverImageWrap">
                         <Image class="naverImage" stretch="aspectFill" src="http://blogthumb2.naver.net/MjAxOTA3MDJfMjA2/MDAxNTYyMDM4NTM2MzE4.YwZYrVRtVAVtSchJ_KKtZ1MYywSeAJ75eKrRif_Fqo4g.uMoLQevbpJT5MVuK-yVAoepkloNtK_ZoE9pz34k-MScg.JPEG.hyunah5994/20190622_132057.jpg?type=w2"/>
                     </StackLayout>
                     <StackLayout class="naverRightWrap">
                         <StackLayout class="naverRightTop">
                            <label class="naverSubject" text="[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점"  />
                            <Label class="naverContents" text="#홍대방탈출#홍대방탈출카페 #기해왜란 ​내 인생 두 번째 방탈출!!!!!!!!진짜 컨디션 너무 안좋았지만, 나..." />
                         </StackLayout>
                         <StackLayout class="naverRightBottom" orientation="horizontal">
                            <label class="naverWriteDate" text="2020.01.02"/>
                            <label class="naverWriter" text="방돌이"/>
                         </StackLayout>
                     </StackLayout>
                 </StackLayout>
                 <StackLayout orientation="horizontal" class="naverMainWrap" v-shadow="{ elevation: 3,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                     <StackLayout class="naverImageWrap">
                         <Image class="naverImage" stretch="aspectFill" src="http://blogthumb2.naver.net/MjAxOTA3MDJfMjA2/MDAxNTYyMDM4NTM2MzE4.YwZYrVRtVAVtSchJ_KKtZ1MYywSeAJ75eKrRif_Fqo4g.uMoLQevbpJT5MVuK-yVAoepkloNtK_ZoE9pz34k-MScg.JPEG.hyunah5994/20190622_132057.jpg?type=w2"/>
                     </StackLayout>
                     <StackLayout class="naverRightWrap">
                         <StackLayout class="naverRightTop">
                             <label class="naverSubject" text="[홍대방탈출/홍대방탈출카페] 브레이크아웃 이스케이프 홍대점"  />
                             <Label class="naverContents" text="#홍대방탈출#홍대방탈출카페 #기해왜란 ​내 인생 두 번째 방탈출!!!!!!!!진짜 컨디션 너무 안좋았지만, 나..." />
                         </StackLayout>
                         <StackLayout class="naverRightBottom" orientation="horizontal">
                             <label class="naverWriteDate" text="2020.01.02"/>
                             <label class="naverWriter" text="방돌이"/>
                         </StackLayout>
                     </StackLayout>
                 </StackLayout>

             </StackLayout>
         </ScrollView>
     </StackLayout>
</template>

<script>
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/NaverList/naverList_480.scss';

    export default {
        name:"NaverList",
        components: {
        }
    };
</script>

<style lang="scss">



</style>
