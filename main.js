const EASE = d3.easeLinear

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
      .duration(2000)
      .delay((d, i) => i * 50)
      .call(
        tweenHtml,
        _.iteratee("head"),
        player.RH.forwards,
        player.LH.forwards
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
        d3.select(selector)
          .transition()
            .ease(EASE)
            .duration(1000)
            .call(
              tweenHtml,
              _.iteratee("guts"),
              player.RH.forwards,
              _.once(player.LH.forwards)
            )
            .on("end", d => {
              if (d.after) { d.after() }
            })

      } else {
        d3.select(selector)
          .transition()
            .ease(EASE)
            .duration(1000)
            .call(
              tweenHtml,
              d => {
                return d.guts.slice().reverse()
              },
              player.RH.backwards,
              player.LH.backwards
            )
            .on("end", () => {
              d3.select(`${selector} > *`).remove()
            })
      }
    })
}

update(orderedProjectDatums)
