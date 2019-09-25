const Array = require('./array.js');

test('returns Fizzbuzz if the  length  of the cobined array is divisible by 3 and 5 ', () => {

    expect(fizzBuzz([1,2,3,6,8,9,5], [9,4,5,4,2,6,10,15, 23, 2, 5])).toBe('Fizzbuzz');

});
test('returns if the  length  of an array when cobined  is divisible by 3 ', () => {

    expect(fizzBuzz([1,2,3,6,8,9,5], [9,4,5,4,2,6,10,15, 23, 2, 5])).toBe('Fizz');


});
test('returns buzz if the  length  of  the cobined array is divisible by 5 ', () => {

    expect(fizzBuzz([1,2,3,6,8,9,5], [9,4,5,4,2,6,10,15, 23, 2, 5])).toBe('Fizzbuzz');

});