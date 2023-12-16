import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should show error message if login credentials is not valid', async () => {
        await LoginPage.open()
        await LoginPage.verifyLoginPage()
        await LoginPage.login('error_username', 'error_password')
        await LoginPage.errorLogin()
    })
})