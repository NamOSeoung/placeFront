<template lang="html">
     <StackLayout width="100%" height="100%" backgroundColor="#ffffff">
         <StackLayout orientation="horizontal" paddingLeft="17.5"  height="50.05">
             <StackLayout borderBottomWidth="4.68" borderBottomColor="#ffe074" width="38.5" marginTop="17.5" style="text-align: center">
                 <label text="게시자" fontSize="14" color="#333333"  style="font-family: nanumsquareroundeb" />
             </StackLayout>
             <StackLayout borderBottomWidth="4.68" borderBottomColor="#ffe074" width="38.5" marginTop="17.5" marginLeft="38.5" style="text-align: center">
                 <label text="게시글" fontSize="14" color="#333333"  style="font-family: nanumsquareroundeb"  />
             </StackLayout>
             <StackLayout backgroundColor="#333333" marginLeft="68.95" width="58.45" height="21" borderRadius="4.55"  style="text-align: center">
                 <label text="유튜브"  color="#ffffff" fontSize="11.55" style="font-family: nanumsquareroundeb" marginTop="3.5" marginBottom="3.5" />
             </StackLayout>
             <StackLayout marginLeft="12.95" backgroundColor="#dddddd" width="58.45" height="21" borderRadius="4.55"  style="text-align: center">
                 <label text="네이버" color="#ffffff" fontSize="11.55" style="font-family: nanumsquareroundeb" marginTop="3.5" marginBottom="3.5" />
             </StackLayout>
             <StackLayout marginLeft="12.95" backgroundColor="#dddddd" width="58.45" height="21" borderRadius="4.55"  style="text-align: center">
                 <label text="티스토리" color="#ffffff" fontSize="11.55" style="font-family: nanumsquareroundeb" marginTop="3.5" marginBottom="3.5"/>
             </StackLayout>
         </StackLayout>
         <NoneWriterMessage />
     </StackLayout>
</template>
<script>

    import NoneWriterMessage from '../../message/NoneWriterMessage'
    export default {
        name:"Youtube",
        components: {
            NoneWriterMessage
        },data(){
            return {
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
