import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(5)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ project, technologies, preview }, index) => (
          <ListItem button key={index + preview}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={preview} />
            </ListItemAvatar>
            <ListItemText primary={project} secondary={technologies} />
          </ListItem>
        ))}
      </List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="About" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Portfolio" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Contact" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    project: "Project name",
    technologies: "Technologies",
    preview: "https://www.preview.com",
  },
  {
    project: "Project name",
    technologies: "Technologies",
    preview: "https://www.preview.com",
  },
  {
    project: "Project name",
    technologies: "Technologies",
    preview: "https://www.preview.com",
  },
  {
    project: "Project name",
    technologies: "Technologies",
    preview: "https://www.preview.com",
  },
  {
    project: "Project name",
    technologies: "Technologies",
    preview: "https://www.preview.com",
  },
];
