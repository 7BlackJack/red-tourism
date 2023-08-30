<template>
	<div class="foods">
		<div class="image-wrapper" v-for="(item,index) in srcList" :key="index">
			<el-image :src="item.src" fit="fill" @mouseenter="displayOverlay(index)" @mouseleave="hideOverlay(index)"
				@click="clickImg(item)">
			</el-image>
			<div class="image-overlay" :class="{ 'show-overlay': showOverlay === index }">
				<h3>{{item.title}}</h3>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "foods.vue",
		data() {
			return {
				srcList: [{
						src: require("@/assets/foods/豆花面.jpg"),
						title: "豆花面",
					},
					{
						src: require("@/assets/foods/蜂岩黄饺.jpg"),
						title: "蜂岩黄饺",
					},
					{
						src: require("@/assets/foods/鸡蛋糕.jpg"),
						title: "鸡蛋糕",
					},
					{
						src: require("@/assets/foods/米豆腐.jpg"),
						title: "米豆腐",
					}, {
						src: require("@/assets/foods/酸鲊鱼.jpg"),
						title: "酸鲊鱼",
					}, {
						src: require("@/assets/foods/虾子羊肉粉.jpg"),
						title: "虾子羊肉粉",
					}, {
						src: require("@/assets/foods/鸭溪凉粉.jpg"),
						title: "鸭溪凉粉",
					}, {
						src: require("@/assets/foods/洋芋耙.jpg"),
						title: "洋芋耙",
					}, {
						src: require("@/assets/foods/猪儿粑.jpg"),
						title: "猪儿粑",
					},
				],
				showOverlay: false,
			}
		},
		methods: {
			displayOverlay(index) {
				this.showOverlay = index;
			},
			hideOverlay(index) {
				this.showOverlay = false;
			},
			//点击图片进行跳转，传item和index
			clickImg(item, index) {
				this.$router.push({
					name: 'detail',
					params: {
						src: item.src,
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.foods {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		width: 100%;
		margin-right: -20px;
		/* 负值用于抵消间隔 */

		.image-wrapper {
			flex-basis: calc(25% - 20px);
			/* 每行容纳4个el-image，减去间隔的宽度 */
			margin: 10px;
			height: 350px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
			transition: transform 0.5s cubic-bezier(0.30, 0, 0.70, 1);

			.el-image {
				width: 100%;
				height: 100%;
				border-radius: 5%;
			}

			.image-overlay {
				position: absolute;
				z-index: 999;
				height: 100%;
				top: 290px;
				left: 0;
				right: 0;
				padding: 20px;
				color: white;
				background: rgba(0, 0, 0, 0.3);
				text-align: center;
				opacity: 0;
				transition: opacity 0.3s;

				h3 {
					color: white;
					margin: 0;

				}
			}

			.image-overlay.show-overlay {
				opacity: 1;
			}
		}

		.image-wrapper:hover {
			transform: scale(1.05);
		}

	}
</style>