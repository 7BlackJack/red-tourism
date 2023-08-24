// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backgroundImage: require('@/assets/background_img.jpg'),
    backgroundImages: [
      require('@/assets/background_img.jpg'),
      require('@/assets/background2_img.jpg'),
      require('@/assets/background_img3.jpg'),
      require('@/assets/background_img4.jpg'),
      // 更多图片
    ],
    currentImageIndex: 0 // 当前图片索引
  },
  mutations: {
    changeBackgroundImage(state) {
      state.currentImageIndex = (state.currentImageIndex + 1) % state.backgroundImages.length;
      state.backgroundImage = state.backgroundImages[state.currentImageIndex];
    }
  }
});
