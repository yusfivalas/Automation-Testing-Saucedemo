import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/


export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.saucedemo.com//${path}`)
    }

    waitElementDisplayed(element) {
        if (!element.isDisplayed()) {
            element.waitForDisplayed({timeout});
        }
    }

    inputElement (element, value) {
        this.waitElementDisplayed(element);
        element.setValue(value);
    }

    clickButton (element) {
        // this.waitElementDisplayed(element);
        element.click();
    }



}
