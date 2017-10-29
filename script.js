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


const chars2string = arr => arr.join("")
const strDecay = s => decay(s.split("")).map(chars2string)
const wrap = (opener, frames, closer) => frames.map(s => opener + s + closer)
const parallel = (...wrapped) => _.zip(...wrapped).reverse().map(chars2string)

const group = parallel
const tag = (opener, str, closer) => wrap(opener, strDecay(str), closer)

const iframeOrImgThing = '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/103331098&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'

const iframes = {
  acceptable: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1254360733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://asteriskellipsis.bandcamp.com/album/acceptable">Acceptable by (*...)</a></iframe>'
}

const projectDatums = [
  {
    id: "first",
    head:
      group(
        tag("<b>", "acceptable ", "</b>"),
        tag("<span>", " is an album of music", "</span>")
      ),
    guts:
      group(
        [iframes.acceptable],
        tag("<span>", "it was self-recorded in 2011 in my parents' house.", "</span>"),
      ),
  },
  {
    id: "second",
    head:
      group(
        tag("<span>", "this is the ", "</span>"),
        tag("<b>", "first ", "</b>"),
        tag("<span>"," project.", "</span>")
      ),
    guts: []
  }, {
    id: "third",
    head:
      group(
        ["</br>"],
        tag("<span>", "this is an ", "</span>"),
        tag("<b>", "embed", "</b>"),
        tag("<span>", " example.", "</span>"),
        [iframeOrImgThing],
        tag("<span>", " omg its working", "</span>"),
      ),
    guts: []
  }
]

const projects = d3.select("#content")
  .selectAll(".project")
    .data(projectDatums, _.iteratee("id"))

const projectsEnter = projects.enter()
  .append("span")
    .attr("class", "project")
    .attr("id", _.iteratee("id"))

const heads = projectsEnter
  .append("span")
    .attr("class", "head")

const guts = projectsEnter
  .append("span")
    .attr("class", "guts")

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

heads
  .transition()
    .delay((d, i) => i * 1000)
    .duration(3000)
    .call(tweenHtml, _.iteratee("head"))

heads
  .on("click", (d, i, all) => {
    console.log(d.id)
    d3
      .select("#" + d.id + " > span.guts")
      .transition()
      .call(tweenHtml, _.iteratee("guts"))
  })

