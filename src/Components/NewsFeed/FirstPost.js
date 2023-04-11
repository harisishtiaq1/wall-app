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
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person2 from "../../assets/A5.jpg";
import person3 from "../../assets/A10.jpg";
import berlin from "../../assets/berlin.jpg";
import cairo from "../../assets/cairo.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import { toast } from "react-hot-toast";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
function FirstPost() {
  const [imageEntries, setImageEntries] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState("");
  const [attachedImage, setAttachedImage] = useState(null);

  const handleLikeClick = () => {
    setIsLiked(true);
  };
  const handleFileUpload = (event) => {
    const files = event.target.files;
    setImageEntries((prevState) => [...prevState, ...files]);
    setAttachedImage(files);
    console.log(attachedImage);
    if (files) {
      return toast.success("Your Post Has Been Updated Sucessfully", {
        position: "bottom-right",
        autoClose: 3000,
        toastClassName: "my-toast",
        bodyClassName: "my-toast-body",
      });
    }
  };
  const handleButtonClick = (Entry) => {
    if (Entry) {
      setImageEntries((prevState) => [...prevState, comments]);
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
    <Paper
      sx={{
        width: "500px",
        paddingBottom: "20px",
        borderRadius: "10px",
        mt: 5,
      }}
    >
      <Stack direction="row" sx={{ mt: 2 }}>
        <Box
          component="img"
          src={person2}
          sx={{ mr: 1, width: "40px", borderRadius: "50%", ml: 3, mt: 1 }}
        />
        <Typography component="h3" variant="h6" sx={{ mt: 1 }}>
          Cripton Rice
        </Typography>
      </Stack>
      <Typography component="p" variant="p" sx={{ ml: 3, mt: 2 }}>
        Beautifull Cities Of Europe...
      </Typography>
      <Stack direction="row">
        <Card sx={{ maxWidth: 130, ml: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={berlin}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 130, ml: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={cairo}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 130, ml: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={berlin}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
      <Stack direction="row" spacing={6} sx={{ ml: 2 }}>
        <Stack direction="row">
          <IconButton
            sx={{ color: isLiked ? "#91BCE7" : "" }}
            onClick={handleLikeClick}
          >
            <ThumbUpOffAltIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ color: isLiked ? "#91BCE7" : "grey", mt: 1 }}>
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
          sx={{
            mr: 1,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            ml: 3,
            mt: 1,
          }}
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
            onChange={(event) => setComments(event.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleButtonClick(comments);
              }
            }}
          />
          <Stack direction="row">
            <IconButton>
              <EmojiEmotionsIcon fontSize="small" />
            </IconButton>
            <span>
              <IconButton>
                <label htmlFor="file-input">
                  <AttachFileIcon fontSize="small" />
                </label>
              </IconButton>
              <input
                multiple
                onChange={handleFileUpload}
                id="file-input"
                type="file"
                style={{ display: "none" }}
              />
            </span>
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
      {imageEntries &&
        imageEntries.map((item, index) =>
          typeof item === "string" ? (
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
                    {item}
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
          ) : (
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
                    padding: " 20px 20px",
                    border: " 1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: "40px 40px 40px 0px",
                  }}
                  key={index}
                >
                  <img
                    src={URL.createObjectURL(item)}
                    alt={item.name}
                    style={{ width: "150px", height: "100px" }}
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
          )
        )}
    </Paper>
  );
}

export default FirstPost;
