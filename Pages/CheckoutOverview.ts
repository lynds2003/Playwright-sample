import {Page, Locator, expect} from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly finish: Locator;


    constructor(page: Page) {
        
        this.page = page;
        this.finish = page.locator('[data-test="finish"]');
        
    }
 

}


