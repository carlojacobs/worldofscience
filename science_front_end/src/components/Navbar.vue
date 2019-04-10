<template id="navbar_template">
	<div class="navbar-container container">
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<!-- <router-link class="navbar-item" id="navbar-brand-science" to="/"><i class="fas fa-atom fa-2x"></i></router-link> -->
				<router-link class="navbar-item wos-font" id="navbar-brand-science" to="/">World of Science</router-link>
				<a role="button" class="navbar-burger burger" v-bind:class="{'is-active': navbarIsActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="toggleNav">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				</a>
			</div>
			<div class="navbar-menu" id="navbarBasicExample" v-bind:class="{'is-active': navbarIsActive}">
				<div class="navbar-start">
					<router-link class="navbar-item" to="/">Home</router-link>
					<router-link class="navbar-item" to="/about">About us</router-link>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link">More</a>
						<div class="navbar-dropdown">
							<a class="navbar-item">About</a>
							<a class="navbar-item">Jobs</a>
							<a class="navbar-item">Contact</a>
							<hr class="navbar-divider">
							<a class="navbar-item">Report an issue</a>
						</div>
					</div>
				</div>
				<!-- <div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary"><strong>Sign up</strong></a>
							<a class="button is-light">Log in</a>
						</div>
					</div>
				</div> -->
			</div>
		</nav>
		<!-- <hr id="nav-hr"> -->
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			navbarIsActive: false
		}
	},
	methods: {
		toggleNav() {
			this.navbarIsActive = !this.navbarIsActive;
		}
	}
}
</script>

<style media="screen">
	#navbar-brand-science {
		font-weight: bold;
		font-size: 1rem;
	}
	nav {
		border-bottom: 1px solid #eeeeee;
	}
</style>
