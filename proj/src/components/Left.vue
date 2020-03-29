<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">
			<li @click="menu1">笔记本电脑</li>
			<li @click="menu2">手机</li>
			<li @click="menu3">服饰</li>
			<li @click="menu4">手表</li>
			<li>书籍</li>
			<li>玩具</li>
			<li>小家电</li>
			<li>学习用品</li>
			<li>办公用品</li>
			<li>游戏设备</li>
			<li>游戏卡通</li>
			<li>母婴用品</li>
			<li>医药保健</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Msg from './msg.js'
	export default{
		methods:{
			menu1:function(){
				Msg.$emit("val","1");
	
			},
			menu2:function(){
				Msg.$emit("val","2");
				
			},
			menu3:function(){
				Msg.$emit("val","3");
				
			},
			menu4:function(){
				Msg.$emit("val","4");
				
			}
		}
	}
</script>

<style>
	.title{
		width: 100px;
		color: red;
	}
	.menu li{
		list-style: none;
		height: 46px;
		margin-bottom: 2px;
		background-color: white;
		line-height: 46px;
		cursor: pointer;
	}
</style>
