import { Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

export async function loginToDemoApp(page: Page) {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyLoginSuccess('https://www.saucedemo.com/inventory.html');
}