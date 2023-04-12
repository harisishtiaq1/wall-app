import React, { useState } from "react";
import Picker, { Emoji, EmojiStyle } from "emoji-picker-react";
import "../App.css";
import { Stack } from "react-bootstrap";
import { Input, Typography } from "@mui/material";
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
    <Stack>
      <Stack>
        <Input
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
      </Stack>
      <Typography>
        Emoji Picker{" "}
        {selectedEmoji && selectedEmoji.map((emojiCode) => (
          <Emoji
            key={emojiCode}
            unified={emojiCode}
            emojiStyle={EmojiStyle.APPLE}
            size={22}
          />
        ))}
      </Typography>
    </Stack>
  );
}

export default App;
