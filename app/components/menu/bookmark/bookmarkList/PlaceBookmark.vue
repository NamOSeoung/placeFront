<template lang="html">
    <StackLayout backgroundColor="#d3d3d3">
        <StackLayout width="95%" marginTop="10"height="96%" backgroundColor="white">
            <ListView for="placeBookmark in placeBookmarkList"
                      style="height:100%" >
                <v-template>
                    <StackLayout width="100%" padding="0" orientation="horizontal" >
                        <StackLayout paddingRight="-15">
                            <Image :src="placeBookmark.thumbnail" class="thumb img-thumbnail" width="40%" height="100" />
                        </StackLayout>
                        <StackLayout width="60%" paddingLeft="0">
                            <StackLayout orientation="horizontal" style="text-align: center">
                                <Label text="영업중" row="0" col="0" fontSize="14" backgroundColor="#d3d3d3" style="border-radius: 50px;font-family: nanumgothiccoding-bold;"  width="30%" />
                                <Label :text="placeBookmark.place_name" row="0" col="1" fontSize="14" width="70%" style="text-align: left;font-family: nanumgothiccoding" />
                            </StackLayout>
                            <StackLayout orientation="horizontal"  style="text-align: center" >
                                <Label text="고기떡볶이" row="1" col="0" fontSize="14" width="20%"/>
                                <Image src="res://star"  width="10%"></Image>
                                <Label text="1.5" width="15%" fontSize="17" style="text-align: left;" />
                                <Label text="Y" fontSize="18"  style="font-family: nanumgothiccoding-bold;border-radius: 100px;color:white;font-weight: 900;background-color: #FF0B00;padding: 0"  width="10%" />
                                <Label text="N" fontSize="18"  style="font-family: nanumgothiccoding-bold;border-radius: 100px;color:white;font-weight: 900;background-color: #03CF5D;padding: 0"  width="10%" />
                                <Label text="T" fontSize="18"  style="font-family: nanumgothiccoding-bold;border-radius: 100px;color:white;font-weight: 900;background-color: #EC4F01;padding: 0"  width="10%" />
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </StackLayout>
</template>
<script>
 import axios from 'axios';
    export default {
        name:"PlaceBookmark",
       data(){
        return {
         placeBookmarkList:[],
            calList:[{"cal":"0"},{"cal":"1"}]
        }
       },
        components: {
        },mounted() {
      axios({
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
      });
     }
    };
</script>

<style lang="scss">
    // Start custom common variables
    //@import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables

    // Custom styles
    .action-bar {
     background-color: #0E4375;
     color: #F5C851;
    }

    .list-group, .list-item {
     background-color: #FFFFFF;
    }

    .header-linear {
     background-color: #5BBC93;
    }

    .list-item-linear {
     border-bottom-width: 1;
     border-color: #0E4375;
    }

    .title-linear {
     color: #0E4375;
     padding: 0 0 0 10;
    }

    .price-linear {
     color: #EF823F;
     padding: 0 0 0 10;
    }

    .swipe-linear {
     background-color: #EF823F;
    }

    .fav-linear {
     margin: 30;
    }

    .list-item-grid {
     margin: 1;
    }

    .list-item-grid-background {
     background-color: #000000;
     opacity: 0.6;
    }

    .title-grid {
     color: #FFFFFF;
     padding: 0 0 0 10;
    }

    .price-grid {
     color: #EF823F;
     padding: 0 0 5 10;
    }

    .fav-grid {
     margin: 0 10 5 0;
    }
</style>
