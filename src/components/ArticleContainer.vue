<script lang="ts" setup>
import { Article } from '../types/article';
import { StarIcon } from '@heroicons/vue/24/solid/index.js';
const props = defineProps({ articleDir: { type: String, required: true } });

const { data } = await useAsyncData(`article-${props.articleDir}`, () =>
	queryContent<Article>(props.articleDir).findOne(),
);
</script>

<template>
	<div class="article-container">
		<content-renderer :value="data" v-if="data" tag="article">
			<h1 class="title">{{ data.title }}</h1>
			<img :src="data.img.url" alt="scenery in the game" />
			<div class="meta">
				<div class="rating-container">
					<div class="star-icons">
						<star-icon
							class="icon"
							v-for="rating in data.rating"
							:key="rating"
						/>
					</div>
				</div>
				<p class="date">{{ `${data.author} - ${data.date}` }}</p>
			</div>
			<content-renderer-markdown :value="data" class="nuxt-content" />
			<br />
			<h3>Footnotes and attributions</h3>
			<ul>
				<li>
					<a class="attribution" :href="data.img.origin">
						Image: {{ data.img.attribution }}
					</a>
				</li>
				<li v-for="attribute in data.details">
					<p>{{ attribute }}</p>
				</li>
			</ul>
		</content-renderer>
	</div>
</template>

<style lang="scss" scoped>
.article-container {
	img {
		min-width: 100%;
    max-width: 100%;
		border-radius: $radius;
		max-height: 20rem;
		object-fit: cover;
	}

	.title {
		padding-bottom: 1rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
    padding-top: 1rem;
	}

	.attribution {
		color: $text-secondary;
		transition: all $transition-period;

		&:hover {
			color: $success;
			text-decoration: underline;
			cursor: pointer;
		}
	}

	.icon {
		color: $text-secondary;
		width: 1.5rem;
	}

	.date {
		text-align: right;
		padding: 0.5rem;
		padding-right: 0;
	}
}

.nuxt-content {
	margin-top: 2rem;
}
</style>
