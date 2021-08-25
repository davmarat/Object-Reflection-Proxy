export default function orderByProps(obj, propsForOrder) {
  const orderedPartArr = [];
  const defaultSortedArr = [];

  for (const prop of propsForOrder) {
    if (prop in obj) {
      orderedPartArr.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  for (const key in obj) {
    if (!propsForOrder.includes(key)) {
      defaultSortedArr.push({
        key,
        value: obj[key],
      });
      defaultSortedArr.sort((a, b) => a.key.localeCompare(b.key));
    }
  }

  return [...orderedPartArr, ...defaultSortedArr];
}
