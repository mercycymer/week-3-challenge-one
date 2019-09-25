function fizzBuzz() {
    let list1 = [1,2,3,6,8,9,5];
    let list2 = [9,4,5,4,2,6,10,15, 23, 2, 5];
    let a = list1.concat(list2);
    let b = a.length; 
    if ((b % 3) === 0 && (b % 5) === 0) {
        return 'Fizzbuzz';
    }
    else if ((b % 3) === 0) {
    return 'Fizz';
    }
    else if ((b % 5) === 0) {
        return 'Buzz';
    }
    else {
        return 'Not divisible by 3 or 5';
    }
}
document.getElementById('g').innerHTML = fizzBuzz();

    