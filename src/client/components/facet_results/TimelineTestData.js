function getRandomData (ordinal = false) {
  const NGROUPS = 6
  const MAXLINES = 15
  const MAXSEGMENTS = 20
  const MAXCATEGORIES = 20
  const MINTIME = new Date(100, 2, 21)

  const group = ['Pronssi', 'Hopea', 'Rauta', 'Mahdollisesti hopeaa', 'Lyijy', 'Kupari', 'Kupariseos', 'Valkosavi', 'Pii', 'Kulta']
  const label = ['Emalikoristeinen hevosenkenkäsolki', 'Nappi', 'Tasavartinen solki', 'Hopearahan kappale', 'Hopearaha', 'Pyöreän kupurasoljen kappale',
    'Dirhemi', 'Särmänuppisen hevosenkenkäsoljen katkelma', 'Rannerenkaan katkelma', 'Silmäkirves', 'Miekan ponsi', 'Hevosenkenkäsoljen katkelma', 'Pyöreä kupurasolki',
    'Keihäänkärki', 'Linturiipus', 'Tasavartisen soljen katkelma', 'Tasavartisen soljen katkelmia', 'Pyöreän kupurasoljen kappaleita', 'Olkakirveen katkelma',
    'Hevosenkenkäsolki', 'Miekan katkelma', 'Kulkunen Lyijysinetti', 'Ave Maria -sormus', 'Raha', 'Kirves', 'Kupariraha', 'Uskollisuussormus', 'Liitupiipun pesä',
    'Koruesineen kappale', 'Suksi', 'Tupen kenkäin', 'Piilukko', 'Riipus', 'Kantasormus']
  const nCategories = Math.ceil(Math.random() * MAXCATEGORIES)
  const categoryLabels = label // ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  return [...Array(NGROUPS).keys()].map(i => ({
    group: group[(i + 1)],
    data: getGroupData()
  }))

  //

  function getGroupData () {
    return [...Array(Math.ceil(Math.random() * MAXLINES)).keys()].map(i => ({
      label: label[i + 1],
      data: getSegmentsData()
    }))

    //

    function getSegmentsData () {
      const nSegments = Math.ceil(Math.random() * MAXSEGMENTS)
      const segMaxLength = Math.round(((new Date()) - MINTIME) / nSegments)
      let runLength = MINTIME

      return [...Array(nSegments).keys()].map(i => {
        const tDivide = [Math.random(), Math.random()].sort()
        const start = new Date(runLength.getTime() + tDivide[0] * segMaxLength)
        const end = new Date(runLength.getTime() + tDivide[1] * segMaxLength)

        runLength = new Date(runLength.getTime() + segMaxLength)

        return {
          timeRange: [start, end],
          val: ordinal ? categoryLabels[Math.ceil(Math.random() * nCategories)] : Math.random()
          // labelVal: is optional - only displayed in the labels
        }
      })
    }
  }
}

export default getRandomData
