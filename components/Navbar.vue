<script>
export default {};
</script>

<template>
	<nav id="nav">
		<NuxtLink to="/">首頁</NuxtLink> |
		<NuxtLink to="/bought">已購買課程</NuxtLink>
	</nav>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables_g.scss";
@import "../assets/css/_theme.scss";
#nav {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 20px 0px;
	@include background_color("background_color1");
	@include font_color("font_color1");
	a {
		margin: 0px 15px;
		text-decoration: none;
		font-weight: $title_weight;
		@include font_color("font_color1");
		&.nuxt-link-exact-active {
			@include font_color("font_color2");
		}
	}
}
</style>
