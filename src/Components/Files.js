import React, { useState } from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import "../App.css";
// import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function App() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };
console.log("inputStr")
console.log("inputStr")
console.log("inputStr")
console.log("inputStr")
console.log("inputStr")

  return (
    <div className="app">
      <div className="picker-container">
        <input
          className="input-style"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
          alt=""
        />
        {showPicker && (
           <Picker data={data} onEmojiSelect={onEmojiClick} />
        )}
      </div>
    </div>
  );
}

export default App;