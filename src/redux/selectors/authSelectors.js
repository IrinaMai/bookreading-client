const isAuth = state => state.auth.token;
const getUserEmail = state => state.auth.user.email;
const getId = state => state.auth.user.id;

const authSelectors = { isAuth, getId, getUserEmail };

export default authSelectors;
