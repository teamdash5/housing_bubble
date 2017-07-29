import { RealestatePage } from './app.po';

describe('realestate App', () => {
  let page: RealestatePage;

  beforeEach(() => {
    page = new RealestatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
