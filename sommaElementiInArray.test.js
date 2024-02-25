const sommaElementiInArray = require("./sommaElementiInArray");

test("30 e 60 -> 180", () => {
  expect(sommaElementiInArray(30, 60)).toBe(180);
});

test("10 e 100 -> 550", () => {
  expect(sommaElementiInArray(10, 100)).toBe(550);
});

test("Solo numeri positivi, in caso contrario restituire -1", () => {
  expect(sommaElementiInArray(-30, -60)).toBe(-1);
});

test("Convalidare che il primo numero intero sia inferiore al secondo numero intero, in caso contrario restituire 0", () => {
  expect(sommaElementiInArray(70, 30)).toBe(0);
});

test("Se il primo intero è nell'array e il secondo è superiore a 100, ad esempio 90 e 120, la funzione dovrebbe restituire la somma degli interi che si trovano all'interno dell'array e nell'intervallo indicato. In questo caso sarebbero 190.", () => {
  expect(sommaElementiInArray(90, 120)).toBe(190);
});

test("Se nell'array non vengono trovati entrambi i numeri interi, ad esempio 110 e 120, la funzionedovrebbe restituire 0", () => {
  expect(sommaElementiInArray(110, 20)).toBe(0);
});
