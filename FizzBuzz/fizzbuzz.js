//Used methods to make it easier to read.

for (let number = 1; number < 101; number++){
    if(isDivisibleBy3(number) && isDivisibleBy5(number)) console.log("FizzBuzz");
    else if (isDivisibleBy3(number)) console.log("Fizz")
    else if (isDivisibleBy5(number)) console.log("Buzz")
    else console.log(number)
}

function isDivisibleBy3(number) {
    return number % 3 === 0;
}

function isDivisibleBy5(number) {
    return number % 5 === 0;
}