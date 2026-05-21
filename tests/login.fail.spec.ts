import { test, expect } from '../fixtures/pom.fixture';

test('Deliberate failure: wrong flash message', async ({ pm }) => {
  await pm.loginPage.openLoginPage();
  await pm.loginPage.userLogin('fusername', 'fpass');
  await pm.securePage.assertSuccess();
});