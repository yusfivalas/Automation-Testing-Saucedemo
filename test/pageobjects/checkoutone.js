import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutOne extends Page {
    
    get checkoutTitle () {
        return $('.title')
    }
    
    get firstnameForm () {
        return $('#first-name')
    }
    
    get lastnameForm () {
        return $('#last-name')
    }
    
    get postalcodeForm () {
        return $('#postal-code')
    }
    
    get continueBtn () {
        return $('#continue')
    }


    async verifyCheckoutOnePage () {
        await expect(this.checkoutTitle).toBeDisplayed()
        await expect(this.checkoutTitle).toHaveText('Checkout: Your Information')
        await browser.pause(50)
    }

    async inputFirstName (firstname) {
        await super.inputElement(this.firstnameForm, firstname);
        await browser.pause(1000)   
    }

    async inputLastName (lastname) {
        await super.inputElement(this.lastnameForm, lastname);
        await browser.pause(1000)
    }

    async inputPostalCode (postalcode) {
        await super.inputElement(this.postalcodeForm, postalcode);
        await browser.pause(1000)
    }

    async clickContinue () {
        await browser.pause(50);
        await this.continueBtn.click();
    }

    open () {
        return super.open('checkout-step-one');
    }
}

export default new CheckoutOne();