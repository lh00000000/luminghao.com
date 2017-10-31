const tweenHtml = (trans, getFrames) => {
  trans
    .tween("html", (d, i, all) => {
      let thisEle = d3.select(all[i])
      let getHtmlAt =
        d3
        .scaleQuantize()
        .range(getFrames(d))
      return t => {
        return thisEle.html(getHtmlAt(t))
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
    .delay((d, i) => i * 500)
    .duration(1000)
    .call(tweenHtml, _.iteratee("head"))

  headsEnter
    .on("mousedown", d => {
      d3.select("#" + d.id)
        .style("background-color", "black")
        .style("color", "black")
    })
    .on("click", d => {
      d3.select("#" + d.id)
        .style("background-color", "transparent")
        .style("color", "inherit")

      let selector = "#" + d.id + " > span.guts"
      if (!document
        .querySelector(selector)
        .hasChildNodes()) {
        d3
          .select(selector)
          .transition()
          .duration(1000)
          .call(tweenHtml, _.iteratee("guts"))
          .on("end", d => {
            if (d.after) { d.after() }
          })

      } else {
        d3
          .select(selector)
          .transition()
          .duration(1000)
          .call(tweenHtml, d => d.guts.reverse())
      }
    })
}

update(orderedProjectDatums)
