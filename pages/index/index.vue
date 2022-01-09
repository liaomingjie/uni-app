<template>
	<view class="indexContainer">
		<!-- header -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png"></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input class="searchInput" type="text" placeholder="搜索商品" placeholder-class="place">
			</view>
			<button class="btn">北方汉子</button>
		</view>
		
		<!-- nav -->
		<scroll-view scroll-x enable-flex class="navScroll">
			<view class="navItem active">
				推荐
			</view>
			<view class="navItem" v-for="(nav,index) in navList" :key="nav.L1Id">
				{{nav.text}}
			</view>
		</scroll-view>
		
		<!-- 代表的是主要内容 -->
		<scroll-view scroll-y="true" class="mainScroll" enable-flex>
			<view class="mainItem">
				<swiper class="mainSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/22424b325e13e78b9e0add6c4c9d4a4e.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/fb2a55f97c155f1b94b17dab79c5efa1.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/9428f4d0586311ff2973374682449734.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/9428f4d0586311ff2973374682449734.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
						</view>
					</swiper-item>
					
					<swiper-item>
						<view class="swiper-item">
							<image src="https://yanxuan.nosdn.127.net/573db75ce9c127ccf7ed9a92dfba9d61.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image>
						</view>
					</swiper-item>
				</swiper>
				
				<view class="iconList">
					<view class="iconItem" v-for="(icon,index) in iconList" :key="icon.desc">
						<image class="iconImg" :src="icon.icon"></image>
						<text class="iconText">{{icon.desc}}</text>
					</view>
				</view>
				
				
				<view class="categoryList">
					<view class="category" v-for="(category,index) in navList" :key="category.L1Id">
						<image class="categoryImg" :src="category.picUrl"></image>
						<text class="categoryText">{{category.text}}</text>
					</view>
				</view>
				
				<Floor v-for="(floor,index) in floorList" :key="index" :floor="floor"></Floor>
			
			</view>
		</scroll-view>
		
		
	</view>
</template>

<script>
	import Floor from './components/Floor/index.vue'
	import {mapGetters} from 'vuex'
	export default {
		components:{
			Floor
		},
		mounted(){
			this.getIndexData()
		},
		methods:{
			getIndexData(){
				this.$store.dispatch('getIndexData')
			}
		},
		computed:{
			...mapGetters(['navList','iconList','floorList'])
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		height:100%
		.header
			display flex
			height 80rpx
			align-items center
			.logo
				width 120rpx
				height 40rpx
				margin 0 20rpx
			.search
				display flex
				align-items center
				flex 1
				height 60rpx
				box-sizing border-box
				border 1rpx solid #aaa
				.iconfont
					margin 0 10rpx
				.searchInput
					font-size 28rpx
					// color red
				.place
					color red
			.btn
				width 140rpx
				height 60rpx
				font-size 28rpx
				text-align center
				line-height 60rpx
				padding 0 10rpx
				margin 0 10rpx
		.navScroll
			display flex
			height 80rpx
			.navItem
				flex-shrink 0
				width 140rpx
				height 80rpx
				font-size 28rpx
				text-align center
				line-height 80rpx
				box-sizing border-box
				&.active
					border-bottom 1rpx solid red
		.mainScroll
			height calc(100vh - 160rpx)
			.mainSwiper
				image
					width 100%
					height 300rpx
			.iconList
				display flex
				justify-content space-around
				margin-top 10rpx
				.iconItem
					display flex
					align-items center
					.iconImg
						width 32rpx
						height 32rpx
					.iconText
						font-size 28rpx
			.categoryList
				display flex
				flex-wrap wrap
				justify-content space-around
				.category
					width 20%
					display flex
					flex-direction column
					align-items center
					.categoryImg
						width 110rpx
						height 110rpx
						margin 20rpx 0
					.categoryText
						font-size 28rpx
					
</style>