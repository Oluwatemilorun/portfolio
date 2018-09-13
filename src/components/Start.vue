<template>
	<v-container fill-height fluid class="splash-screen--wrapper">
		<div class="lines-wrapper">
			<div class="line line-t h-object h-cleanup" ref="lineT" :style="splashActive && anmtLine('lineT')" data-appear="scale-in-hor-left 0.55s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"></div>
			<div class="line line-r h-object h-cleanup" ref="lineR" :style="splashActive && anmtLine('lineR')" data-appear="scale-in-ver-top 0.55s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"></div>
			<div class="line line-b h-object h-cleanup" ref="lineB" :style="splashActive && anmtLine('lineB')" data-appear="scale-in-hor-right 0.55s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"></div>
			<div class="line line-l h-object h-cleanup" ref="lineL" :style="splashActive && anmtLine('lineL')" data-appear="scale-in-ver-bottom 0.55s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"></div>
		</div>

		<v-layout fill-height justify-center align-center column>
			<v-fade-transition>
				<v-avatar
					size="80"
					color="teal"
					class="ma-4"
				>
					<img src="@/assets/img/avatar-circle.png" alt="">
				</v-avatar>
			</v-fade-transition>
			<h3 :class="['grey--text text--darken-4 text-xs-center julius display-1 uppercase font-weight-light', {'text-active': textActive}]">Isaac Oluwatemilorun</h3>
			<p :class="['grey--text mt-2 stint-ultra', {'text-active': textActive}]">UI<span class="black--text"> / </span> UX DESIGNER</p>
			<v-fab-transition>
				<v-btn color="primary" class="pulse" fab small @click="reg">
					<v-icon>mdi-chevron-right</v-icon>
				</v-btn>
			</v-fab-transition>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: ['startLoading', 'finishedLoading'],
	data () {
		return {
			textActive: false,
			splashActive: false,
		}
	},
	methods: {
		anmtLine (line) {
			let animation = this.$refs[line].dataset.appear;
			return {
				'-webkit-animation' : animation,
				'-moz-animation' : animation,
				'animation' : animation
			}
		},
		reg () {
			window.sessionStorage.setItem('temilorun_registered', true);
			this.$router.replace('/');
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.finishedLoading(() => {
				vm.splashActive = true;
				vm.textActive = true;
			});
		});
	},
	beforeRouteLeave (to, from, next) {
		this.startLoading();
		next();
	}
}
</script>

<style>
.splash-screen--wrapper {
	-webkit-perspective: 500px;
	-moz-perspective: 500px;
    perspective: 500px;
}
.lines-wrapper .line {
    position: absolute;
    background-color: #cacaca;
}
.lines-wrapper {
    position: absolute;
	top: 16px;
	bottom: 16px;
	left: 16px;
	right: 16px;
    overflow: hidden;
}
.lines-wrapper .line.line-t {
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
}
.lines-wrapper .line.line-r {
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
}
.lines-wrapper .line.line-b {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
}
.lines-wrapper .line.line-l {
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
}
.text-active {
	-webkit-animation : text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    -moz-animation : text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation : text-focus-in 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
</style>
