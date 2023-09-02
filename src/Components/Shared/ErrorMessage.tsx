import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {useSelector} from "react-redux";

import {ErrorProps, StateProps} from "Utils/interfaces";
import Image from "./Image";

const ErrorMessage = () => {
  const state = useSelector((state) => state) as any;
  const {error} = state.artworks as StateProps;
  const {message, statusCode} = error as ErrorProps;

  return (
    <Box
      my={3}
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      color="#494848"
    >
      <Typography
        variant="h6"
        component="p"
        my={1}
        sx={{
          fontWeight: 600,
          lineHeight: "25px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        color="#494848"
      >
        <Image
          src="/images/errorIcon.svg"
          alt="error icon"
          height="25px"
          width="25px"
          style={{marginRight: 8}}
        />
        {message}
      </Typography>
      <Typography
        variant="h5"
        component="p"
        my={1}
        sx={{
          fontWeight: 600,
          lineHeight: "25px",
        }}
        color="#494848"
      >
        {statusCode}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
