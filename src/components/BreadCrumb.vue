<script lang="ts" setup>
export interface Crumb {
	name: string;
	to: string;
}

export type OrderedCrumbs = Crumb[];

defineProps<{ crumbs: OrderedCrumbs }>();
</script>

<template>
  <div class="crumb-container">
    <nuxt-link v-for="(crumb, index) in crumbs" :key="crumb.to" :to="crumb.to">
      <span>{{ crumb.name }}</span> {{ index !== crumbs.length - 1 ? '/ ' : ' ' }}
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.crumb-container {
  text-transform: capitalize;
  a {
			color: $text-secondary;
			text-decoration: none;
			transition: all $transition-period;

			&:hover {
				color: $text-success;
				text-decoration: underline;
			}
		}
}
</style>
