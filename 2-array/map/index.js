export default function numberMapToWord(collection) {
  return collection.map(i => String.fromCharCode(i + 96));
}
