import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  const { project, technologies, image } = props;
  return (
    <Card
      sx={
        {
          // maxWidth: 345,
          // maxHeight: 500,
          // margin: 5,
        }
      }>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={project} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {technologies}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
