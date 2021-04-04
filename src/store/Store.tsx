import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: { lang: true },
  actions: {
    changeLanguage: () => ({ setState, getState }) => {
      setState({ lang: !getState().lang,
      });
    },
  },
  name: 'lang',
});

export const useLanguage = createHook(Store);