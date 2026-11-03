import { test, expect } from '@playwright/test';
import { InventoryPage } from '../Pages/InventoryPage';
import { CartPage } from '../Pages/CartPage';
import { CheckoutPage } from '../Pages/Checkout';
import { CheckoutOverviewPage } from '../Pages/CheckoutOverview';
import { loginToDemoApp } from '../flows/demologinflow';

test('Demo Test @demo', async ({ page }) => {

const inventoryPage = new InventoryPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);
const checkoutOverviewPage = new CheckoutOverviewPage(page);

  await loginToDemoApp(page);

  await inventoryPage.backpack.click();
  await inventoryPage.light.click();
  await inventoryPage.jacket.click();
  await inventoryPage.tshirt.click();
  await inventoryPage.cartlink.click();
  
  await cartPage.checkout.scrollIntoViewIfNeeded();
  await cartPage.checkout.click();

  await checkoutPage.firstName.fill('test');
  await checkoutPage.lastName.fill('test');
  await checkoutPage.postalCode.fill('0000');
  await checkoutPage.continueButton.click();

  await checkoutOverviewPage.finish.scrollIntoViewIfNeeded();
  await checkoutOverviewPage.finish.click();

  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
});