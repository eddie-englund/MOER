<script lang="ts" setup>
import { useFooterStore } from './footer-store';
import { tryCatch } from 'fp-ts/lib/TaskEither';
import { isLeft, isRight } from 'fp-ts/lib/Either';
import { emailSchema } from './footer-util';

const footerStore = useFooterStore();

const handleInput = async (input?: string): Promise<void> => {
	footerStore.email.validation = await tryCatch(
		async () => await emailSchema.parseAsync(input),
		() => 'Invalid email',
  )();

  footerStore.email.inital = false;
};
</script>

<template>
	<footer class="footer-container">
		<div class="content-container">
			<div class="top-container">
				<div class="news-letter">
					<h3>Sign up to our newsletter</h3>
					<p>Stay up to date and get notified when new articles drop.</p>
				</div>
				<div class="singup-container">
					<div class="input-container">
						<div class="email-container">
							<label for="subscribe-email">Email<span>*</span></label>
							<input
								type="email"
								name="subscribe-email"
								id="subscribe-email"
								v-model="footerStore.email.value"
								placeholder="Enter your email"
								@input="(e) => handleInput((e.target as HTMLInputElement).value)"
								@invalid="isLeft(footerStore.email.validation)"
                :class="isRight(footerStore.email.validation) ? 'valid' : 'invalid'"
							/>
						</div>
						<cta-button text="Subscribe" :disabled="isLeft(footerStore.email.validation) || footerStore.email.inital"/>
					</div>
					<p class="error" v-if="isLeft(footerStore.email.validation)">
						{{ footerStore.email.validation.left }}
					</p>
				</div>
			</div>
      <div class="bottom-container">
        <div class="footer-category">
          <p class="category-header">Organisation</p>
          <ul>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
        <div class="footer-category">
          <p class="category-header">Legal</p>
          <ul>
            <li><nuxt-link to="/about">Privacy policy</nuxt-link></li>
          </ul>
        </div>
      </div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.content-container {
	padding: 1rem;
}
.top-container {
	display: flex;
	justify-content: space-evenly;

	.input-container,
	.email-container {
		display: flex;
	}

	.email-container {
		flex-direction: column;
	}

	.input-container {
		align-items: flex-end;
		gap: 1rem;
	}

	.cta-button {
		max-height: 2.2rem;
	}
}
</style>