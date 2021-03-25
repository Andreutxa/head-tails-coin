import { App } from './App';
describe('App tests', () => {
  const app = new App();
  it ('Test 1: Should print => 0', () => {
    const response = app.minimumNumCoinsReversed([1,0,1]);
    expect(response).toBe(0)
  })
  it ('Test 2: Should print => 1', () => {
    const response = app.minimumNumCoinsReversed([1,0,1,0,1,1]);
    expect(response).toBe(1)
  })
  it ('Test 3: Should print => 2', () => {
    const response = app.minimumNumCoinsReversed([1,1,0,1,1]);
    expect(response).toBe(2)
  })
  it ('Test 4: Should print => 2', () => {
    const response = app.minimumNumCoinsReversed([0,1,1,0]);
    expect(response).toBe(2)
  })
  it ('Test 5: Should print => 2', () => {
    const response = app.minimumNumCoinsReversed([1,1,1,1]);
    expect(response).toBe(2)
  })
  it ('Test 6: Should print => 2', () => {
    const response = app.minimumNumCoinsReversed([1,1,1,1,1,0]);
    expect(response).toBe(2)
  })
  it ('Test 7: Should print => 4', () => {
    const response = app.minimumNumCoinsReversed([0,1,1,1,1,1,1,1,1,1,0]);
    expect(response).toBe(4)
  })
})