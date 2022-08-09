<template>
    <div class="destination">
        <header>目的地</header>
        <div class="wrap">
            <div class="left" style="height:600px;">
                <van-sidebar v-model="active" @change="onChange">
                    <van-sidebar-item :title="item.label" v-for="(item, index) in items" />
                </van-sidebar>
            </div>
            <div class="right">
                <div class="top">
                    <ul>
                        <li v-for="(item, index) in topList" :key="item.id" @click="jump(item.id, item.label)">
                            <img :src="item.img" alt="">
                            <div>
                                <p>{{ item.name_en }}</p>
                                <p>{{ item.label }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="list-wrap">
                    <p>热门推荐</p>
                    <div class="list" v-for="(item, index) in list">
                        <router-link :to="'/quality?id=' + item.id">
                            <img :src="item.img" alt="">
                            <p class="title">{{ item.title }}</p>
                            <p class="sub">{{ item.subtitle }}</p>
                            <p class="price" v-if="item.price !== '0.00'">￥{{ item.price }}起/{{ item.unit }}</p>
                            <p class="price" v-else>现询</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getArea } from '@/tools/ajax';
export default {
    name: 'DestinationView',

    data() {
        return {
            active: 0,
            items: [],
            topList: [],
            list: [],
        };
    },
    created() {
        getArea().then(res => {
            console.log(res);
            this.items = res.data.list
            this.topList = this.items[this.active].children
            this.list = this.items[this.active].product
        })

    },
    methods: {
        onChange() {
            console.log(this.items[this.active]);
            this.topList = this.items[this.active].children
            this.list = this.items[this.active].product
        },
        jump(id, label) {
            this.$router.push({
                path: "/searchDetail",
                query: {
                    keyword: label,
                }
            })
        }
    },

};
</script>

<style lang="scss" scoped>
.destination {
    header {
        text-align: center;
        width: 100%;
        height: 44Px;
        font-size: 15Px;
        font-weight: 500;
        line-height: 44Px;
        color: #333;
        letter-spacing: 0.02133rem;
        position: fixed;
        top: 0;
        background: #FFFFFF;
        z-index: 99;
        box-shadow: inset 0 -0.02667rem 0 0 rgb(240 240 240 / 50%);
    }
}

.van-tree-select {
    height: 100% !important;
}

.wrap {
    display: flex;
    padding-top: 100px;
}

.left {
    overflow-y: auto;
    padding-bottom: 100px;
}

.right {
    width: 80%;
    height: 1200px;
    overflow-y: auto;
}

.top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            margin-right: 10px;
            position: relative;

            div {
                position: absolute;
                top: -10px;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                color: #FFFFFF;
                width: 207px;
                height: 104px;
                border: 1px solid rgba(255, 255, 255, 0.7);

                p {
                    margin-top: 10px;
                }
            }
        }
    }

    img {
        margin-bottom: 0.21333rem;
        position: relative;
        box-sizing: border-box;
        width: 247px;
        height: 144px;
    }
}

.list-wrap {
    padding-left: 30px;
    text-align: left;

    >p {
        font-size: 0.42667rem;
        font-weight: 500;
        text-align: left;
        margin-bottom: 18Px;
    }

    img {
        width: 510px;
        height: 314px;
        border-radius: 10px;
    }
}

.title {
    font-size: 0.32rem;
    margin-bottom: 6px;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
    padding: 10px 0;
}

.sub {
    font-size: 0.26667rem;
    margin-bottom: 12px;
    color: #898989;
    letter-spacing: .15px;
}

.price {
    color: #c04374;
    padding: 10px 0;
}
</style>