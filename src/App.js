import React, { useState } from "react";
import "./styles.css";

const emojiList = {
  "🪔": '"Diwali"',
  "🌱": '"Earth day"',
  "🎓": '"Graduation"',
  "🏊": '"Olympics"',
  "🦃": '"Thanks giving"',
  "🎃": '"Halloween"',
  "🤱": '"Mother’s Day"',
  "🎅": '"Christmas"',
  "🎂": '"Birthday"',
  "💘": '"Valentine’s Day"',
  "☪️": '"Ramadan"'
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
