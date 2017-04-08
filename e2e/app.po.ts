import { browser, element, by } from 'protractor';

export class NgConf2017Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngc-root h1')).getText();
  }
}
