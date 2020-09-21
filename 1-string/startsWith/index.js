export default function collectCarNumberCount(collection) {
  const newCollection = collection.filter(n => n.startsWith('粤A'));
  return newCollection.length;
}
