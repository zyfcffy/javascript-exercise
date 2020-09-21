export default function find00OldPerson(collection) {
  const result = collection.find(item => item.age > 10 && item.age < 20);
  return result.name;
}
