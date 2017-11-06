// [1,2,3,4] => [[1], [1, 2], [1,2,3], [1,2,3,4]]
const stack = original =>
  original
  .reduce(
    (agg, ele) => agg.concat([_.last(agg).concat([ele])]), [
      []
    ])

// [1,2,3,4] => [[], [4], [3, 4], [1, 3, 4], [1, 2, 3, 4],]
const grow = arr =>
  stack(_.shuffle(_.range(arr.length)))
  .map(indexSet => indexSet.sort(_.subtract).map(idx => arr[idx]))


const look = x => {
  console.log(x)
  return x
}


const keyval = (...pair) => _.fromPairs([pair])

const countsToBag = countLookup =>
  _.toPairs(countLookup)
    .reduce((arr, pair) =>
      arr.concat(Array(pair[1]).fill(pair[0])),
      [])

// check if you're currently being displayed in an iframe
const inIFrame = () => window.frameElement ? true : false
