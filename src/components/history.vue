<template>
  <div class="history-container">
    <el-card class="history-card" shadow="hover">
      <h1 class="title">绥德历史概览</h1>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="古代历史" name="1">
          <img src="@/assets/his_img1.jpg" alt="古代历史" class="history-image" />
          <p>绥德地区在古代曾是繁荣的文化中心，拥有丰富的历史遗迹和文化传承。自古以来，这里的人们就以农耕文明为基础，创造了灿烂的文化。古代的绥德还是重要的商贸通道，吸引了各地的商人和文化交流。</p>
        </el-collapse-item>
        <el-collapse-item title="近现代历史" name="2">
          <img src="@/assets/his_img2.jpg" alt="近现代历史" class="history-image" />
          <p>近现代时期，绥德见证了许多重要的历史事件，成为了国家发展的重要一环。从清末的战乱到民国时期的变革，再到解放战争的胜利，绥德的人民始终坚韧不拔。这一时期的绥德还涌现了许多杰出的人才，为国家的进步做出了贡献。</p>
        </el-collapse-item>
        <el-collapse-item title="现代发展" name="3">
          <img src="@/assets/his_img3.jpg" alt="现代发展" class="history-image" />
          <p>
            现今的绥德是一个充满活力和创新的城市，不断推动着地区的经济和文化发展。现代化的基础设施、先进的教育体系、繁荣的商业环境，使绥德成为了一个迅速崛起的现代都市。同时，绥德还保留了丰富的历史文化底蕴，成为了一个融合古今的美丽城市。
          </p>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>


<script>
export default {
  name: "history.vue",
  data() {
    return {
      activeNames: ['1']
    };
  }
}
</script>

<style scoped lang="less">
.history-container {
  padding: 20px;
  background: #f5f5f5;
}

.history-card {
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .title {
    text-align: center;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .history-image {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
}
</style>
