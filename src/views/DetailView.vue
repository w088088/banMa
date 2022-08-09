<template>
    <TempData :data="list" v-if="flag"></TempData>
</template>
<script>
import TempData from "../components/TempData.vue"
import { getData } from '@/tools/ajax';
export default {
    name: 'DetailView',
    components: {
        TempData
    },
    data() {
        return {
            list: [],
            flag: false
        }
    },
    created() {
        this.gfun()
    },
    methods: {
        gfun() {
            getData({
                pageId: this.$route.query.id
            }).then(res => {
                console.log(this.$route.query.id);
                console.log(res, 11111111);
                this.list = res.data.data
                this.flag = true
            })
        }
    },
    watch: {
        $route() {
            this.gfun()
        }
    }
};
</script>

<style lang="scss" scoped>
</style>