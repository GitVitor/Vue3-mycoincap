import { reactive, toRefs } from "vue";

interface State {
  loading: boolean;
  error: any;
  result?: {
    data: object;
  };
}

export default function usePromise(
  fn: (
    args?: any
  ) => Promise<{
    data: object;
  }>
) {
  const state = reactive<State>({
    loading: false,
    error: null,
    result: undefined,
  });

  const use = async (...args: any) => {
    state.error = null;
    state.loading = true;
    state.result = undefined;

    try {
      const result = await fn(...args);
      state.result = result;
      state.loading = false
    } catch (error) {
      state.error = error;
    }
  };

  return {
    ...toRefs(state),
    use,
  };
}
