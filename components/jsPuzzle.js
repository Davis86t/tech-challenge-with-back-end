export default function getUniqueArr(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let uniqueArr = [...new Set(arr)]
  return (
    uniqueArr
  )
}