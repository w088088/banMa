<template>
    <div class="item_wrap">
        <router-link to="" v-for="(item, index) in list" :key="item.id">
            <img :src="item.img.url" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: '斑马MyItem',
    props: ["list"],
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
.item_wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 18px 18px 32px;
    text-align: center;

    a {
        // width: 33.33%;
        margin-bottom: 20px;

        img {
            width: 100%
        }
    }
}
</style>