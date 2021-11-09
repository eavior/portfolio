import { motion } from "framer-motion";
import DesktopNavigation from "./DesktopNavigation";

const background = "../elisha-avior2.png";

export default function About(props) {
  const { mobile } = props;
  const backgroundSize = mobile ? "cover" : "100vh";

  const styles = {
    header: {
      background: `-webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(0, 34, 255, 0.6), rgba(0, 0, 0, 0.8)), url(${background})`,
      backgroundImage: `url(${background})`,
      width: "100vw",
      height: "100vh",
      backgroundOpacity: 0.5,
      backgroundPosition: "left top",
      backgroundRepeat: "no-repeat",
      backgroundSize: backgroundSize,
      zIndex: -0,
    },
    contentbox: {
      position: "fixed",
      bottom: "0vh",
      paddingBottom: mobile ? "10vh" : "1vh",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      textAlign: "left",
    },
    content: {
      background: "rgba(33, 33, 33, .8)",
      color: "white",
      marginBottom: "5px",
      padding: "10px",
      borderRadius: "10px",
      display: "table",
    },
  };

  return (
    <>
      <div style={styles.header}></div>
      <div style={styles.contentbox}>
        <motion.div
          animate={{ opacity: [0, 1, 1], y: [150, 0] }}
          transition={{ ease: "easeOut", duration: 1 }}
          style={styles.content}>
          Hi there!
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1], y: [150, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
          style={styles.content}>
          My name is Elisha Avior.
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1], y: [250, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
          style={styles.content}>
          As a FULL STACK DEVELOPER, I create websites and web applications,
          using HTML, CSS, Javascript, React and NodeJS.
        </motion.div>
        {!mobile && <DesktopNavigation indicator={"about"} />}
      </div>
    </>
  );
}
