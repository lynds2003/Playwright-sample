import {Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly backpack: Locator;
    readonly light: Locator;
    readonly jacket: Locator;
    readonly tshirt: Locator;
    readonly cartlink: Locator;

    constructor(page: Page) {
        
        this.page = page;
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.light = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.jacket = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.tshirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.cartlink = page.locator('[data-test="shopping-cart-link"]');
    }
 

}



