<template>
    <div class="detail">
      <div class="img_container">
        <el-image
          :src="dataList.src"
          >
        </el-image>
      </div>
      <div class="content_container" v-show="showContent">
          <div class="content_title">
            <div class="left">
              <h3>{{dataList.title}}</h3>
              <h4>{{ dataList.author }}</h4>
            </div>
          </div>
          <div class="content_description">
            <div class="left">
                {{splitDescription.left}}
            </div>
            <div class="right">
              {{splitDescription.right}}
            </div>

          </div>
      </div>
    </div>
</template>

<script>
import "../style/common.less"
import axios from "axios";
export default {
  name: "detail.vue",
  props:{
    src:{
      type:String,
      default:""
    },
  },
  data(){
    return{
      dataList:{
        src:this.$route.params.src,
        title:this.$route.params.title ? this.$route.params.title : "",
        author:"遵义",
        description:this.$route.params.description ? this.$route.params.description : "",
		createTime:"现代",
        size:"w650 x h550 mm",
      },
      showContent:true,
    }
  },
  methods:{
    handleError(){
      this.$message.error("加载失败~~")
    }
  },
  computed: {
    splitDescription() {
      const maxLength = Math.ceil(this.dataList.description.length / 2);
      const leftDescription = this.dataList.description.substring(0, maxLength);
      const rightDescription = this.dataList.description.substring(maxLength);
      return {
        left: leftDescription,
        right: rightDescription
      };
    }
  },
  mounted() {
    //这里应该拿到组件传的值，然后发一个ajax从后端获取该item对应的那个对象
    //获取到后更新数组
    console.log(this.$route.params.src)
    

  }

}
</script>

<style scoped lang="less">
    .detail{
      width: 100%;
      .img_container{
        padding: 30px 0px;
        border-bottom: 1px solid #e6e6e6;
        .el-image{
          width: 70%;
          margin: auto;
        }
      }
      .content_container{
        width: 90%;
        margin: auto;
        margin-top: 20px;
		color: red;
		border-radius: 4px;
		background-color: #FFF;
        .content_title{
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .left{
            h3{
              color: #333333;
              font-size: 22px;
              font-weight: bolder;
            }
          }
          .right{
            text-align: right;
          }
        }

        .content_description{
          display: flex;
          justify-content: space-between;
          .left{
            width: 46%;
            text-align: left;
            margin-left: 0;
          }
          .right{
            width: 46%;
            text-align: left;
            margin-right: 0;
          }

        }
        .content_arguments{
          margin-top: 20px;
          margin-left: 0;
          text-align: left;
        }
      }
    }
</style>