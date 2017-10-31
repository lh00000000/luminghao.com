const WIDTH = 720
const tagged = {
  EMBARASSING: "EMBARASSING",
  INPROGRESS: "INPROGRESS",
  MEH: "MEH",
  MUSIC: "MUSIC",
  CODE: "CODE",
}

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
  },
  badly: {
    tweets: [
      '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">{<br>&quot;origin&quot;: &quot;point&quot;,<br>&quot;verb&quot;: [&quot;give life&quot;]<br>}</p>&mdash; Bad Bots, Done Badly (@badbotsdonebad) <a href="https://twitter.com/badbotsdonebad/status/875241653736439809?ref_src=twsrc%5Etfw">June 15, 2017</a></blockquote>',
      '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">{<br>&quot;origin&quot;: [&quot;#adjective# #other# #verb#&quot;],<br>&quot;verb&quot;: &quot;#adjective#&quot;,<br>&quot;adjective&quot;: &quot;number&quot;<br>}</p>&mdash; Bad Bots, Done Badly (@badbotsdonebad) <a href="https://twitter.com/badbotsdonebad/status/900246570737819648?ref_src=twsrc%5Etfw">August 23, 2017</a></blockquote>',
      '<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">{<br>&quot;origin&quot;: [&quot;#other# #noun#&quot;],<br>&quot;adjective&quot;: &quot;be&quot;,<br>&quot;verb&quot;: &quot;#preposition# #adjective# #verb#&quot;,<br>&quot;noun&quot;: [&quot;world&quot;],<br>&quot;verb&quot;: &quot;day you&quot;<br>}</p>&mdash; Bad Bots, Done Badly (@badbotsdonebad) <a href="https://twitter.com/badbotsdonebad/status/872666092547842048?ref_src=twsrc%5Etfw">June 8, 2017</a></blockquote>'
    ]
  },
  chatter: {
    embed: '<script src="https://gist.github.com/lh00000000/2265eda569a10fcf6647d020be28bd53.js"></script>'
  },
  nonono: {
    img: 'https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FscreenshotPNG.png?1509422640544',
    webstore: 'https://chrome.google.com/webstore/detail/no-no-no/nggpkbejpjoikollcocnfahnghbcihlk'
  },
  invisibleCat: {
    video: '<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">trying to make an invisible cat that wiggles more and more violently if u don&#39;t pet it <a href="https://twitter.com/hashtag/Arduino?src=hash&amp;ref_src=twsrc%5Etfw">#Arduino</a> <a href="https://t.co/iHcQB3ouuj">pic.twitter.com/iHcQB3ouuj</a></p>&mdash; looming howl (@lh00000000) <a href="https://twitter.com/lh00000000/status/844034374987382784?ref_src=twsrc%5Etfw">March 21, 2017</a></blockquote>',

  }
}

const projectIndex = {
  invisibleCat: {
    id: "invisibleCat",

  },
  acceptable: {
    id: "acceptable",
    head: group(
      tag("<b>", "acceptable ", "</b>"),
      tag("<span>", " is an album of music.", "</span>")
    ),
    guts: group(
      [`<div class="centered">${assets.acceptable.iframe}</div>`], ["<br />"],
      tag("<span>", "it was self-recorded in 2011 in my parents' house.", "</span>"), ["<br />"]
    )
  },
  nonono: {
    id: "nonono",
    head: group(
      tag("<b>", "NO NO NO", "</b>"),
      tag("<span>", " is a chrome extension.", "</span>")
    ),
    guts: group(
      [`<a href="${assets.nonono.webstore}" target="_blank"><img src="${assets.nonono.img}" width=${WIDTH} /></a>`],
      tag("<span>", " it negates all of the text you read.", "</span>"),
      tag("<span>", " it can be downloaded on the ", "</span>"),
      tag(`<a href="${assets.nonono.webstore}" target="_blank">`, "chrome web store", "</a>"),
      tag("<span>", ". it was created in 2017.", "</span>"),
      ["<br />"]
    )
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
      tag("<span>", " the composer was very proud.", "</span>"), ["<br />"]
    ),
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
      [`<a href="${assets.fm.download}" target="_blank"><img src="${assets.fm.img}" width=${WIDTH} /></a>`],
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
      // tag('<pre class="hljs python"><code class="python">', assets.chatter.snippet, "</code></pre>"),
      // [assets.chatter.embed],
      ["<br />"],
      tag("<span>", ' it is implemented in pure python and can be found on ', "</span>"),
      tag('<a href="https://github.com/lh00000000/chatter" target="_blank">', "github", "</a>"),
      tag("<span>", '. ', "</span>"), ["<br />"],
    )
  },
  badly: {
    id: "badly",
    head: group(
      tag("<b>", "bad bots done badly", "</b>"),
      tag("<span>", " is a twitter bot.", "</span>")
    ),
    guts: group(
      ["<br />"],
      ["<div class='centered'>" + _.sample(assets.badly.tweets) + "</div>"],
      tag("<span>", ' it tweets tracery code which can be used to generate other twitter bots. ', "</span>"),
      tag("<span>", ' the code can be deployed via ', "</span>"),
      tag('<a href="https://cheapbotsdonequick.com/" target="_blank">', "quick bots, done cheap", "</a>"),
      tag("<span>", '. it was created during itp camp 2017. ', "</span>"),
      ["<br />"]
    ),
    after: () => {
      twttr.widgets.load(document.getElementById("#chatter"))
    }
  },
  bio: {
    id: "bio",
    head: group(
      tag("<b>", "luming hao", "</b>"),
      tag("<span>",
        " is " +
        _.sample([
          "an internet user",
          "a lover of keyboard shortcuts",
          "a fan of chamomile tea"
        ]) + ".",
        "</span>")
    ),
    guts: group(
      ["<br />"],
      tag("<span>", " they enjoy many websites, such as: ", "</span>"),
      stack(
        _.shuffle(
          [{
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
          }]
          .map(_.template('<li><a href="<%= href %>"><%= text %></a></li>'))
        )
      ).map(frame => "<ul>" + frame.join("") + "</ul>"),
      tag("<span>", "they currently live in ", "</span>"),
      tag("<a href='http://guysamerican.com/' target='_blank'>", "new york", "</a>"),
      tag("<span>", ", where they are employed by ", "</span>"),
      tag("<a href='https://foursquare.com/lh00000000/list/clubmate-nyc' target='_blank'>", "foursquare", "</a>"),
      tag("<span>", " to create one hyperspecific slack channel a day. ", "</span>"),
    )
  }
}
const orderedProjectDatums = [
  projectIndex.badly,
  projectIndex.m,
  projectIndex.nonono,
  projectIndex.kms,
  // projectIndex.fm,
  // projectIndex.sandals,
  projectIndex.chatter,
  projectIndex.acceptable,
  projectIndex.bio
]
