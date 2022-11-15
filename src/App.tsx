import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AdjustIcon from "@mui/icons-material/Adjust";

interface Props {
  children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = [
  "Stickers",
  "Labels",
  "Create A design",
  "Help me Choose",
  "Reorder",
];
const navItems2 = ["Support", "About Us", "User", "Search", "Cart"];

export default function Navigation(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dropdownMenu = (
    <Box
      onClick={handleMenu}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "18px",
        top: "40px",
        right: "25",
        position: "absolute",
        height: "fit-content",
        bgcolor: "white",
        p: 2,
        mt: 4,

        borderRadius: 1,
        border: "1px solid #aeebe1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: "1rem",
            color: "#383838",
            textAlign: "center",
          }}
        >
          Most Popular
        </Typography>

        <List
          sx={{
            fontSize: "0.8rem",
            color: "#383838",
            textTransform: "capitalize",
          }}
        >
          {[
            "Die Cut Stickers",
            "Holographic Stickers",
            "Clear Stickers",
            "Kiss Cut Stickers",
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                p: 0,
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                width: "100%",
              }}
            >
              <AdjustIcon sx={{ fontSize: "0.8rem", mr: 1 }} />
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Button
            sx={{
              fontSize: "0.8rem",
              color: "#383838",
              textTransform: "capitalize",
              justifyContent: "center",
              width: "100%",
              flexGrow: 1,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#aeebe1",
              borderRadius: "0.5em",
              mt: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontSize: "1rem", color: "#383838" }}
            >
              View All
            </Typography>
          </Button>
        </List>
      </Box>
      <Divider sx={{ width: "2px", bgcolor: "#aeebe1", my: "0.8rem" }} />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: "1rem",
            color: "#383838",
            textAlign: "center",
          }}
        >
          Most Popular
        </Typography>

        <List
          sx={{
            fontSize: "0.8rem",
            color: "#383838",
            textTransform: "capitalize",
          }}
        >
          {[
            "Die Cut Stickers",
            "Holographic Stickers",
            "Clear Stickers",
            "Kiss Cut Stickers",
          ].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                p: 0,
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                width: "100%",
              }}
            >
              <AdjustIcon sx={{ fontSize: "0.8rem", mr: 1 }} />
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Button
            sx={{
              fontSize: "0.8rem",
              color: "#383838",
              textTransform: "capitalize",
              justifyContent: "center",
              width: "100%",
              flexGrow: 1,
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: "#aeebe1",
              borderRadius: "0.5em",
              mt: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontSize: "1rem", color: "#383838" }}
            >
              View All
            </Typography>
          </Button>
        </List>
      </Box>
    </Box>
  );

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: drawerWidth,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <List
        sx={{
          justifyContent: "flex-start",
          textTransform: "uppercase",
          fontSize: "0.8rem",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ justifyContent: "flex-start" }}>
              <ListItemText primary={item} sx={{ fontSize: "0.9rem" }} />
              <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          justifyContent: "flex-start",
          textTransform: "uppercase",
        }}
      >
        {navItems2.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ justifyContent: "flex-start" }}>
              <ListItemText primary={item} sx={{ fontSize: "0.9rem" }} />
              <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          backgroundColor: "#ccf9f2",
          boxShadow: "none",
          color: "#151c4d",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            textTransform: "uppercase",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              display: { sm: "none" },
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <MenuIcon onClick={handleDrawerToggle} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                width: "100%",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              STICKER IT
            </Typography>
            <ShoppingBagIcon sx={{ color: "#09a777" }} />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "none", sm: "flex" },
              fontWeight: 700,
              fontSize: "1.5rem",
              width: "10rem",
            }}
          >
            STICKER IT
          </Typography>

          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            onClick={handleMenu}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#151c4d" }}>
                {item}
                <ExpandMoreIcon sx={{ fontSize: "1.2rem" }} />
              </Button>
            ))}
            {open && dropdownMenu}
          </Box>

          <Box
            sx={{ display: { xs: "none", sm: "block" }, width: "max-content" }}
          >
            {navItems2.map((item) => (
              <Button key={item} sx={{ color: "#07aa92", fontSize: "0.8rem" }}>
                {item}
                <ExpandMoreIcon sx={{ fontSize: "1rem" }} />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
