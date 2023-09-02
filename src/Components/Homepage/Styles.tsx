export const herosectionContainer = {
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(images/heroImage.jpg)",
  height: {xs: "100vh", sm: "80vh", md: "100vh", lg: "100Vh"},
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const viewLink = {
  borderRadius: 0,
  py: 1.2,
  px: 2.4,
};

export const artCollection = {
  fontWeight: 600,
  lineHeight: "25px",
  fontSize: {xs: 24, md: 36},
  my: 6,
};

export const cardHolder = {
  elevation: "none",
  boxShadow: "none",
  borderRadius: 0,
  "&:hover": {
    zIndex: 2,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0),0 2px 5px 0 rgba(0, 0, 0, 0.15)",
    transform: "scale(1.1)",
    transition: "transform 1s ease-out",
  },
};
