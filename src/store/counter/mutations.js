export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};

export const incrementBy = (state, payload) => {
  state.count += payload;
  state.lastMutation = `incrementBy ${payload}`;
  state.lastRandomInt = payload;
};

export const setLoading = (state, val) => {
  state.isLoading = val;
  state.lastMutation = `setLoading ${val}`;
};

export const reset = (state) => {
  state.count = 1;
  state.lastMutation = "reset";
};
