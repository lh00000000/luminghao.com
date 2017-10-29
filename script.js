const decay = (original, isCandidate = _.constant(true)) => {
  var frames = [original]
  var toDestroy = original.slice() // get rid of mutation

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
