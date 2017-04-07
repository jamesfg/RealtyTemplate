import { RealtyAppPage } from './app.po';

describe('realty-app App', () => {
  let page: RealtyAppPage;

  beforeEach(() => {
    page = new RealtyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
