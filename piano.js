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
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-e-v4.mp3?1509923751485", true),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-g-v4.mp3?1509923751660", true),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-a-v4.mp3?1509923751050", true),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-c-v4.mp3?1509923751552", true),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-d-v4.mp3?1509923751274", true),
  },
  backwards: {
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-rev-g-v4.mp3?1509923752495", false),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-rev-a-v4.mp3?1509923751784", false),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-rev-c-v4.mp3?1509923752056", false),
    d: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-rev-d-v4.mp3?1509923752231", false),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FRH-rev-e-v4.mp3?1509923752300", false),
  }
}

const LH = {
  forwards: {
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-f-v4.mp3?1509923749956", true),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-g-v4.mp3?1509923750405", true),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-e-v4.mp3?1509923749734", true),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-c-v4.mp3?1509923750197", true),
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-a-v4.mp3?1509923750119", true),
  },
  backwards: {
    a: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-rev-a-v4.mp3?1509923750349", false),
    e: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-rev-e-v4.mp3?1509923750502", false),
    f: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-rev-f-v4.mp3?1509923750733", false),
    g: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLh-rev-g-v4.mp3?1509923750755", false),
    c: pianoKey("https://cdn.glitch.com/56ee8ee2-f735-4d34-9cfe-387d8a3aded6%2FLH-rev-c-v4.mp3?1509923750496", false),
  }
}

const debouncedPlay = (keyLookup, minVol, maxVol) =>
  _.debounce(
    () => _.sample(_.values(keyLookup))
      .play( _.random(minVol, maxVol)),
    8
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

