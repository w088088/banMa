<template>
    <div class="wrap">
        <div class="search-warp">
            <div class="search">
                <van-icon name="search" size="20" />
                <input type="text" v-model="keyword" placeholder="请输入" @keyup.enter="search">
            </div>
            <div>
                <router-link to="/">
                    <span>取消</span>
                </router-link>
            </div>
        </div>
        <div class="hot">
            <p>热门搜索</p>
            <ul>
                <li v-for="item in hotList" :key="item">{{ item.keyword }}</li>
            </ul>
        </div>
        <div class="history">
            <p>搜索历史</p>
            <div v-if="historyList.length">
                <van-icon name="delete-o" class="clear" size="20" @click="clear" />
            </div>
            <ul>
                <li v-for="item in historyList" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getHot } from '@/tools/ajax';
export default {
    name: 'SearchView',

    data() {
        return {
            hotList: [],
            historyList: [],
            keyword: ""
        };
    },
    created() {
        this.historyList = localStorage.getItem("history") || []
    },
    mounted() {
        getHot().then(res => {
            this.hotList = res.data.list
        })
    },

    methods: {
        search() {
            let newArr = []
            let index = newArr.findIndex((item, index) => { item == this.keyword })
            if (index == -1) {
                newArr.push(this.keyword)
            }
            localStorage.setItem("history", newArr)
            this.$router.push("/searchDetail?keyword=" + this.keyword)
        },
        clear() {
            localStorage.clear()
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
    width: 90%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border: 1px solid #dedede;
    padding: 15px;
    box-sizing: border-box;

    input {
        width: 100%;
        border: none;
        text-indent: 20px;
    }
}

.search-warp {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hot,
.history {
    margin-top: 50px;
    text-align: left;
    font-size: 0.4rem;
    line-height: 0.64rem;

    p {
        color: #333;

    }

    ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;

        li {
            margin: 0 0.1rem 0.42667rem 0;
            padding: 0.26667rem 0.74667rem;
            color: #333;
            background: #F6F6F6;
            font-size: 0.34667rem;
            font-weight: 300;

        }
    }



}

.history {
    position: relative;
}

.clear {
    position: absolute;
    right: 0;
    top: 0;
}
</style>