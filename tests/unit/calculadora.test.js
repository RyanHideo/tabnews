const calculadora = require("../../models/calculadora");

test("Deve somar 2 + 2 e retornar 4", () => {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
});

test("Deve somar 50 + 10 e retornar 60", () => {
    const resultado = calculadora.somar(50, 10);
    expect(resultado).toBe(60);
});

test("Deve somar 'banana' + 10 e retornar 60", () => {
    const resultado = calculadora.somar("banana", 10);
    expect(resultado).toBe("Erro");
});

test("Deve somar 10 +'banana' e retornar 60", () => {
    const resultado = calculadora.somar(10, "banana");
    expect(resultado).toBe("Erro");
});