<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <image src="~/Resources/img/place/google.png" width="17" height="12" marginTop="16" marginLeft="15"/>
            <label text="구글리뷰" width="48" height="14" fontSize="13" marginTop="15"  style="font-family: nanumsquareroundeb" marginLeft="6" />
            <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="214dp"/>
            <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal" marginBottom="10" height="130" >
                <StackLayout backgroundColor="#ffffff" v-for="g_reviews in googleReview" v-if="googleReview != ''" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" width="260" marginTop="16" marginLeft="15" borderColor="#eeeeee" marginBottom="15">
                    <StackLayout orientation="horizontal">
                        <StackLayout orientation="horizontal" width="220">
                            <FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="10" marginTop="11" v-if="g_reviews.g_rating > 0"/>
                            <FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="1" marginTop="11" v-if="g_reviews.g_rating > 1"/>
                            <FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="1" marginTop="11" v-if="g_reviews.g_rating > 2"/>
                            <FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="1" marginTop="11" v-if="g_reviews.g_rating > 3"/>
                            <FIcon name="fa-star" color="#e7711b"  fontSize="18" marginLeft="1" marginTop="11" v-if="g_reviews.g_rating > 4"/>
                        </StackLayout>
                        <StackLayout>
                            <label text="3달 전" marginTop="11" color="#888888" style="font-family: nanumsquareroundeb"  fontSize="12" />
                        </StackLayout>
                    </StackLayout>
                    <StackLayout marginTop="5" marginLeft="10" marginBottom="16">
<                        <TextView :text="g_reviews.g_content" editable="false" backgroundColor="white" borderWidth="0"  color="#494949" style="font-family: nanumsquareroundeb;" fontSize="12"  height="45"  returnKeyType="send" textWrap="true" />
                    </StackLayout>
                </StackLayout>
                <StackLayout v-if="googleReview == ''" height="106">
                    <StackLayout marginLeft="140" marginTop="41" width="80" >
                        <label text="정보가 없습니다." color="#cccccc" fontSize="12" style="font-family: nanumsquareroundeb;" />
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
        name:"GoogleList",
        components: {
        }, data(){
            return {
                googleReview:[]
            }
        },mounted(){
             var cache = require("nativescript-cache");
             console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
             axios({
                 method: 'get',
                 url: 'http://api.matitzung.shop/v1/places/'+cache.get('place_id')  + '/portalreviews',
                 //url: 'http://192.168.1.85:8080/v1/places/'+this.place_id + '/portalblogs',
                 params: {
                     page:1
                 },
             }).then((response) => {
                 console.log(response.data);

                 if(response.data.dataList.GOOGLE === undefined){
                     this.$data.googleReview = '';
                 }else{
                     this.$data.googleReview = response.data.dataList.GOOGLE;
                 }
                 console.log(this.$data.googleReview + "체킹!!")
             }, (error) => {
                 console.log(error);
             });
        }
    };
</script>

<style lang="scss">
</style>
