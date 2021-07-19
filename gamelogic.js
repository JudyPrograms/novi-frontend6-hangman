function displayWordSoFar(word, guesses) {

  // creëer display
  const display = []
  for (let i = 0; i < word.length; i++) {
    display.push("_")
  }
  // als de guess in het woord voorkomt
  // dan check op welke indices
  // en plaats de guess in de display op alle indices

  for (let i = 0; i < guesses.length; i++) {
    if (word.includes(guesses[i])) {
      const indices = []
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guesses[i]) {
          indices.push(j)
        }
      }
      for (let j = 0; j < indices.length; j++) {
        display.splice(indices[j], 1, guesses[i])
      }
    }
  }
  return display.join(" ") + " "
}

function isGameWon(word, guesses) {
  // als niet alle letters van word in guess
  // dan false
  for (let i = 0; i < word.length; i++) {
    if (!guesses.includes(word[i])) {
      return false
    } else {
      return true
    }
  }
}

function isGameLost(word, guesses) {
  let wrongCount = 0
  for (let i = 0; i < guesses.length; i++) {
    if (!word.includes(guesses[i])) {
      wrongCount ++
    }
  }
  return wrongCount >= 7;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
