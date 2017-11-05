// const EASE = d3.easeExp
// const EASE = d3.easeElastic
// const EASE = d3.easeBounce
const EASE = d3.easeLinear
// const EASE = d3.easeSin
// const EASE = d3.easeQuad
// const EASE = d3.easePoly
// const EASE = d3.easeCircle
// const EASE = d3.easeExp
// const EASE = d3.easeBack
const DURATION = 2000
const DELAY = 50

const tweenHtml = (
  trans,
  getFrames,
  onFrameChange = _.identity,
  onFinalFrame = _.identity
) => {
  trans
    .tween("html", (d, i, all) => {
      let thisEle = d3.select(all[i])
      let getHtmlAt =
        d3
        .scaleQuantize()
        .range(getFrames(d))
      return t => {
        let oldHtml = thisEle.html()
        let newHtml = getHtmlAt(t)
        let finalHtml = getHtmlAt(1)

        if (oldHtml != newHtml) {
          onFrameChange()
        }

        if (newHtml == finalHtml && oldHtml != newHtml) {
          onFinalFrame()
        }

        return thisEle.html(newHtml)
      }
    })
}

const update = (datums) => {
  const projects = d3.select("#content")
    .selectAll(".project")
    .data(datums, _.iteratee("id"))

  projects.exit()
    .transition()
      .duration(1000)
      .style("opacity", 0)
      .remove()

  const projectsEnter = projects.enter()
    .append("span")
    .attr("class", "project")
    .attr("id", _.iteratee("id"))

  const headsEnter = projectsEnter
    .append("span")
    .attr("class", "head")

  const gutsEnter = projectsEnter
    .append("span")
    .attr("class", "guts")

  headsEnter
    .transition()
      .ease(EASE)
      .duration(DURATION)
      .delay((d, i) => i * DELAY)
      .call(
        tweenHtml,
        _.iteratee("head"),
        () => play.random.RH.forwards(),
        () => play.random.LH.forwards()
      )

  headsEnter
    .on("mousedown", d => {
      d3.select("#" + d.id)
        .style("background-color", "black")
        .style("color", "black")
    })
    .on("mouseup", d => {
      d3.select("#" + d.id)
        .style("background-color", "transparent")
        .style("color", "inherit")
    })
    .on("click", d => {

      let selector = `#${d.id} span.guts`
      if (!document
        .querySelector(selector)
        .hasChildNodes()) {
        console.log("opening")
        d3.select(selector)
          .transition()
            .ease(EASE)
            .duration(1000)
            .call(tweenHtml, d => {
              return d.guts
            },
            () => play.random.RH.forwards(),
            () => play.random.LH.forwards()
            )
            .on("end", d => {
              if (d.after) { d.after() }
            })

      } else {
        d3.select(selector)
          .transition()
            .ease(EASE)
            .duration(1000)
            .call(tweenHtml, d => {
              return d.guts.slice().reverse()
            },
            () => play.random.RH.backwards(),
            () => play.random.LH.backwards()
            )
            .on("end", () => {
              d3.select(`${selector} > *`).remove()
            })
      }
    })
}

update(orderedProjectDatums)
