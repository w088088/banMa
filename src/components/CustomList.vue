<template>
    <div class="info-wrap">
        <div>
            <van-cell is-link title="感兴趣的目的地（必填）" @click="show = true" />
            <van-action-sheet v-model:show="show" title="">
                <div class="action-wrap">
                    <div class="top">
                        <span>国际</span>
                        <span>国内</span>
                    </div>
                    <div class="cont-wrap">
                        <div class="content" v-for="(item, index) in areaList" :key="item.id">
                            <h3>{{ item.label }}</h3>
                            <ul class="city">
                                <li v-for="(ite, ind) in item.children">{{ ite.label }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer">
                        <button>确定</button>
                    </div>
                </div>
            </van-action-sheet>
        </div>
        <div>
            <van-cell title="选择日期区间" :value="date" @click="show1 = true" />
            <van-calendar v-model:show="show1" type="range" @confirm="onConfirm" />
        </div>
        <div class="search">
            <input type="text" v-model="uname" placeholder="您的姓名(非必填)">
        </div>
        <div class="btn">
            <van-button type="primary" size="large">免费获取方案</van-button>
        </div>
        <div class="icons">
            <span>
                <van-icon name="gem-o" />1v1专属定制
            </span>

            <span>
                <van-icon name="sign" />2小时急速方案
            </span>

            <span>
                <van-icon name="like-o" />7*24H行中服务
            </span>

        </div>
    </div>
</template>

<script>
import { getArea } from '@/tools/ajax';
export default {
    name: 'CustomList',

    data() {
        return {
            show: false,
            date: '',
            show1: false,
            uname: '',
            areaList: []
        };
    },
    created() {
        getArea().then(res => {
            console.log(res);
            this.areaList = res.data.list
        })
    },
    methods: {
        onConfirm() {
            this.show1 = false
            console.log(111);

        }
    },
};
</script>
<style lang="scss" scoped>
:deep(.van-action-sheet) {
    height: 80%;
}

.van-button--large {
    border: none !important;
    background-color: #C14374 !important;
    border-radius: 3Px;
    height: 1.2rem;
    font-size: 0.34667rem;
    color: #FFFFFF;
    letter-spacing: 0.01067rem;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    line-height: 1.2rem;
}

:deep(.van-cell__title) {
    text-align: left;
    color: #ccc;
}

input::placeholder {
    color: #ccc;
}

.info-wrap {
    background: #FFFFFF;
    margin: 18Px 18Px 32Px;
    box-shadow: 0 0 0.21333rem 0 rgb(0 0 0 / 8%);
    border-radius: 0 0 0.08rem 0.08rem;
    padding-bottom: 100px;
}

.action-wrap {
    text-align: left;
    margin: 0 auto;
}

.cont-wrap {
    padding: 30px 0 120px 0;
}

.content {
    h3 {
        font-size: 0.34667rem;
        font-weight: bold;
        color: #1D1D1D;
        letter-spacing: 0;
        margin: 0.48rem;
        padding-top: 80px;
    }
}

.top {
    width: 100%;
    z-index: 999;
    padding: 0.48rem;
    position: fixed;
    top: 20%;
    background-color: #fff;
    border-bottom: 1px solid #dedede;

    span {
        margin-right: 80px;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: .8px;
        color: rgb(193, 67, 116);
    }
}

.search {
    align-items: center;
    padding: 0.4rem 0;
    width: 100%;
    height: 92px;
    border-bottom: 0.5Px solid #e1e1e1;

    input {
        text-indent: 30px;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
    }
}

.icons {
    padding: 30px 0;

    span {
        margin: 0 0.3rem
    }
}

.city {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    li {
        border-radius: 0.05333rem;
        font-size: 0.34667rem;
        color: #303133;
        letter-spacing: 0;
        text-align: center;
        position: relative;
        padding: 18px 46px;
        border: 0.02667rem solid #F0F0F0;
        margin: 0.16rem 0.05rem 0.32rem 0.24rem;
    }
}

.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    box-shadow: 0 -0.05333rem 0.21333rem 0 rgb(0 0 0 / 4%);
    background: #fff;
    padding: 0.4rem 0.48rem;

    button {
        border: none !important;
        background-color: #C14374 !important;
        border-radius: 3Px;
        height: 1.2rem;
        font-size: 0.34667rem;
        color: #FFFFFF;
        letter-spacing: 0.01067rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        line-height: 1.2rem;
        width: 90%;
    }
}
</style>