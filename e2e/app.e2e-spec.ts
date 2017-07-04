import { NG4RxjsTutorialPage } from './app.po';

describe('ng4-rxjs-tutorial App', () => {
  let page: NG4RxjsTutorialPage;

  beforeEach(() => {
    page = new NG4RxjsTutorialPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
