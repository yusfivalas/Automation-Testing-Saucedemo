import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutComplete extends Page {
    
    get checkoutTitle () {
        return $('.title')
    }

    get backHomeBtn () {
        return $('#fback-to-products')
    }

    get completeHeader () {
        return $('.complete-header')
    }

    get completeImg () {
        return $('.pony_express')
    }
    
    async verifyCompleteCheckout () {
        await expect(this.checkoutTitle).toBeDisplayed();
        await expect(this.checkoutTitle).toHaveText('Checkout: Complete!');
        await expect(this.completeImg).toBeDisplayed();
        await expect(this.completeHeader).toBeDisplayed();
        await expect(this.completeHeader).toHaveText('Thank you for your order!');
    }

    open () {
        return super.open('checkout-complete');
    }
}

export default new CheckoutComplete();