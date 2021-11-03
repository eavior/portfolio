import ActionAreaCard from "./ActionAreaCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Portfolio() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          background:
            "-webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0, 34, 255, 0.6), rgba(0, 0, 0, 0.8))",
        }}>
        <Grid
          container
          // spacing={2}
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="space-around">
          {projects.map(({ project, technologies, image }, index) => (
            // <ListItem button key={index + image}>
            //   <ListItemText primary={project} secondary={technologies} />
            // </ListItem>
            <Grid item>
              <ActionAreaCard
                key={index + image}
                project={project}
                technologies={technologies}
                image={image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const projects = [
  {
    project: "Pet adoption site (frontend)",
    technologies: "React",
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
  {
    project: "Pet adoption site (backend)",
    technologies: `NodeJS, SQL`,
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
  {
    project: "Pet adoption site (frontend)",
    technologies: "React",
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
  {
    project: "Pet adoption site (backend)",
    technologies: `NodeJS, SQL`,
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
  {
    project: "Pet adoption site (frontend)",
    technologies: "React",
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
  {
    project: "Pet adoption site (backend)",
    technologies: `NodeJS, SQL`,
    description: "",
    image: "../pet-adoption.png",
    github: "https://www.github.com",
    frontend: "https://www.github.com",
    backend: "https://www.github.com",
  },
];

export default Portfolio;
