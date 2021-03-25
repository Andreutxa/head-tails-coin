import { App } from './App';
describe('App tests', () => {
  const app = new App();
  it ('Test 1: Should print => 1', () => {
    const response = app.minimumNumCoinsReversed([1,0,1]);
    expect(response).toBe(0)
  })
})