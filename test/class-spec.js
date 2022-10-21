const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    it('should have a "word" property', function () {
      expect(Word.word).to.equal(Word.word);
    });

    it('should set the "word" property when a new word is created', function () {
      let hello = new Word("hello");
      expect(hello.word).to.equal("hello");
    });
  });

  describe("removeVowels function", function () {
    let hello = new Word("hello");
    it("should return a the word with all vowels removed", function () {
      expect(hello.removeVowels()).to.equal("hll");
    });
  });

  describe("removeConsonants function", function () {
    let hello = new Word("hello");
    it("should return the word with the consonants removed", function () {
      expect(hello.removeConsonants()).to.equal("eo");
    });
  });

  describe("pigLatin function", function () {
    let hello = new Word("hello");
    let apple = new Word("apple");
    it("should return the word converted to pig latin", function () {
      expect(hello.pigLatin()).to.equal("ellohay")
      expect(apple.pigLatin()).to.equal("appleyay")
    });
  });
});
