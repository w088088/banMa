<template>
    <div class="wrap">
        <div class="search-warp">
            <van-icon name="arrow-left" size="20" @click="$router.back()" />
            <div class="search">
                <van-icon name="search" size="20" />
                <input type="text" v-model="keyword" placeholder="请输入" @keyup.enter="search">
            </div>
        </div>
        <div class="tab">
            <van-tabs v-model:active="active" @click-tab="onClickTab">
                <van-tab title="全部" name="0">
                    <SearchIetm :list="list"></SearchIetm>
                </van-tab>
                <van-tab title="私家团" name="7">
                    <SearchIetm :list="list"></SearchIetm>
                </van-tab>
                <van-tab title="酒店套餐" name="25">
                    <SearchIetm :list="list"></SearchIetm>
                </van-tab>
                <van-tab title="精品小团" name="7">
                    <SearchIetm :list="list"></SearchIetm>
                </van-tab>
                <van-tab title="定制案例" name="0">
                    <SearchIetm :list="list"></SearchIetm>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import SearchIetm from "../components/SearchIetm.vue"
import { getSearch } from "../tools/ajax"
export default {
    name: 'SearchDetailView',
    components: {
        SearchIetm
    },
    data() {
        return {
            page: 1,
            order_by: 0,
            keyword: this.$route.query.keyword,
            active: 0,
            list: []
        };
    },

    mounted() {
        this.get()
    },

    methods: {
        onClickTab() {
            this.get()
        },
        get() {
            getSearch({
                keywords: decodeURIComponent(this.keyword),
                page: this.page,
                type: this.active,
                order_by: this.order_by
            }).then(res => {
                // console.log(res);
                this.list = res.data.list
            })
        },
        search() {
            this.get()
        }
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1024;
    background: #fff;
    padding: 0.42667rem;
    width: 100%;
    box-sizing: border-box;
}

.search {
    width: 80%;
    display: flex;
    border: 1px solid #dedede;
    padding: 15px;
    box-sizing: border-box;
    margin-left: 0.2rem;

    input {
        width: 100%;
        border: none;
        text-indent: 20px;

    }
}

.search-warp {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    background-color: #fff;
}

:deep(.van-tabs__wrap) {
    width: 100%;
    position: fixed;
    top: 0.98rem;
    left: 0;
    z-index: 999;
}

.tab {
    padding-top: 200px;
}
</style>