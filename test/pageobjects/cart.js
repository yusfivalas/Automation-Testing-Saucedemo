import { $ } from '@wdio/globals'
import Page from './page.js';

class Cart extends Page {
    
    get cartTitle () {
        return $('.title')
    }

    get backpackName () {
        return $('//a[@id = "item_4_title_link"]/div')
    }

    get checkoutBtn () {
        return $('#checkout')
    }


    async verifyCartPage () {
        await expect(this.cartTitle).toBeDisplayed()
        await expect(this.cartTitle).toHaveText('Your Cart')
    }

    async clickCheckout () {
        await this.checkoutBtn.click();
    }

    open () {
        return super.open('cart');
    }
}

export default new Cart();