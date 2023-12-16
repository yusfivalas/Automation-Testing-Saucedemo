import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login.page.js'
import SecurePage from '../../pageobjects/secure.page.js'
import Homepage from  '../../pageobjects/homepage.js'
import assert from 'assert'

describe('Sorting Check', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.verifyLoginPage()
        await LoginPage.login('standard_user', 'secret_sauce')
        await Homepage.verifyHomepage()
    })

    it('should select and sort item title A to Z', async () => {
        await Homepage.clickSortAtoZ()
        await Homepage.verifySortAToZ()
    })

    it('should select and sort item title Z to A', async () => {
        await Homepage.clickSortZtoA()
        await Homepage.verifySortZToA()
    })

    it('should select sorted Price High to Low', async () => {
        await Homepage.clickSortHitoLo()
        await Homepage.verifyPriceHitoLo()
    })

    it('should select sorted Price Low to High', async () => {
        await Homepage.clickSortLotoHi()
        await Homepage.verifyPriceLotoHi()
    })
})

