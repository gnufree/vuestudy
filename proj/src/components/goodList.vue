<template>
	<div name="show">
		<ul class="goodList">
			<li v-for="goods in list">
				<img v-bind:src="goods.img">
				<p>{{goods.goodName}}</p>
			</li>
		</ul>
	</div>
</template>
<style>
	.goodList li{
		width: 200px;
		height: 200px;
		list-style: none;
		float: left;
		font-size: 9px;
		color: red;
		margin-bottom: 30px;
	}
	.goodList img {
		width: 180px;
		height: 180px;
	}
</style>
<script>
	export default{
		name:"show",
		data(){
			var _this=this;
			var url="";
			if(_this.goodId==1){
				url="json/bjb.json";
			} else if(_this.goodId==2){
				url="json/shouji.json";
			} else{
				url="json/bjb.json";
			}
			this.$axios.get(url).then(function(res){
				_this.list=res.data;
			})
			return{
			list:[]
			}
		},
		props:{
			goodId:Number
		},
		watch:{
			goodId(){
				var _this=this;
				var url="";
				if(_this.goodId==1){
					url="json/bjb.json";
				} else if(_this.goodId==2){
					url="json/shouji.json";
				} else{
					url="json/bjb.json";
				}
				this.$axios.get(url).then(function(res){
					_this.list=res.data;
				})
				return{
					list:[]
				}
			}
		}
	}
</script>

