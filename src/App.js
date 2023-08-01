import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"
import pigLatinImage from "./assets/Pig-latin-new.jpg"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple through queen squeal fry fluent"
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.toLowerCase().split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord, index) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here! 

      // If the index of first character of the word is not a vowel, add 'way' to the end of the word
      if (vowelsArray.indexOf(eachWord[0]) !== -1){
          return eachWord + "way"
      }

      // loop through each character of the word
      for (var i = 0; i < eachWord.length; i++) {
        // If word sliced from current index to current index + 2  is equal to "qu" 
        if (eachWord.slice(i, i + 2) === "qu") {
          //increment index
          i++
        // If current character is not a vowel, and the word has a "y", and the first letter of the word is not a "y"
        } else if (vowelsArray.indexOf(eachWord[i]) === -1 && eachWord[i] === "y" && eachWord[0] !== "y") {
          // break out of the loop
          break
        // If a vowel is encountered
        } else if (vowelsArray.indexOf(eachWord[i]) !== -1) {
          // break out of loop
          break
        } 
      }
        // update word to current word sliced from index + current word sliced from zero index to incremented index and add 'ay' to end of word
        eachWord = eachWord.slice(i) + eachWord.slice(0, i) + "ay"

        // ACTION ITEM: this return will be the output of your Pig Latin'd code
        return eachWord 
      })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container" style={{backgroundImage: `url(${pigLatinImage})`}}>
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p className="translatedText">{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Peter, Justin, Kiana!</footer>
    </div>
  )
}



export default App
