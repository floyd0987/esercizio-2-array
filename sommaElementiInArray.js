function sommaElementiInArray(x, y) {
  const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // I due numeri interi passati alla funzione dovrebbero essere positivi; in caso contrario, la funzione dovrebbe restituire -1
  if (x < 0 || y < 0) {
    return -1;
  }

  // Convalidare che il primo numero intero sia inferiore al secondo numero intero, in caso contrario restituire 0
  if (x >= y) {
    return 0;
  }

  let somma = 0;
  for (let i = x; i <= y; i++) {
    if (array.includes(i)) {
      somma += i;
    }
  }
  return somma;
}

module.exports = sommaElementiInArray;

// console.log(sommaElementiInArray(60, 90));
// console.log(sommaElementiInArray(60, -90));
// console.log(sommaElementiInArray(60, 120)); // 400
// console.log(sommaElementiInArray(90, 120)); // 190
// console.log(sommaElementiInArray(110, 120)); // 0
