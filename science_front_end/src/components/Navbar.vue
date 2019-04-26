<template id="navbar_template">
	<div class="navbar-container">
		<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
			<div class="container">
				<div class="navbar-brand">
					<router-link class="navbar-item wos-font" id="navbar-brand-science" to="/">World of Science</router-link>
					<a role="button" class="navbar-burger burger" v-bind:class="{'is-active': navbarIsActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="toggleNav">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					</a>
				</div>
				<div class="navbar-menu" id="navbarBasicExample" v-bind:class="{'is-active': navbarIsActive}">
					<div class="navbar-start">
						<router-link class="navbar-item" to="/"><i class="fas fa-home" style="margin-right: .5rem;"></i>Home</router-link>
						<router-link class="navbar-item" to="/categories"><i class="fas fa-bookmark" style="margin-right: .5rem;"></i>Categories</router-link>
						<router-link class="navbar-item" to="/search"><i class="fas fa-search" style="margin-right: .5rem;"></i>Search</router-link>
						<router-link class="navbar-item" to="/about"><i class="fas fa-info-circle" style="margin-right: .5rem;"></i>About us</router-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			navbarIsActive: false,
			navbarMenuIsActive: false
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
		/*color: black !important;*/
		/*background: white !important;*/
	}
	nav {
		/*border-bottom: 1px solid #eeeeee;*/
	}
	.nav-item-is-active {
		/*color: hsl(217, 71%, 53%) !important;*/
		/*background-color: hsl(0, 0%, 98%) !important;*/
	}
</style>
