<template>
	<v-fade-transition>
		<v-container fill-height fluid>
			<div class="start-banner"  :style="{background: `url(${pattern}), url(${cBg}) `}"></div>
			<div class="banner-wrapper banner-dark"></div>
			<v-toolbar color="transparent" app flat dense>
				<v-layout fill-height justify-center align-center row wrap>
					<!-- <div> -->
						<v-icon v-for="(bg, index) in backgrounds" :key="index" color="white" size="7" class="mx-2" :class="{' bg-delimeters': index >= bgIndex}">mdi-circle</v-icon>
					<!-- </div> -->
				</v-layout>
			</v-toolbar>
			<v-content>
				<v-layout fill-height justify-center align-center row wrap>
					<v-flex xs12 sm10>
						<v-layout fill-height column class="menu">
							<v-flex xs12 class="menu-item">
								<a class="julius" href="/me" data-action="open">about me</a>
							</v-flex>
							<v-flex xs12 class="menu-item">
								<a class="julius" href="/projects" data-action="open">my projects</a>
							</v-flex>
							<v-flex xs12 class="menu-item">
								<a class="julius" href="/talks" data-action="open">Talks</a>
							</v-flex>
							<v-flex xs12 class="menu-item">
								<a class="julius" href="/reach-out" data-action="open">reach out</a>
							</v-flex>
							<v-flex xs12 class="menu-item">
								<a class="julius" href="#" data-action="open">blog (building...)</a>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs12 sm2>
						<v-layout ref="sc-items" fill-height justify-center align-center column wrap class="social-menu">
							<v-btn ref="sc-item" href="https://facebook.com/akiolisa" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-facebook</v-icon>
							</v-btn>
							<v-btn ref="sc-item" href="https://twitter.com/akiolisa" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-twitter</v-icon>
							</v-btn>
							<v-btn ref="sc-item" href="https://linkedin.com/in/akiolisa" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-linkedin</v-icon>
							</v-btn>
							<v-btn ref="sc-item" href="https://instagram.com/akiolisa" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-instagram</v-icon>
							</v-btn>
							<!-- <v-btn href="https://plus.google.com/akiolisa" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-google-plus</v-icon>
							</v-btn> -->
							<v-btn href="https://github.com/Oluwatemilorun" class="social-btn" target="_blank" icon outline large color="white">
								<v-icon size="20px">mdi-github-circle</v-icon>
							</v-btn>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-content>
			<v-footer app color="transparent">
				<v-layout justify-center align-center row wrap>
           			<div class="text-xs-center white--text stint-ultra">&copy;2018 Isaac Oluwatemilorun. All rights reserved</div>
				</v-layout>
				
			</v-footer>
		</v-container>
	</v-fade-transition>
</template>

<style>
.start-banner {
	position: fixed;
	left: 0;
	right: 0%;
	bottom: 0%;
	top: 0%;
	background-repeat: repeat, no-repeat !important;
    background-position: center center !important;
    background-attachment: fixed !important;
    -webkit-background-size: auto, cover !important;
    -moz-background-size: auto, cover !important;
    -o-background-size: auto, cover !important;
	background-size: auto, cover !important;
	transition: all 0.3s ease-in-out;
	/* -webkit-animation: bg-pan-left 5s ease-out both alternate infinite;
	animation-delay: 3s; 
			animation: bg-pan-left 5s ease-out both alternate infinite;
			animation-delay: 3s;  */
}
.menu {
    font-family: "Julius" !important;
    font-size: 40px;
    text-transform: uppercase;
    padding: 50px !important;
}
.menu a {
	text-decoration: none;
    color: rgba(255, 255, 255, 0.2);
    display: block;
    text-transform: uppercase;
    text-shadow: 0px 0px 7px #fff;
    filter: progid:DXImageTransform.Microsoft.Shadow(color=#fff,direction=250);
    letter-spacing: 1px;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.menu a:hover {
    color: #fff;
    text-shadow: 0px 0px 1px #fff;
    padding-left: 10px;
}
@media only screen and (max-width : 768px) {
    .menu a {
        color: #fff;
        font-size: 32px
    }
}
.social-menu .social-btn, .fr-contact-social-menu .social-btn {
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-in-out;
    transform: translate3d(0,0,0);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	
	-webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
}
.roll-in-right {
	-webkit-animation: roll-in-right 0.6s ease-out both;
	        animation: roll-in-right 0.6s ease-out both;
}
.bg-delimeters {
	opacity: 0.5;
}
</style>

<script>

import bg01 from '@/assets/img/bg/main_bg_01.jpg';
import bg02 from '@/assets/img/bg/main_bg_02.jpg';
import bg03 from '@/assets/img/bg/main_bg_03.jpg';
import bg04 from '@/assets/img/bg/main_bg_04.jpg';
import pattern from '@/assets/img/bg/pattern.png';

export default {
	props: ['startLoading', 'finishedLoading'],
	data () {
		return {
			// background: bg01,
			backgrounds: [bg01, bg02, bg03, bg04],
			pattern,
			cBg: null,
			bgInterval: 0,
			bgIndex: 0
		}
	},
	computed: {
		
	},
	methods: {
		staggerSc () {
			let t = 0;
			let sc = this.$refs['sc-items'].children
			for (let i = 0; i < sc.length; i++) {
				setTimeout(() => {
					sc[i].classList.add('roll-in-right');
				}, t);
				t += 120;
			};
		},
		animateBackground () {
			this.cBg = this.backgrounds[this.bgIndex];
			this.bgIndex = 1;
			this.bgInterval = setInterval(() => {
				if ((this.bgIndex ) == this.backgrounds.length) this.bgIndex = 0;

				this.cBg = this.backgrounds[this.bgIndex];
				this.bgIndex++
			}, 15000);
		}
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.finishedLoading(() => {
				vm.staggerSc();
				vm.animateBackground();
			});
		});
	},
	beforeRouteLeave (to, from, next) {
		this.startLoading();
		next();
	}
}
</script>
