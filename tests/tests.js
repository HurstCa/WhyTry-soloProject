var pageObjects = {}
let linvis = require('../pageAssests/pageLinks')
let form = require ('../pageAssests/form')
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Page Links are Visible from Any Page': browser => {
       linvis.forEach (test => {
        pageObjects
        .click(test.selector)
        .pagelinks(linvis)
       })
       pageObjects
       .setValue('@search', ['Music Resources', browser.Keys.ENTER])
       .verify.visible('.uk-button')
       .pagelinks(linvis)
    },
    'Search': browser => {
        pageObjects
        .waitForElementVisible('@search')
        .setValue('@search', ['Music Resources', browser.Keys.ENTER])
        .useXpath()
        .waitForElementVisible('(//article[@class="uk-article"])[1]')
        .expect.element('(//article[@class="uk-article"])[1]').text.to.contain('music')
        pageObjects.expect.element('(//article[@class="uk-article"])[1]').text.to.contain('resources')
    },
    // Please only use the following test as needed. It is a live form. Thanks!
    // 'Sign up for an event': browser => {
    //     pageObjects
    //     .selectEvent()
    //     .fillForm(form)
    // },
}