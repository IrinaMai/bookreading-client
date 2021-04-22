const isAuth = state => state.auth.token;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getId = state => state.auth.user.id;

const authSelectors = { isAuth, getId, getUserEmail, getUserName };

export default authSelectors;
