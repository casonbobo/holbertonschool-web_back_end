export default function cleanSet(set, startString) {
  if (!startString || startString < 1) return '';
  return [...set]
    .filter((it) => it)
    .filter((it) => it.startsWith(startString))
    .map((it) => it.substring(startString.length))
    .join('-');
}
