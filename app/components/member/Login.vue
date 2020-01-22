<script src="../../app.js"></script>
<template>
       <Page actionBarHidden="true" marginTop="30" >
        <ActionBar>
            <Label text="로그인"></Label>
        </ActionBar>

        <StackLayout>
            <Button text="로그인하기" @tap="$navigateTo(detailPage)" />
        </StackLayout>
       </Page>
</template>

<script>
    import MenuWrap from "../menu/MenuWrap";
    export default {
        data: () => {
            return {
                detailPage: MenuWrap
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../../node_modules/@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
