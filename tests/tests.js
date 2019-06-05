var pageObjects = {}
let linvis = require('../pageAssests/pageLinks')
let linvism = require('../pageAssests/pageLinksM')
let form = require ('../pageAssests/form')
let resources = require ('../pageAssests/resources')
module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },

    'Page Links are Visible from Any Page': browser => {
        pageObjects
        .waitForElementVisible('h5.uk-panel-title', 20000)
        .api.isVisible('.uk-navbar-toggle', function(result){
            if (result.value) {
                pageObjects.click('.uk-navbar-toggle')
                linvism.forEach (test => {
                    pageObjects
                    .click(test.selector)
                    .pagelinksMobile(linvism)
                })
            }
            else {
                linvis.forEach (test => {
                    pageObjects
                    .click(test.selector)
                    .pagelinks(linvis)
                })
                pageObjects
                .setValue('@search', ['Music Resources', browser.Keys.ENTER])
                .verify.visible('.uk-button')
                .pagelinks(linvis)
            }
        })
    },
    'Search': browser => {
        pageObjects
        .waitForElementVisible('h5.uk-panel-title', 20000)
        .api.isVisible('.uk-navbar-toggle', function(result){
            if (result.value) {
                browser.end()
            }
            else {
                pageObjects
                .waitForElementVisible('@search')
                .setValue('@search', ['Music Resources', browser.Keys.ENTER])
                .useXpath()
                .waitForElementVisible('(//article[@class="uk-article"])[1]')
                .expect.element('(//article[@class="uk-article"])[1]').text.to.contain('music')
                pageObjects.expect.element('(//article[@class="uk-article"])[1]').text.to.contain('resources')
            }
        })
    },
    // Please only use the following test as needed. It is a live form. Thanks!
    'Sign up for an event': browser => {
        pageObjects
        .waitForElementVisible('h5.uk-panel-title', 20000)
        .api.isVisible('.uk-navbar-toggle', function(result){
            if (result.value) {
                pageObjects
                .click('.uk-navbar-toggle')
                .selectEvent('@eventsm')
                .fillForm(form)
            }
            else {
                pageObjects
                .selectEvent('@events')
                .fillForm(form)
            }
        })
    },
    'Resources': browser => {
        pageObjects
        .waitForElementVisible('h5.uk-panel-title', 20000)
        .api.isVisible('.uk-navbar-toggle', function(result){
            if (result.value) {
                resources.forEach (test => {
                    pageObjects
                    .click('.uk-navbar-toggle')
                    .waitForElementVisible('@resourcesm')
                    .click('@resourcesm')
                    .waitForElementVisible(test.selector)
                    .click(test.selector)
                    .verify.containsText(test.archiveselector, test.value)
                    .navigate()
                })
            }
            else {
                resources.forEach (test => {
                    pageObjects
                    .waitForElementVisible('@resources')
                    .click('@resources')
                    .waitForElementVisible(test.selector)
                    .click(test.selector)
                    .verify.containsText(test.archiveselector, test.value)
                    .navigate()
                })
            }
        })
    },
}