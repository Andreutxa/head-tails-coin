export class App {
  minimumNumCoinsReversed (coinsArray) {
    let sumChangingPossibility1 = 0;
    let sumChangingPossibility2 = 0;

    for (let i = 0; i < coinsArray.length; i++) {
      (i % 2 === 0) ? (0 !== coinsArray[i]) ? sumChangingPossibility1++ : sumChangingPossibility2++ : (1 !== coinsArray[i]) ? sumChangingPossibility1++ : sumChangingPossibility2++
      // if (i % 2 === 0) {
      //   (0 !== coinsArray[i]) ? sumChangingPossibility1++ : sumChangingPossibility2++
      // } else {
      //   (1 !== coinsArray[i]) ? sumChangingPossibility1++ : sumChangingPossibility2++
      // }
    }

    return (sumChangingPossibility1 > sumChangingPossibility2) ? sumChangingPossibility2 : sumChangingPossibility1

  }
}