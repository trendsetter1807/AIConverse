import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
const Homepage = () => {
  const navigate = useNavigate();
  const handleBoxClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
        backgroundColor: "#ADD8E6", // Set your desired contrasting background color here
    padding: "2rem",
      }}
    >
      <Box p={2} bgcolor="#E38AAE" borderRadius={5} >
        <Typography variant="h4" mb={2} fontWeight="bold">
          Text Generation
        </Typography>
        <Card
          onClick={() => handleBoxClick("/summary")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 200,
            "&:hover": {
              border: "2px solid",
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <DescriptionRounded
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Summary
            </Typography>
            <Typography variant="h6">
              Summarize long text into short sentences
            </Typography>
          </Stack>
        </Card>
      </Box>

      <Box p={2} bgcolor="#E38AAE" borderRadius={5}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          Paragraph Generation
        </Typography>
        <Card
          onClick={() => handleBoxClick("/paragraph")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 200,
            "&:hover": {
              border: "2px solid",
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <FormatAlignLeftOutlined
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Paragraph
            </Typography>
            <Typography variant="h6">Generate Paragraph with words</Typography>
          </Stack>
        </Card>
      </Box>
      <Box p={2} bgcolor="#E38AAE" borderRadius={5}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          AI ChatBot
        </Typography>
        <Card
          onClick={() => handleBoxClick("/chatbot")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 200,
            "&:hover": {
              border: "2px solid",
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <ChatRounded
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Chatbot
            </Typography>
            <Typography variant="h6">Chat With AI Chatbot</Typography>
          </Stack>
        </Card>
      </Box>
      <Box p={2} bgcolor="#E38AAE" borderRadius={5}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          JavaScript Converter
        </Typography>
        <Card
          onClick={() => handleBoxClick("/js-converter")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 200,
            "&:hover": {
              border: "2px solid",
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <ChatRounded
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              JS Converter
            </Typography>
            <Typography variant="h6">
              Translate to JavaScript code
            </Typography>
          </Stack>
        </Card>
      </Box>
      <Box p={2} bgcolor="#E38AAE" borderRadius={5}>
        <Typography variant="h4" mb={2} fontWeight="bold">
          AI Sci-Fi Images
        </Typography>
        <Card
          onClick={() => handleBoxClick("/scifi-image")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 190,
            width: 200,
            "&:hover": {
              border: "2px solid",
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <ChatRounded
            sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }}
          />
          <Stack p={3} pt={0}>
            <Typography fontWeight="bold" variant="h5">
              Sci-Fi Image
            </Typography>
            <Typography variant="h6">Generate Sci-Fi images</Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
    </>
  );
};

export default Homepage;
