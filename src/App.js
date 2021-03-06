import React, { useState } from "react";
import "./styles.css";

const emojiList = {
  "๐ช": '"Diwali"',
  "๐ฑ": '"Earth day"',
  "๐": '"Graduation"',
  "๐": '"Olympics"',
  "๐ฆ": '"Thanks giving"',
  "๐": '"Halloween"',
  "๐คฑ": '"Motherโs Day"',
  "๐": '"Christmas"',
  "๐": '"Birthday"',
  "๐": '"Valentineโs Day"',
  "โช๏ธ": '"Ramadan"'
};

// console.log(Object.keys(emojiList)); this converts an object into an array
var emojiWeKnow = Object.keys(emojiList);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function clickHandler(emoji) {
    var newMeaning = emojiList[emoji];
    setMeaning(newMeaning);
  }
  function emojiDetector(event) {
    var emoji = event.target.value;
    var newMeaning = emojiList[emoji];
    if (newMeaning === undefined) {
      newMeaning = "emoji is not available sorry:(";
    }
    setMeaning(newMeaning);
  }
  return (
    <div className="App">
      <div className="head"> Event Emojis</div>
      <input
        placeholder="place your emoji here!"
        onChange={emojiDetector}
      ></input>
      <div className="meaning"> {meaning}</div>
      <h3> Emojis we have: </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span className="emojis" onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
