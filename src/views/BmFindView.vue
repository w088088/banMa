<template>
    <div class="bmfind">
        <MyHeader>斑马发现</MyHeader>
        <van-tabs v-model:active="active" @click-tab="onClickTab">
            <van-tab :title="item" v-for=" (item, index) in title" :key="item">
                <van-list v-model:loading="loading" @load="onLoad" :finished="finished" finished-text="没有更多了">
                    <div v-for="(item, index) in list" :key="item.id" class="wrap">
                        <img :src="item.head_pic" alt="">
                        <span>{{ item.sort_name }}</span>
                        <p class="title">
                            {{ item.title }}
                        </p>
                        <p class="sub">
                            {{ item.subtitle }}
                        </p>
                    </div>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import { getFind } from "../tools/ajax"
export default {
    name: 'BmFindView',
    comments: {
        MyHeader
    },
    data() {
        return {
            active: 0,
            list: [],
            id: 0,
            title: ["全部", "涨知识", "看世界", "达人说"],
            loading: false,
            finished: false,
            page: 1
        };
    },
    mounted() {
        getFind({
            sort_id: this.active,
            page: this.page
        }).then(res => {
            console.log(res);
            this.list = res.data.list
        })
    },
    methods: {
        getList(id, page) {
            getFind({
                sort_id: id,
                page: page
            }).then(res => {
                if (page != 1) {
                    if (res.data.list.length == 0) {
                        this.finished = true
                    } else {
                        this.list.push(...res.data.list)
                        this.loading = false
                    }
                } else {
                    this.list = res.data.list
                    this.loading = false
                }
            })
        },
        onClickTab(name) {
            this.finished = false
            this.page = 0
            if (name.name == 0) {
                this.list = []
                this.id = 0
                this.onLoad()
            } else {
                this.list = []
                this.id = name.name + 4
                this.onLoad()
            }
        },
        onLoad() {
            this.page++;
            this.getList(this.id, this.page)
        },
    },
};
</script>

<style lang="scss" scoped>
.bmfind {
    padding-bottom: 100px;
    padding-top: 100px;
}

:deep(.van-tabs__wrap) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    padding-top: 1rem;
    z-index: 999;
}

:deep(.van-tabs__content) {
    margin-top: 50px;
}

.tabs {
    border-bottom: 1px solid #dedede;
}

img {
    width: 678px;
    height: 378px;
}

.wrap {
    position: relative;
    margin-bottom: 72px;

    span {
        position: absolute;
        top: 0.4rem;
        right: 0.7rem;
        color: #fff;
        padding: 5px;
        background: rgba(0, 0, 0, 0.8);
    }
}

.title {
    width: 100%;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    font-size: 0.4rem;
    color: #333;
    letter-spacing: 0.02133rem;
    margin: 0.32rem 0 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.sub {
    width: 100%;
    font-family: PingFangSC-Light;
    font-size: 0.29333rem;
    color: #333333;
    letter-spacing: 0.004rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>