export class App {
  minimumNumCoinsReversed (coinsArray) {
    let coinsChanged = 0

    for(let i = 0; i < coinsArray.length; i++) {
      if(coinsArray[i] == coinsArray[i+1]) {
        coinsChanged++
      }
    }

    return coinsChanged
  }
}