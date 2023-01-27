function howManyYears(initialPop, growthRate, additionalPop, finalPop) {
    var numberOfYears = 0;
    while (initialPop < finalPop) {
        initialPop = initialPop + (initialPop * growthRate/100) + additionalPop;
        numberOfYears++;
    }
    return numberOfYears;
}

console.log('Years to full population: ' +howManyYears(100, 2, 50, 150));
console.log('Years to full population: ' + howManyYears(1000, 1.5, 200, 2000));