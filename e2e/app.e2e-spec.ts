import { AngularwebappPage } from './app.po';

describe('angularwebapp App', function() {
  let page: AngularwebappPage;

  beforeEach(() => {
    page = new AngularwebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
