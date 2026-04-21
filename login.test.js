const { loginUser, checkAccess } = require('./login');

test('loginUser returns token for valid user', () => {
  const result = loginUser({ id: 1, name: 'Saad' });
  expect(result.success).toBe(true);
  expect(result.token).toBeDefined();
});

test('checkAccess crashes when token is null', () => {
  // Had test ghadi yfshel b sabab l-bug!
  expect(() => checkAccess(null)).not.toThrow();
});
