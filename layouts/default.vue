<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.vue";
import ChangeTheme from "../components/ChangeTheme.vue";
export default {
	components: {
		Header,
		Footer,
		Navbar,
		ChangeTheme
	},
	data() {
		return {
			color: "red"
		};
	},
	computed: {
		DOMheight() {
			return this.$route.path === "/"
				? "calc(74% - 40px)"
				: "calc(74% - 90px)";
		}
	}
};
</script>

<template>
	<div class="height-100">
		<Header style="height: 8%" />
		<Navbar style="height: 5%" />
		<ChangeTheme style="height: 5%" />
		<div class="input-form" v-show="DOMheight === 'calc(74% - 90px)'">
			<label for="red">
				紅色
				<input type="radio" value="red" v-model="color" />
			</label>
			<label for="green">
				綠色
				<input type="radio" value="green" v-model="color" />
			</label>
			<label for="blue">
				藍色
				<input type="radio" value="blue" v-model="color" />
			</label>
		</div>
		<Nuxt
			:style="{ height: DOMheight }"
			:nuxt-child-key="color"
			class="route-view"
		/>
		<Footer style="height: 8%" />
	</div>
</template>

<style lang="scss">
@import "../assets/css/_theme.scss";

* {
	letter-spacing: 1.45px;
	transition: color 0.3s;
}

html,
body {
	height: 100%;
	padding: 0px;
	margin: 0px;
	overflow: hidden;
}

#__nuxt,
#__layout,
.height-100 {
	height: 100%;
	@include background_color("background_color1");
}

.input-form {
	text-align: center;
	margin-top: 20px;
	label {
		display: inline-block;
		height: 30px;
		margin-right: 20px;
		line-height: 30px;
		@include font_color("font_color1");
		input {
			line-height: 30px;
		}
	}
}

.route-view {
	@include font_color("font_color1");
	@include background_color("background_color1");
}
</style>
