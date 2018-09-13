<template>
	<v-slide-x-transition>
		<v-layout v-if="loadStart" class="revealer white" fill-height justify-center align-center column wrap>
			<div  v-if="loading">
				<v-progress-linear style="width: 100px" height="10px" color="primary" :value="progress" :indeterminate="false"></v-progress-linear>
				<p class="text-xs-center stint-ultra">loading...</p>
			</div>

			<!-- <div class="revealer" :style="{display: (reveal) ? 'block' : 'none'}">
				<div class="reveal-layer layer-animate teal accent-3"></div>
				<div class="reveal-layer layer-animate teal accent-4"></div>
				<div class="reveal-layer layer-animate teal "></div>
			</div> -->
		</v-layout>
	</v-slide-x-transition>
</template>

<script>
export default {
	props: ['loadStart', 'loadEnd'],
	data () {
		return {
			reveal: false,
			loading: false,
			progress: 0,
			startInterval: 0
		}
	},
	watch: {
		loadStart (a, b) {
			if  (a) {
				this.loading = true;
				this.progress = 0;
				this.interval = setInterval(() => {
					if (this.progress >= 60) return clearInterval(this.interval);
					else this.progress += 10;
				}, 100);
			}
			else {
				this.reveal = false;
			}
		},
		loadEnd (a, b) {
			if (a) {
				this.interval = setInterval(() => {
					if (this.progress >= 100) {
						clearInterval(this.interval);
						this.loading = false;
						this.reveal = true;

						this.$emit('input', this.loading);
					}
					else {
						this.progress += 10;
					}
				}, 100);
			}
			else {
				this.reveal = false;
			}
		}
	}
}
</script>


<style>
.revealer {
	width: 100%;
    min-height: 100%;
    height: auto !important;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    pointer-events: none;
    opacity: 1;
}
.revealer .reveal-layer {
	position: absolute;
    width: 100%;
    min-height: 100%;
    height: auto !important;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
}
.reveal-layer:nth-child(2) {
	z-index: 2;
}
.reveal-layer:nth-child(3) {
	z-index: 1;
}
.layer-animate {
	-webkit-animation: reveal-animation-1 1.5s cubic-bezier(0.550,0.055,0.675,0.190) forwards;
	animation: reveal-animation-1 1.5s cubic-bezier(0.550,0.055,0.675,0.190) forwards;
}
.layer-animate:nth-child(2) {
	-webkit-animation-name: reveal-animation-2;
    animation-name: reveal-animation-2;
    -webkit-animation-timing-function: cubic-bezier(0.895,0.030,0.685,0.220);
    animation-timing-function: cubic-bezier(0.895,0.030,0.685,0.220);
	/* animation-iteration-count: infinite; */
}
.layer-animate:nth-child(3) {
	-webkit-animation-name: reveal-animation-3;
    animation-name: reveal-animation-3;
    -webkit-animation-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
    animation-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
	/* animation-iteration-count: infinite */
}

/*
	keyframes
*/
@keyframes reveal-animation-1 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	35%, 65% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,-0,0);
		-webkit-animation-timing-function: cubic-bezier(0.215,0.610,0.355,1.000);
		animation-timing-function: cubic-bezier(0.215,0.610,0.355,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d( -200%,0,0);
	}
}
@-webkit-keyframes reveal-animation-1 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	35%, 65% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,-0,0);
		-webkit-animation-timing-function: cubic-bezier(0.215,0.610,0.355,1.000);
		animation-timing-function: cubic-bezier(0.215,0.610,0.355,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d( -200%,0,0);
	}
}


@keyframes reveal-animation-2 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	45%, 55% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,0,0);
		-webkit-animation-timing-function: cubic-bezier(0.165,0.840,0.440,1.000);
		animation-timing-function: cubic-bezier(0.165,0.840,0.440,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d(-200%,0,0);
	}
}
@-webkit-keyframes reveal-animation-2 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	45%, 55% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,0,0);
		-webkit-animation-timing-function: cubic-bezier(0.165,0.840,0.440,1.000);
		animation-timing-function: cubic-bezier(0.165,0.840,0.440,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d(-200%,0,0);
	}
}


@keyframes reveal-animation-3 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	45%, 55% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,0,0);
		-webkit-animation-timing-function: cubic-bezier(0.230,1.000,0.320,1.000);
		animation-timing-function: cubic-bezier(0.230,1.000,0.320,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d(-200%,0,0);
	}
}
@-webkit-keyframes reveal-animation-3 {
	0% {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}
	45%, 55% {
		-webkit-transform: translate3d(-100%,0,0);
		transform: translate3d(-100%,0,0);
		-webkit-animation-timing-function: cubic-bezier(0.230,1.000,0.320,1.000);
		animation-timing-function: cubic-bezier(0.230,1.000,0.320,1.000);
	}
	100% {
		-webkit-transform: translate3d(-200%,0,0);
		transform: translate3d(-200%,0,0);
	}
}
</style>
