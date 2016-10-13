import { FriendzoneAngular2Page } from './app.po';

describe('friendzone-angular2 App', function() {
  let page: FriendzoneAngular2Page;

  beforeEach(() => {
    page = new FriendzoneAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
