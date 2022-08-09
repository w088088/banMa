<template >
    <template v-for="(item, index) in data" :key="index">
        <MyBanner v-if="item.col == 1" :list="item.data"></MyBanner>
        <NewList v-else-if="item.col == 3" :list="item.data"></NewList>
        <HomeList v-else-if="item.col == 2" :data="item.data.ids"></HomeList>
        <NewBanner v-else-if="item.col == undefined" :banner-data="item.data"></NewBanner>
    </template>
</template>

    <script>
import MyBanner from '@/components/MyBanner.vue'
import NewList from '@/components/NewList.vue';
import MyItem from './MyItem.vue';
import HomeList from '@/components/HomeList.vue';
import NewBanner from '@/components/NewBanner.vue';
export default {
    name: '斑马TempData',
    props: ["data"],
    components: {
        MyItem,
        MyBanner,
        NewList,
        HomeList,
        NewBanner
    },
    mounted() {
        console.log(this.data);
    },

};
</script>
    <style lang="scss" scoped>
    </style>
