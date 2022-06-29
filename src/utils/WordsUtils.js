const LETTER_STATUS = {
  correct: "correct",
  present: "present",
  abscent: "abscent",
};

/**
 *
 * @param {Array<string>} wordList
 * @param {string} correctWord
 * @returns {Array<string>} object of status for used letter in wordList
 */
function GetStatusKeys(wordList, correctWord) {
  const letterObj = {};
  correctWord = correctWord.toUpperCase();

  wordList.forEach((word) => {
    word = word.toUpperCase();
    word.split("").forEach((letter, i) => {
      const status = letterObj[letter];

      if (letter === correctWord[i]) {
        letterObj[letter] = LETTER_STATUS.correct;
      } else if (
        correctWord.includes(letter) &&
        status !== LETTER_STATUS.correct
      ) {
        letterObj[letter] = LETTER_STATUS.present;
      } else if (
        status !== LETTER_STATUS.correct &&
        status != LETTER_STATUS.present
      ) {
        letterObj[letter] = LETTER_STATUS.abscent;
      }
    });
  });

  return letterObj;
}

export default {
  LETTER_STATUS,
  GetStatusKeys,
};
