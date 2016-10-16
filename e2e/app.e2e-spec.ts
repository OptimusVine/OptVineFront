import { LearnNgPage } from './app.po';

describe('learn-ng App', function() {
  let page: LearnNgPage;

  beforeEach(() => {
    page = new LearnNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
