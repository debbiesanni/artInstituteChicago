import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "react-infinite-scroll-component";

import {useCallback, useEffect, useState} from "react";

import {errorMessage, setArtworks} from "Redux/artwork";
import {useDispatch, useSelector} from "react-redux";

import {artCollection} from "./Styles";
import {StateProps, ErrorProps} from "Utils/interfaces";
import {getRequest} from "Utils";
import ErrorMessage from "Components/Shared/ErrorMessage";
import NoContentFound from "Components/Shared/NoContentFound";
import ArtworkCard from "./Card";
import {RootState} from "Redux/Store";

const ListArtworks = () => {
  const [nextPageUrl, setNextPageUrl] = useState("");
  const {artworks, error} = useSelector<RootState>(
    (state) => state.artworks
  ) as StateProps;
  const dispatch = useDispatch();

  const getArtworks = useCallback(
    async (url: string) => {
      try {
        const {data, pagination} = await getRequest(url);
        const artworks = data?.map(
          ({
            id,
            title,
            thumbnail,
            artist_display,
            place_of_origin,
          }: Record<string, unknown>) => ({
            id,
            title,
            thumbnail,
            artistDisplay: artist_display,
            placeOfOrigin: place_of_origin,
          })
        );
        dispatch(setArtworks(artworks));
        setNextPageUrl(pagination.next_url);
      } catch (error) {
        dispatch(errorMessage(error as ErrorProps));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getArtworks("https%3A%2F%2Fapi.artic.edu%2Fapi%2Fv1%2Fartworks");
  }, [getArtworks]);

  if (error) return <ErrorMessage />;
  return (
    <Container maxWidth="lg" id="artworks">
      {artworks?.length < 1 ? (
        <NoContentFound />
      ) : (
        <>
          <Typography
            variant="h4"
            component="p"
            sx={artCollection}
            color="#494848"
          >
            ARTWORK COLLECTIONS
          </Typography>
          <InfiniteScroll
            dataLength={artworks.length}
            next={() => getArtworks(nextPageUrl as string)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{textAlign: "center"}}>
                <b>Done!</b>
              </p>
            }
          >
            <Grid spacing={3} container mb={4}>
              {artworks.map((artwork, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`artwork-${index}`}
                >
                  <ArtworkCard {...artwork} />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </>
      )}
    </Container>
  );
};

export default ListArtworks;
