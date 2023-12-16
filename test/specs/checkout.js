import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import Homepage from  '../pageobjects/homepage.js'
import Cart from  '../pageobjects/cart.js'
import CheckoutOne from  '../pageobjects/checkoutone.js'
import CheckoutTwo from  '../pageobjects/checkouttwo.js'
import CheckoutComplete from  '../pageobjects/checkoutcomplete.js'

describe('Checkout Scenario', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.verifyLoginPage()
        await LoginPage.login('standard_user', 'secret_sauce')
        await Homepage.verifyHomepage()
    })

    it('should successfully add item to cart and go to cart page', async () => {
        await Homepage.addToCart()
        await Homepage.clickCart()
    })

    it('should verify Cart page and checkout item(s) from cart', async () => {
        await Cart.verifyCartPage()
        await Cart.clickCheckout()
    })
    
    it('should verify that customer in the Checkout step One page and successfully fill customer data and continue to step two checkout', async () => {
        await CheckoutOne.verifyCheckoutOnePage()
        await CheckoutOne.inputFirstName('yusfi')
        await CheckoutOne.inputLastName('valas')
        await CheckoutOne.inputPostalCode('12345')
        await CheckoutOne.clickContinue()
    })


    it('should verify checkout step two page and can click finish button', async () => {
        await CheckoutTwo.verifyCheckoutTwoPage()
        await CheckoutTwo.clickFinish()
    })

    it('should verify successfull checkout', async () => {
        await CheckoutComplete.verifyCompleteCheckout()
    })
})

