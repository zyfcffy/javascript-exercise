function chooseMultiplesOfThree(collection) {
  return collection.filter(n => n % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((item, index) => collection.indexOf(item) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
