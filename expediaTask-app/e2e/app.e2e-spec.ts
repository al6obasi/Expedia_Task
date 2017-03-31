import { ExpediaTaskAppPage } from './app.po';

describe('expedia-task-app App', function() {
  let page: ExpediaTaskAppPage;

  beforeEach(() => {
    page = new ExpediaTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
