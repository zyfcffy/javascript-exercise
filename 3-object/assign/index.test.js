// eslint-disable-next-line import/no-named-as-default
import addSerialNumber from './index';

test('合并源对象并添加新的编号', () => {
  const source = {
    type: 'accessory',
    properties: {
      color: 'green',
      status: 'raw'
    }
  };
  const expected = {
    serialNumber: '12345',
    type: 'accessory',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };

  const result = addSerialNumber(source);
  expect(result).toEqual(expected);
});
