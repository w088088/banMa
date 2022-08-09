<template>
    <div class="wrap">
        <div class="tops">
            <img src="https://product-ssl-qiniu.bmtrip.com/product_5e996d1a5a1e2.jpg?imageView2/4/w/750/h/360/format/jpg/interlace/1/q/80"
                alt="">
            <div class="tab">
                <router-link to="/Product/individual">
                    <button class="tab1">私人定制</button>
                </router-link>
                <router-link to="/Product/team">
                    <button class="tab2">企业定制</button>
                </router-link>
            </div>
            <CustomList></CustomList>
            <TempData :data="list" v-if="flag"></TempData>
        </div>
    </div>
</template>

<script>
import TempData from '@/components/TempData.vue';
import CustomList from '@/components/CustomList.vue';
import { getIndividual } from "../tools/ajax"
export default {
    name: '斑马IndividualView',
    components: {
        CustomList,
        TempData
    },
    data() {
        return {
            flag: false,
            list: []
        };
    },
    created() {
        getIndividual().then(res => {
            console.log(res, 111111111111);
            this.list = res.data.data
            this.flag = true
        })
    }
};
</script>

<style lang="scss" scoped>
.tops {
    position: relative;

    img {
        width: 100%;
    }
}

.tab {
    display: flex;
    height: 52Px;
    margin: 0 18px;
    // position: absolute;

    a {
        width: 100%;
        height: 100%;
    }

    button {
        width: 100%;
        height: 100%;
        border: none;
    }
}

.tab1 {
    color: #C14374;
    background-color: #FFFFFF;
}

.tab2 {
    background-color: rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
}
</style>