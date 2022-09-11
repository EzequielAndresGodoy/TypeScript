(()=>{

  enum AudioLevel {
    min = 1,
    medium,
    max = 10
  }

  let currentAudio:AudioLevel = AudioLevel.max

  console.log(currentAudio);
  console.log(AudioLevel)


  enum enumeracion {
    a,
    b,
    c,
    d
  }

  console.log(enumeracion)

  enum enumeracion1 {
    a=10,
    b,
    c=9,
    d
  }

  console.log(enumeracion1)

})()