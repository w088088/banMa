<template>
    <div class="weekend">
        <!-- <div>
            <img :src="list[0].img.url" alt="">
        </div> -->
        <div class="hotel_wrap">
            <router-link :to="'/quality?id=' + item.id" v-for="(item, index) in hotelData" :key="item.id">
                <div class="item">
                    <img :src="item.img" alt="">
                    <p>{{ item.title }}</p>
                    <p>{{ item.subtitle }}</p>
                    <ul>
                        <li v-for="(it, ind) in item.mark" :key="ind">{{ it.name }}</li>
                    </ul>
                    <p class="price">
                        <span v-if="item.price !== '0.00'">
                            ￥{{ item.price }}起/{{ item.unit }}
                        </span>
                        <span v-else>
                            现询
                        </span>
                    </p>
                    <span class="mark">
                        {{ item.tip_mark }}
                    </span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { getHotelData } from "../tools/ajax"
export default {
    name: 'HomeList',
    props: ["data"],
    data() {
        return {
            hotelData: [],
            flag: false
        };
    },
    created() {
        getHotelData({
            ids: this.data
        }).then(res => {
            // console.log(res);
            this.hotelData = res.data.list
            this.flag = true
        })
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.weekend {
    margin: 18px 18px 32px;

    img {
        width: 100%;
    }

    .item {
        position: relative;
    }

    .hotel_wrap {
        display: flex;
        flex-wrap: wrap;

        a {
            width: 50%;

            .item {
                width: 100%;
            }
        }

        .mark {
            position: absolute;
            font-size: 10px;
            padding: 0.01333rem 0.04rem;
            top: 0;
            left: 0.24rem;
            color: #fff;
            background: rgba(0, 0, 0, .5);
            border-radius: 0 0 0.04rem 0.04rem;
        }

        div {
            width: 49%;

            img {
                width: 330px;
                height: 204px;
            }

            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;

            }

            p:nth-child(2) {
                font-size: 12px;
                margin-bottom: 6px;
                color: #333;
                font-weight: 500;
            }

            p:nth-child(3) {
                color: #898989;
                letter-spacing: .15px;
                font-size: 10px;
            }

            .price {
                font-size: 12px;
                letter-spacing: .3px;
                color: #c04374;
                white-space: nowrap;
                margin-bottom: 10px;
            }
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            margin: 10px 0;

            li {
                font-size: 9px;
                padding: 1px 3px;
                margin-right: 6px;
                margin-bottom: 6px;
                border: 0.5px solid rgba(193, 67, 116, .2);
                color: #c14374;
                letter-spacing: .2px;
            }
        }
    }
}
</style>