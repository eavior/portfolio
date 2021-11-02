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
    // <ThemeProvider theme={darkTheme}>
    <>
      <div
        style={{
          backgroundImage: "url(" + "../elisha.jpg" + ")",

          // opacity: 0.4,
          width: "100%",
          height: "100vh",
          // filter: "grayscale(100%)",
          // filter: "brightness(75%), grayscale(100%)",
          background: "#C33764",
          background:
            "left top, -webkit-linear-gradient(rgba(29, 38, 113, 0), rgba(195, 55, 100, 1)), url(" +
            "../elisha.jpg" +
            ")",
          background:
            "left top, linear-gradient(rgba(29, 38, 113, 0), rgba(195, 55, 100, 1)), url(" +
            "../elisha.jpg" +
            ")",
          // backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}></div>
      <div
        style={{
          position: "fixed",
          bottom: "20vh",
          left: "5vw",
          textAlign: "left",
          // backgroundColor: "black",
          // opacity: "1",
          // paddingBottom: "25px",
        }}>
        <h1>Hello!</h1>
        <h2>I am Elisha Avior.</h2>
        <h3>
          I am a Full Stack web developer. I create websites and web
          applications.
        </h3>
      </div>
    </>
    // </ThemeProvider>
  );
}
