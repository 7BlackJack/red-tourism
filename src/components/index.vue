<template>
  <div class="index">

    <div class="title-container">
      <el-typography class="title">
        <el-typography-item tag="h2" variant="title">绥德</el-typography-item>
      </el-typography>
      <el-typography class="subtitle">
        <el-typography-item tag="h3" variant="subtitle">黄天厚土大河长,沟壑纵横风雨狂</el-typography-item>
      </el-typography>
    </div>

    <el-carousel :interval="4000" type="card" height="500px" class="el-carousel">
      <el-carousel-item v-for="(item, index) in srcList" :key="index">
        <div class="image-wrapper">
          <el-image :src="item" fit="fill" style="width: 100%;height: 100%" @click="clickImg(item, index)"></el-image>
        </div>
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>
import "../style/common.less"
export default {
  name: "index.vue",
  data() {
    return {
      srcList: [
        "https://img1.baidu.com/it/u=2449690862,4217636808&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F6596122%2F2cc2b472a9e74e7ebb280d48dc524fcb.jpeg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvNjU5NjEyMi8yY2MyYjQ3MmE5ZTc0ZTdlYmIyODBkNDhkYzUyNGZjYi5qcGVn%2Fsign%2F642ef70d5ee973d6de818819f2bd14de.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1691305299&t=223e32967080de3c36283b3d139a331e",
        "https://img2.baidu.com/it/u=2823371836,3782431765&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
        "https://img2.baidu.com/it/u=443814581,4250074137&fm=253&fmt=auto&app=138&f=JPEG?w=375&h=500",
        "https://photo.tuchong.com/311799/f/5031789.jpg",
        "https://p3.ssl.qhimgs3.com/t01e1084ff18cbb24dc.jpg",
      ]
    }
  },
  methods: {
    clickImg(item, index) {
      this.$router.push({
        name: 'detail',
        params: {
          src: item,
        }
      })
    },

  }
}
</script>

<style scoped lang="less">
.index {
  color: #f0f0f0; // 设置全局文字颜色为浅色

  .title-container {
    display: flex; // 使用Flex布局
    flex-direction: column; // 设置Flex布局的方向为列，使标题堆叠
    align-items: center; // 居中对齐标题
    margin-top: 10px;
  }

  .title,
  .subtitle {
    background: linear-gradient(to right, #fafafa, #ff7f50);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    width: 100%; // 允许标题占用整个容器宽度
    text-align: center; // 居中对齐文本
    font-size: 20px;
  }

  .title {
    font-size: 36px;
    margin-bottom: 10px;
  }

 



  .explorer-button {
    background-color: #ff4d4f; // 设置按钮背景颜色为浅红色
    color: #f0f0f0; // 设置按钮文字颜色为浅色
    border: none;
    margin: 5px;
  }

  .el-carousel {
    margin-top: 30px;
    width: 80%;
    /* 或者你想要的任何宽度 */
    margin: 0 auto;
    /* 居中对齐 */

    .el-carousel__item {
      .image-wrapper {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        transition: transform 0.5s cubic-bezier(0.30, 0, 0.70, 1);
      }

      .image-wrapper:hover {
        transform: scale(1.2);
      }
    }

  }

}
</style>