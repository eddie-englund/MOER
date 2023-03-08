import { z } from 'zod';
import { tryCatch, map, chainW } from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import axios from 'axios';

export const emailSchema = z.string().email().trim();

const expectedResult = z.object({
	success: z.boolean(),
});

/**
 *
 * @param email - zod validated email
 */
export const subscribe = async (email: string, baseUrl: string) => {
	return await pipe(
		tryCatch(
			async () =>
				await useFetch(`${baseUrl}/subscribe`, {
					method: 'POST',
					body: { email },
				}),
			reason => ['Failed to subscribe', reason],
		),
		chainW(res =>
			tryCatch(
				async () => expectedResult.parseAsync(res.data.value),
				reason => ['Response format was invalid', reason],
			),
		),
	)();
};
