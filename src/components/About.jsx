import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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

const background = "../elisha-avior.png";

export default function About(props) {
  const { mobile } = props;
  const history = useHistory();

  console.log(mobile);
  const backgroundSize = mobile ? "cover" : "100vh";

  const styles = {
    header: {
      // backgroundImage: `url(${background})`,
      background: `-webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0)), url(${background})`,
      width: "100%",
      height: "100vh",
      // backgroundColor: "rgba(0, 0, 0, 1)",
      backgroundOpacity: 0.5,
      backgroundPosition: "left top",
      backgroundRepeat: "no-repeat",
      backgroundSize: backgroundSize,
      zIndex: -0,
    },

    contentbox: {
      // height: "40vh",
      // width: "30em",
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      bottom: "0vh",
      paddingBottom: mobile ? "10vh" : "1vh",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      textAlign: "left",
    },

    content: {
      // textShadow: "white 0px 0px 10px",
      background: "rgba(33, 33, 33, .7)",
      marginBottom: "5px",
      padding: "10px",
      borderRadius: "10px",
      display: "table",
      // transform: "translate(-50%, -50%)",
    },
  };

  return (
    // <ThemeProvider theme={darkTheme}>
    <>
      <div style={styles.header}></div>

      <div style={styles.contentbox}>
        {/* <motion.div
          className="site-hero"
          initial="initial"
          animate="animate"
          exit="exit"> */}
        <motion.div
          animate={{ opacity: [0, 1, 1], y: [150, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
          style={styles.content}>
          Hi there!
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1], y: [150, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
          style={styles.content}>
          My name is Elisha Avior.
        </motion.div>

        {/* <motion.div
          animate={{ opacity: [0, 1], y: [150, 0] }}
          transition={{ ease: "easeOut", duration: 4 }}
          style={styles.content}>
          I am a full-stack developer.
        </motion.div> */}
        <motion.div
          animate={{ opacity: [0, 1], y: [250, 0] }}
          transition={{ ease: "easeOut", duration: 5 }}
          style={styles.content}>
          As a FULL STACK DEVELOPER, I create websites and web applications,
          using HTML, CSS, Javascript, React, NextJS and NodeJS.
        </motion.div>
        {/* </motion.div> */}
      </div>

      {/* <div style={styles.contentbox}>
        <motion.div animate={{ opacity: [0, 1, 1, 1, 1] }}>
          <span style={styles.content}>Hello!</span>
        </motion.div>

        <br />
        <motion.div animate={{ opacity: [0, 0, 1, 1, 1] }}>
          <span style={styles.content}>My name is Elisha Avior.</span>
        </motion.div>

        <br />
        <motion.div animate={{ opacity: [0, 0, 0, 1, 1] }}>
          <span style={styles.content}>I am a full-stack web developer.</span>
        </motion.div>
        <motion.div animate={{ opacity: [0, 0, 0, 0, 1] }}>
          <p style={styles.content}>
            I create websites and web applications, using HTML, CSS, Javascript,
            React, NextJS and NodeJS.
          </p>
        </motion.div>
      </div> */}
    </>
    // </ThemeProvider>
  );
}
