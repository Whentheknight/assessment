import { numToWord } from "./numberToWord";

test('test number 7', ()=>{
    const result = numToWord(7)
    expect(result).toBe('seven')
})

test('test number 42', () =>{
    const result = numToWord(42)
    expect(result).toBe('forty-two')
})

test('test number 560', ()=>{
    const result = numToWord(560)
    expect(result).toBe('five hundred and sixty')
})

test('test number 1999', ()=>{
    const result = numToWord(1999)
    expect(result).toBe('one thousand nine hundred and ninety-nine')
})

test('test number 2001', ()=>{
    const result = numToWord(2001)
    expect(result).toBe('two thousand and one')
})

test('test number 17999', ()=>{
    const result = numToWord(17999)
    expect(result).toBe('seventeen thousand nine hundred and ninety-nine')
})

test('test number 342251', ()=>{
    const result = numToWord(342251)
    expect(result).toBe('three hundred and forty-two thousand two hundred and fifty-one')
})

test('test number 1300420', ()=>{
    const result = numToWord(1300420)
    expect(result).toBe('one million three hundred thousand four hundred and twenty')
})

test('test number 26354000', ()=>{
    const result = numToWord(26354000)
    expect(result).toBe('twenty-six million three hundred and fifty-four thousand')
})

test('test number 999999999', ()=>{
    const result = numToWord(999999999)
    expect(result).toBe('nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine')
})

test('lowert than 0', ()=>{
    expect(() => {numToWord(-1)}).toThrow("Negative numbers are not supported! Please enter a valid number!");
})

test('number bigger than 999999999', ()=>{
    expect(() => {numToWord(10000000000)}).toThrow("Number is too big! Please enter a number between 0 and 100000000!");
})