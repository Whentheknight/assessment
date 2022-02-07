import { numToWord } from "./numberToWord";

test('lower than 10', ()=>{
    const result = numToWord(7)
    expect(result).toBe('seven')
})