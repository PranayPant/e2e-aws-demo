module.exports = {
    'Demo test ecosia.org' : function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .setValue('input[type=search]', 'nightwatch')
        .click('button[type=submit]')
        .verify.containsText('.mainline-results', 'Nightwatch.js')
        .end();
    }
  };