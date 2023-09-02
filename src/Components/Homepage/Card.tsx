import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import {Link} from "react-router-dom";

import {cardHolder} from "./Styles";
import {ArtworkInt} from "Utils/interfaces";
import {defaultImage, truncate} from "Utils";

const ArtworkCard = ({
  thumbnail,
  placeOfOrigin,
  artistDisplay,
  title,
  id,
}: ArtworkInt) => {
  return (
    <Card sx={cardHolder}>
      <Link to={`/artwork-detail-page/${id}`}>
        <CardMedia
          sx={{height: 180}}
          image={thumbnail ? thumbnail.lqip : defaultImage}
          title={thumbnail ? thumbnail.alt_text : title}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography
              variant="body1"
              component="div"
              color="primary"
              sx={{
                textTransform: "uppercase",
                fontSize: 14,
              }}
            >
              {placeOfOrigin || "No Specified"}
            </Typography>
            <Typography variant="h6" component="h2">
              {truncate(title, 40) || "No Title"}
            </Typography>
            <Typography
              variant="body1"
              component="h3"
              sx={{fontSize: 16}}
              color="#848484"
            >
              {truncate(artistDisplay, 27) || "Artist display not avaiable"}
            </Typography>
          </Stack>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ArtworkCard;
