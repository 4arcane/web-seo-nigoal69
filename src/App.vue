<script>
import TopBarLeft from "./components/TopBarLeft.vue";
import TopBarRight from "./components/TopBarRight.vue";
import HeaderDetail from './components/HeaderDetail.vue'
import FixFooter from "./components/FixFooter.vue";
import FooterDetail from "./components/FooterDetail.vue";
import ToTop from "./components/ToTop.vue";
// import MyModal from "./components/MyModal.vue";

export default {
  components: {
    TopBarRight,
    TopBarLeft,
    HeaderDetail,
    FixFooter,
    FooterDetail,
    ToTop,
    // MyModal
  },
  data() {
    return {
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      let topbar = document.getElementById("topbar");
      let topbar2 = document.getElementById("topbar2");

      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        topbar.style.top = "10px";
        topbar2.style.top = "10px";
      } else {
        topbar.style.top = "230px";
        topbar2.style.top = "230px";
      }
    }
  }
}
</script>

<template>
  <TopBarLeft />
  <TopBarRight />
  <HeaderDetail />

  <router-view />

  <FixFooter />
  <FooterDetail />
  <ToTop />
  <!-- <MyModal /> -->
</template>

<style scoped></style>
