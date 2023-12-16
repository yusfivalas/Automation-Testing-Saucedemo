import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }


    get loginCredentials () {
        return $('#login_credentials')
    }

    get loginError () {
        return $('h3[data-test="error"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async verifyLoginPage () {
        await expect(this.loginCredentials).toBeDisplayed()
    }

    async errorLogin () {
        await expect(this.loginError).toBeDisplayed();
        await expect(this.loginError).toHaveTextContaining('Username and password do not match any user in this service');
    }


    async typeUsername(username) {
        await super.inputElement(this.inputUsername, username);
    }

    async typePassword(password) {
        await super.inputElement(this.inputPassword, password);
    }

    async clickMasuk() {
        await super.clickButton(this.btnSubmit);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
