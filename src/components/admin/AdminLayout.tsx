// import React from 'react'
// import { Link, useLocation, Navigate } from 'react-router-dom'
// // import { useAuth } from '../../hooks/useAuth'
// // import { Button } from '../ui/Button'
// import {
//   LayoutDashboard,
//   FolderOpen,
//   FileText,
//   Mail,
//   Settings,
//   LogOut,
//   Menu,
//   X,
// } from 'lucide-react'

// import { Button } from '../ui/Button'
// import { useAuth } from '@/hooks/useAuth'

// interface AdminLayoutProps {
//   children: React.ReactNode
// }

// export function AdminLayout({ children }: AdminLayoutProps) {
//   const location = useLocation()
//   const { loading, isAuthenticated, logout } = useAuth()
//   console.log(isAuthenticated, "isAuthenticated");

//   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
//   const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null

//   console.log(user, "user")
//   const navigation = [
//     { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
//     { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
//     { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
//     { name: 'Messages', href: '/admin/messages', icon: Mail },
//     { name: 'Settings', href: '/admin/settings', icon: Settings },
//   ]

//   const isActive = (href: string) => {
//     if (href === '/admin') {
//       return location.pathname === '/admin'
//     }
//     return location.pathname.startsWith(href)
//   }

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="text-center">
//           <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
//           <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
//         </div>
//       </div>
//     )
//   }

//   if (!user) {
//     return <Navigate to="/" replace />
//   }

//   return (
//     <div className="flex h-screen bg-background">
//       {/* Desktop Sidebar */}
//       <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
//         <div className="flex flex-col flex-grow border-r bg-card overflow-y-auto">
//           {/* Logo */}
//           <div className="flex items-center h-16 flex-shrink-0 px-4 border-b">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-full bg-primary"></div>
//               <span className="text-xl font-bold">Admin</span>
//             </Link>
//           </div>

//           {/* Navigation */}
//           <nav className="mt-5 flex-1 px-2 space-y-1">
//             {navigation.map((item) => {
//               const Icon = item.icon
//               return (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${isActive(item.href)
//                     ? 'bg-accent text-accent-foreground'
//                     : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
//                     }`}
//                 >
//                   <Icon
//                     className={`mr-3 h-5 w-5 transition-colors ${isActive(item.href)
//                       ? 'text-accent-foreground'
//                       : 'text-muted-foreground group-hover:text-accent-foreground'
//                       }`}
//                   />
//                   {item.name}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* User section */}
//           <div className="flex-shrink-0 border-t p-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
//                     <span className="text-sm font-medium text-primary-foreground">
//                       {console.log(user, "user")}
//                       {user.username?.[0] || user.email[0].toUpperCase()}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="ml-3">
//                   <p className="text-sm font-medium">{user.username || 'Admin'}</p>
//                   <p className="text-xs text-muted-foreground">{user.email}</p>
//                 </div>
//               </div>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => logout()}
//                 className="h-8 w-8"
//               >
//                 <LogOut className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile sidebar overlay */}
//       {isSidebarOpen && (
//         <div className="md:hidden fixed inset-0 z-40">
//           <div
//             className="fixed inset-0 bg-black bg-opacity-25"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//           <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-card">
//             <div className="flex h-16 items-center justify-between px-4 border-b">
//               <Link to="/" className="flex items-center space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-primary"></div>
//                 <span className="text-xl font-bold">Admin</span>
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 <X className="h-6 w-6" />
//               </Button>
//             </div>
//             <nav className="mt-5 flex-1 px-2 space-y-1">
//               {navigation.map((item) => {
//                 const Icon = item.icon
//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => setIsSidebarOpen(false)}
//                     className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${isActive(item.href)
//                       ? 'bg-accent text-accent-foreground'
//                       : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
//                       }`}
//                   >
//                     <Icon className="mr-3 h-5 w-5" />
//                     {item.name}
//                   </Link>
//                 )
//               })}
//             </nav>
//           </div>
//         </div>
//       )}

//       {/* Main content */}
//       <div className="md:pl-64 flex flex-col flex-1 overflow-hidden">
//         {/* Mobile header */}
//         <div className="md:hidden flex items-center justify-between h-16 px-4 border-b bg-background">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu className="h-6 w-6" />
//           </Button>
//           <h1 className="text-lg font-semibold">Admin Panel</h1>
//           <div className="w-10"></div> {/* Spacer */}
//         </div>

//         {/* Content */}
//         <main className="flex-1 overflow-y-auto bg-background">
//           <div className="p-6">{children}</div>
//         </main>
//       </div>
//     </div>
//   )
// }
"use client";
import React, { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  // Card,
  // CardContent,
  // Grid,
  // Paper,
  // Chip,
  // LinearProgress,
  useTheme,
  alpha,
  styled
} from '@mui/material';
// import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  // ChevronLeft,
  // TrendingUp,
  // Users,
  // Calendar,
  Bell,
  // Award,
  // Target,
  // BarChart3
} from 'lucide-react';

// Styled component for the curved top design
const CurvedBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '120px',
  // backgroundColor: theme.palette.primary.main,
  // borderBottomLeftRadius: '40px',
  // borderBottomRightRadius: '40px',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    height: '100px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
  }
}));

// Motion components
// const MotionCard = motion(Card);
// const MotionPaper = motion(Paper);
// const MotionBox = motion(Box);

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const userData = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null;
    setUser(userData);
    setLoading(false);
  }, []);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
    // { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
    { name: 'Messages', href: '/admin/messages', icon: Mail },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2, position: 'relative', zIndex: 1, bgcolor: 'black' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{
            bgcolor: 'white',
            color: 'primary.main',
            mr: 2,
            width: 40,
            height: 40
          }}>
            A
          </Avatar>
          <Typography variant="h6" noWrap component="div" color="white">
            Admin Panel
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose} sx={{ display: { md: 'none' }, color: 'white' }}>
          <X size={20} />
        </IconButton>
      </Toolbar>
      <Divider sx={{ bgcolor: alpha('#fff', 0.2) }} />
      <List sx={{ px: 1, mt: 2, }} >
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem key={item.name} disablePadding >
              <ListItemButton href={item.href}
                selected={isActive(item.href)}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                    color: 'white',
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  },
                }}
              >
                <ListItemIcon sx={{
                  color: isActive(item.href) ? 'white' : alpha('#fff', 0.7),
                  minWidth: 40
                }}>
                  <Icon size={20} />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}

                  primaryTypographyProps={{
                    color: isActive(item.href) ? 'white' : alpha('#fff', 0.7)
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider sx={{ mt: 'auto', bgcolor: alpha('#fff', 0.2) }} />
      <Box sx={{ p: 2, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{
            bgcolor: 'white',
            color: 'primary.main',
            mr: 2,
            width: 40,
            height: 40,
            fontSize: '1rem'
          }}>
            {user?.username?.[0] || user?.email?.[0]?.toUpperCase() || 'A'}
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="medium" color="white">
              {user?.username || 'Admin User'}
            </Typography>
            <Typography variant="body2" color={alpha('#fff', 0.7)}>
              {user?.email || 'admin@example.com'}
            </Typography>
          </Box>
        </Box>
        <ListItemButton sx={{ borderRadius: 1, color: alpha('#fff', 0.7) }}>
          <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
            <LogOut size={20} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
      {/* Curved background for sidebar */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'black',
        zIndex: -1
      }} />
    </div>
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
            Loading...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative', }}>
      {/* Curved top design */}
      <CurvedBox />

      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - 280px)` },
          ml: { md: `280px` },
          boxShadow: 'none',
          bgcolor: 'black',
          color: 'white'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <Menu size={24} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Bell size={22} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: 280 }, flexShrink: { md: 0 }, position: 'relative', zIndex: 2, }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            backgroundColor: 'black',
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              bgcolor: 'transparent',
              border: 'none',
              overflow: 'hidden'
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            background: 'black',
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              bgcolor: 'transparent',
              border: 'none',
              overflow: 'hidden'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <main>

        <Box sx={{ pt:8 ,px:4}}>{children}</Box>
      </main>
    </Box>
  );
}