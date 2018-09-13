<template>
	<v-app>
		<Loader :loadStart="loadStart" :loadEnd="loadEnd" @input="clearLoader" />
		<router-view :startLoading="startLoading" :finishedLoading="finishedLoading" />
	</v-app>
</template>

<script>

import Loader from '@/components/_parts/Loader.vue'

export default {
	components: {
		Loader
	},
	data () {
		return {
			loadStart: false,
			loadEnd: false
		}
	},
	methods: {
		startLoading () {
			this.loadStart = true;
		},
		finishedLoading (callback) {
			callback = callback.bind(this);

			setTimeout((() => {
				this.loadEnd = true;
				setTimeout(callback, 500)
			}).bind(this), 1000);
		},
		clearLoader () {
			this.loadEnd = false;
			this.loadStart = false;
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.loadStart = true;
		});
	},
	beforeRouteLeave (to, from, next) {
		this.loadStart = true;
	}
}
</script>

<style src="@/assets/styles/keyframes.css"></style>

<style>
.capitalize {
	text-transform: capitalize;
}
.uppercase {
	text-transform: uppercase;
}
.banner-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
	bottom: 0;
	z-index: 0;
}
.banner-wrapper.banner-white {
	background: rgba(255, 255, 255, 0.5);
}
.banner-wrapper.banner-dark {
	background: rgba(0, 0, 0, 0.5);
}
.talk-text {
    width: 90%;
    font-size: 17px;
    position: relative;
    display: block;
    padding: 0 0 20px 0;
}
.talk-text:before {
    position: absolute;
    bottom: 0;
    background-color: teal;
    bottom: 0;
    content: " " !important;
    display: block !important;
    height: 2px;
    left: 0%;
    margin: 0 0 0 1px;
    width: 15px;
}
.talk-text:after {
    background-color: teal;
    bottom: 0;
    content: " " !important;
    display: block !important;
    height: 2px;
    margin: 0 1px 0 0;
    position: absolute;
    left: 18px;
    width: 15px;
}
.talk-text.center {
	margin: 0 auto;
}
.talk-text.center::before {
	left: 50%;
}
.talk-text.center::after {
	left: calc(50% + 18px);
}
.talk-text.right::before {
	right: 0%;
	left: auto;
}
.talk-text.right::after {
	right: 18px;
	left: auto;
}
.pulse {
    overflow: initial;
    position: relative;
}
.pulse::before {
	content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: inherit;
    border-radius: inherit;
    -webkit-transition: opacity .3s, -webkit-transform .3s;
    transition: opacity .3s, -webkit-transform .3s;
    transition: opacity .3s, transform .3s;
    transition: opacity .3s, transform .3s, -webkit-transform .3s;
    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    z-index: -1;
}
</style>
