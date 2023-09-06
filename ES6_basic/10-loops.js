export default function appendToEachArrayValue(array, appendString) {
  for (const i of array) {
    array.push(appendString + i);
  }
  return array;
}
