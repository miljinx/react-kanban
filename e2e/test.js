const expect = require('chai').expect;

describe('React Kanban App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Kanban');
  });

  it('Should have three kanban boards', () => {
    
  });
});
