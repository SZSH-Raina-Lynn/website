'use client'
import { Stack,Button, Box, Link, AppBar, Toolbar, Container, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState} from 'react';
import "./Frames.css"
import { navItems, socialItems } from "../../utility/data";

export default function Header () {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{margin:0}}>
          <Image src="/logo.png" priority={false} alt="logo" width="300" height="40"/>
          <Box sx={{flexGrow:1, display: {xs:'flex', md:'none'}}} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color:"primary.dark !important"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical:'bottom', horizontal:'left'}}
              keepMounted
              transformOrigin={{vertical:'top', horizontal:'left'}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs:'block', md:'none'}}}
            >
              {navItems.map((item, i) =>
                <MenuItem key={i} onClick={handleCloseNavMenu} sx={{padding:"0 auto"}}>
                <Link href={`/${item[1]}`} variant="subtitle2" underline="none" className="nav-link">{item[0]}</Link>
                </MenuItem>
              )}
              <MenuItem>
                {socialItems.map((item, i) =>
                  <Link key={i} href={item[1]}>
                     <Image src={item[0]} alt={item[0]+"link"} width="20" height="20" style={{objectFit: "cover"}}/>
                  </Link>
                )}
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ justifyContent:"center", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item, i) =>
             <Button
              key={i}
              href={`/${item[1]}`}
              sx={{
                "&:hover": {bgcolor:"#9ac9f85f !important", fontWeight:800},
                my: 2,
                color:"#2b2b2b !important",
                textAlign:"center",
                display: 'block'
              }}>
              {item[0]}
            </Button>
            )}
          </Box>
          <Stack direction="row" alignItems="center" spacing={1} sx={{display: {xs: 'none', md:'flex'}}}>
          {socialItems.map((item, i) =>
            <Link key={i} href={item[1]} mx={1}>
              <Image src={item[0]} alt={item[0]+"link"} width="25" height="25" style={{objectFit: "cover"}}/>
            </Link>
          )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}