<template>
  <el-container>
    <el-header class="el-header">
      <el-menu :default-active="activeIndex" style="width: 100%;border-bottom: 0 !important;" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="darkred" text-color="#f0f0f0" active-text-color="yellow">
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">文化与历史</template>
          <el-menu-item index="culture">文化</el-menu-item>
          <el-menu-item index="history">历史</el-menu-item>
          <el-menu-item index="foods">美食</el-menu-item>
        </el-submenu>
        <el-menu-item index="sightseeing">会址风光</el-menu-item>
      </el-menu>

      <!-- <div class="button_group">
        <el-button icon="el-icon-search" circle></el-button>
      </div> -->
    </el-header>

    <el-main class="main-container">
      <router-view></router-view>
      <el-button class="explorer-button" type="warning" @click="changeBackground" >更换背景</el-button>
      <div class="text-input">
        <el-input v-model="userText" placeholder="请输入红色经典文本" @keyup.enter.native="submitText"></el-input>
        <el-button type="primary" @click="submitText">确认发送</el-button>
      </div>
      <div class="text-display">
        <transition-group name="list" tag="div">
          <div v-for="(text, index) in classicTexts" :key="text" class="text-card">

            <el-card class="card-content" shadow="hover">
              <p class="text-content">{{ text }}</p>
            </el-card>
            <el-button icon="el-icon-document-delete" circle @click="deleteText(index)" class="delete-button"></el-button>
            <!-- 删除图标 -->
          </div>
        </transition-group>
        <div v-if="classicTexts.length === 0" class="no-comments">暂无评论</div> <!-- 暂无评论提示 -->
      </div>
    </el-main>

  </el-container>
</template>

<script>
import index from "./index"
export default {
  name: "MainView.vue",
  components: {
    index
  },
  data() {
    return {
      activeIndex: 'index',
      userText: '',
      classicTexts: [
        '红色旅游文化不仅是一次历史的回顾，更是一种精神的传承，它让人们深入了解那一段艰苦卓绝的革命历程，感受先烈们的英勇奋斗和坚定信念。',
        '通过参观红色旅游景点，人们可以亲身体验革命先辈们的生活环境和战斗场景，从而深化对共产主义理想的理解和信仰，弘扬红色精神，培育民族精神。',
        // 预设的红色经典语句
      ],
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(`/${key}`, () => { })
    },
    submitText() {
      if (this.userText.trim() !== '') {
        this.classicTexts.push(this.userText);
        this.userText = '';
      }
    },
    changeBackground() {
      this.$store.commit('changeBackgroundImage');
    },
    deleteText(index) {
      this.classicTexts.splice(index, 1); // 删除指定索引的文本
    },
  }
}
</script>

<style scoped lang="less">
.el-header {
  color: #333;
  text-align: center;
  line-height: 30px;
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
}

.el-main {
  background-size: cover;
  color: #333;
  text-align: center;
  line-height: 30px;
  padding: 0;
  width: 80%;
  margin: 0 auto;
}

.text-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.text-input,
.text-display {
  max-width: 80%;
  margin: 20px auto; // 增加上下间距
}

.el-breadcrumb {
  color: #141414; // 设置面包屑文本颜色为红色
}

.text-display {
  .text-card {
    color: #0f0f0f; // 设置文本颜色为红色
    margin-bottom: 20px; // 增加下间距
    display: flex; // 使用Flex布局
    justify-content: space-between; // 使评论和删除图标在同一行
    align-items: center;

    .card-content {
      flex-grow: 1; // 卡片占用所有可用空间
      font-family: 'Georgia', serif; // 设置字体样式
      font-size: 18px; // 设置字体大小
      text-align: left; // 文本左对齐
      color: #8B0000; // 设置文本颜色为深红色
    }

    .delete-button {
      margin-left: 10px; // 增加左间距
      color: #FF4500; // 设置删除按钮颜色
    }
  }
}

.no-comments {
  text-align: center;
  color: #999;
  margin: 20px 0;
  font-style: italic; // 斜体样式
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active in <2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}
</style>