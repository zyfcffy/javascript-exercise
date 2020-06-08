import numberMapToWord from './index';

test('数字映射为字母', () => {
  const collectionA = [1, 2, 3, 4, 5];
  const collectionB = ['a', 'b', 'c', 'd', 'e'];

  const result = numberMapToWord(collectionA);
  expect(result).toEqual(collectionB);
});
