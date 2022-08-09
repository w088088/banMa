<template>
    <div class="serchbar">
        <div>
            <van-icon name="service-o" size="20" @click="show = true" />
            <van-action-sheet v-model:show="show" title="">
                <div class="wrap">
                    <div class="title">
                        <h3>客户服务</h3>
                        <span @click="show = false">×</span>
                    </div>
                    <ul class="cont">
                        <li>
                            <div class="left">
                                <h5>联系在线客服</h5>
                                <h4>服务时间:周一至周日 9：00 - 22：00</h4>
                            </div>
                            <div class="right">
                                <van-icon name="service-o" size="30" />
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <h5>拨打客服电话</h5>
                                <h4>400-021-9988</h4>
                            </div>
                            <div class="right">
                                <van-icon name="phone-o" size="30" />
                            </div>
                        </li>
                        <li>
                            <div class="left">
                                <h5>留言质询</h5>
                                <h4>服务时间:周一至周日 9：00 - 24：00</h4>
                            </div>
                            <div class="right">
                                <van-icon name="notes-o" size="30" />
                            </div>
                        </li>
                    </ul>
                </div>
            </van-action-sheet>
        </div>
        <div>
            <slot></slot>
        </div>
        <router-link to="/search">
            <div>
                <van-icon name="search" size="20" />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',

    data() {
        return {
            show: false
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.serchbar {
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 88px;
    padding: 0 36px;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
}

.wrap {
    .title {
        text-align: center;
        position: relative;
        padding: 20px 0;
        border-bottom: 1px solid #dedede;

        span {
            position: absolute;
            right: 30px;
            top: 15px;
            font-size: 26px;
        }
    }
}

.cont li {
    display: flex;
    text-align: left;
    margin-top: 25px;
    margin-left: 40px;
    margin-bottom: 30px;
    justify-content: space-between;

    h4 {
        font-size: 0.34667rem;
        color: #898989;
        letter-spacing: 0;
        margin-bottom: 15px;
        font-weight: 400;
    }

    h5 {
        font-size: 0.34667rem;
        color: #333333;
        letter-spacing: 0.02133rem;
        font-weight: 500;
        margin-bottom: 0.16rem;
    }
}

.right {
    i {
        margin-right: 20px;
        border: 1px solid #D889A8;
        padding: 10px;
        border-radius: 50%;
        color: #D889A8;
    }
}
</style>