import { CbBasePage } from './app.po';

describe('cb-base App', () => {
  let page: CbBasePage;

  beforeEach(() => {
    page = new CbBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
