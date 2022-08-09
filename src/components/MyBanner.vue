<template>
    <div class="banner_wrap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <router-link :to="'/detail?id=' + urls[0]" v-for="(item, index) in list" :key="index">
                <van-swipe-item>
                    <img :src="item.img.url" alt="">
                </van-swipe-item>
            </router-link>
        </van-swipe>
    </div>
    <!-- {{ urls }} -->
</template>

<script>

export default {
    name: 'MyBanner',
    props: ["list"],
    data() {
        return {
            urls: [],
        };
    },
    created() {
        this.list.forEach((item, index) => {
            this.urls.push(item.url.split("activity/")[1])
        })
    },
};
</script>

<style lang="scss" scoped>
.banner_wrap {
    // padding-top: 43.98px;
    margin: 18px 18px 32px;

    img {
        width: 678px;
    }
}
</style>