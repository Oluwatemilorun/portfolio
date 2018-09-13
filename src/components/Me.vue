<template>
	<div id="page">
		<!-- fixed items  -->
		<v-toolbar id="toolbar" dense app fixed flat color="transparent">
			<v-toolbar-side-icon @click="$router.back()">
				<v-icon>mdi-arrow-left</v-icon>
			</v-toolbar-side-icon>
		</v-toolbar>

		<div id="navigation-btns" class="navigation-btn--wrapper" :class="{ 'mx-2': $vuetify.breakpoint.md || $vuetify.breakpoint.lg}">
			<v-layout column wrap>
				<v-btn v-if="navOn" icon small @click="fullpageInstance.moveSectionUp()">
					<v-icon size="16">mdi-arrow-up</v-icon>
				</v-btn>
				<v-btn v-if="navOn && navNext" icon small @click="fullpageInstance.moveSectionDown()">
					<v-icon size="16">mdi-arrow-down</v-icon>
				</v-btn>
			</v-layout>
		</div>
		
		<div id="up-next" class="up-next--wrapper" :class="{ 'mx-2': $vuetify.breakpoint.md || $vuetify.breakpoint.lg}">
			<v-layout justify-center align-center row wrap>
				<v-btn flat small class="stint-ultra">contact</v-btn> <v-divider light style="border-color: rgba(0,0,0,0.5)"></v-divider>
			</v-layout>
		</div>

		<div id="delimeters" class="delimeters-wrapper">
			<v-layout v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg" column wrap>
				<v-tooltip v-for="(delimeter, index) in delimeters" :key="index" left>
					<span>{{delimeter.name}}</span>
					<v-btn slot="activator" icon small @click="fullpageInstance.moveTo(delimeter.index)">
						<v-icon :size="delimeter.index != sectionIndex ? 7 : 10" :color="delimeter.index == sectionIndex  ? 'primary' : 'black'">mdi-circle</v-icon>
					</v-btn>
				</v-tooltip>
			</v-layout>
		</div>

		<!-- sections -->
		<div class="section">
			<v-layout fill-height row wrap :style="{'background-image': `url(${bg01})` }" class="banner-fill">
				<div class="banner-wrapper banner-white"></div>
				<v-container grid-list-sm style="z-index: 1">
					<v-layout row wrap>
						<v-flex xs8>
							<h5 :class="{'display-1': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, headline: $vuetify.breakpoint.sm }">I'm</h5>
							<h1 class="uppercase  julius secondary--text font-weight-bold" :class="{'display-3': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'display-1': $vuetify.breakpoint.sm}">Isaac <br> Oluwatemilorun</h1>
							<p class="black--text julius" :class="{'headline my-4': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'body-1 my-2': $vuetify.breakpoint.sm }">an awesome UI / UX designer<br> and front-end developer from <br> Lagos, Nigeria.</p>
							<v-btn icon color="secondary" class="pulse"  @click="fullpageInstance.moveSectionDown()">
								<v-icon>mdi-arrow-down</v-icon>
							</v-btn>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</div>
		<div class="section">
			<v-layout fill-height row wrap :style="{'background-image': `url(${bg11}), url(${bg03})` }" class="banner-fill fill-right">
				<v-container grid-list-sm>
					<v-layout fill-height justify-center row wrap>
						<v-flex xs7 style="z-index: 1">
							<v-layout fill-height justify-space-around column>
								<div class="">
									<h3 class="black--text julius uppercase" :class="{' display-2 mb-4': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'display-1 mb-2': $vuetify.breakpoint.sm}">
										<i class="mdi mdi-buffer grey--text text--darken-1"></i> 
										Things i do
									</h3>
									<p class="talk-text title font-weight-light" :class="{'body-1': $vuetify.breakpoint.sm }">
										I create a unique process for each client <br> 
										to ensure that business objectives are met, <br>
										success is achieved and people are happy.</p>
								</div>
							</v-layout>
						</v-flex>
						<v-flex xs5 style="z-index: 1">
							<v-layout align-center justify-center row wrap>
								<v-carousel
									v-model="platformSlideIndex"
									style="width: 90%; height: 40vh"
									class="elevation-0"
									hide-controls
									hide-delimiters
									:cycle="true"
									@input="animatePlatformSlide"
								>
									<v-carousel-item
										v-for="(platform, index) in platformData"
										:key="index"
									>
										<v-layout justify-center align-center fill-height wrap>
											<img 
												:src="platform.icon"
												alt=""
												:style="{width: $vuetify.breakpoint.sm ? '150px' : '250px', height: 'auto'}"
											>
											
										</v-layout>
									</v-carousel-item>
								</v-carousel>
									<div  class="trans text-xs-center" :style="{ opacity: platformTagline.opacity }">
										<h5 class="black--text text-xs-center uppercase julius "  :class="{' display-1': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'headline': $vuetify.breakpoint.sm}">{{platformTagline.big}}</h5>
											<p class="talk-text center black--text text-darken-1 mb-0"  :class="{'subheading font-weight-light': $vuetify.breakpoint.sm }">
												{{platformTagline.small}}
											</p>
									</div>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</div>
		<div class="section">
			<v-layout fill-height row wrap :style="{'background-image': `url(${bg12}), url(${bg04})` }" class="banner-fill fill-right">
				<v-container grid-list-sm>
					<v-layout align-center fill-height justify-center row wrap>
						<v-flex xs6 style="z-index: 1">
							<v-carousel
								v-model="skillSlideIndex"
								hide-controls
								hide-delimiters
								style="width: 200px; height: 40vh"
								class="elevation-0 mx-auto"
								@input="animateSkillSlide"
							>
								<v-carousel-item
									v-for="(skill, index) in skillData"
									:key="index"
								>
									<v-layout fill-height align-center justify-center row wrap>
											<v-progress-circular :value="skillLevel" size="150" :width="20" :rotate="-90" class="mx-auto mb-3" color="accent">
												<div class="text-xs-center black--text font-weight-bold stint-ultra uppercase caption">
													<span>{{skill.name}}</span>
													<br>
													<span>{{skill.level}} %</span>
												</div>
											</v-progress-circular>
									</v-layout>
								</v-carousel-item>	
							</v-carousel>
								<v-container grid-list-lg fluid style="height: 40px">
									<v-layout justify-center align-center row wrap>
										<v-slide-x-transition origin="bottom right" v-for="(icon, index) in skillIcons" :key="index" >
											<v-flex xs2>
												<v-avatar
													size="40"
													color="transparent"
													tile
												>
													<img :src="icon" alt="">
												</v-avatar>
											</v-flex>
										</v-slide-x-transition>
									</v-layout>
								</v-container>
						</v-flex>
						<v-flex xs6 style="z-index: 1">
							<v-layout fill-height justify-space-around column>
								<div class="text-xs-right">
									<h3 class="black--text julius uppercase" :class="{' display-2 mb-4': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'display-1 mb-2': $vuetify.breakpoint.sm}">
										Few of my skills
										<i class="mdi mdi-chemical-weapon grey--text text--darken-1"></i> 
									</h3>
									<p class="talk-text right title font-weight-light text-xs-right" :class="{'body-1': $vuetify.breakpoint.sm }">
										I’m a web designer crazy in love with my pixels. <br>
										I make use of the best tools out there that best suit the project, wiring up the stack with standard programming techniques.</p>
								</div>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</div>
		<div class="section">
			<v-layout fill-height row wrap :style="{'background-image': `url(${bg11}), url(${bg00})` }" class="banner-fill fill-right">
				<v-container grid-list-sm>
					<v-layout align-center fill-height justify-center row wrap>
						<v-flex xs6 style="z-index: 1">
							<v-layout fill-height justify-space-around column>
								<div class="">
									<h3 class="black--text julius uppercase" :class="{' display-2 mb-4': $vuetify.breakpoint.md || $vuetify.breakpoint.lg, 'display-1 mb-2': $vuetify.breakpoint.sm}">
										<i class="mdi mdi-checkbox-multiple-marked-circle grey--text text--darken-1"></i> 
										Testimonials
									</h3>
									<p class="talk-text title font-weight-light" :class="{'body-1': $vuetify.breakpoint.sm }">
										Here are the things people I worked with have to say about me
										and my works.
									</p>
								</div>
							</v-layout>
						</v-flex>
						<v-flex xs6>
							<v-layout justify-end row wrap>
								<v-carousel
									hide-controls 
									hide-delimiters
									style="width: 90%; height: 80vh"
									class="elevation-0"
								>
									<v-carousel-item
										v-for="(testimonial, index) in testimonialData"
										:key="index"
									>
										<v-layout fill-height justify-end align-center row wrap class="mx-1">
												<v-avatar
													:size="$vuetify.breakpoint.sm ? 100 : 150"
													color="teal"
												>
													<img :src="testimonial.avatar" alt="">
												</v-avatar>
												<div>

												<div class="testimonial-content mt-3">
													<p class="black--text text-xs-right" :class="{'subheading font-weight-light': $vuetify.breakpoint.sm }">
														{{testimonial.note}}
													</p>
												</div>
												<div class="testimonial-author text-xs-right">
													<p class="white--text ma-0">{{testimonial.author}}</p>
													<span class="grey-text light">{{testimonial.position}} - <a class="grey--text text--darken-4" :href="testimonial.web" target="_blank">{{testimonial.company}}</a></span>
												</div>
											</div>
										</v-layout>
									</v-carousel-item>
								</v-carousel>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-container>
			</v-layout>
		</div>
	</div>
</template>

<script>

import fullpage from 'fullpage.js';

import bg00 from '@/assets/img/bg/bg_0.jpg';
import bg01 from '@/assets/img/bg/bg_1.jpg';
import bg02 from '@/assets/img/bg/bg_7.jpg';
import bg03 from '@/assets/img/bg/bg_8.jpg';
import bg04 from '@/assets/img/bg/bg_5.jpg';
import bg05 from '@/assets/img/bg/bg_2.jpg';
import bg10 from '@/assets/img/bg/info-banner-bg-01.png';
import bg11 from '@/assets/img/bg/info-banner-bg-02.png';
import bg12 from '@/assets/img/bg/info-banner-bg-03.png';

import icon01 from '@/assets/img/logos/appdesign-dark.png';
import icon02 from '@/assets/img/logos/webdesign-dark.png';
import icon03 from '@/assets/img/logos/graphicdesign-dark.png';
import icon04 from '@/assets/img/logos/branding-dark.png';

import bashiru from '@/assets/img/authors/bashiru.jpg'
import odunlade from '@/assets/img/authors/odunlade.jpg'
import olukunle from '@/assets/img/authors/engr-olukunle.jpg'
import dami from '@/assets/img/authors/dami.jpg'

import js01 from '@/assets/img/icons/vue.png';
import js02 from '@/assets/img/icons/react.png';
import js03 from '@/assets/img/icons/nodejs.png';
import js04 from '@/assets/img/icons/angular.png';
import js05 from '@/assets/img/icons/mongodb.png';
import js06 from '@/assets/img/icons/socket-io.png';

import html01 from '@/assets/img/icons/html5.png';
import html02 from '@/assets/img/icons/css.png';
import html03 from '@/assets/img/icons/sass.png';
import html04 from '@/assets/img/icons/cordova.png';

import php01 from '@/assets/img/icons/laravel.png';
import php02 from '@/assets/img/icons/apache.png';
import php03 from '@/assets/img/icons/sql.png';

import py01 from '@/assets/img/icons/python.png';
import py02 from '@/assets/img/icons/django.png';
import py03 from '@/assets/img/icons/TensorFlow.png';

import cs01 from '@/assets/img/icons/dot-net.png';
import cs02 from '@/assets/img/icons/xamarin.png';
import cs03 from '@/assets/img/icons/unity.png';

export default {
	props: ['startLoading', 'finishedLoading'],
	data () {
		return {
			fullpageInstance: null,
			navOn: false,
			navNext: true,
			sectionIndex: 0,
			bg00, bg01,
			bg02,
			bg03,
			bg04, bg05,
			bg10,
			bg11,
			bg12,
			platformData: [
				{ icon: icon01, title: 'app development', body: 'I build scalable secure mobile apps that works accross all platform for companies, businesses or personal projects.' },
				{ icon: icon02, title: 'Web design', body: 'I design and build websites, create a responsive theme that is cool and awesome for your company, events or personal' },
				{ icon: icon03, title: 'Graphic design', body: 'I design awesome logos, icons and banners that define a company or business.' },
				// { icon: icon04, title: 'Branding', body: 'I design awesome logos, icons and banners that define a company or business.' },
			],
			platformSlideIndex: 0,
			platformTagline: { big: null, small: null, opacity: 0, height: null, active: false, opacity: 0 },
			skillData: [
				{ icons: [js01, js02, js03, js04, js05, js06], name: 'javascript', level: 80 },
				{ icons: [html01, html02, html03, html04], name: 'html5 & css3', level: 95 },
				{ icons: [php01, php02, php03], name: 'PHP', level: 52 },
				{ icons: [py01, py02, py03], name: 'Python', level: 58 },
				{ icons: [cs01, cs02, cs03], name: 'C#', level: 60 },
			],
			skillSlideIndex: 0,
			skillLevel: 0,
			skillIcons: [],
			delimeters: [
				{index: 1, name: 'Who I am' },
				{index: 2, name: 'Things I do' },
				{index: 3, name: 'My skills' },
				{index: 4, name: 'Testimonials' },
			],
			testimonialData: [
				{ note: `Programming apart from skills require tenacity and dedication, a dedicated man will always find a way around any problem.
								Isaac has this in spades, he doesn't mind how much work it will take to make to ensure the job is perfect he just does it. And he's one of those frontend
								Puritans,like he always say "that will break all the rules of. Material Design". Its up to you but I think he is the man for your job`,  author: 'Emmanuel Odunlade', company: 'Dev\'s District Design and Innovation Hub', position: 'CEO', web: 'http://devsdistrictnigeria.com/', avatar: odunlade },
				{ note: `Working with Oluwatemilolorun Isaac on my project is one of the best choices I have made, he is flexible and understanding
								to work with. He puts me through what he has done with a simple explanation, that even with my little experience of coding, I can do some adjustment of
								my own without him, my pleasure working with him. He his highly recommended by me for any website and application development service`,  author: 'Bamidele Bashir',  position: 'Founder', company: 'Aluta Market Place', web: 'http://alutamarket.com/', avatar: bashiru },
				{ note: `Isaac always add a touch of creativity to every idea, making ideas come alive in ways you never thought possible, with an
								enourmous attention to details.`,  author: 'Dami Kasim',  position: 'Excutive Vice President', company: 'Dev\'s District Design and Innovation Hub', web: 'http://devsdistrictnigeria.com/', avatar: dami },
				{ note: `Temilorun is a brilliant designer and coder. He has great passion for what he does and takes every job seriously and with joy. He is comfortable to work with and he gives advice and beautiful ideas
								when you need one.`,  author: 'Engr. Olukunle Francis',  position: 'CEO', company: 'GIP Electrical Works', web: 'http://gipelectrical.com/', avatar: olukunle },
			]
		}
	},
	methods: {
		animatePlatformSlide () {
			setTimeout(() => {
				this.platformTagline.big = this.platformData[this.platformSlideIndex].title;
				this.platformTagline.small = this.platformData[this.platformSlideIndex].body;

				this.platformTagline.opacity = 1;
				this.platformTagline.height = "150px";
				this.platformTagline.active = true;
				// this.tagblockWidth = "100px";

				setTimeout(() => {
					this.platformTagline.opacity = 0;
					this.platformTagline.height = 0;
					this.platformTagline.active = false
					// this.tagblockWidth = "0px";
				}, 5500);
			}, 500);
		},
		animateSkillSlide () {
			let skill = this.skillData[this.skillSlideIndex];
			setTimeout(() => {
				for (let i = 0; i < skill.level; i++) {
					this.skillLevel = i;
				}
				this.skillIcons = skill.icons;

				setTimeout(() => {
					this.skillLevel = 0;
					this.skillIcons = [];
				}, 5500);
			}, 500);
		},
		onSlideLeave (origin, destination, direction) {
			this.sectionIndex = destination.index + 1;

			if (destination.index >= 1) this.navOn = true;
			else this.navOn = false;

			if (destination.isLast) this.navNext = false;
			else this.navNext = true;
		}
	},
	mounted () {
		this.fullpageInstance = new fullpage('#page', {
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			fixedElements: '#toolbar, #navigation-btns, #up-next, #delimeters',
			onLeave: this.onSlideLeave
		});
	},
	beforeRouteEnter (to, from, next) {
		next(vm => {
			vm.finishedLoading(() => {
				vm.sectionIndex = 1;
			});
		});
	},
	beforeRouteLeave (to, from, next) {
		this.fullpageInstance.destroy('all');
		this.startLoading();
		next();
	}
}
</script>

<style>
.banner-fill {
	background-position: center;
	/* background-attachment: fixed; */
	background-repeat: no-repeat;
	background-size: cover
}
.banner-fill.fill-right {
	background-position: center, right;
	/* background-size: cover,  */
}
.trans {
	overflow: hidden;
  transition: all 0.3s linear;
  will-change: width, height;
	/* transform:translate3d(0,0,0) */
}
.navigation-btn--wrapper {
	width: 35px;
	height: 80px;
	position: fixed;
	bottom: 0;
	left: 0;
}
.up-next--wrapper {
	transform: rotate(90deg);
	width: 200px;
	height: 35px;
	position: fixed;
	bottom: 90px;
	left: auto;
	right: -90px;
}
.delimeters-wrapper {
	position: fixed;
	left: auto;
	right: 0%;
	top: 0%;
	z-index: 100
}

.testimonial-content p {
    font-size: 15px;
}
.testimonial-author {
    /* bottom: 20px; */
    left: 0;
    right: 0;
}
.testimonial-author span {
    font-style: italic;
}
</style>
