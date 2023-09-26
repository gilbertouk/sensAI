/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useRef, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ChatMessages from "./ChatMessages";

export default function Chat({ user, socket }) {
  const ENTER_KEY_CODE = 13;
  const scrollBottomRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("user"));
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setChatMessages([...chatMessages, data]);
    });
  }, [socket, chatMessages]);

  useEffect(() => {
    // scroll to bottom every time messages change
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (currentUser && message) {
      console.log("Send!");
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("user"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
      setMessage("");
    }
  };

  return (
    <Fragment>
      <Container>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              sensAI chat!
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid id="chat-window" xs={12} item>
                <List id="chat-window-messages">
                  <ChatMessages chatMessages={chatMessages} />
                  <ListItem ref={scrollBottomRef}></ListItem>
                </List>
              </Grid>
              <Grid xs={2} item>
                <FormControl fullWidth>
                  <TextField
                    value={currentUser}
                    label="Nickname"
                    variant="outlined"
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid xs={9} item>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleMessageChange}
                    onKeyDown={handleEnterKey}
                    value={message}
                    label="Type your message..."
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                <IconButton
                  onClick={sendMessage}
                  aria-label="send"
                  color="primary"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
