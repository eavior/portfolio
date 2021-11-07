import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

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
          // backgroundImage: `-webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(0, 34, 255, 0.6), rgba(0, 0, 0, 0.8))`,
          // backgroundRepeat: "no-repeat",
          width: "100%",
          // height: "80vh",
          padding: "5em 0 5em 0",
          alignItems: "center",
        }}>
        <Grid
          container
          // spacing={2}
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="space-around">
          {Projects.map(
            (
              {
                project,
                description,
                technologies,
                image,
                githubFrontend,
                githubBackend,
                deployment,
              },
              index
            ) => (
              // <ListItem button key={index + image}>
              //   <ListItemText primary={project} secondary={technologies} />
              // </ListItem>
              <Grid item>
                <ProjectCard
                  key={index + image}
                  project={project}
                  description={description}
                  technologies={technologies}
                  image={image}
                  githubFrontend={githubFrontend}
                  githubBackend={githubBackend}
                  deployment={deployment}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Portfolio;
