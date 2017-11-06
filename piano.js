const pianoKey = (src, preload) => {
  // i can't figure out a good way to deal with the shittiness
  // of making people on data plans download 15mb of wavs
  // that all finish loading at the same instant
  // and end up being played as abrupt maj9/6 chords
  if (isMobile()) {
    return {
      play: _.identity
    }
  } else {
    let h = new Howl({src})
    return {
      play: vol => {
        switch (h.state()) {
          case "loaded":
            h.volume(vol)
            h.play()
            break
          case "unloaded":
            h.load()
            h.on("load", () => {
              h.volume(vol)
              h.play()
            })
            break
          case "loading":
            let tryToPlayIt = () => {
              h.volume(vol)
              h.play()
            }
            setTimeout(() => {
              tryToPlayIt = _.identity
            }, 250)
            h.on("load", () => tryToPlayIt())
            break
        }
      }
    }
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

const debouncedPlay = (keyLookup, minVol, maxVol) =>
  _.debounce(
    () => _.sample(_.values(keyLookup))
      .play( _.random(minVol, maxVol)),
    9
  )

const player = {
  RH: {
    forwards: debouncedPlay(RH.forwards, 0.1,  0.2),
    backwards: debouncedPlay(RH.backwards, 0.2, 0.3)
  },
  LH: {
    forwards: debouncedPlay(LH.forwards, 0.5, 0.6),
    backwards: debouncedPlay(LH.backwards, 0.7, 0.9)
  },
}

