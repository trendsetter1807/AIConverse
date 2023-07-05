import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

const ChatBot = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" color="inherit" mb={2}>
          Ask with Chatbot
        </Typography>

        <TextField
          placeholder="Add your text"
          type="text"
          multiline
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          InputProps={{
            sx: {
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
            },
          }}
          InputLabelProps={{
            style: { color: theme.palette.primary.contrastText },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Chat
        </Button>
        <Typography mt={2} color="inherit">
          Not this tool? <Link to="/" color="inherit">GO BACK</Link>
        </Typography>
      </form>

      {response ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: theme.palette.primary.main,
            bgcolor: theme.palette.background.default,
          }}
        >
          <Typography p={2} color="inherit">
            {response}
          </Typography>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            borderColor: theme.palette.primary.main,
            bgcolor: theme.palette.background.default,
          }}
        >
          <Typography
            variant="h5"
            color="inherit"
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "450px",
            }}
          >
            Bot Response
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default ChatBot;