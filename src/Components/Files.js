import React, { useState } from "react";
import Picker, { Emoji, EmojiStyle } from "emoji-picker-react";
import "../App.css";
// import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
function App() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const onEmojiClick = (emojiObject) => {
    // setInputStr(emojiObject.unified);
    setInputStr((prevInput) => prevInput + emojiObject.unified);
    setSelectedEmoji([...selectedEmoji,emojiObject.unified]);
    setShowPicker(false);
  };

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
          <Picker
            pickerStyle={{ width: "100%" }}
            onEmojiClick={(emojiObject) => onEmojiClick(emojiObject)}
          />
        )}
      </div>
      <h2>
        Emoji Picker{" "}
        {selectedEmoji && selectedEmoji.map((emojiCode) => (
          <Emoji
            key={emojiCode}
            unified={emojiCode}
            emojiStyle={EmojiStyle.APPLE}
            size={22}
          />
        ))}
      </h2>
    </div>
  );
}

export default App;
