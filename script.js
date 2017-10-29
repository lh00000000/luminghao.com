

const projectData2 = [
  // node("this is the first project. ".split(""),
  //   [node(["it's",  "<b>cool</b>"], []),
  //   node(["<img src='http://thecatapi.com/api/images/get?format=src&type=gif'>"], [])]
  // ),
  node(
    _.concat(
      "this is the ".split(""),
      "<b>",
      "second".split(""),
      "</b>",
       " project. ".split("")
    )
    , [])
]



const projectDatums = [
{
  head: [],
  guts: [],
},
{
  head: [],
  guts: []
}
]


const reveal = arr =>  {
  return d3.range(0, arr.length + 1).map(function(i) {
    return arr.slice(0, i)
  })
}

const textReveal = s =>
  reveal(s.split(" "))
    .map(arr => arr.join(" "))


const decay = (original, isCandidate) => {
  var frames = [original]
  var toDestroy = original.slice()


  for (var i = toDestroy.filter(isCandidate).length; i > 0; i --) {
    var candidateIndices = []

    toDestroy.forEach(function(d, i) {
      if (isCandidate(d)) {
        candidateIndices.push(i)
      }
    })

    var nowDestroyingIdx = _.sample(candidateIndices)
    // toDestroy = dash.withoutOne(toDestroy, nowDestroyingIdx)
    toDestroy.splice(nowDestroyingIdx, 1)
    frames.push(toDestroy.slice())
  }

  return frames
}

// const projectsSpans = d3.select("body")
//   .selectAll(".project")
//   .data(projects)
//   .enter()
//     .append("span")
//       .attr("class", "project")
//         .text(d => d.exposition)
//         .on("click", d => {
//           console.log(d3.select(this))
//           d3.select(this)
//             .transition()
//               .duration(2000)
//               .call(tweenHtml, d => reveal(d.inner.split(" ")))

//         })


const projects = d3.select("#content")
  .selectAll(".project")
    .data(projectData2)

const projectsEnter = projects.enter()
  .append("span")
    .attr("class", "project")
    .attr("id", _.itertee(""))

const heads = projectsEnter
  .append("span")
    .attr("class", "head")

const guts = projectsEnter
  .append("span")
    .attr("class", "guts")


const tweenHtml = (trans, getFrames) => {
  trans
    .tween("html", (d, i, all) => {
      const thisEle = d3.select(all[i]),
        getHtmlAt = d3.scaleQuantize()
          .domain([0, 1])
          .range(getFrames(d))
      console.log(thisEle)
      return t => thisEle.html(getHtmlAt(t))
    })
}

heads
  .transition()
    .delay((d, i) => i * 1000)
    .duration(5000)
    .call(tweenHtml, _.itertee("head"))
console.log(decay(projectData2[0].chunks, _.constant(true)))
// heads
//   .on("click", (d, i, all) => {
//     d3
//       .select("#projectId-" + i + " > span.guts")
//       .transition()
//       .call(tweenHtml, d => textReveal(d.inner))
//   })
// console.log(reveal("hi hello hey".split(" ")))

console.log(heads)
