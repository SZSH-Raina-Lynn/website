"use client";
import {
  Stack,
  Button,
  Link,
  Box,
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "./Frames.css";
import { navItems, socialItems } from "../../utility/data";
import { Facebook, Twitter } from "@mui/icons-material";

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="xl" id="header">
        <Toolbar disableGutters sx={{ margin: 0 }}>
          <a href="/">
            <Image
              src="/logo.png"
              priority
              alt="logo"
              width="300"
              height="40"
              className="w-full h-full object-cover"
            />
          </a>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "primary.dark !important" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {navItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{ padding: "0 auto" }}
                >
                  <Link
                    href={`/${item[1]}`}
                    variant="subtitle2"
                    underline="none"
                    className="nav-link"
                  >
                    {item[0]}
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                {socialItems.map((item, i) => (
                  <a key={i} href={item[1]} className="mx-[0.3]">
                    {item[0] === "/WeChat.png" ? (
                      <Image
                        src={item[0]}
                        alt={item[0] + "link"}
                        width={20}
                        height={20}
                      />
                    ) : item[0] === "/FaceBook.png" ? (
                      <Facebook />
                    ) : (
                      <Twitter />
                    )}
                  </a>
                ))}
              </MenuItem>
            </Menu>
          </Box>
          <div className="flex-grow hidden md:flex justify-center">
            {navItems.map((item, i) => (
              <Button
                key={i}
                href={`/${item[1]}`}
                sx={{
                  "&:hover": {
                    bgcolor: "#9ac9f85f !important",
                    color: "black !important",
                  },
                  my: 2,
                  color: "#4f4f4e !important",
                  textAlign: "center",
                  display: "block",
                  fontSize: "1.1em",
                  fontWeight: 600,
                }}
              >
                {item[0]}
              </Button>
            ))}
          </div>
          <div className="hidden md:flex flex-row justify-between items-center h-full ">
            {socialItems.map((item, i) => (
              <a key={i} href={item[1]} className="mx-1 h-[25px] w-[25px]">
                {item[0] === "/WeChat.png" ? (
                  <Image
                    src={item[0]}
                    alt={item[0] + "link"}
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                ) : item[0] === "/FaceBook.png" ? (
                  <Facebook />
                ) : (
                  <Twitter />
                )}
              </a>
            ))}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
