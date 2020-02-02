<template lang="html">
 <StackLayout class="storeWrap">
   <StackLayout orientation="horizontal" class="storeHeaderWrap">
       <image src="~/Resources/img/home/cook.png" class="storeCookIcon"/>
       <label text="매장정보" class="storeTitle"/>
       <label text="더보기" class="storeMore"/>
       <image src="~/Resources/img/home/angle-right.png" class="storeRightIcon" />
   </StackLayout>
     <ScrollView orientation="horizontal">
             <StackLayout orientation="horizontal" class="storeDetailSubWrap">
                 <StackLayout orientation="horizontal" class="storeDetailWrap">
                     <StackLayout class="storeLeftWrap">
                         <image class="storeImage" stretch="aspectFill" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CFD3405D09CF9C2B"/>
                     </StackLayout>
                     <StackLayout class="storeRightWrap">
                         <StackLayout orientation="horizontal" class="storeTopWrap">
                             <StackLayout class="storeTimeWrap">
                                 <label text="영업중" class="storeTime" />
                             </StackLayout>
                             <StackLayout class="storeStarIconWrap">
                                 <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
                             </StackLayout>
                             <StackLayout class="storeRatingWrap">
                                 <label text="4.3" class="storeRating"/>
                             </StackLayout>
                         </StackLayout>
                         <StackLayout class="storeMiddleWrap">
                             <label text="매장이름 한 줄까지 표시" class="storeName" />
                         </StackLayout>
                         <StackLayout class="storeBottomWrap">
                             <label text="곰탕전문점" class="storeCategory"/>
                         </StackLayout>
                     </StackLayout>
                 </StackLayout>
                 <StackLayout orientation="horizontal" class="storeDetailWrap">
                     <StackLayout class="storeLeftWrap">
                         <image class="storeImage" stretch="aspectFill" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CFD3405D09CF9C2B"/>
                     </StackLayout>
                     <StackLayout class="storeRightWrap">
                         <StackLayout orientation="horizontal" class="storeTopWrap">
                             <StackLayout class="storeTimeWrap">
                                 <label text="영업중" class="storeTime" />
                             </StackLayout>
                             <StackLayout class="storeStarIconWrap">
                                 <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
                             </StackLayout>
                             <StackLayout class="storeRatingWrap">
                                 <label text="4.3" class="storeRating"/>
                             </StackLayout>
                         </StackLayout>
                         <StackLayout class="storeMiddleWrap">
                             <label text="매장이름 한 줄까지 표시" class="storeName" />
                         </StackLayout>
                         <StackLayout class="storeBottomWrap">
                             <label text="곰탕전문점" class="storeCategory"/>
                         </StackLayout>
                     </StackLayout>
                 </StackLayout>
             </StackLayout>
     </ScrollView>
 </StackLayout>
</template>

<script>

    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/StoreList/storeList_480.scss';

    export default {
        name:"StoreList",
        components: {
        }
    };
</script>

<style lang="scss">

</style>
