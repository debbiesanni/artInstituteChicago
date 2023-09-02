import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import {HashLink as Link} from "react-router-hash-link";

import {herosectionContainer, viewLink} from "./Styles";
import Header from "Components/Header";

const HeroSection = () => {
  return (
    <Box sx={herosectionContainer}>
      <Header />
      <Container>
        <Grid pt={17} spacing={3} container mb={4}>
          <Grid item xs={12} sm={12} md={10} lg={6} mt={9}>
            <Stack spacing={3}>
              <Typography component="h1" variant="h3" color="#EFEDED">
                Welcome to Art Institvte of Chicago
              </Typography>
              <Typography variant="body1" color="#E6E6E6" textAlign="justify">
                Our gallery is a treasure trove of diverse art forms, from
                classic masterpieces to contemporary works that push boundaries.
                Marvel at the brushstrokes of renowned painters, be captivated
                by intricate sculptures, and get lost in the narratives woven by
                talented artists. Every stroke, every texture, and every color
                holds a story waiting to be discovered.
              </Typography>
              <Link to="/#artworks">
                <Button color="primary" variant="contained" sx={viewLink}>
                  View Artworks
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
