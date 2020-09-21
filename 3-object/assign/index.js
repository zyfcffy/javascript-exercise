export default function addSerialNumber(source) {
  const target = Object.assign(source);
  target.properties.status = 'processed';
  target.serialNumber = '12345';
  return target;
}
