import * as E from 'fp-ts/Either'

export const useFooterStore = defineStore({
  id: 'footer-store',
  state: () => ({
    email: {
      value: '',
      validation: {} as E.Either<string, string>,
      inital: true,
    }
  })
})
