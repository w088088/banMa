<template>
    <div class="banner-wrap">
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item v-for="(item, index) in bannerData" :key="index">
                <img :src="item.img.url" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: '斑马NewBanner',
    props: ["banner-data"],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.banner-wrap {
    width: 100%;
    padding-top: 100px;

    img {
        width: 100%;
    }
}
</style>