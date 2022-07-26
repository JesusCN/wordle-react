import wordsUtils from "./wordsUtils";

describe("word utils: GetStatusKeys", () => {
  it("should get letter in correct word as correct letters", () => {
    const correctWord = "adios";
    const words = [
      "xxxxx",
      " ",
      "adios", // correct word !
      "ccccc",
    ];
    expect(wordsUtils.GetStatusKeys(words, correctWord)).toMatchObject({
      A: wordsUtils.LETTER_STATUS.correct,
      D: wordsUtils.LETTER_STATUS.correct,
      I: wordsUtils.LETTER_STATUS.correct,
      O: wordsUtils.LETTER_STATUS.correct,
      S: wordsUtils.LETTER_STATUS.correct,
    });
  });

  it("should get letters in words array that are unordered as present", () => {
    const correctWord = "adios";
    const words = [
      "xxxxx",
      " ",
      "dasio", // correct word in diferent order
      "ccccc",
    ];
    expect(wordsUtils.GetStatusKeys(words, correctWord)).toMatchObject({
      A: wordsUtils.LETTER_STATUS.present,
      D: wordsUtils.LETTER_STATUS.present,
      I: wordsUtils.LETTER_STATUS.present,
      O: wordsUtils.LETTER_STATUS.present,
      S: wordsUtils.LETTER_STATUS.present,
    });
  });

  it("should get letters that are not in correct word as absecent", () => {
    const correctWord = "adios";
    const words = ["xxxxx", "zxcvb", "ccccc"];
    expect(wordsUtils.GetStatusKeys(words, correctWord)).toMatchObject({
      X: wordsUtils.LETTER_STATUS.abscent,
      Z: wordsUtils.LETTER_STATUS.abscent,
      C: wordsUtils.LETTER_STATUS.abscent,
      V: wordsUtils.LETTER_STATUS.abscent,
      B: wordsUtils.LETTER_STATUS.abscent,
    });
  });

  it("should set letter as correct if anytime is correct, even if is unordered in other words", () => {
    const correctWord = "adios";
    const words = [
      "_a___", // correct letter unordered
      "a____", // correct letter in order
      "____a", // correct letter unordered
    ];
    expect(wordsUtils.GetStatusKeys(words, correctWord)).toMatchObject({
      A: wordsUtils.LETTER_STATUS.correct,
    });
  });
});

describe("word utils: GetStatusWord", () => {
  it("should get right status for correct word", () => {
    const correctWord = "abbey";
    const guessssWord = "abbey";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.correct);
  });

  it("should get right status for letters", () => {
    const correctWord = "abbey";
    const guessssWord = "abyss";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.abscent);
  });

  it("should get correct status for repeated letters x1", () => {
    const correctWord = "abbey";
    const guessssWord = "babel";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.abscent);
  });

  it("should get correct status for repeated letters x2", () => {
    const correctWord = "abbey";
    const guessssWord = "kebab";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.present);
  });

  it("if all repeated letters are wrong, only the first should be present and the others as abscent ", () => {
    const correctWord = "abbey";
    const guessssWord = "keeps";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.abscent);
  });

  it("should get right status for letters (case insensitive) ", () => {
    const correctWord = "abBEY";
    const guessssWord = "aBYSs";
    const statuses = wordsUtils.GetStatusWord(guessssWord, correctWord);
    expect(statuses[0]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[1]).toBe(wordsUtils.LETTER_STATUS.correct);
    expect(statuses[2]).toBe(wordsUtils.LETTER_STATUS.present);
    expect(statuses[3]).toBe(wordsUtils.LETTER_STATUS.abscent);
    expect(statuses[4]).toBe(wordsUtils.LETTER_STATUS.abscent);
  });
});
