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

const group = (...sequences) =>
  _.zip(
    ...(sequences.map(seq => seq.reverse()))
  )
  .reverse()
  .map(slice => slice.join(""))

const tag = (opener, str, closer) =>
  grow(str.split(""))
  .map(s => opener + s.join("") + closer)