import * as React from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ProjectCard(props) {
  const { project, technologies, image } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
      }}>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          m: 3,
          minWidth: { md: 350 },
        }}>
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {project}
        </Box>
        <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
          {technologies}
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: "5px",
            color: "primary.main",
            fontWeight: "medium",
            display: "flex",
            fontSize: 12,
            alignItems: "center",
            "& svg": {
              fontSize: 21,
              mr: 0.5,
            },
          }}>
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}
