<template>
    <div class="wrap" v-for="(item, index) in list">
        <img :src="item.img" alt="">
        <div class="cont">
            <div class="title">
                {{ item.title.slice(0, 20) }}
            </div>
            <div class="subtitle">
                {{ item.subtitle }}
            </div>
            <ul>
                <li v-for="(it, ind) in item.mark">
                    {{ it.name }}
                </li>
            </ul>
            <div v-if="item.price !== '0.00'" class="price">
                ￥ {{ item.price }}/起{{ item.unit }}
            </div>
            <div v-else class="price">
                现询
            </div>
        </div>
        <div class="pos">
            {{ item.tip_mark }}
        </div>
    </div>
</template>

<script>
export default {
    name: '斑马SearchIetm',
    props: ["list"],
};
</script>

<style lang="scss" scoped>
.wrap {
    background-color: #fff;
    position: relative;
    width: 100%;

    img {
        width: 100%;
    }

    .pos {
        position: absolute;
        top: 30px;
        left: 30px;
        padding: 10px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.3);
    }
}

.title {
    font-size: 15px;
    color: #333;
    letter-spacing: 0;
    font-weight: 500;
    margin-bottom: 6px;
}

.subtitle {
    font-size: 11px;
    color: #898989;
    letter-spacing: .15px;
    margin-bottom: 9px;
}

.cont {
    padding: 20px;
    text-align: left;

    div,
    ul {
        padding-bottom: 20px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            list-style: none;
            border: 0.5px solid rgba(193, 67, 116, .2);
            padding: 3px 6px;
            font-family: PingFangSC-Light;
            font-size: 10px;
            color: #c14374;
            letter-spacing: .2px;
            margin-right: 9px;
        }
    }
}

.price {
    font-size: 18px;
    color: #c04374;
    letter-spacing: .8px;
    white-space: nowrap;
}
</style>