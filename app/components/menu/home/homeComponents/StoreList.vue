<template lang="html">
 <StackLayout backgroundColor="#ffffff" marginTop="10dp">
   <StackLayout orientation="horizontal">
       <FIcon name="fa-concierge-bell" color="#A4A4A4"  width="16" heigit="16" size="16" marginTop="12" marginLeft="16" />
       <label text="매장정보" width="48" height="14" style="font-family: nanumsquareroundeb" fontSize="13" marginTop="13" marginLeft="6"/>
       <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="214dp"/>
       <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
   </StackLayout>
     <ScrollView orientation="horizontal" marginTop="19">
     <StackLayout orientation="horizontal">
         <StackLayout orientation="horizontal" paddingBottom="14">
             <StackLayout width="228" orientation="horizontal" marginLeft="15" >
                 <StackLayout width="70" height="70">
                     <image width="100%" height="100%" borderRadius="8" stretch="aspectFill" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CFD3405D09CF9C2B"/>
                 </StackLayout>
                 <StackLayout paddingLeft="11">
                     <StackLayout orientation="horizontal" style="text-align:center">
                         <label text="영업중" backgroundColor="#ffe074" borderRadius="8" paddingTop="3" width="50" height="18" fontSize="10" style="font-family: nanumsquareroundeb" />
                         <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="10" />
                         <label text="4.3" paddingTop="3" fontSize="12" color="#333333" marginLeft="1" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                     <StackLayout orientation="horizontal" marginTop="10">
                         <label text="매장이름 한 줄까지 표시" fontSize="14" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                     <StackLayout marginTop="9">
                         <label text="곰탕전문점" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                 </StackLayout>
             </StackLayout>
             <StackLayout width="228" orientation="horizontal" marginLeft="15" >
                 <StackLayout width="70" height="70">
                     <image width="100%" height="100%" borderRadius="8" stretch="aspectFill" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CFD3405D09CF9C2B"/>
                 </StackLayout>
                 <StackLayout paddingLeft="11">
                     <StackLayout orientation="horizontal" style="text-align:center">
                         <label text="영업중" backgroundColor="#ffe074" borderRadius="8" width="50" fontSize="10" style="font-family: nanumsquareroundeb" />
                         <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="10" />
                         <label text="4.3" fontSize="12" color="#333333" marginLeft="1" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                     <StackLayout orientation="horizontal" marginTop="10">
                         <label text="매장이름 한 줄까지 표시" fontSize="14" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                     <StackLayout marginTop="9">
                         <label text="곰탕전문점" fontSize="12" color="#555555" style="font-family: nanumsquareroundeb"/>
                     </StackLayout>
                 </StackLayout>
             </StackLayout>
         </StackLayout>
     </StackLayout>
     </ScrollView>
 </StackLayout>
</template>

<script>

    export default {
        name:"StoreList",
        components: {
        }
    };
</script>

<style lang="scss">
</style>
