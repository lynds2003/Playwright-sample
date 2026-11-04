import { Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

export async function loginToDemoApp(page: Page) {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login(process.env.TEST_USER!, process.env.TEST_PASSWORD!);
  await loginPage.verifyLoginSuccess('https://www.saucedemo.com/inventory.html');
}