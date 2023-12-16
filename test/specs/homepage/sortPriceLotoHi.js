import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'
import Homepage from  '../../pageobjects/homepage.js'
import assert from 'assert'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.verifyLoginPage()
        await LoginPage.login('standard_user', 'secret_sauce')
        await Homepage.verifyHomepage()
    })

    it('should select sorted Price Low to High', async () => {
        await Homepage.clickSortLotoHi()
    })

    it('should select and sort Price Low to High', async () => {
        await Homepage.verifyPriceLotoHi()

    })
})

