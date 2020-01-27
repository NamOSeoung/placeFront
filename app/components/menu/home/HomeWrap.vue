<template lang="html">
<ScrollView>
    <StackLayout backgroundColor="#eff2f7">
         <StackLayout backgroundColor="#ffe074" height="110dp" width="100%">
             <StackLayout orientation="horizontal" marginLeft="35dp" marginTop="23dp">
                 <label text="잇정" width="37" height="22" fontSize="20" style="font-family: nanumsquareroundeb"/>
                 <label text="어떤 맛집을 찾아볼까요?" width="142" height="16" fontSize="14" marginLeft="13" style="font-family: nanumsquareroundeb"/>
             </StackLayout>
             <StackLayout orientation="horizontal" marginLeft="35dp" marginRight="35dp" backgroundColor="#ffffff" height="34" marginTop="15dp" borderRadius="8dp">
                 <FIcon name="fa-map-marker-alt" width="22" height="22" size="22"  color="#333333" marginLeft="13dp" marginTop="6" marginBottom="6"/>
<!--                 <label :text="this.address" marginLeft="10dp" height="51dp" fontSize="13sp"/>-->
                 <label text="서울 맛집" marginLeft="10dp"  width="215" fontSize="13" marginTop="10" marginBottom="10" style="font-family: nanumsquareroundeb"/>
                 <FIcon name="fa-search" width="20" height="20" size="20" color="#333333" marginRight="15" marginTop="7" marginBottom="7" @tap="goSearchTab(1)" />
             </StackLayout>
         </StackLayout>
         <StoreList />
         <YoutubeList/>
        <NaverList />
        <TistoryList />
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
    var data = {area : '서울 맛집'}
    import axios from 'axios';

    var cache = require("nativescript-cache");

    export default {
        name:"HomeWrap",
        data(){
            return {
                data,
                currentGeoLocation: {
                    latitude: null,
                    longitude: null,
                    altitude: null,
                    direction: null
                },
                address:''
            }
        },
        components: {
            Login,
            StoreList,YoutubeList,NaverList,TistoryList
        },methods:{
            goSearchTab(tab){
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
                            console.log(response.data.documents[0].address.address_name)
                            this.address = response.data.documents[0].address.address_name
                            //console.log(response.data.medium_category)

                            //this.$data.categorys = response.data;
                            //this.$data.large_category = response.data.large_category;
                            //this.$data.medium_category = response.data.medium_category;
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
        }
    };
</script>

<style lang="scss">
    StackLayout{
        color:black;
    }
</style>
