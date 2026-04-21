const { validateToken, generateToken } = require('./auth');

function loginUser(user) {
  if (!user) return { success: false, message: "No user provided" };
  
  const tokenData = generateToken(user);
  return {
    success: true,
    token: tokenData.token,
    expires: tokenData.expires
  };
}

function checkAccess(token) {
  // BUG: ila token = null, validateToken ghadi tcras!
  const isValid = validateToken(token);
  return isValid;
}

module.exports = { loginUser, checkAccess };
