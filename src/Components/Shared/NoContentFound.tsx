import Typography from "@mui/material/Typography";

const NoContentFound = () => {
  return (
    <Typography
      variant="h6"
      component="p"
      my={3}
      sx={{
        fontWeight: 600,
        lineHeight: "25px",
        textAlign: "center",
      }}
      color="#494848"
    >
      No collections available!!!
    </Typography>
  );
};

export default NoContentFound;
