<template lang="html">
    <StackLayout marginTop="-15">
        <StackLayout orientation="horizontal" >
            <image src="~/Resources/img/home/tistory.png" width="17" height="12" marginTop="16" marginLeft="15"/>
            <label text="티스토리" width="48" height="14" fontSize="13" marginTop="15"  style="font-family: nanumsquareroundeb" marginLeft="6" />
            <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="214dp"/>
            <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal" marginBottom="10">
                <StackLayout orientation="horizontal" backgroundColor="#ffffff"  v-if="tistoryReview != ''" v-for="t_reviews in tistoryReview" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" width="260" marginTop="16" marginLeft="15" borderColor="#eeeeee" marginBottom="15">
                    <StackLayout width="70" height="70" marginLeft="9" marginTop="10" marginBottom="10" >
                        <Image width="100%" height="100%" borderRadius="8" stretch="aspectFill" :src="t_reviews.thumbnail_url"/>
                    </StackLayout>
                    <StackLayout>
                        <StackLayout>
                            <label :text="t_reviews.title" width="150" height="18" marginLeft="12" marginTop="12" style="font-family: nanumsquareroundeb" color="#333333" fontSize="13"  />
                            <Label :text="t_reviews.description" marginLeft="12"  width="150" height="18" style="font-family: nanumsquareroundr"  color="#333333" fontSize="12"/>
                        </StackLayout>
                        <StackLayout orientation="horizontal" marginTop="7" marginLeft="12">
                            <label :text="t_reviews.write_date"  width="60" height="18" color="#888888" style="font-family: nanumsquareroundr" fontSize="11" />
                            <label :text="t_reviews.author" height="18" color="#888888" style="font-family: nanumsquareroundr" fontSize="11" />
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
                <StackLayout v-if="tistoryReview == ''" height="106">
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
        name:"TistoryList",
        components: {
        }, data(){
            return {
                tistoryReview:[]
            }
        },mounted(){
            var cache = require("nativescript-cache");
            console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
            axios({
                method: 'get',
                url: 'http://api.matitzung.shop/v1/places/'+cache.get('place_id')  + '/portalblogs',
                //url: 'http://192.168.1.85:8080/v1/places/'+this.place_id + '/portalblogs',
                params: {
                },
            }).then((response) => {
                console.log(response.data);
                if(response.data.dataList.DAUM === undefined){
                    this.$data.tistoryReview = '';
                }else {
                    this.$data.tistoryReview = response.data.dataList.DAUM;
                }

            }, (error) => {
                console.log(error);
            });
        }
    };
</script>

<style lang="scss">
</style>
