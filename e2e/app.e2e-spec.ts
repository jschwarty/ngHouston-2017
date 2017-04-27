import { NgHoustonPage } from './app.po';

describe('ng-houston App', () => {
  let page: NgHoustonPage;

  beforeEach(() => {
    page = new NgHoustonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
