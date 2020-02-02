<template lang="html">
    <ListView for="placeBookmark in placeBookmarkList" separatorColor="transparent"
              style="height:100%" @itemTap="gotistory" >
        <v-template>
    <StackLayout class="storeMarkDetailSubWrap">
        <StackLayout orientation="horizontal" class="storeMarkDetailWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }">
            <StackLayout class="storeLeftWrap">
                <image class="storeImage" stretch="aspectFill" :src="placeBookmark.thumbnail"/>
            </StackLayout>
            <StackLayout class="storeMarkRightWrap">
                <StackLayout orientation="horizontal" class="storeMarkTopWrap">
                    <StackLayout class="storeMarkTimeWrap">
                        <label :text="placeBookmark.opening" class="storeTime" />
                    </StackLayout>
                    <StackLayout class="storeStarIconWrap">
                        <Image src="~/Resources/img/home/star.png" class="storeStarIcon" />
                    </StackLayout>
                    <StackLayout class="storeRatingWrap">
                        <label :text="placeBookmark.rating" class="storeRating"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout class="storeMarkMiddleWrap">
                    <label :text="placeBookmark.place_name" class="storeMarkName"/>
                </StackLayout>
                <StackLayout orientation="horizontal" class="storeMarkBottomWrap">
                    <StackLayout class="storeMarkCategoryWrap">
                        <label :text="placeBookmark.category" class="storeMarkCategory"/>
                    </StackLayout>
                    <StackLayout class="storeMarkYIconWrap">
                        <image class="storeMarkYIcon" stretch="aspectFill" src="~/Resources/img/bookmark/youtube-circle.png"/>
                    </StackLayout>
                    <StackLayout class="storeMarkNIconWrap">
                        <image class="storeMarkNIcon"stretch="aspectFill"  src="~/Resources/img/bookmark/naver-circle.png"/>
                    </StackLayout>
                    <StackLayout class="storeMarkTIconWrap">
                        <image class="storeMarkTIcon" stretch="aspectFill" src="~/Resources/img/bookmark/tistory-circle.png"/>
                    </StackLayout>
                    <StackLayout class="storeMarkGIconWrap"  v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 50 }">
                        <image class="storeMarkGIcon"stretch="aspectFill" src="~/Resources/img/bookmark/google-circle.png" />
                    </StackLayout>
                    <StackLayout class="storeMarkAIconWrap" >
                        <image class="storeMarkAIcon" stretch="aspectFill"  src="~/Resources/img/bookmark/tistory-circle.png" />
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </StackLayout>
        <StackLayout class="markUnderline">
        </StackLayout>
    </StackLayout>
        </v-template>
    </ListView>
</template>
<script>
 import axios from 'axios';

 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_320.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_360.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_420.scss';
 import '~/Resources/css/menu/bookmark/bookmarkList/PlaceBookmark/placeBookmark_480.scss';

    export default {
        name:"PlaceBookmark",
        data(){
            return {
                placeBookmarkList:[
                    {
                        'thumbnail' : 'https://i.ytimg.com/vi/9f-bB4_SJkI/maxresdefault.jpg',
                        'place_name':'사리곰탕 참좋아',
                        'category' : '곰탕전문점 ',
                        'rating':'4.5',
                        'opening' : '영업중',
                        'y_review' : 'true',
                        'n_review' : 'true',
                        't_review' : 'true',
                        'g_review' : 'false',
                        'a_review' : 'true',
                    }, {
                        'thumbnail' : 'https://i.ytimg.com/vi/9f-bB4_SJkI/maxresdefault.jpg',
                        'place_name':'중화장',
                        'category' : '중식 ',
                        'rating':'4.1',
                        'opening' : '휴무',
                        'y_review' : 'true',
                        'n_review' : 'true',
                        't_review' : 'true',
                        'g_review' : 'false',
                        'a_review' : 'true',
                    }
                ]
            }
        },
        components: {
        },mounted() {
     /* axios({
       method: 'get',
       url: 'http://api.matitzung.shop/v1/bookmarks?',
       //  url: 'http://192.168.1.85:9090/v1/places?',
       params: {
        gubun: 'place',
        user_id : 'jeetkn@naver.com'
       },
      }).then((response) => {
       console.log(response.data);
       this.$data.placeBookmarkList = response.data.dataList;
      }, (error) => {
       console.log(error);
      });*/
     }
    };
</script>

<style lang="scss">


</style>

