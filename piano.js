const pianoKey = src => {
  let h = new Howl({
    src: src
  })

  return {
    play: _.debounce(vol => {
      h.volume(vol)
      h.play()
    }, 50)
  }
}

const RH = {
  forwards: {
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20e.wav?1509867455437"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20g.wav?1509867460857"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20a.wav?1509867430934"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20c.wav?1509867447690"),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20d.wav?1509867453440"),
  },
  backwards: {
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20g%20rev.wav?1509871060506"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20a%20rev.wav?1509871052915"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20c%20rev.wav?1509871055323"),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20d%20rev.wav?1509871059324"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20e%20rev.wav?1509871061623"),
  }
}

const LH = {
  forwards: {
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20f-1.wav?1509869992020"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20g-1.wav?1509869990847"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20e-1.wav?1509869984692"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20c-1.wav?1509869985122"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20a-1.wav?1509869986294"),
  },
  backwards: {
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20a%20rev.wav?1509870601829"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20e%20rev.wav?1509870626863"),
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20f%20rev.wav?1509870627754"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20g%20rev.wav?1509870632341"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20c%20rev.wav?1509871013099"),
  }
}



const play = {
  random: {
    RH: {
      forwards: () => _.sample(_.values(RH.forwards)).play(  _.random(0.3, 0.6)),
      backwards: () => _.sample(_.values(RH.backwards)).play(  _.random(0.4, 0.6))
    },
    LH: {
      forwards: () => _.sample(_.values(LH.forwards)).play(_.random(0.7, 1.0)),
      backwards: () => _.sample(_.values(LH.backwards)).play(_.random(0.8, 1.0)),
    },
  }
}

