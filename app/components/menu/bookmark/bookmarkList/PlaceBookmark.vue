<template lang="html">
    <GridLayout orientation="vertical" rows="auto, *">
        <RadListView for="item in itemList">
            <v-template name="red" if="item.type === 'red'">
                <StackLayout class="red" orientation="vertical">
                    <Label :text="item.name"></Label>
                </StackLayout>
            </v-template>
            <v-template name="green" if="item.type === 'green'">
                <StackLayout class="green" orientation="vertical">
                    <Label :text="item.name"></Label>
                </StackLayout>
            </v-template>
            <v-template name="blue" if="item.type === 'blue'">
                <StackLayout class="blue" orientation="vertical">
                    <Label :text="item.name"></Label>
                </StackLayout>
            </v-template>
        </RadListView>
    </GridLayout>
</template>
<script>
 import axios from 'axios';
    export default {
        name:"PlaceBookmark",
       data(){
        return {
         placeBookmarkList:[],
            itemList: [
                {name: 'Item 1', type: 'red'},
                {name: 'Item 2', type: 'green'},
                {name: 'Item 3', type: 'blue'},
                {name: 'Item 4', type: 'red'},
                {name: 'Item 5', type: 'green'},
                {name: 'Item 6', type: 'blue'},
            ]
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
