
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { useAuth } from "@/hooks/useAuth";
// import { LoginPopup } from "@/pages/admin/login";
import { glitterBackground } from "../ui/glitterStyles";
import { useCustomTheme } from "@/lib/theme";


interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const location = useLocation();
  // const { user, isAuthenticated, logout } = useAuth();
  // const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  // const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useCustomTheme();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    // { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 20,
        bgcolor: "#b6b6b636",
        backdropFilter: "blur(4px)",
        borderColor: "primary.main",
        borderRadius: { xs: "9999px", sm: "9999px", md: "9999px" },
        width: "fit-content",
        mx: "auto",
        px: scrolled ? 0 : 2,
        py: scrolled ? 0 : 0.76,
        transition: "all 0.7s ease",
        alignItems: "center",
        left: 0,
        right: 0,

        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ gap: scrolled ? 3 : 8, justifyContent: "center", transition: "all 0.7s ease" }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Box
            component={motion.div}
            animate={{ scale: isMenuOpen ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              bgcolor: "primary.main",
              mr: 1,
              ...glitterBackground,
              boxShadow: ' rgba(255, 255, 255, 0.51) 0px 3px 8px',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1.2,
              color: "text.primary",
            }}
          >
            Portfolio
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {/* <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={{
                fontWeight: isActive(item?.href) ? "800" : "normal",
                color: isActive(item?.href) ? "" : "inherit",
                textDecoration: "none",
                letterSpacing: 1,
                fontSize: "0.95rem",
              }}
            >
              {item?.name}
            </Link>
          ))}
        </Box> */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navigation.map((item) => {
            const active = isActive(item?.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  position: "relative",
                  fontWeight: active ? "800" : "normal",
                  color: "inherit",
                  textDecoration: "none",
                  letterSpacing: 1,
                  fontSize: "0.95rem"
                }}
              >
                {item?.name}
                {active && (
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      height: 1,
                      width: "100%",
                      background: theme.gradients.primaryGradient, // Use your MUI primary colors or custom
                      borderRadius: 2,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </Box>

        {/* Auth & User Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", position: "relative" }}>
          {/* {isAuthenticated && user ? (
            <Box sx={{ position: "relative" }}>
              <Button
                variant="text"
                size="small"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                startIcon={<User size={16} />}
              >
                {user.username || user.email}
              </Button> */}


          {/* {isUserMenuOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    mt: 1,
                    width: 180,
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.35)", // smoother shadow
                    zIndex: 10,
                    overflow: "hidden",
                  }}
                >
                  <Link
                    to="/admin"
                    onClick={() => setIsUserMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    Admin Panel
                  </Link>
                  <Box
                    component="button"
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      logout();
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      px: 1.5,
                      py: 1,
                      border: "none",
                      bgcolor: "transparent",
                      cursor: "pointer",
                      "&:hover": { bgcolor: "primary.main", color: "#fff" },
                    }}
                  >
                    <LogOut size={16} style={{ marginRight: 8 }} />
                    Sign out
                  </Box>
                </Box>
              )}
            </Box>
          ) : (
            <> */}
          {/* Hide Sign In button if user menu open */}
          {/* {!isUserMenuOpen && ( */}
          <>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
            // endIcon={<ArrowRight size={20} />}
            >
              Contact
            </Button>
            {/* <Button
                    variant="contained"
                    size="small"
                    onClick={() => setOpen(true)}
                  >
                    Sign In
                  </Button> */}
            {/* <LoginPopup open={open} setOpen={setOpen} /> */}
          </>
          {/* )} */}
          {/* </>
          )} */}
        </Box>

        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
          <IconButton onClick={onMenuToggle} size="large">
            {isMenuOpen ? <X /> : <Menu />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation with smooth right-to-left animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
          // initial={{ x: 50, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: 50, opacity: 0 }}
          // transition={{ duration: 0.5, ease: "easeInOut" }} // slower & smooth
          >
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                borderTop: "1px solid",
                borderColor: "divider",
                mt: 1,
                px: 2,
                pb: 2,
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 12px 28px rgba(0,0,0,0.35)", // shadow for mobile menu
                bgcolor: "background.paper",
                position: "absolute",
                width: scrolled ? "100%" : "100%",
                left: 0
              }}
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeInOut" }}
                >
                  <Link
                    to={item.href}
                    onClick={onMenuToggle}
                    style={{
                      display: "block",
                      padding: "10px 0",
                      textDecoration: "none",
                      fontWeight: isActive(item.href) ? "bold" : "normal",
                      color: isActive(item.href) ? "#9306F7" : "inherit",
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <Box sx={{ mt: 2 }}>
                {/* {isAuthenticated ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2">
                      👋 {user?.username}
                    </Typography>
                    <Button color="error" onClick={logout} size="small">
                      Logout
                    </Button>
                  </Box>
                ) : ( */}

                <Button
                  variant="contained"
                  size="large"
                  href="/contact"
                  sx={{ boxShadow: 5, fontFamily: "Poppins" }}
                // onClick={() => setOpen(true)}
                >
                  Contact
                </Button>
                {/* )} */}
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </AppBar>
  );
}
