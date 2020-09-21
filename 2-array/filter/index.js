function chooseMultiplesOfThree(collection) {
  return collection.filter(n => n % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((index, item) => collection.indexOf(index) === item);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
