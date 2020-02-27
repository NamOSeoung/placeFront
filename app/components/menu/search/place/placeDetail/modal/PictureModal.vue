<template lang="html">
    <Page padding="0 0 0 0" >
        <ModalStack dismissEnabled="true" verticalPosition="middle" padding="0 0 0 0">
            <StackLayout width="100%" borderRadius="8" height="100%">
                <image :src="image" width="100%" height="100%"/>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>
 export default {
       name:"PictureModal",
       props:['image'],
       data(){
           return {
           }
       },
        components: {
        },mounted() {

     },methods:{
     }
    };

</script>

<style lang="scss">

</style>
