import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { toast } from "react-hot-toast";
import SecondPost from "./SecondPost";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Person2Icon from "@mui/icons-material/Person2";
import SendIcon from "@mui/icons-material/Send";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person3 from "../../assets/A10.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import Scrollbars from "react-custom-scrollbars";
import FirstPost from "./FirstPost";
function NewsFeed() {
  const [isLiked, setIsLiked] = useState(false);
  const [checked, setChecked] = useState(true);
  const [postComments, setPostComments] = useState([]);
  const [post, setPost] = useState([]);
  const [newEntries, setNewEntries] = useState([]);
  const [postEntries, setPostEntries] = useState([]);
  const [attachedImage, setAttachedImage] = useState(null);
  const [imageEntries, setImageEntries] = useState([]);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const handleLikeClick = () => {
    setIsLiked(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleButton = () => {
    setNewEntries((prevState) => [...prevState, post]);
    setPost("");
    if (post) {
      return toast.success("Your Post Has Been Updated Sucessfully", {
        position: "bottom-right",
        autoClose: 5000,
        toastClassName: "my-toast",
        bodyClassName: "my-toast-body",
      });
    }
  };
  const handlePost = (Entry) => {
    if (Entry) {
      setPostEntries((prevState) => [...prevState, postComments]);
      setPostComments("");
    }
    if (postComments) {
      return toast.success("Your Post Has Been Updated Sucessfully", {
        position: "bottom-right",
        autoClose: 3000,
        toastClassName: "my-toast",
        bodyClassName: "my-toast-body",
      });
    }
  };
  const thumbStyle = {
    backgroundColor: "#888",
    borderRadius: "6px",
    cursor: "pointer",
    width: "4px",
    height: "20px",
    mt: 8, // Set the height of the scrollbar thumb
  };
  return (
    <Scrollbars
      style={{ width: 510, height: 490 }}
      autoHide={true}
      renderThumbVertical={({ style, ...props }) => (
        <div {...props} style={{ ...style, ...thumbStyle }} />
      )}
    >
      <Stack direction="column">
        <Paper sx={{ width: "500px", borderRadius: "10px" }}>
          <Typography component="h3" variant="h6" sx={{ ml: 3 }}>
            Create Post
          </Typography>
          <Stack direction="row">
            <Box
              component="img"
              src={person}
              sx={{ mr: 1, width: "40px", borderRadius: "50%", ml: 3, mt: 1 }}
            />
            <Paper
              sx={{
                backgroundColor: "#F7F7F7",
                width: "400px",
                mt: 1,
                ml: 2,
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InputBase
                sx={{ ml: 3, flex: 1, mt: 0.5 }}
                placeholder="What's in Your Mind?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <Stack direction="row">
                <span>
                  <IconButton>
                    <label htmlFor="file-input">
                      <ImageIcon fontSize="small" />
                    </label>
                  </IconButton>
                  <input
                    multiple
                    onChange={handleImageChange}
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                  />
                </span>
                <IconButton>
                  <VideocamIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <EmojiEmotionsIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <Person2Icon fontSize="small" />
                </IconButton>
                {post && post.length > 0 ? (
                  <IconButton
                    onClick={handleButton}
                    onChange={handleChange}
                    checked={checked}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleButton(post);
                      }
                    }}
                  >
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
          <Box sx={{ mt: 2, ml: 5 }}>
            <img
              src={imagePreview}
              style={{ width: "70px", height: "70px" }}
              alt=""
            />
          </Box>
        </Paper>
        {newEntries &&
          newEntries.map((Entry, index) => {
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
                    src={person3}
                    sx={{
                      mr: 1,
                      width: "40px",
                      borderRadius: "50%",
                      ml: 3,
                      mt: 1,
                    }}
                  />
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{ mt: 2, fontSize: "15px" }}
                  >
                    Suzanna J. Fowler
                  </Typography>
                </Stack>
                <Typography sx={{ mt: 3, ml: 3 }}>{Entry}</Typography>
                <Box>
                  <img
                    src={imagePreview}
                    style={{ width: "500px", height: "150px" }}
                    alt=""
                  />
                </Box>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Stack direction="row">
                    <IconButton
                      sx={{ color: isLiked ? "#91BCE7" : "" }}
                      onChange={handleLikeClick}
                    >
                      <ThumbUpOffAltIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      sx={{ color: isLiked ? "#91BCE7" : "grey", mt: 1 }}
                    >
                      323 Likes
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                    <Typography sx={{ color: "grey", mt: 1 }}>
                      45 Shares
                    </Typography>
                  </Stack>
                </Stack>
                <Divider sx={{ mt: 2 }} />
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
                      sx={{ ml: 3, flex: 1, mt: 0.5 }}
                      placeholder="Write a comment"
                      value={postComments}
                      onChange={(event) => setPostComments(event.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handlePost(postComments);
                        }
                      }}
                    />
                    <Stack direction="row">
                      <IconButton>
                        <EmojiEmotionsIcon fontSize="small" />
                      </IconButton>
                      <IconButton>
                        <AttachFileIcon fontSize="small" />
                      </IconButton>
                      {postComments && postComments.length > 0 ? (
                        <IconButton onClick={handlePost}>
                          <SendIcon fontSize="small" />
                        </IconButton>
                      ) : (
                        <IconButton disabled>
                          <SendIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Stack>
                    <Divider />
                  </Paper>
                </Stack>
                {postEntries &&
                  postEntries.map((Entry, index) => {
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
                            <Typography
                              sx={{
                                cursor: "pointer",
                                fontSize: "15px",
                                color: isLiked ? "#91BCE7" : "",
                              }}
                              onClick={handleLikeClick}
                            >
                              Like
                            </Typography>
                            <Typography
                              sx={{ cursor: "pointer", fontSize: "15px" }}
                            >
                              Reply
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    );
                  })}
              </Paper>
            );
          })}
        {/* <FirstPost />
        <SecondPost /> */}
      </Stack>
    </Scrollbars>
  );
}

export default NewsFeed;
