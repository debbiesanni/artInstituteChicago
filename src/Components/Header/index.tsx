"use client";
import {useState, useEffect, useCallback} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {Link} from "react-router-dom";

function Header() {
  const [transparent, setTransparent] = useState(true);
  const onScroll = useCallback(() => {
    if (window.pageYOffset < 80) {
      setTransparent(true);
    } else setTransparent(false);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);
  return (
    <header>
      <AppBar
        position="fixed"
        sx={{
          background: transparent ? "transparent" : "#fff",
          color: "black",
          boxShadow: "none",
          transition: "background 1s ease-out",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box py={1}>
              <Link to="/">
                <img
                  src="/images/logo.svg"
                  alt="art institvte chicago logo"
                  height={80}
                  width={80}
                />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
export default Header;
