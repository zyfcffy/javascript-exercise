import find00OldPerson from './index';

test('寻找00后', () => {
  const collection = [
    {
      name: 'Tom',
      age: 21
    },
    {
      name: 'Lucky',
      age: 18
    },
    {
      name: 'Jerry',
      age: 1
    }
  ];

  const result = find00OldPerson(collection);
  expect(result).toEqual('Lucky');
});
