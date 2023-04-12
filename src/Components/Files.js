import React, { useState } from "react";
import Picker from "emoji-picker-react";
import "../App.css";
import { Stack } from "react-bootstrap";
import { Container, IconButton,  InputBase } from "@mui/material";
// import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
function App() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setSelectedEmoji([...selectedEmoji, emojiObject.unified]);
    setShowPicker(false);
  };

  return (
    <Container>
      <Stack>
        <InputBase
          variant="contained"
          className="input-style"
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
        />
        <IconButton onClick={() => setShowPicker((val) => !val)}>
          <EmojiEmotionsIcon />
        </IconButton>
        {showPicker && (
          <Picker
            pickerStyle={{ width: "100%" }}
            onEmojiClick={(emojiObject) => onEmojiClick(emojiObject)}
          />
        )}
      </Stack>
    </Container>
  );
}

export default App;
