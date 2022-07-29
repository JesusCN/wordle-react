import Words from "./WordsDict";

const LETTER_STATUS = {
  correct: "correct",
  present: "present",
  abscent: "abscent",
};

function WordOfTheDay() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const hash = +today % Words.length;

  return Words[hash];
}

function ExistWord(search) {
  const result = Words.find(
    (w) => w.localeCompare(search, "en", { sensitivity: "base" }) === 0
  );
  return result !== undefined;
}


/**
 * Returns an dictionary of letters with status for
 * a list of words and a correct word.
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

/**
 *
 * @param {string} word word to check status for every letter
 * @param {string} correctWord correct word
 */
function GetStatusWord(word, correctWord) {
  const statuses = Array(word.length).fill(LETTER_STATUS.abscent);

  // case insensitive
  word = word.toUpperCase();

  // convert to arrray to "cancel" (nullify) if letter is matched
  // this way it can handle case of repeated wrong letters
  const correctArr = correctWord.toUpperCase().split("");

  for (let i = 0; i < word.length; i++) {
    // first check if is in correct place. (like in kebab => abbey)
    if (word[i] === correctArr[i]) {
      statuses[i] = LETTER_STATUS.correct;
      correctArr[i] = null;
      continue;
    }

    // sweep looking for others ocurrences not in correct place
    for (let j = 0; j < correctArr.length; j++) {
      if (word[i] === correctArr[j] && i !== j) {
        statuses[i] = LETTER_STATUS.present;
        correctArr[j] = null;
        break; // to give predecense
      }
    }
  }

  return statuses;
}

/**
 *
 * @param {Array<string>} words
 * @param {string} correctWord
 */
function GetStatusWordsArray(words, correctWord) {
  const statuses = [];
  words.forEach((word) => {
    statuses.push(GetStatusWord(word, correctWord));
  });
  return statuses;
}

export default {
  LETTER_STATUS,
  GetStatusKeys,
  GetStatusWord,
  GetStatusWordsArray,
  WordOfTheDay,
  ExistWord,
};
