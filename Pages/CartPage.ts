import {Page, Locator, expect} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkout: Locator;

    constructor(page: Page) {
        
        this.page = page;
        this.checkout = page.locator('[data-test="checkout"]');

    }
}


