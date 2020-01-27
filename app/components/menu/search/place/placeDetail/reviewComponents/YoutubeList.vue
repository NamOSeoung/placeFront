<template lang="html">
 <StackLayout marginTop="10dp">
   <StackLayout orientation="horizontal">
       <image src="~/Resources/img/home/youtube.png" width="17" height="12" marginTop="16" marginLeft="15"/>
       <label text="유튜브" width="36" height="14" fontSize="13" marginTop="15"  style="font-family: nanumsquareroundeb" marginLeft="6" />
       <label text="더보기" width="36" height="13" fontSize="12sp" style="font-family: nanumsquareroundeb" color="#888888" marginTop="13" marginLeft="226dp"/>
       <FIcon name="fa-angle-right" color="#A4A4A4"  fontSize="16" paddingTop="12"  />
   </StackLayout>
   <ScrollView orientation="horizontal">
       <StackLayout orientation="horizontal" marginTop="10" >
            <StackLayout width="150" marginLeft="15"  v-for="y_reviews in youtubeReview" v-if="youtubeReview != ''">
                <StackLayout>
                    <StackLayout>
                        <image width="100%" height="84" stretch="aspectFill"  :src="y_reviews.y_thumbnail_url"/>
                    </StackLayout>
                    <StackLayout backgroundColor="#ffffff">
                        <TextView :text="y_reviews.y_description" lineHeight="5sp" editable="false" backgroundColor="white" borderWidth="0"  color="#494949" style="font-family: nanumsquareroundeb;" fontSize="13"  height="55"  returnKeyType="send" textWrap="true" />
<!--                        <label width="150" :text="y_reviews.y_description"  marginTop="7" lineHeight="5sp" fontSize="13sp" style="font-family: nanumsquareroundeb" textWrap="true" row="2"/>-->
                    </StackLayout>
                </StackLayout>
            </StackLayout>
           <StackLayout v-if="youtubeReview == ''" height="106">
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
        name:"YoutubeList",
        data(){
            return {
                youtubeReview:[]
            }
        },
        components: {
        },mounted(){
            var cache = require("nativescript-cache");
            console.log(cache.get('place_id') + "유튜브 리스트에서 확인 ");
            axios({
                method: 'get',
                // url: 'http://192.168.1.85:9090/v1/places/'+this.item.place_id+'/portalreviews',
                url: 'http://api.matitzung.shop/v1/places/'+cache.get('place_id')+'/portalreviews',
                params: {
                    page : '1',
                    portal : 'youtube'
                },
            }).then((response) => {
                //console.log(response.data);
                console.log("유튜브" + response.data.dataList.YOUTUBE)
                if(response.data.dataList.YOUTUBE === undefined){
                    this.$data.youtubeReview = '';
                }else{
                    this.$data.youtubeReview = response.data.dataList.YOUTUBE;
                }

                console.log(this.$data.youtubeReview + "유튜브 체킹")
                //this.$data.place_detail = response.data.dataList;
                //console.log(response.data);
            }, (error) => {
                console.log(error);
            });
        }
    };
</script>

<style lang="scss">
</style>
