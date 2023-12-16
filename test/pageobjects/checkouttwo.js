import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutTwo extends Page {
    
    get checkoutTitle () {
        return $('.title')
    }


    get finishBtn () {
        return $('#finish')
    }


    async verifyCheckoutTwoPage () {
        await expect(this.checkoutTitle).toBeDisplayed();
        await expect(this.checkoutTitle).toHaveText('Checkout: Overview');
    }

    async clickFinish () {
        await expect(this.finishBtn).toBeDisplayed();
        await expect(this.finishBtn).toBeClickable();
        await this.finishBtn.click();
    }

    open () {
        return super.open('checkout-step-two');
    }
}

export default new CheckoutTwo();