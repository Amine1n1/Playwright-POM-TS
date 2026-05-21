import { test, expect } from '../fixtures/pom.fixture';

test('fail login', async ({ pm }) => {
  await pm.loginPage.openLoginPage();
  await pm.loginPage.userLogin('fusername', 'fpass');
  await pm.loginPage.assertFailedUsername();
});