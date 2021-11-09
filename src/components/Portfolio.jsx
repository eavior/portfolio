import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

function Portfolio() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          padding: "5em 0 5em 0",
          alignItems: "center",
        }}>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="space-around">
          {Projects.map(
            ({
              id,
              project,
              description,
              technologies,
              image,
              githubFrontend,
              githubBackend,
              deployment,
            }) => (
              <Grid item key={id}>
                <ProjectCard
                  key={id}
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
