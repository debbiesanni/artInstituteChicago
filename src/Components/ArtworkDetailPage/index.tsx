import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

import {errorMessage, setArtwork} from "Redux/artwork";
import {useDispatch, useSelector} from "react-redux";

import {bg, header, loader} from "./Styles";
import {ArtWorkProps, StateProps, ErrorProps} from "Utils/interfaces";
import {getRequest, defaultImage, snakeCaseTocamelCase, htmlParse} from "Utils";
import Header from "Components/Header";
import ErrorMessage from "Components/Shared/ErrorMessage";
import NoContentFound from "Components/Shared/NoContentFound";
import {RootState} from "Redux/Store";
import Image from "Components/Shared/Image";

const ArtworkDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {artwork, error} = useSelector<RootState>(
    (state) => state.artworks
  ) as StateProps;
  const dispatch = useDispatch();
  const {id} = useParams();
  const dummmyHistory =
    "The 19th century witnessed the rise of various art movements, each with its own unique style and ethos. Romanticism celebrated emotion and individuality, while Impressionism aimed to capture the fleeting effects of light and atmosphere. Post-Impressionism, Cubism, Surrealism, and many other movements pushed the boundaries of traditional art, challenging viewers with new perspectives and unconventional techniques.";

  const getArtworkDetails = useCallback(async () => {
    try {
      const {data} = await getRequest(
        `https%3A%2F%2Fapi.artic.edu%2Fapi%2Fv1%2Fartworks/${id}`
      );
      const artwork = snakeCaseTocamelCase(data) as ArtWorkProps;
      dispatch(setArtwork(artwork));
    } catch (error) {
      dispatch(errorMessage(error as ErrorProps));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, id]);

  useEffect(() => {
    getArtworkDetails();
  }, [getArtworkDetails]);

  if (isLoading)
    return (
      <Box sx={loader}>
        <Typography>
          <CircularProgress color="primary" />
        </Typography>
      </Box>
    );
  return error ? (
    <ErrorMessage />
  ) : !artwork ? (
    <NoContentFound />
  ) : (
    <Box pb={5} sx={bg}>
      <Box
        sx={{
          height: 450,
          position: "relative",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <Box sx={header}>
          <Header />
        </Box>
        <Image
          src={artwork?.thumbnail?.lqip || defaultImage}
          alt={artwork?.thumbnail?.alt_text || artwork.title || "poju"}
          height={artwork?.thumbnail?.lqip ? "100%" : "450px"}
          width={artwork?.thumbnail?.lqip ? "100%" : "450px"}
        />
      </Box>

      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" mt={3}>
          {artwork.title}
        </Typography>
        <Typography
          variant="body1"
          component="h3"
          sx={{fontSize: 16}}
          color="#848484"
        >
          {artwork.artistDisplay}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          color="#B50938"
          sx={{
            textTransform: "uppercase",
            fontSize: 14,
          }}
        >
          {artwork.placeOfOrigin}
        </Typography>
        <Grid spacing={3} container mb={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Typography
              variant="body1"
              component="div"
              fontWeight={600}
              mt={2}
              sx={{
                textDecoration: "underline",
                fontSize: 24,
              }}
            >
              Provenance
            </Typography>
            <Typography
              variant="body1"
              component="h3"
              mt={1}
              sx={{
                fontSize: 18,
                textAlign: "justify",
                lineHeight: "36px",
              }}
              color="#494848"
            >
              {htmlParse(artwork.provenanceText) ||
                `No provenance for this
              artwork but do you know that ${dummmyHistory}`}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontWeight={600}
              mt={2}
              sx={{
                textDecoration: "underline",
                fontSize: 24,
              }}
            >
              Exhibition history
            </Typography>
            <Typography
              variant="body1"
              component="h3"
              sx={{
                fontSize: 18,
                textAlign: "justify",
                lineHeight: "36px",
              }}
              color="#494848"
            >
              {htmlParse(artwork.exhibitionHistory) ||
                `No exhibition history for this artwork but do you know that ${dummmyHistory}`}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              fontWeight={600}
              mt={2}
              sx={{
                textDecoration: "underline",
                fontSize: 24,
              }}
            >
              History
            </Typography>
            <Typography
              variant="body1"
              component="h3"
              sx={{
                fontSize: 18,
                textAlign: "justify",
                lineHeight: "36px",
              }}
              color="#494848"
            >
              {htmlParse(artwork.publicationHistory) ||
                `No publication history for this artwork but do you know that ${dummmyHistory}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            {artwork.dateDisplay && (
              <Typography
                variant="body1"
                component="div"
                mt={2}
                color="#B50938"
                sx={{
                  textTransform: "uppercase",
                  fontSize: 14,
                }}
              >
                Displayed {artwork.dateDisplay}
              </Typography>
            )}
            <ul>
              {artwork.categoryTitles?.map(
                (categoryTitle: string, index: number) => (
                  <li key={`category_title-${index}`}>
                    <Typography
                      variant="body1"
                      component="h3"
                      mt={2}
                      sx={{fontSize: 16}}
                      color="#494848"
                    >
                      {categoryTitle}
                    </Typography>
                  </li>
                )
              )}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ArtworkDetailPage;
