import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const {
    project,
    description,
    technologies,
    image,
    githubFrontend,
    githubBackend,
    deployment,
  } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 10,
        fontWeight: "bold",
      }}>
      <Box
        component="img"
        sx={{
          objectFit: "cover",
          height: 233, // 100% ?
          width: 350,
          maxHeight: { xs: 200, sm: 233, md: 267 }, // original md: 167
          maxWidth: { xs: 300, sm: 350, md: 350 }, // original md: 250
        }}
        alt="Project's image"
        src={image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          m: 3,
          minWidth: { xs: 250, sm: 300, md: 450 },
          maxWidth: { xs: 250, sm: 300, md: 450 },
        }}>
        <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
          {project}
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: 16,
            mt: 1,
            fontWeight: "normal",
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}>
          {description}
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: 14,
            mt: 1,
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}>
          Built with {technologies}.
        </Box>

        <Box
          sx={{
            mt: 1,
            p: "0.5em 1em 0.5em 1em",
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: "5px",
            color: "primary.main",
            fontWeight: "medium",
            display: "flex",
            fontSize: 12,
            alignItems: "center",
            "& svg": {
              fontSize: 21,
              mr: 1,
            },
          }}>
          <Icon icon="ci:external-link" />
          <Link
            to={{ pathname: deployment }}
            target="_blank"
            style={{ textDecoration: "none", color: "#1976d2" }}
            rel="noopener">
            {deployment && "Site"}
          </Link>
          {deployment && githubFrontend && "\u00A0 | \u00A0"}
          <Link
            to={{ pathname: githubFrontend }}
            target="_blank"
            style={{ textDecoration: "none", color: "#1976d2" }}
            rel="noopener">
            {githubFrontend && "Frontend"}
          </Link>
          {githubFrontend && githubBackend && "\u00A0 | \u00A0"}
          <Link
            to={{ pathname: githubBackend }}
            target="_blank"
            style={{ textDecoration: "none", color: "#1976d2" }}
            rel="noopener">
            {githubBackend && "Backend"}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
