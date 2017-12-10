import { AppRecetasPage } from './app.po';

describe('app-recetas App', () => {
  let page: AppRecetasPage;

  beforeEach(() => {
    page = new AppRecetasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
