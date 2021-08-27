<script>
export default {
	props: ["icon_color"]
};
</script>

<template>
	<span :style="{ backgroundColor: icon_color }">V</span>
</template>

<style lang="scss" scoped>
span {
	width: 20px;
	height: 20px;
	font-size: 12px;
	border-radius: 100%;
	line-height: 23px;
	text-align: center;
	color: #fff;
}
</style>
