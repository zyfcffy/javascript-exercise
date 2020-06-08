import { chooseMultiplesOfThree, chooseNoRepeatNumber } from './index';

test('从collection中选出3的倍数', () => {
  const collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];
  const result = chooseMultiplesOfThree(collection);

  expect(result).toEqual([0, 3, 6, 9]);
});

test('从collection中选出不重复的数字', () => {
  const collection = [1, 1, 1, 2, 2, 3, 4];
  const result = chooseNoRepeatNumber(collection);

  expect(result).toEqual([1, 2, 3, 4]);
});
