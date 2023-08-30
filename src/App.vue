<template>
  <div id="app" :style="backgroundStyle">
    <router-view></router-view>
  </div>
</template>

<script>
import MainView from "@/components/MainView";

export default {
  name: 'App',
  components: {
    MainView
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.$store.state.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100%',
        margin: '0 auto',
      };
    }
  },


}
</script>

<style lang="less" >
#app {
  transition: background-image 0.5s ease-in-out;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0 auto;
  width: 100%;
}
body{
	width:100%;
	height:100%;
	margin: 0 !important;
	overflow: auto;
}
</style>
