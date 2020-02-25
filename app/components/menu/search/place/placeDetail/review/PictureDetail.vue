<template>
    <Page actionBarHidden="true"  backgroundColor="#5d5d5d">
        <StackLayout width="360">
            <StackLayout width="360" height="50" orientation="horizontal" @tap="$navigateBack">
                <image width="30" height="30" marginLeft="330" marginTop="25" src="~/Resources/img/login/close.png" />
            </StackLayout>
            <StackLayout width="360" height="300" marginTop="150">
                <image :src="imageAssets" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    var cache = require("nativescript-cache");

    export default {
        name:"PictureDetail",
        data() {
            return {
                imageAssets:''
            };
        },methods :{

        },mounted(){
            this.$data.imageAssets = cache.get('image');
        }
    };
</script>

<style>
</style>
