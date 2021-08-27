<script>
import axios from "axios";
import Icon from "../components/Icon.vue";
export default {
	components: {
		Icon
	},
	props: ["nuxt-child-key"],
	async fetch() {
		this.data = await axios
			.get("https://mocki.io/v1/99c850fb-0b6d-42e5-8539-d9717d4d99e8")
			.then(res => res.data);
	},
	data() {
		return {
			data: [],
			icon_color: this.nuxtChildKey
		};
	},
	computed: {
		coursesTotal() {
			let num = 0;
			this.data.forEach(item => {
				num += item.price;
			});
			return num;
		}
	},
	mounted() {
		setTimeout(() => {
			this.data[0].price = 1000;
		}, 3000);
	}
};
</script>

<template>
	<div>
		<ul>
			<span class="list-title">我的課程列表</span>
			<li v-for="(item, idx) in data" :key="item.name">
				<span class="class_name">{{ item.name }}</span>
				<span class="class_price">$ {{ item.price }}</span>
				<span class="class_teacher">{{ item.teacher }}</span>
				<Icon :icon_color="icon_color" />
			</li>
		</ul>
		<h3>再消費 {{ 10000 - coursesTotal }} 元，即可獲得 1000 元折價券</h3>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables_g.scss";

div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	ul {
		padding: 1.75rem;
		margin: 0px;
		border-radius: 20px;
		text-align: center;
		.list-title {
			display: inline-block;
			font-size: $title_size * 0.5;
			font-weight: $title_weight;
			margin-bottom: 20px;
			margin-top: 5px;
		}
		li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 550px;
			padding: 10px 10px;
			list-style: none;
			border-bottom: solid 2px #056331;
			span {
				display: inline-block;
				&.class_name {
					width: 300px;
					text-align: left;
				}
				&.class_price {
					width: 80px;
					text-align: left;
				}
				&.class_teacher {
					width: 150px;
					text-align: center;
				}
			}
		}
	}
}
</style>
