<template>
	<div class="view-wapper">
		<router-view v-if="($vuetify.breakpoint.smAndDown && !isPotrait) || $vuetify.breakpoint.smAndUp" />
		<div v-else class="view-block">
			<v-app>
				<v-container grid-list-xl>
					<v-layout fill-height  justify-center align-center row>
						<v-flex xs12>
							<v-avatar
								size="100"
								color="transparent"
								class="mx-auto d-block"
							>
								<img src="@/assets/img/avatar-circle.png" alt="">
							</v-avatar>
							<div class="talk-text center pa-5 body-1 text-xs-center font-weight-light stint-ultra">
								For a better experience, you can only view this portfolio in landscape mode. <br> 
								This is not because I cannot make it responsive, but because I deem portrait mode unworthy of handling my pixels).
							</div>
						</v-flex>
					</v-layout>
				</v-container>
			</v-app>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isPotrait: false
		}
	},
	name: 'App',
	mounted () {
		if(window.innerHeight > window.innerWidth) this.isPotrait = true;
		else this.isPotrait = false;

		window.addEventListener("orientationchange", () => {
			let windowWidth = window.innerWidth;
			let windowHeight = window.innerHeight
			
			if (windowHeight > windowWidth) this.isPotrait = false;
			else this.isPotrait = true;
		}, false);
	}
}
</script>

<style>
.view-block {
	position: fixed;
	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
}
</style>
