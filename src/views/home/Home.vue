<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommend="recommend"/>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
  },

  data() {
    return {
      banners: [],
      recommend: []
    }
  },

  created() {
    //发送请求获取轮播图和介绍页面的数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>