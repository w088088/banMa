<template>
    <div class="newList-wrap" v-if="list.length">
        <div class="icons">
            <router-link :to="'/detail?id=' + urls[index]" v-for="(item, index) in list">
                <img :src="item.img.url" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: ' NewList',
    props: ["list"],
    data() {
        return {
            urls: []
        }
    },
    created() {
        this.list.forEach((item, index) => {
            // console.log(item);
            this.urls.push(item.url.split("activity/")[1])
            // console.log(this.urls);
        })
    },
};
</script>

 <style lang="scss" scoped>
 .newList-wrap {
     margin: 18px 18px 32px;
 
     img {
         width: 100%;
     }
 }
 
 .banner-wrap {
     width: 100%;
 }
 
 .icons {
     display: flex;
     flex-wrap: wrap;
 
     a {
         display: flex;
         flex-wrap: wrap;
         width: 33.33%;
     }
 
     img {
         width: 100%;
         margin-bottom: 20px;
     }
 }
 </style>
