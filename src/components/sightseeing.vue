<template>
	<div class="sightseeing">
		<div class="image-wrapper" v-for="(item,index) in srcList" :key="index">
			<el-image :src="item.src" fit="fill" @mouseenter="displayOverlay(index)" @mouseleave="hideOverlay(index)"
				@click="clickImg(item,index)">
			</el-image>
			<div class="image-overlay" :class="{ 'show-overlay': showOverlay === index }">
				<h3>{{item.title}}</h3>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sightseeing.vue",
		data() {
			return {
				srcList: [{
						src: require("@/assets/sightseeing/陈列馆广场.jpg"),
						title: "陈列馆广场",
					},
					{
						src: require("@/assets/sightseeing/大厅.jpg"),
						title: "大厅",
					}, {
						src: require("@/assets/sightseeing/党员政治生活馆.jpg"),
						title: "党员政治生活馆",
					}, {
						src: require("@/assets/sightseeing/第四展厅-3.jpg"),
						title: "第四展厅1",
					}, {
						src: require("@/assets/sightseeing/第四展厅-4.jpg"),
						title: "第四展厅2",
					}, {
						src: require("@/assets/sightseeing/二楼大厅.jpg"),
						title: "二楼大厅",
					}, {
						src: require("@/assets/sightseeing/过厅.jpg"),
						title: "过厅",
					}, {
						src: require("@/assets/sightseeing/会址广场.jpg"),
						title: "会址广场",
					}, {
						src: require("@/assets/sightseeing/刘少奇李卓然住室.jpg"),
						title: "刘少奇 李卓然住室",
					}, {
						src: require("@/assets/sightseeing/彭德怀杨尚昆住室.jpg"),
						title: "彭德怀杨尚昆住室",
					}, {
						src: require("@/assets/sightseeing/天井.jpg"),
						title: "天井",
					}, {
						src: require("@/assets/sightseeing/一战作战办公室.jpg"),
						title: "一战作战办公室",
					}, {
						src: require("@/assets/sightseeing/主入口.jpg"),
						title: "主入口",
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
	.sightseeing {
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