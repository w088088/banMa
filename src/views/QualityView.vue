<template>
    <div v-if="flag" class="wrap">
        <!-- 返回 -->
        <div class="top" @click="$router.back()">
            <van-icon name="arrow-left" />
        </div>
        <!-- 轮播 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in list.product_img_www">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 信息 -->
        <div class="title-wrap">
            <div class="title">
                {{ list.title }}
            </div>
            <div class="subtitle">
                {{ list.subtitle }}
            </div>
            <ul>
                <li v-for="(item, index) in list.mark">
                    {{ item.name }}
                </li>
            </ul>
            <div v-if="list.min_price !== '0.00'" class="price">
                ￥{{ list.min_price }}/{{ list.unit }}
            </div>
            <div v-else class="price">
                现询
            </div>
        </div>
        <!-- 评分 -->
        <div class="score">
            <div class="score-top">
                <div class="sc">评分：5.0</div>
                <div>
                    查看全部({{ list.comment_count }})
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="mid">
                <ul>
                    <li v-for="(item, index) in list.comment">
                        <div>
                            {{ item.name }}
                        </div>
                        <div>
                            {{ item.time }}
                        </div>
                    </li>
                    <li>
                        <span class="ic">行程安排</span>
                        <van-rate v-model="value" />
                        <span class="ic">餐饮住宿</span>
                        <van-rate v-model="value" />
                        <span class="ic"> 导游服务</span>
                        <van-rate v-model="value" />
                        <span class="ic">旅游交通</span>
                        <van-rate v-model="value" />
                    </li>
                </ul>
            </div>
        </div>
        <!-- 出发地 -->
        <div class="address">
            <div>
                <van-icon name="guide-o" />出发地:{{ list.group_list[0].list[0].name }}
            </div>
            <div class="pop">
                <van-popup v-model:show="show" round position="bottom" closeable :style="{ height: '20%' }">
                    <div class="pop-add">出发城市</div>
                    <div>
                        <ul>
                            <li v-for="(item, index) in list.group_list[0].list">{{ item.name }}</li>
                        </ul>
                    </div>
                </van-popup>
                <span @click="show = !show">
                    切换城市
                </span>
            </div>
        </div>
        <!-- 图集 -->
        <div v-if="list.feature[0]">
            <div class="imgs" v-html="list.feature[0].content">

            </div>
        </div>
        <div v-else class="banInfo">
            <ul>
                <li v-for="(item, index) in list.high_feature[0].list">
                    <ul>
                        <li class="item">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item v-for="(it, ind) in item.imgs">
                                    <img :src="it" alt="">
                                </van-swipe-item>
                            </van-swipe>
                            <div class="info">
                                <div class="label">
                                    {{ item.label }}
                                </div>
                                <div class="title">
                                    {{ item.title }}
                                </div>
                                <div class="content">
                                    {{ item.content }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div v-html="list.www_fee_contain" class="fee_content">

        </div>
        <div v-html="list.www_fee_not_contain" class="fee_not_contain">

        </div>
    </div>
</template>

<script>
import { getQuality } from "../tools/ajax"
export default {
    name: '斑马QualityView',
    components: {
    },
    data() {
        return {
            list: [],
            flag: false,
            value: 5,
            show: false
        };
    },

    mounted() {
        this.getFun()

    },

    methods: {
        getFun() {
            getQuality({
                product_id: this.$route.query.id
            }).then(res => {
                this.list = res.data
                this.flag = true
                console.log(this.list);
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.fee_content,
.fee_not_contain {
    margin: 0 0 0.48rem 0.13333rem;
    text-align: left;
    font-size: 0.34667rem;
    color: #898989;
    padding: 20px;
    background-color: #fff;
}

.banInfo {
    padding: 40px;
    overflow: hidden;
    background-color: #fff;

    img {
        border-radius: 10px;
    }
}

.item {
    margin: 20px 0;
}

.imgs {
    padding: 20px;
    background-color: #fff;

    :deep(img) {
        width: 100%;
    }
}

.pop-add {
    text-align: center;
    font-size: 0.4rem;
    line-height: 44Px;
    color: #333;
    letter-spacing: 0.02133rem;
    text-align: center;
    position: relative;
    font-weight: bold;
}

.pop {
    ul {
        padding: 0.48rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.24rem;

        li {
            border: 0.02667rem solid #C14374;
            color: #C14374;
            font-weight: normal;
            border-radius: 2px;
            font-size: 0.34667rem;
            height: 0.96rem;
            line-height: 0.96rem;
            box-sizing: border-box;
            text-align: center;
        }
    }
}

.wrap {
    text-align: left;
    background-color: #F5F5F5;
}

.top {
    position: fixed;
    top: 30px;
    left: 50px;
    z-index: 999;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    padding: 10px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    border-radius: 50%;
}

.my-swipe {
    img {
        width: 750px;
        height: 466px;
    }

}

.title-wrap {
    padding-left: 20px;
    background-color: #fff;
    padding-top: 0.1rem;

    div,
    ul {
        margin-top: 16px;
    }

    ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        margin-bottom: 0.24rem;

        li {
            list-style: none;
            border: 0.01333rem solid rgba(193, 67, 116, 0.2);
            padding: 0.08rem 0.16rem;
            font-family: PingFangSC-Light;
            font-size: 0.26667rem;
            color: #c14374;
            letter-spacing: 0.00533rem;
            margin-right: 0.24rem;

            :deep(i) {
                font-size: 12px;
            }

            .ic {
                font-size: 0.26667rem;
                color: #898989;
                letter-spacing: 0;
                margin-right: 0.10667rem;
                position: relative;
                top: -0.02667rem;
            }
        }
    }
}

.title {
    font-family: PingFangSC-Medium;
    font-size: 0.4rem;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
    margin-bottom: 0.16rem;
}

.subtitle {
    font-family: PingFangSC-Light;
    font-size: 0.29333rem;
    color: #898989;
    letter-spacing: 0.004rem;
    margin-bottom: 0.24rem;
}

.price {
    font-family: PingFangSC-Medium;
    font-size: 0.48rem;
    color: #c04374;
    letter-spacing: 0.02133rem;
    white-space: nowrap;
    padding-bottom: 20px;
}

.score-top {
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
    background-color: #fff;
    margin-top: 20px;

    .sc {
        color: #ff9900;
        letter-spacing: 0.024rem;
        line-height: 0.64rem;
        font-size: 0.4rem;
    }
}

.mid ul li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    background-color: #fff;
    padding-bottom: 30px;
}

.address {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 40px;
    margin-top: 20px;
    background-color: #fff;
}

.label {
    display: inline-block;
    font-size: 0.26667rem;
    color: #C14374;
    border: 0.02667rem solid rgba(255, 65, 76, 0.2);
    border-radius: 0.05333rem;
    padding: 0.02667rem 0.08rem;
    margin: 0.24rem 0;
    margin-right: 0.24rem;
}

.title {
    font-size: 0.34667rem;
    color: #333333;
    margin-bottom: 0.16rem;
}

.content {
    margin: 20px 0;
    font-size: 0.34667rem;
    color: #898989;
}
</style>