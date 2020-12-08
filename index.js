module.exports = {
    'Demo test ecosia.org' : function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .verify.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    }
  };