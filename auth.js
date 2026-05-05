function generateToken(user) {
  if (!user) return null;
  return {
    token: "token_" + user.id,
    expires: Date.now() + 3600000
  };
}
//test-n8n
//test.ngrok
//rah3iiit
//saadddddd
s
function validateToken(token) {
  // BUG: mkaynch check ila token null
  return token.startsWith("token_");
}

module.exports = { generateToken, validateToken };
