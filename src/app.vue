<script lang="ts" setup></script>

<template>
	<div class="app-wrapper">
		<header>
			<div class="inner-wrapper">
				<nuxt-link to="/"><h2>MOER</h2></nuxt-link>
				<nav>
					<ul>
						<li>
							<nuxt-link to="/">Home</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/articles">Articles</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/categories">Categories</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/about">About</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<nuxt-page />
		<footer-component />
	</div>
</template>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	.inner-wrapper {
		@include body-wrapper;
		display: flex;
		justify-content: space-between;
		text-decoration: none;

		h2 {
			text-decoration: none;
			transition: all $transition-period;
			&:hover {
				opacity: 0.7;
			}
		}
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

		a {
			color: $text-secondary;
			text-decoration: none;
			transition: all $transition-period;

			&:hover {
				color: $text-success;
				text-decoration: underline;
			}
		}

    a.router-link-active {
			color: $white;
		}
	}
}

.featured-article {
	@include body-wrapper;
	margin: 0 auto;
}

footer {
	border-top: 1px solid $gray;
	min-height: 10rem;
	margin-top: 5rem;

	.content {
		padding-top: 2rem;
		@include body-wrapper;
		margin: 0 auto;
	}
}
</style>
