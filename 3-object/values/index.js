export default function countTypesNumber(source) {
  const values = Object.values(source);
  return values.map(i => parseInt(i, 10)).reduce((cur, pre) => cur + pre);
}
