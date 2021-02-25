function inputReturn(res) => {
  console.log(res)
    document.querySelector('.results').classList.add('show')
    document.getElementById('text').innerHTML = res.results[0].result.article

    document.getElementById('hashtags').innerHTML = res.results[1].result.hashtags
    if (res.results[1].result.hashtags && res.results[1].result.hashtags !== 'unknown') {
      document.querySelector('.hashtags').classList.add('show')
    }

    document.getElementById('subjectivity').innerHTML = res.results[2].result.subjectivity
    if (res.results[2].result.subjectivity && res.results[2].result.subjectivity !== 'unknown') {
      document.querySelector('.subjectivity').classList.add('show')
    }

    if (res.results[2].result.polarity) {
      document.querySelector('.polarity').classList.add('show')
    }
    document.getElementById('polarity').innerHTML = res.results[2].result.polarity
})
}

export { inputReturn }
