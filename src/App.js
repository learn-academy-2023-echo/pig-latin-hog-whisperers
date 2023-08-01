import React, { useState } from "react"
import "./App.css"
import butcherPigImage from "./assets/butcherPig.jpeg"

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

      // If the index of first character of the word does not exist in vowels array, add 'way' to the end
      if (vowelsArray.indexOf(eachWord[0]) !== -1){
          return eachWord + 'way'
      }
       // if q is 
       // the first leter: return word.slice in the index of q +1 + 'ayqu'
       // the second letter 
       //
       // if word sliced from index to index + 2  is equal to "qu" 
       // increment index
       // update word to current word sliced from index + current word sliced from zero index to incremented index + 'ay'
       
       // if there is no vowel, there is a "y", and there the first letter of the word is not a "y"
       // update word to current word sliced from index + current word sliced from zero index to incremented index + 'ay'
       for (var i = 0; i < eachWord.length; i++) {
         if ( eachWord.slice(i, i +2) === "qu") {
          i++
        } else if (vowelsArray.indexOf(eachWord[i]) === -1 && eachWord[i] === "y" && eachWord[0] !== "y") {
          break
        } else if (vowelsArray.indexOf(eachWord[i]) !== -1 ) {
          break
        } 
        }
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
    <div className="page-container">
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
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  )
}



export default App
