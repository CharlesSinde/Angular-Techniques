import { NgConf2017Page } from './app.po';

describe('ng-conf2017 App', () => {
  let page: NgConf2017Page;

  beforeEach(() => {
    page = new NgConf2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngc works!');
  });
});
