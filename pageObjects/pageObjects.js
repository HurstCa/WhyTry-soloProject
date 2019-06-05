let whytrycommands = {
    pagelinks: function(testData) {
        this
        .waitForElementVisible('@home')
        testData.forEach (test => {
            this
            .verify.visible(test.selector)
        })
        this.verify.visible('@search')
        return this
    },
    pagelinksMobile: function(testData) {
        this
        .waitForElementVisible('.uk-navbar-toggle')
        .click('.uk-navbar-toggle')
        testData.forEach (test => {
            this
            .verify.visible(test.selector)
        })
        return this
    },
    selectEvent: function(selector) {
        this
        .waitForElementVisible(selector)
        .click(selector)
        .waitForElementVisible('@firstevent')
        .click('@firstevent')
        .waitForElementVisible('@individual')
        .verify.visible('@individual')
        .verify.visible('@group')
        .click('@individual')
        .verify.containsText('.eb-page-heading', 'INDIVIDUAL REGISTRATION')
        return this
    },
    fillForm: function(testData) {
        testData.forEach (test => {
            this
            .setValue(test.selector, test.value)
        })
        this
        .click('@payMethod')
        .click('[name="btn-submit"]')
        .verify.containsText('.eb-page-heading', 'REGISTRATION COMPLETED')
        return this
    },

}
module.exports = {
    url: 'https://whytry.org/',
    commands: [whytrycommands],
    elements: {
        home: {
            selector: '(//a[text()="Home"])[1]',
            locateStrategy: 'xpath'
        },
        homem: {
            selector: '(//a[text()="Home"])[2]',
            locateStrategy: 'xpath'
        },
        products:{
            selector: '(//a[text()="Products"])[1]',
            locateStrategy: 'xpath'
        },
        productsm:{
            selector: '(//a[text()="Products"])[2]',
            locateStrategy: 'xpath'
        },
        events: {
            selector: '(//a[text()="Training/Events"])[1]',
            locateStrategy: 'xpath'
        },
        eventsm: {
            selector: '(//a[text()="Training/Events"])[2]',
            locateStrategy: 'xpath'
        },
        resources: {
            selector: '(//a[text()="Resources"])[1]',
            locateStrategy: 'xpath'
        },
        resourcesm: {
            selector: '(//a[text()="Resources"])[2]',
            locateStrategy: 'xpath'
        },
        demo: {
            selector: '(//a[text()="Request Demo"])[1]',
            locateStrategy: 'xpath'
        },
        demom: {
            selector: '(//a[text()="Request Demo"])[2]',
            locateStrategy: 'xpath'
        },
        about: {
            selector: '(//a[text()="About Us"])[1]',
            locateStrategy: 'xpath'
        },
        aboutm: {
            selector: '(//a[text()="About Us"])[2]',
            locateStrategy: 'xpath'
        },
        login: {
            selector: '(//a[text()="Login"])[1]',
            locateStrategy: 'xpath'
        },
        loginm: {
            selector: '(//a[text()="Login"])[last()]',
            locateStrategy: 'xpath'
        },
        search: '.uk-search-field',
        firstevent: {
            selector: '(//a[@class="url ebm-event-link"])[1]',
            locateStrategy: 'xpath'
        },
        individual: {
            selector: '//strong[text()="Individual"]',
            locateStrategy: 'xpath'
        },
        group: {
            selector: '//strong[text()="Group"]',
            locateStrategy: 'xpath'
        },
        payMethod: {
            selector: '(//label[@class="radio"])[2]',
            locateStrategy: 'xpath'
        },
        music: {
            selector: '//a[text()="Music Resources"]',
            locateStrategy: 'xpath'
        },
        video: {
            selector: '(//a[text()="Video Resources"])[2]',
            locateStrategy: 'xpath'
        },
        webinar: {
            selector: '//a[text()="Webinar Archive"]',
            locateStrategy: 'xpath'
        },
        research: {
            selector: '(//a[text()="Research"])[2]',
            locateStrategy: 'xpath'
        },
        assessments: {
            selector: '(//a[text()="Assessments"])[2]',
            locateStrategy: 'xpath'
        },
        funding: {
            selector: '(//a[text()="Funding Resources"])[2]',
            locateStrategy: 'xpath'
        },
        related: {
            selector: '//a[text()="Related Links"]',
            locateStrategy: 'xpath'
        },
        teaching: {
            selector: '//a[text()="Teaching Resources"]',
            locateStrategy: 'xpath'
        },
        bookstore: {
            selector: '//a[text()="Bookstore"]',
            locateStrategy: 'xpath'
        },
        musicpg: {
            selector: '(//h1)[1]',
            locateStrategy: 'xpath'
        },
        researchpg: {
            selector: '(//h1)[2]',
            locateStrategy: 'xpath'
        },
        teachingpg: {
            selector: '(//h1)[1]',
            locateStrategy: 'xpath'
        },
        popout: '.uk-navbar-toggle',
    }
}