<template>
	<div class="index">

		<div class="title-container">
			<el-typography class="title">
				<el-typography-item tag="h2" variant="title">遵义</el-typography-item>
			</el-typography>
			<el-typography class="subtitle">
				<el-typography-item tag="h3" variant="subtitle">遵义——红军长征“转折之地”</el-typography-item>
				<el-typography-item tag="h3"
					variant="subtitle">遵义，贵州第二大城市，1935年召开的遵义会议是中国共产党历史上一个生死攸关的转折点，在危急关头挽救了党，挽救了红军，挽救了中国革命，是中国共产党在政治上走向成熟的标志。</el-typography-item>
				<el-typography-item tag="h3"
					variant="subtitle">遵义会议后，面对国民党军队重兵围追堵截，毛泽东等指挥了四渡赤水、虚指贵阳、威逼昆明、巧渡金沙江……红军在川黔滇万水千山间纵横驰骋，不断打开新的局面。</el-typography-item>
				<el-typography-item tag="h3"
					variant="subtitle">如今，在遵义会议会址，游人如织；刚刚脱贫的村庄里，乡村产业发展如火如荼。这里是昔日中国革命的转折之地，也是中国乡村振兴的实践之处。</el-typography-item>
			</el-typography>
		</div>

		<el-carousel :interval="4000" type="card" height="500px" class="el-carousel">
			<el-carousel-item v-for="(item, index) in srcList" :key="index">
				<div class="image-wrapper">
					<el-image :src="item" fit="fill" style="width: 100%;height: 100%"
						@click="clickImg(item, index)"></el-image>
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
					require("@/assets/sightseeing/主入口.jpg"),
					require("@/assets/sightseeing/二楼大厅.jpg"), 
					require("@/assets/foods/豆花面.jpg"), 
					require("@/assets/foods/米豆腐.jpg"), 
					require("@/assets/history/现代.jpg"), 
					require("@/assets/culture/娄山关1.jpg"),
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