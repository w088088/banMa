<template>
    <div class="wrap">
        <div class="t">
            <div class="top">
                <h3>Hi,终于等你到你</h3>
                <p>让每个家庭省心，精彩的旅行体验</p>
                <van-button color="linear-gradient(to right, #FCFCFB, #C8C7C4)">
                    登录/注册
                </van-button>
                <div class="bottom">
                    <div>
                        <p>---</p>
                        <p>优惠券</p>
                    </div>
                    丨
                    <div>
                        <p>---</p>
                        <p>斑马豆</p>
                    </div>
                    丨
                    <div>
                        <p>---</p>
                        <p>我的收藏</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cell">
            <van-cell title="我的订单" icon="comment-o" />
            <van-cell title="用户反馈" icon="comment-o" />
            <van-cell title="设置" icon="setting-o" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserView',

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
.cell {
    background-color: #fff;
    text-align: left;

    :deep(span) {
        margin-left: 30px;
    }
}

.t {
    background-color: #fff;
}

.wrap {
    background-color: #F5F5F5;

    .top {
        margin: 20px;
        background-image: linear-gradient(to right, #64625D, #221C11);
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        height: 400px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        background-color: #fff;

        h3 {
            padding-top: 30px;

            font-weight: 500;
            font-size: 20px;
        }

        p {
            margin: 30px 0;
        }

        button {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }
    }

    .bottom {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        p {
            margin: 0;
        }
    }
}
</style>