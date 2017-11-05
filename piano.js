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
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20e%20v3.wav?1509910353045"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20g%20v3.wav?1509910354018"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20a%20v3.wav?1509910352245"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20c%20v3.wav?1509910353060"),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20d%20v3.wav?1509910354025"),
  },
  backwards: {
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20rev%20g%20v3.wav?1509910354776"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20rev%20a%20v3.wav?1509910354988"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20rev%20c%20v3.wav?1509910353800"),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20rev%20d%20v3.wav?1509910353726"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH%20rev%20e%20v3.wav?1509910354560"),
  }
}

const LH = {
  forwards: {
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20f%20v3.wav?1509908749528"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20g%20v3.wav?1509908756463"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20e%20v3.wav?1509908756422"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20c%20v3.wav?1509908751086"),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20a%20v3.wav?1509908745904"),
  },
  backwards: {
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20rev%20a%20v3.wav?1509908252118"),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20rev%20e%20v3.wav?1509908257760"),
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20rev%20f%20v3.wav?1509908254153"),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLh%20rev%20g%20v3.wav?1509908255415"),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH%20rev%20c%20v3.wav?1509908255431"),
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

