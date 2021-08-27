<script>
export default {
	methods: {
		theme(type) {
			this.$store.dispatch("upDate", { themeType: type });
		}
	},
	mounted() {
		this.theme("dark");
	}
};
</script>

<template>
	<div class="theme-buttons">
		<button @click="theme('light')">淺色</button>
		<button @click="theme('dark')">深色</button>
	</div>
</template>

<style lang="scss" scoped>
@import "../assets/css/_theme.scss";
.theme-buttons {
	text-align: center;
	@include background_color("background_color1");
	button {
		padding: 3px 10px;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		user-select: none;
		@include font_color("font_color1");
		@include background_color("background_color3");
	}
}
</style>
