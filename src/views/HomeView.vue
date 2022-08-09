<template>
  <div class="home">
    <!-- <MyHeader>首页</MyHeader>
    <MyBanner :list="bannerData" v-if="flag"></MyBanner>
    <NewList :list="listData" v-if="flag"></NewList>
    <MyItem :list="newListData" v-if="flag"></MyItem>
    <NewBanner :banner-data="banner2" v-if="flag"></NewBanner>

    <MyItem :list="weekendIds" v-if="flag"></MyItem>
    <HomeList :data="weekendData" v-if="flag"></HomeList>

    <MyItem :list="xinjiangIds" v-if="flag"></MyItem>
    <HomeList :data="xinjiangData" v-if="flag"></HomeList>

    <MyItem :list="neimengIds" v-if="flag"></MyItem>
    <HomeList :data="neimengData" v-if="flag"></HomeList>

    <MyItem :list="xibeiIds" v-if="flag"></MyItem>
    <HomeList :data="xibeiData" v-if="flag"></HomeList>

    <MyItem :list="yunnanIds" v-if="flag"></MyItem>
    <HomeList :data="yunnanData" v-if="flag"></HomeList>

    <MyItem :list="sanyaIds" v-if="flag"></MyItem>
    <HomeList :data="sanyaData" v-if="flag"></HomeList>

    <MyItem :list="mijingIds" v-if="flag"></MyItem>
    <HomeList :data="mijingData" v-if="flag"></HomeList>

    <MyItem :list="guangIds" v-if="flag"></MyItem>
    <HomeList :data="guangData" v-if="flag"></HomeList>

    <MyItem :list="beijingIds" v-if="flag"></MyItem>
    <HomeList :data="baijingData" v-if="flag"></HomeList>


    <HomeList :data="dingzhiList" v-if="flag"></HomeList>
    <CustomList v-if="flag"></CustomList> -->
    <MyHeader>首页</MyHeader>
    <TempData :data="ll" v-if="flag"></TempData>
    <CustomList v-if="flag"></CustomList>
  </div>
</template>

<script>
// @ is an alias to /src
import TempData from '@/components/TempData.vue';
import MyHeader from '@/components/MyHeader.vue'
import MyBanner from '@/components/MyBanner.vue'
import NewList from '@/components/NewList.vue';
import HomeList from '@/components/HomeList.vue';
import CustomList from "@/components/CustomList.vue"
import NewBanner from '@/components/NewBanner.vue';
import MyItem from '@/components/MyItem.vue';
import { getId } from '@/tools/ajax';
import { getData } from '@/tools/ajax';
export default {
  name: 'HomeView',
  components: {
    MyHeader,
    // MyBanner,
    // NewList,
    // HomeList,
    CustomList,
    // NewBanner,
    // MyItem,
    TempData

  },

  data() {
    return {
      // bannerData: [],
      // listData: [],
      // newListData: [],
      // banner2: [],
      // weekendData: [],
      // weekendIds: [],
      // xinjiangIds: [],
      // xinjiangData: [],
      // neimengIds: [],
      // neimengData: [],
      // xibeiIds: [],
      // xibeiData: [],
      // yunnanIds: [],
      // yunnanData: [],
      // sanyaIds: [],
      // sanyaData: [],
      // mijingIds: [],
      // mijingData: [],
      // guangIds: [],
      // guangData: [],
      // beijingIds: [],
      // baijingData: [],
      // dingzhiData: [],
      // dingzhiList: [],
      ll: [],
      flag: false
    }
  },
  created() {
    getId().then(res => {
      this.list = res.data.nav
      getData({
        pageId: this.list[0].pageId
      }).then(res => {
        console.log(res);
        this.ll = res.data.data
        // this.bannerData = res.data.data[0].data
        // this.listData = res.data.data[1].data
        // this.newListData = res.data.data[2].data
        // this.banner2 = res.data.data[3].data
        // this.weekendIds = res.data.data[4].data
        // this.weekendData = res.data.data[5].data.ids
        // this.xinjiangIds = res.data.data[6].data
        // this.xinjiangData = res.data.data[7].data.ids
        // this.neimengIds = res.data.data[8].data
        // this.neimengData = res.data.data[9].data.ids
        // this.xibeiIds = res.data.data[10].data
        // this.xibeiData = res.data.data[11].data.ids
        // this.yunnanIds = res.data.data[12].data
        // this.yunnanData = res.data.data[13].data.ids
        // this.sanyaIds = res.data.data[14].data
        // this.sanyaData = res.data.data[15].data.ids
        // this.mijingIds = res.data.data[16].data
        // this.mijingData = res.data.data[17].data.ids
        // this.guangIds = res.data.data[18].data
        // this.guangData = res.data.data[19].data.ids
        // this.beijingIds = res.data.data[20].data
        // this.baijingData = res.data.data[21].data.ids
        // this.dingzhiData = res.data.data[22].data
        this.flag = true
      })
    })

  },
}
</script>
