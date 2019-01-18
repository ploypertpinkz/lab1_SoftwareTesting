const minus = require('./minus');

test(' 1 - 1 เท่ากับ 0',() =>{
    expect(minus(1,1)).toBe(0);
});

test('88 - 12 เท่ากับ 76',() =>{
    expect(minus(88,12)).toBe(76);
});

test('2 - 4 เท่ากับ -2',() =>{
    expect(minus(2,4)).toBe(-2);
});

test('98 - 76 เท่ากับ 22',() =>{
    expect(minus(98,76)).toBe(22);
});

test('100 - 55 เท่ากับ 45',() =>{
    expect(minus(100,55)).toBe(45);
});
