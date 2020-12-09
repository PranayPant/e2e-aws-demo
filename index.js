module.exports = {
    'Demo test ecosia.org' : function(browser) {
      browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.titleContains('Blahhh')
        .end();
    }
  };