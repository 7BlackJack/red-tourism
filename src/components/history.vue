<template>
  <div class="history-container">
    <el-card class="history-card" shadow="hover">
      <h1 class="title">绥德历史概览</h1>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="古代历史" name="1">
          <img src="@/assets/history/古.jpg" alt="古代历史" class="history-image" />
          <p>遵义，地处中国西南边陲，是中华人民共和国贵州省下辖的地级市，位于贵州省北部，为全省第二大城市。北临重庆市，东接铜仁市，东南界黔东南州，南邻贵阳市、黔南州，西南连毕节市，西毗四川省泸州市。位处贵州高原北部大娄山区，乌江流经南面边界。全市总面积3.08万平方公里，人口619.21万。
</p>
        </el-collapse-item>
        <el-collapse-item title="近现代历史" name="2">
          <img src="@/assets/history/近现代.jpg" alt="近现代历史" class="history-image" />
          <p>遵义，这座转折之城，中国工农红军和中国共产党在这里发生了生死攸关的一次历史转折。1935年1月，地处西南的贵州遵义城迎来了一支人民自己的军队。由中国共产党领导的这支军队——中国工农红军，在赣南闽西中央革命根据地左冲右突，由于军事领导的错误，被国民党军逼出苏区，开始了人类史无前例的万里长征。当时，这支濒临绝境的军队，好不容易进入贵州，渡过乌江，来到遵义，并在遵义发生了天翻地覆的变化。遵义的闻名很大程度上源于历史上那次著名的遵义会议的召开，确立了毛泽东同志在党内的领导地位，挽救了中国革命。新中国成立后，遵义成为国务院首批公布的历史文化名城之一。
</p>
        </el-collapse-item>
        <el-collapse-item title="现代发展" name="3">
          <img src="@/assets/history/现代.jpg" alt="现代发展" class="history-image" />
          <p>
            遵义最美就在遵义会议会址、子尹路一带。这里没有高楼大厦，周围就是山，古色古香、干干净净。这份干净铺开来，整个遵义城都染上了浓厚的古色韵味。遵义会议会址位于红花岗区老城子尹路96号，会址房屋原为国民党军第25军第二师师长柏辉章的私邸，建于上世纪三十年代初，建筑物由主楼和跨院两部分组成。整栋主楼道面阔25.19米，通进深17.01米，通高12米，占地面积528平方米，建筑面积428.48平方米。这幢砖木结构、中西合璧的两层楼房，建于上世纪30年代初，是当时遵义城里首屈一指的宏伟建筑。高墙垂门，巍巍峨峨。
            
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
