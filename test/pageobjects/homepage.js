import { $ } from '@wdio/globals'
import Page from './page.js';

class Homepage extends Page {
    get title () {
        return $('.title')
    }

    get burgerButton () {
        return $('#react-burger-menu-btn')
    }

    get burgerMenu () {
        return $('//div[@class="bm-menu"]')
    }

    get logoutButton () {
        return $('//a[@id="logout_sidebar_link"]')
    }

    get sortMenu() {
        return $('.active_option')
    }

    get sortButton() {
        return $('.select_container')
    }

    get sortOption() {
        return $('//select[@class="product_sort_container"]')
    }

    get addCartBackpack() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get removeCartBackpack() {
        return $('#remove-sauce-labs-backpack')
    }

    get shoppingCart() {
        return $('.shopping_cart_container')
    }

    get cartBadge() {
        return $('.shopping_cart_badge')
    }


    async verifyHomepage () {
        await expect(this.title).toBeDisplayed()
        await expect(this.title).toHaveText('Products')
    }

    async openBurgerMenu () {
        await this.burgerButton.click()
        await expect(this.burgerMenu).toBeDisplayed()
    }

    async logout () {
        await expect(this.logoutButton).toBeDisplayed()
        await this.logoutButton.click()
    }


    async clickSortAtoZ () {
        await this.sortButton.click();
        await this.sortOption.selectByAttribute("value", "az");
        await expect(this.sortMenu).toHaveText('Name (A to Z)');
    }

    async verifySortAToZ () {
        
        //sort title items before choose A to Z
        const titles = ($$('.inventory_item_name'));
        const elementTxt = await titles.map((element) => element.getText());
        const sortedElementTexts = [...elementTxt].sort();

        //expect title items are sorted A to Z
        await expect(elementTxt).toEqual(sortedElementTexts);
    }

    async clickSortZtoA () {
        await this.sortButton.click();
        await this.sortOption.selectByAttribute("value", "za");
        await expect(this.sortMenu).toHaveText('Name (Z to A)');
    }

    async verifySortZToA () {
        
        //sort title items before choose Z to A
        const titles = ($$('.inventory_item_name'));
        const elementTxt = await titles.map((element) => element.getText());
        const sortedElementTexts = [...elementTxt].sort().reverse();

        //expect title items are sorted Z to A
        await expect(elementTxt).toEqual(sortedElementTexts);
        
    }

    async clickSortLotoHi () {
        await this.sortButton.click();
        await this.sortOption.selectByAttribute("value", "lohi");
        await expect(this.sortMenu).toHaveText('Price (low to high)');
    }

    async verifyPriceLotoHi () {
        
        //get list of price and put it in array
        const titles = ($$('.inventory_item_price'))
        const elementTxt = await titles.map((element) => element.getText());

        //remove dollar sign for each array value and convert into decimal number (float)
        elementTxt.forEach(function(item, index) {
            elementTxt[index] = parseFloat(elementTxt[index].replace('$', ''));
        });
        
        //sort price low to high
        const sortedElementTexts = [...elementTxt].sort((a, b) => a - b);

        //expect Price are sorted from Low to High
        await expect(elementTxt).toEqual(sortedElementTexts);
    }


    async clickSortHitoLo () {
        await this.sortButton.click();
        await this.sortOption.selectByAttribute("value", "hilo");
        await expect(this.sortMenu).toHaveText('Price (high to low)');
    }

    async verifyPriceHitoLo () {
        
        //get list of price and put it in array
        const titles = ($$('.inventory_item_price'));
        const elementTxt = await titles.map((element) => element.getText());

        //remove dollar sign for each array value and convert into decimal number (float)
        elementTxt.forEach(function(item, index) {
            elementTxt[index] = parseFloat(elementTxt[index].replace('$', ''));
        });
        
        //sort price high to low
        const sortedElementTexts = [...elementTxt].sort((a, b) => b - a);

        //expect Price are sorted from High to Low
        await expect(elementTxt).toEqual(sortedElementTexts);
    }

    async addToCart () {
        await this.addCartBackpack.waitForDisplayed();
        await this.addCartBackpack.click();;
        await expect(this.removeCartBackpack).toBeDisplayed();
        await expect(this.cartBadge).toBeExisting();
        await expect(this.cartBadge).toHaveText('1');
        console.log((await this.cartBadge).getText());
    }

    async clickCart () {
        await this.shoppingCart.click();
    }

    open () {
        return super.open('inventory');
    }
}

export default new Homepage();