const USER_STATE_KEY = "userDetails";

const getUserDetailsState = state => state[USER_STATE_KEY];

export const isLoggedIn = state => {
  const userState = getUserDetailsState(state);
  return Boolean(userState.user && userState.user.id);
};

export const getUserName = state => {
  const userState = getUserDetailsState(state);
  return userState.user ? userState.user.name : null;
};
