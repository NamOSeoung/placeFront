<template lang="html">
<ScrollView height="100%">
    <StackLayout width="100%">
         <StackLayout class="homeHeaderWrap" width="100%">
             <StackLayout orientation="horizontal" class="homeTitleWrap">
                 <label text="잇정" class="homeAppName" />
                 <label text="어떤 맛집을 찾아볼까요?" class="homeTitle" />
             </StackLayout>
             <StackLayout orientation="horizontal" class="homeSearchWrap" @tap="goSearchTab(1)">
                 <image src="~/Resources/img/home/maker.png" class="homeMakerIcon"/>
                 <label :text="data.locationKeyword" class="homeSearchTitle" />
                 <image src="~/Resources/img/home/search.png" class="homeSearchIcon" />
             </StackLayout>
         </StackLayout>
         <StackLayout class="headerLine" width="100%"/>
         <StoreList width="100%"/>
         <StackLayout class="headerLine" width="100%"/>
         <YoutubeList width="100%"/>
         <StackLayout class="headerLine" width="100%"/>
         <NaverList width="100%"/>
         <StackLayout class="headerLine" width="100%"/>
         <TistoryList width="100%"/>
         <StackLayout class="headerLine"/>
    </StackLayout>
</ScrollView>
</template>

<script>
    import StoreList from './homeComponents/StoreList';
    import YoutubeList from './homeComponents/YoutubeList';
    import NaverList from './homeComponents/NaverList';
    import TistoryList from './homeComponents/TistoryList'
    // const geoLocation = require("nativescript-geolocation");
    import MenuWrap from '../MenuWrap'
    import Login from "../../member/Login";
    var data = {locationKeyword : '서울 맛집'}
    import axios from 'axios';

    var cache = require("nativescript-cache");

    import '~/Resources/css/menu/home/homeWrap/homeWrap_320.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_360.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_420.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_480.scss';
    import Naver from "../settings/userInfo/blackList/platForm/naver/Naver";

    export default {
        name:"HomeWrap",
        data(){
            return {
                data,
                address:''
            }
        },
        components: {
            Login,
            StoreList,YoutubeList,NaverList,TistoryList
        },methods:{
            goSearchTab(tab){
                console.log('123123123')
                MenuWrap.methods.tabChange(tab)
            },
        },mounted(){

        },created() {

        }
    };
</script>

<style lang="scss">


</style>
