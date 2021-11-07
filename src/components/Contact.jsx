import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Contact() {
  return (
    <>
      <Stack
        sx={{
          maxWidth: { xs: 300, sm: 400, md: 450 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "75vw",
        }}
        spacing={4}
        m={2}>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          startIcon={<EmailIcon />}
          target="_top"
          rel="noopener noreferrer"
          href={`mailto:${process.env.REACT_APP_EMAIL}`}>
          Email
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          startIcon={<LocalPhoneIcon />}
          href={`tel:${process.env.REACT_APP_PHONE}`}>
          Phone
        </Button>
        {/* <Button
          fullWidth
          variant="outlined"
          size="large"
          startIcon={<WhatsAppIcon />}>
          Whatsapp
        </Button> */}
        <Button
          fullWidth
          variant="outlined"
          size="large"
          startIcon={<LinkedInIcon />}
          href={"https://www.linkedin.com/in/eavior/"}>
          LinkedIn
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          href={"https://github.com/eavior"}>
          Github
        </Button>
      </Stack>
    </>
  );
}

export default Contact;
