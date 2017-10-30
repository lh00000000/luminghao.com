// the main effect
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


// utility zoneeeeee
const decay = (original, isCandidate = _.constant(true)) => {
  var frames = [original]
  var toDestroy = original.slice() // get rid of mutation

  for (var i = toDestroy.filter(isCandidate).length; i > 0; i--) {
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
const centered = content => "<div class='centered'>" + content + "</div>"


// combination zoneeee
const wrap = (opener, frames, closer) => frames.map(s => opener + s + closer)
const parallel = (...wrapped) => _.zip(...wrapped).reverse().map(chars2string)

// api zoneeee
const group = parallel
const tag = (opener, str, closer) => wrap(opener, strDecay(str), closer)


// data!!!!
const assets = {
  acceptable: {
    iframe: '<iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=1254360733/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://asteriskellipsis.bandcamp.com/album/acceptable">Acceptable by (*...)</a></iframe>'
  },
  kms: {
    iframe: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91293797&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'
  },
  m: {
    iframe: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91292997&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'
  },
  sandals: {
    iframe: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/91295023&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'
  },
  jk: {
    iframe: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130977037&amp;color=%23fc9e2b&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>'
  },
  birds: {
    iframe: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132641133&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>'
  },
  bench: {
    iframe: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132641134&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>'
  },
  face: {
    iframe: '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132641135&amp;color=%23a1a1a1&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>'
  },
  fm: {
    img: 'https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FScreen%20Shot%202017-10-29%20at%209.00.34%20PM.png?1509325465090',
    download: 'https://s3-us-west-2.amazonaws.com/lh00000000-misc/PUBLIC/Fuck+Me.pdf'
  }
}

const WIDTH = 680

const tagged = {
  EMBARASSING: "EMBARASSING",
  INPROGRESS: "INPROGRESS",
  MEH: "MEH",
  MUSIC: "MUSIC",
  CODE: "CODE",
}

const thingsICouldBe = [
  "an internet user",
  "a lover of keyboard shortcuts",
  "a fan of chamomile tea"
]

const projectIndex = {
  acceptable: {
    id: "acceptable",
    head: group(
      tag("<b>", "acceptable ", "</b>"),
      tag("<span>", " is an album of music.", "</span>")
    ),
    guts: group(
      [centered(assets.acceptable.iframe)], ["<br />"],
      tag("<span>", "it was self-recorded in 2011 in my parents' house.", "</span>"), ["<br />"]
    ),
    tagged: [tagged.embarassing, tagged.music]
  },
  m: {
    id: "m",
    head: group(
      tag("<b>", "M", "</b>"),
      tag("<span>", " is a piece for piano and violin.", "</span>")
    ),
    guts: group(
      [assets.m.iframe],
      tag("<span>", " it won some sort of local competition.", "</span>"),
      tag("<span>", " i was very proud.", "</span>"), ["<br />"]
    )
  },
  kms: {
    id: "kms",
    head: group(
      tag("<b>", "(((((((())))))))", "</b>"),
      tag("<span>", " is a piece for orchestra.", "</span>"),
    ),
    guts: group(
      [assets.kms.iframe],
      tag("<span>", " it features way too many violin parts.", "</span>"),
      tag("<span>", " it was written in 2011.", "</span>"), ["<br />"]
    )
  },
  fm: {
    id: "fm",
    head: group(
      tag("<b>", "fuck me", "</b>"),
      tag("<span>", " is a book of poems.", "</span>")
    ),
    guts: group(
      [`<a href="${assets.fm.download}"><img src="${assets.fm.img}" width=${WIDTH} /></a>`],
      tag("<span>", " it was written in 2013.", "</span>"),
      tag("<span>", " and can be downloaded ", "</span>"),
      tag(`<a href="${assets.fm.download}" target="_blank">`, "here.", "</a>"), ["<br />"]
    )
  },
  sandals: {
    id: "sandals",
    head: group(
      tag("<b>", "string quartet", "</b>"),
      tag("<span>", " is a string quartet.", "</span>")
    ),
    guts: group(
      [assets.sandals.iframe],
      tag("<span>", ' it was inspired by a song my friends wrote called "', "</span>"),
      tag(
        '<a href="https://unclebusiness.bandcamp.com/track/thats-what-you-get-for-wearing-sandals-on-christmas-you-asshole" target="_blank">',
        "That's What You Get For Wearing Sandals On Christmas You Asshole",
        "</a>"),
      tag("<span>", '". it was written in 2010.', "</span>"), ["<br />"]
    )
  },
  chatter: {
    id: "chatter",
    head: group(
      tag("<b>", "chatter", "</b>"),
      tag("<span>", " is a python library for markov chain chatbots.", "</span>")
    ),
    guts: group(
      ["<br />"],
      tag("<span>", ' it is implemented in pure python and can be found on ', "</span>"),
      tag(
        '<a href="https://github.com/lh00000000/chatter" target="_blank">',
        "github",
        "</a>"),
      tag("<span>", '. ', "</span>"), ["<br />"],
    )
  },
  bio: {
    id: "bio",
    head: group(
      tag("<b>", "luming hao", "</b>"),
      tag("<span>", ` is ${_.sample(thingsICouldBe)}.`, "</span>")
    ),
    guts: group(
      ["<br />"],
      tag("<span>", " they enjoy many websites, such as: ", "</span>"),
      wrap(
        "<ul>",
        decay([{
          text: "the twitter !",
          href: "https://twitter.com/lh00000000"
        }, {
          text: "the github !",
          href: "https://github.com/lh00000000"
        }, {
          text: "the instagram !",
          href: "https://www.instagram.com/lh00000000"
        }, {
          text: "the soundcloud !",
          href: "https://soundcloud.com/stardotdotdot"
        }, {
          text: "the are.na !",
          href: "https://www.are.na/luming-hao"
        }, {
          text: "the glitch !",
          href: "https://glitch.com/@lh00000000"
        }])
        .map(frameOfObjs =>
          frameOfObjs
          .map(_.template('<li><a href="<%= href %>"><%= text %></a></li>'))
          .join("")
        ),
        "</ul>"),
      tag("<span>", "they currently live in ", "</span>"),
      tag("<a href='http://guysamerican.com/' target='_blank'>", "new york", "</a>"),
      tag("<span>", ", where they are employed by ", "</span>"),
      tag("<a href='https://foursquare.com/lh00000000/list/clubmate-nyc' target='_blank'>", "foursquare", "</a>"),
      tag("<span>", " to create one hyperspecific slack channel a day. ", "</span>"),
    )
  }
}
const orderedProjectDatums = [
  projectIndex.acceptable,
  projectIndex.m,
  projectIndex.kms,
  projectIndex.fm,
  projectIndex.sandals,
  projectIndex.chatter,
  projectIndex.bio
]



// d3 zone!
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
    .on("click", (d, i, all) => {
      let selector = "#" + d.id + " > span.guts"
      if (!document
        .querySelector(selector)
        .hasChildNodes()) {
        d3
          .select(selector)
          .transition()
          .duration(1000)
          .call(tweenHtml, _.iteratee("guts"))
      }
    })
}

update(orderedProjectDatums)

// header zoneeee
var i = 0
setInterval(() => {
  i = (i + 1) % orderedProjectDatums.length
  document.title = _.last(orderedProjectDatums[i].head)
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/\./g, "")
    .match(/is .*/g)
}, 1000.0 / 60)

// document.addEventListener("keyup", () => {
//   update(
//       [
//         {
//           id: "newlyAdded",
//           head:
//             group(
//               tag("<span>", "this would be cool", "</span>")
//               )
//         }

//       ]
//       )
// })