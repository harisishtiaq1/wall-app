import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-hot-toast";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person2 from "../../assets/A3.jpg";
import person3 from "../../assets/A10.jpg";
import berlin from "../../assets/berlin.jpg";
import cairo from "../../assets/cairo.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Picker from "emoji-picker-react";

function SecondPost() {
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState("");
  const [entries, setEntries] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const onEmojiClick = (emojiObject) => {
    setComments((prevInput) => prevInput + emojiObject.emoji);
    setSelectedEmoji([...selectedEmoji, emojiObject.unified]);
    setShowPicker(false);
  };

  const handleLikeClick = () => {
    setIsLiked(true);
  };
  const handleOpen = () => {
    setShowPicker(true);
  };
  const handleButtonClick = (Entry) => {
    if (Entry) {
      setEntries((prevState) => [...prevState, comments]);
      setComments("");
    }
    if (comments) {
      return toast.success("Your Post Has Been Updated Sucessfully", {
        position: "bottom-right",
        autoClose: 3000,
        toastClassName: "my-toast",
        bodyClassName: "my-toast-body",
      });
    }
  };
  return (
    <Paper sx={{ width: "500px", borderRadius: "10px", mt: 5 }}>
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box
          component="img"
          src={person2}
          sx={{ mr: 1, width: "40px", borderRadius: "50%", ml: 3, mt: 1 }}
        />
        <Typography component="h3" variant="h6" sx={{ mt: 1 }}>
          John Buchanan
        </Typography>
      </Stack>
      <Typography component="p" variant="p" sx={{ ml: 3, mt: 2 }}>
        Amazing clicks from my camera!
      </Typography>
      <Stack direction="row" sx={{ mt: 2 }}>
        <Card sx={{ maxWidth: 210, ml: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={berlin}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 210, ml: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={cairo}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
      <Stack direction="row" spacing={6} sx={{ ml: 2 }}>
        <Stack direction="row">
          <IconButton
            sx={{ color: isLiked ? "lightblue" : "" }}
            onClick={handleLikeClick}
          >
            <ThumbUpOffAltIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ color: isLiked ? "lightblue" : "grey", mt: 1 }}>
            323 Likes
          </Typography>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <CommentIcon />
          </IconButton>
          <Typography sx={{ color: "grey", mt: 1 }}>2 Comments</Typography>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <ShareIcon />
          </IconButton>
          <Typography sx={{ color: "grey", mt: 1 }}>45 Shares</Typography>
        </Stack>
      </Stack>
      <Divider variant="middle" />
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box
          component="img"
          src={person}
          sx={{ mr: 1, width: "40px", borderRadius: "50%", ml: 3, mt: 1 }}
        />
        <Paper
          sx={{
            backgroundColor: "#F7F7F7",
            width: "400px",
            height: "45px",
            mt: 0.5,
            borderRadius: "50px",
            display: "flex",
          }}
        >
          <InputBase
            type="text"
            sx={{ ml: 3, flex: 1, mt: 0.5 }}
            placeholder="Write a comment"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleButtonClick(comments);
              }
            }}
          />
          <Stack direction="row">
            <IconButton sx={{ ml: 15 }} onClick={handleOpen}>
              <EmojiEmotionsIcon fontSize="small" />
              {showPicker && <Picker width={300} onEmojiClick={onEmojiClick} />}
            </IconButton>
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
            {comments && comments.length > 0 ? (
              <IconButton onClick={handleButtonClick}>
                <SendIcon fontSize="small" />
              </IconButton>
            ) : (
              <IconButton disabled>
                <SendIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        </Paper>
      </Stack>
      <Divider sx={{ mt: 2 }} />
      <Typography component="h3" variant="h6" sx={{ ml: 3, mt: 2 }}>
        Comments
      </Typography>
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box
          component="img"
          src={person1}
          sx={{
            mr: 1,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "40px 40px 40px 0px",
              padding: "10px 20px",
            }}
          >
            <Typography component="h6" variant="p">
              Wow! These Pics are So Amazing
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
              Like
            </Typography>
            <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
              Reply
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box
          component="img"
          src={person3}
          sx={{
            mr: 1,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            ml: 3,
            mt: 1,
          }}
        />
        <Stack direction="column">
          <Box
            sx={{
              padding: " 10px 20px",
              border: " 1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "40px 40px 40px 0px",
            }}
          >
            <img
              src={cairo}
              alt="Cairo"
              style={{ width: "150px", height: "60px" }}
            />
          </Box>
          <Stack direction="row" spacing={3}>
            <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
              Like
            </Typography>
            <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
              Reply
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {entries &&
        entries.map((Entry, index) => {
          return (
            <Stack direction="row" sx={{ mt: 2 }}>
              <Box
                component="img"
                src={person1}
                sx={{
                  mr: 1,
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  ml: 3,
                  mt: 1,
                }}
              />
              <Stack direction="column">
                <Box
                  sx={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: "40px 40px 40px 0px",
                    padding: "10px 20px",
                  }}
                >
                  <Typography component="h6" variant="p">
                    {Entry}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={3}>
                  <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
                    Like
                  </Typography>
                  <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
                    Reply
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
    </Paper>
  );
}

export default SecondPost;
