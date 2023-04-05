import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SecondPost from "./SecondPost";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Person2Icon from "@mui/icons-material/Person2";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import person from "../../assets/A1.jpg";
import person1 from "../../assets/A2.jpg";
import person2 from "../../assets/A5.jpg";
import person3 from "../../assets/A10.jpg";
import berlin from "../../assets/berlin.jpg";
import cairo from "../../assets/cairo.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

function NewsFeed() {
  return (
    <Stack direction="column" sx={{mt:10}}>
      <Paper sx={{ width: "500px", height: "100px", borderRadius: "10px", mt: 3  }}>
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
              backgroundColor: "#D4D5D7",
              width: "400px",
              height: "40px",
              mt: 1,
              borderRadius: "50px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, mt: 1 }}
              placeholder="What's in Your Mind?"
            />
            <IconButton>
              <ImageIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <VideocamIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <EmojiEmotionsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <Person2Icon fontSize="small" />
            </IconButton>
            <IconButton>
              <SendIcon fontSize="small" />
            </IconButton>
          </Paper>
        </Stack>
      </Paper>
      <Paper sx={{ width: "500px", borderRadius: "10px", mt: 5 }}>
        <Stack direction="row">
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
        <Stack direction="row" sx={{ mt: 2 }}>
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
            <IconButton>
              <ThumbUpOffAltIcon />
            </IconButton>
            <Typography sx={{ color: "grey", mt: 1 }}>323 Likes</Typography>
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
        <hr style={{ width: "90%" }} />
        <Stack direction="row">
          <Box
            component="img"
            src={person}
            sx={{ mr: 1, width: "40px", borderRadius: "50%", ml: 3, mt: 1 }}
          />
          <Paper
            sx={{
              backgroundColor: "#E1E2E3",
              width: "400px",
              height: "40px",
              mt: 1,
              borderRadius: "50px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, mt: 1 }}
              placeholder="Write a comment"
            />
            <IconButton sx={{ ml: 15 }}>
              <EmojiEmotionsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Paper>
        </Stack>
        <hr />
        <Typography component="h3" variant="h6" sx={{ ml: 3 }}>
          Comments
        </Typography>
        <Stack direction="row">
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
              <Typography component="h4" variant="h6">
                Wow! These Pics are So Amazing
              </Typography>
            </Box>
            <Stack direction="row" spacing={3}>
              <Typography>Like</Typography>
              <Typography>Reply</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{mt:2}}>
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
          <Stack direction='column'>
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
              style={{ width: "200px", height: "100px" }}
            />
          </Box>
          <Stack direction='row' spacing={3}>
          <Typography>
            Like
          </Typography>
          <Typography>
            Reply
          </Typography>
          </Stack>
          </Stack>
        </Stack>
      </Paper>
      <SecondPost/>
    </Stack>
  );
}

export default NewsFeed;
