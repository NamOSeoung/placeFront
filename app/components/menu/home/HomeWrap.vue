<template lang="html">
<ScrollView height="100%">
    <StackLayout>
         <StackLayout class="homeHeaderWrap">
             <StackLayout orientation="horizontal" class="homeTitleWrap">
                 <label text="잇정" class="homeAppName" />
                 <label text="어떤 맛집을 찾아볼까요?" class="homeTitle"/>
             </StackLayout>
             <StackLayout orientation="horizontal" class="homeSearchWrap">
                 <image src="~/Resources/img/home/maker.png" class="homeMakerIcon"/>
                 <label :text="data.locationKeyword" class="homeSearchTitle"/>
                 <image src="~/Resources/img/home/search.png" class="homeSearchIcon" />
             </StackLayout>
         </StackLayout>
         <StackLayout class="headerLine"/>
         <StoreList />
         <StackLayout class="headerLine"/>
         <YoutubeList/>
         <StackLayout class="headerLine"/>
         <NaverList />
         <StackLayout class="headerLine"/>
         <TistoryList />
         <StackLayout class="headerLine"/>
<!--        <StackLayout>-->
<!--            <Button text="Show location" @tap="enableLocationServices"-->
<!--                    :visibility="currentGeoLocation.latitude ? 'collapsed' : 'visible'" />-->
<!--            <StackLayout-->
<!--                    :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">-->
<!--                <Label :text="'Latitude: ' + currentGeoLocation.latitude" />-->
<!--                <Label :text="'Longitude: ' + currentGeoLocation.longitude" />-->
<!--                <Label :text="'Altitude: ' + currentGeoLocation.altitude" />-->
<!--                <Label :text="'Direction: ' + currentGeoLocation.direction" />-->

<!--            </StackLayout>-->
<!--        </StackLayout>-->
    </StackLayout>
</ScrollView>
</template>

<script>
    import StoreList from './homeComponents/StoreList';
    import YoutubeList from './homeComponents/YoutubeList';
    import NaverList from './homeComponents/NaverList';
    import TistoryList from './homeComponents/TistoryList'
    const geoLocation = require("nativescript-geolocation");
    import MenuWrap from '../MenuWrap'
    import Login from "../../member/Login";
    var data = {locationKeyword : '서울 맛집'}
    import axios from 'axios';

    var cache = require("nativescript-cache");

    import '~/Resources/css/menu/home/homeWrap/homeWrap_320.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_360.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_420.scss';
    import '~/Resources/css/menu/home/homeWrap/homeWrap_480.scss';

    export default {
        name:"HomeWrap",
        data(){
            return {
                data,
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null,
                    locationKeyword:'서울 맛집'
                },
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
            enableLocationServices: function() {
                geoLocation.isEnabled().then(enabled => {
                    if (!enabled) {
                        geoLocation
                            .enableLocationRequest()
                            .then(() => this.showLocation());

                    } else {
                        this.showLocation();
                    }
                });
            },
            showLocation: function() {
                geoLocation.watchLocation(
                    location => {
                        this.currentGeoLocation = location;
                        cache.set("keyword","키워드다!");
                        console.log(cache.get("keyword"))
                        console.log(cache.get())
                        axios({
                            method: 'get',
                            url: 'https://dapi.kakao.com/v2/local/geo/coord2address.json',
                            params: {
                                x:this.currentGeoLocation.longitude,
                                y:this.currentGeoLocation.latitude
                            },
                            headers: { 'Authorization': 'KakaoAK b4bd7e75365a705323622c57d0b7e406' }
                        }).then((response) => {
                            console.log('호출함??')
                            //console.log(response.data.documents[0].address.address_name)
                            console.log(response.data)
                            console.log(response)
                            this.$data.address = response.data.documents[0].address.address_name
                            data.locationKeyword = response.data.documents[0].address.address_name
                            console.log(response.data.documents[0].address.address_name)
                            var current_location_arr =  data.locationKeyword.split(" ");
                            var current_location="";
                            for(var i = 0; i < current_location_arr.length; i++){
                                if(i < 3){
                                    if(i > 0 ){
                                        current_location += " " + current_location_arr[i];
                                    }else {
                                        current_location += current_location_arr[i];
                                    }
                                }
                            }
                            data.locationKeyword = current_location;
                        }, (error) => {
                            console.log(error);
                        });
                    },
                    error => {
                        alert(error);
                    }, {
                        desiredAccuracy: 3,
                        updateDistance: 10,
                        minimumUpdateTime: 1000 * 1
                    }
                );
            }
        },mounted(){
            //this.enableLocationServices()
        }
    };
</script>

<style lang="scss">



</style>
