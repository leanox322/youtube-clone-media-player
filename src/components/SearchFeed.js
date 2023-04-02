import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} justifyContent="center" gap="20px" />
    </Box>
  );
};

export default SearchFeed;
