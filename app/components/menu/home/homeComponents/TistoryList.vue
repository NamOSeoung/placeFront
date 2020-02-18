<template lang="html">
    <StackLayout class="tistoryWrap">
        <StackLayout orientation="horizontal" class="tistoryHeaderWrap">
            <image src="~/Resources/img/home/tistory.png" class="tistoryIcon"/>
            <label text="티스토리" class="tistoryTitle"/>
            <label text="222" class="tistoryMore" @tap="$navigateTo(TistoryMorePage)"/>
            <image src="~/Resources/img/home/angle-right.png" class="tistoryRightIcon" />
        </StackLayout>
        <ScrollView orientation="horizontal">
            <StackLayout orientation="horizontal"  class="tistorySubWrap">
                <StackLayout orientation="horizontal"  @tap="goWebview(index)" v-for="(list,index) in tistoryList" class="tistoryMainWrap" v-shadow="{ elevation: 2,shape:'RECTANGLE', bgcolor: 'white', cornerRadius: 10 }" >
                    <StackLayout class="tistoryImageWrap">
                        <Image class="tistoryImage" stretch="aspectFill" :src="list.thumbnail_url"/>
                    </StackLayout>
                    <StackLayout class="tistoryRightWrap">
                        <StackLayout class="tistoryRightTop">
                            <label class="tistorySubject" :text="list.title"  textWrap="true" row="2" />
                        </StackLayout>
                        <StackLayout class="tistoryRightBottom" orientation="horizontal">
                            <label class="tistoryWriteDate" :text="list.write_date"/>
                            <label class="tistoryWriter" :text="list.author"/>
                        </StackLayout>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </StackLayout>
</template>

<script>
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_320.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_360.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_420.scss';
    import '~/Resources/css/menu/home/homeComponents/TistoryList/tistoryList_480.scss';

    import axios from 'axios'
    import { StackLayout } from 'ui/layouts/stack-layout';
    import TistoryMore from './reviewMore/TistoryMore'
    import TistoryWebview from './reviewMore/mainReviewWebview/TistoryWebview'
    var observableModule = require("data/observable");
    var observableArrayModule = require("data/observable-array");
    let page;
    var pageData = new observableModule.Observable({
        myList: new observableArrayModule.ObservableArray(["foo", "bar"])
    });
    exports.loaded = function(args) {
        console.log('123123123123')
        var page = args.object;
        page.bindingContext = pageData;
        console.log(pageData.myList)
    };

    export default {
        name:"Tistory",
        components: {
        }, data() {
            return {
                tistoryList:[],
                TistoryMorePage:TistoryMore,
                user_name:global.user_name
            }
         },methods :{
            getTistoryList(){
                  axios({
                    method: 'get',
                        url: 'http://api.eatjeong.com/v1/main/reviews?',
                    params: {
                        query:"서울 동작구 상도동 맛집",
                        portal:"DAUM",
                        size:'5'
                    },
                    }).then((response) => {
                        console.log(response.data.dataList)
                        this.$data.tistoryList = response.data.dataList;


                    }, (error) => {
                    console.log(error);
                    });
            },goWebview(index){
                this.$navigateTo(TistoryWebview, {
                    props: {
                        itemList: this.$data.tistoryList[index]
                    }
                })
            }
        },mounted(){
             this.getTistoryList();

        }
    };
</script>

<style lang="scss">

</style>

