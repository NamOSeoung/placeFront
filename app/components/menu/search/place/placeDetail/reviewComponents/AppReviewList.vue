<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <StackLayout borderRadius="50" backgroundColor="#ffe074" width="16" height="16" marginLeft="15" marginTop="15">
                <FIcon name="fa-concierge-bell" color="white"  width="10" heigit="10" size="10" paddingTop="3"  />
            </StackLayout>
            <label text="잇정리뷰" width="48" height="14" fontSize="13" marginTop="15"  style="font-family: nanumsquareroundeb" marginLeft="6" />
            <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="214dp"/>
            <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal" marginBottom="10">
                <StackLayout orientation="horizontal" backgroundColor="#ffffff" v-for="a_reviews in appReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" width="260" marginTop="16" marginLeft="15" borderColor="#eeeeee" marginBottom="15">
                    <StackLayout width="70" height="70" marginLeft="9" marginTop="10" marginBottom="10" >
                        <Image width="100%" height="100%" borderRadius="8" stretch="aspectFill" src="https://blogimgs.pstatic.net/nblog/mylog/post/og_default_image_160610.png"/>
                    </StackLayout>
                    <StackLayout>
                        <StackLayout orientation="horizontal">
                            <StackLayout orientation="horizontal" width="100">
                                <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="10" marginTop="11" v-if="a_reviews.rating_point > 0"/>
                                <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="1" marginTop="11" v-if="a_reviews.rating_point > 1"/>
                                <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="1" marginTop="11" v-if="a_reviews.rating_point > 2"/>
                                <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="1" marginTop="11" v-if="a_reviews.rating_point > 3"/>
                                <FIcon name="fa-star" color="#ffe074"  fontSize="18" marginLeft="1" marginTop="11" v-if="a_reviews.rating_point > 4"/>
                            </StackLayout>
                            <StackLayout>
                                <label text="2020.01.12" marginTop="11" color="#888888" style="font-family: nanumsquareroundeb"  fontSize="12" />
                            </StackLayout>
                        </StackLayout>
                        <StackLayout marginTop="5" marginLeft="10" marginBottom="16">
                            <TextView :text="a_reviews.review_contents" editable="false" backgroundColor="white" borderWidth="0"  color="#494949" style="font-family: nanumsquareroundeb;" fontSize="12"  height="45"  returnKeyType="send" textWrap="true" />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import PlaceSearch from '../../PlaceSearch'
    import axios from 'axios';
    export default {
        name:"AppList",
        components: {
        }, data(){
            return {
                appReview:[]
            }
        },mounted(){
             var cache = require("nativescript-cache");
             console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
             axios({
                 method: 'get',
                 // url: 'http://api.matitzung.shop/v1/places/'+cache.get('place_id')  + '/portalreviews',
                 url: 'http://api.matitzung.shop/v1/places/8005815K/reviews',
                 //url: 'http://192.168.1.85:8080/v1/places/'+this.place_id + '/portalblogs',
                 params: {
                 },
             }).then((response) => {
                 console.log(response.data);
                 this.$data.appReview = response.data.dataList;
             }, (error) => {
                 console.log(error);
             });
        }
    };
</script>

<style lang="scss">
</style>
