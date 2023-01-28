<script lang="ts" setup></script>

<template>
	<div class="app-wrapper">
		<header>
			<div class="inner-wrapper">
				<h2>MOER</h2>
				<nav>
					<ul>
						<li>
							<NuxtLink to="/">Home</NuxtLink>
						</li>
						<li>
							<nuxt-link to="/articles">Articles</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories">Categories</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories">About</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/login" class="login-btn">
								<cta-button text="Login" :primary="false" />
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<NuxtPage />
	</div>
</template>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	.inner-wrapper {
		min-width: 1200px;
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
	}

	h2 {
		@include semi-bold;
	}

	nav {
		ul {
			display: flex;
			min-width: 100%;
			align-items: center;
			gap: 2rem;
			justify-content: center;
		}

		li {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		a.router-link-active {
			color: $white;
		}
		a {
			color: $text-secondary;
			text-decoration: none;
			transition: all 0.2s ease;

			&:hover {
				color: $text-success;
				text-decoration: underline;
			}
		}
	}
}

.featured-article {
	@include body-wrapper;
	margin: 0 auto;
}
</style>
