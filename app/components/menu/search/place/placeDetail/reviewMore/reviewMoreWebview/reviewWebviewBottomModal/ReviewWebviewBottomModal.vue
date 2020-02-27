<template lang="html">
    <Page padding="0 0 0 0">
        <ModalStack dismissEnabled="true" verticalPosition="bottom" padding="0 0 0 0">
            <StackLayout backgroundColor="#ffffff" width="100%" height="270">
                <StackLayout orientation="horizontal">
                    <StackLayout marginTop="20" marginLeft="26">
                        <image width="18" height="18" src="~/Resources/img/place/copy_5_64.png" />
                    </StackLayout>
                    <StackLayout marginLeft="15" marginTop="22" @tap="copyUrl">
                        <label text="URL 복사하기" style="font-family: nanumsquareroundr" color="#494949" fontSize="13" />
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" marginTop="25" @tap="bookMark" >
                    <StackLayout marginLeft="29"  v-if="bookmark_flag == true" >
                        <image width="20" height="20" src="~/Resources/img/place/correct_y_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="29" v-else >
                        <image width="20" height="20" src="~/Resources/img/place/correct_f_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="13">
                        <label text="즐겨찾기 저장" style="font-family: nanumsquareroundr" fontSize="13" color="#494949"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" marginTop="25" @tap="blackList('L')">
                    <StackLayout marginLeft="29" v-if="blacklist_l_flag == true" >
                        <image width="20" height="20" src="~/Resources/img/place/correct_y_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="29" v-else >
                        <image width="20" height="20" src="~/Resources/img/place/correct_f_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="13">
                        <label text="이 게시물 숨김" style="font-family: nanumsquareroundr" fontSize="13" color="#494949"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout orientation="horizontal" marginTop="25" @tap="blackList('W')">
                    <StackLayout marginLeft="29" v-if="blacklist_w_flag == true">
                        <image width="20" height="20" src="~/Resources/img/place/correct_y_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="29" v-else >
                        <image width="20" height="20" src="~/Resources/img/place/correct_f_64.png"  />
                    </StackLayout>
                    <StackLayout marginLeft="13" >
                        <label text="이 게시자의 모든 게시물 숨김" style="font-family: nanumsquareroundr" fontSize="13" color="#494949"/>
                    </StackLayout>
                </StackLayout>
                <StackLayout marginTop="26" width="100%"  style="text-align: center" @tap="$modal.close">
                    <label text="닫기" style="font-family: nanumsquareroundb" fontSize="14" color="#494949" />
                </StackLayout>
            </StackLayout>
        </ModalStack>
    </Page>
</template>

<script>

 var clipboard = require("nativescript-clipboard");
 var Toast = require("nativescript-toast");
 var cache = require("nativescript-cache");
 import axios from 'axios';
 const appSettings = require("tns-core-modules/application-settings");

 import Login from '../../../../../../../member/Login'
 import PlaceGoLoginModal from '../../../modal/PlaceGoLoginModal';

    export default {
        name:"ReviewWebviewBottomModal",
        props:['itemList','portal_gubun'],
       data(){
           return {
               bookmark_flag:'',
               blacklist_w_flag:false,
               blacklist_l_flag:false
           }
       },
        components: {
        },mounted() {
            console.log('modal' + this.itemList.review_id)
            console.log('modal' + this.itemList.bookmark_flag)
            this.bookmarkCheck();
            this.$data.bookmark_flag = this.itemList.bookmark_flag;
            console.log("aaaaaaaaaa"+this.itemList)
            console.log("aaaaaaaaaa"+this.portal_gubun)
            this.blackListCheck();
     },methods:{
            copyUrl(){
                    clipboard.setText(this.itemList.url).then(function () {
                        Toast.makeText("복사되었습니다.").show();
                    })

                    clipboard.getText().then(function (content) {
                        console.log("확인 " + content);
                    })

            },bookMark(){
                //this.delBlackList('post')
                //this.delBlackList('author')
                if(appSettings.getString("user_id") != undefined ){
                    if(appSettings.getString("user_id") !='') {
                        if(this.$data.bookmark_flag == true){
                            this.$data.bookmark_flag = false;
                            axios({
                                method: 'delete',
                                url: 'http://202.182.117.173:8080/v1/bookmarks',
                                params: {
                                    gubun:this.portal_gubun,
                                    place_id:cache.get('place_id'),
                                    id:this.itemList.review_id,
                                    user_id:appSettings.getString("user_id"),
                                    sns_division:appSettings.getString("sns_division"),
                                },
                            }).then((response) => {
                                console.log(response.data.dataList);
                            }, (error) => {
                                console.log(error);
                            });
                        }else {
                            if(this.$data.blacklist_l_flag == true){
                                this.delBlackList('post')
                                this.$data.blacklist_l_flag = false;
                            }

                            if(this.$data.blacklist_w_flag == true){
                                this.delBlackList('author')
                                this.$data.blacklist_w_flag = false;
                            }

                            this.$data.bookmark_flag = true;
                            console.log(this.$data.bookmark_flag)
                            axios({
                                method: 'post',
                                url: 'http://202.182.117.173:8080/v1/bookmarks',
                                params: {
                                    gubun:this.portal_gubun,
                                    place_id:cache.get('place_id'),
                                    id:this.itemList.review_id,
                                    user_id:appSettings.getString("user_id"),
                                    sns_division:appSettings.getString("sns_division"),
                                },
                            }).then((response) => {
                                console.log(response.data.dataList);
                            }, (error) => {
                                console.log(error);
                            });
                        }
                    }else{
                        this.$showModal(PlaceGoLoginModal)
                        this.$modal.close()
                       // this.$modal.close
                       // this.$navigateTo(Login)
                       // Toast.makeText("로그인 후 이용가능합니다.").show()
                    }
                }else{
                    this.$showModal(PlaceGoLoginModal)
                    this.$modal.close()
                   // this.$modal.close
                   // this.$navigateTo(Login)
                   //Toast.makeText("로그인 후 이용가능합니다.").show()

                }

            },blackList(b_gubun) {

                if(appSettings.getString("user_id") != undefined ) {
                    if (appSettings.getString("user_id") != '') {
                        if(b_gubun == 'W'){
                            if(this.$data.blacklist_w_flag == true){
                                this.$data.blacklist_w_flag = false;
                                this.delBlackList('author')
                            }else {
                                if(this.$data.blacklist_l_flag == true){
                                    this.$data.blacklist_l_flag = false;
                                    this.delBlackList('post')
                                }

                                if(this.$data.bookmark_flag == true){
                                    this.bookMark(); //북마크 지워야함.
                                }

                                this.$data.blacklist_w_flag = true;
                                this.addBlackList('author')
                            }
                        }else if(b_gubun == 'L'){
                            if(this.$data.blacklist_l_flag == true){
                                this.$data.blacklist_l_flag = false;
                                this.delBlackList('post')
                            }else {
                                if(this.$data.blacklist_w_flag == true){
                                    this.$data.blacklist_w_flag = false;
                                    this.delBlackList('author')
                                }

                                if(this.$data.bookmark_flag == true){
                                    this.bookMark(); //북마크 지워야함.
                                }
                                this.$data.blacklist_l_flag = true;
                                this.addBlackList('post')
                            }
                        }
                    }else{
                        this.$showModal(PlaceGoLoginModal)
                        this.$modal.close()
                        //Toast.makeText("로그인 후 이용가능합니다.").show()
                       // this.$modal.close
                       // this.$navigateTo(Login)

                    }
                }else{
                    this.$showModal(PlaceGoLoginModal)
                    this.$modal.close()
                    //Toast.makeText("로그인 후 이용가능합니다.").show()
                   // this.$modal.close
                    //this.$navigateTo(Login)

                }

            },bookmarkCheck(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com:8080/v1/bookmarkflag',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division"),
                        review_id:this.itemList.review_id
                    },
                }).then((response) => {
                    console.log(response.data.dataList);
                    this.$data.bookmark_flag = response.data.dataList.result_flag;
                }, (error) => {
                    console.log(error);
                });
            },blackListCheck(){
                axios({
                    method: 'get',
                    url: 'http://api.eatjeong.com/v1/reviews/'+this.itemList.review_id+'/blacklist',
                    params: {
                        user_id:appSettings.getString("user_id"),
                        sns_division:appSettings.getString("sns_division")
                    },
                }).then((response) => {
                    console.log(response.data)
                    if(response.data.dataList.blacklist_author_flag == true){
                        this.$data.blacklist_w_flag = true;
                    }else {
                        this.$data.blacklist_w_flag = false;
                    }
                    if(response.data.dataList.blacklist_post_flag == true){
                        this.$data.blacklist_l_flag = true;
                    }else {
                        this.$data.blacklist_l_flag = false;
                    }
                }, (error) => {
                    console.log(error);
                });
            },addBlackList(blacklist_division){
                if(blacklist_division == 'author'){
                    console.log('블랙리스트 추가')
                    axios({
                        method: 'post',
                        url: 'http://api.eatjeong.com/v1/reviews/'+this.itemList.review_id+'/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:this.portal_gubun,
                            author:this.itemList.author,
                            blacklist_division: 'author'
                        },
                    }).then((response) => {
                        console.log(response.data)
                    }, (error) => {
                        console.log(error);
                    });
                }else {
                    axios({
                        method: 'post',
                        url: 'http://api.eatjeong.com/v1/reviews/'+this.itemList.review_id+'/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:this.portal_gubun,
                            author:this.itemList.author,
                            blacklist_division: 'post'
                        },
                    }).then((response) => {
                        console.log(response.data)
                    }, (error) => {
                        console.log(error);
                    });
                }

            },delBlackList(blacklist_division){
                if(blacklist_division == 'author'){
                    axios({
                        method: 'delete',
                        url: 'http://api.eatjeong.com/v1/reviews/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:this.portal_gubun,
                            author:this.itemList.author,
                            blacklist_division: 'author'
                        },
                    }).then((response) => {
                        console.log(response.data)
                    }, (error) => {
                        console.log(error);
                    });
                }else {
                    axios({
                        method: 'delete',
                        url: 'http://api.eatjeong.com/v1/reviews/blacklist',
                        params: {
                            user_id:appSettings.getString("user_id"),
                            sns_division:appSettings.getString("sns_division"),
                            portal:this.portal_gubun,
                            author:this.itemList.author,
                            blacklist_division: 'post',
                            review_id:this.itemList.review_id
                        },
                    }).then((response) => {
                        console.log(response.data)
                    }, (error) => {
                        console.log(error);
                    });
                }
            }
     }
    };

</script>

<style lang="scss">

</style>
