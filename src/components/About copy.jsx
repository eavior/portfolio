import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  margin: "auto",
  textAlign: "center",

  color: theme.palette.text.secondary,
  // height: "100%",
  lineHeight: "60px",
  width: "75%",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function About(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          textAlign: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          m: 3,
        }}>
        <Box
          component="img"
          sx={{
            height: 370,
            width: 300,
            maxHeight: { xs: 370, md: 370 },
            maxWidth: { xs: 300, md: 300 },
          }}
          alt="Elisha Avior"
          src="../elisha.jpg"
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
            Hi! I am Elisha Avior.
          </Box>
          <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
            As a full-stack web developer, I create websites and web
            applications.
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.1),
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
            }}></Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
