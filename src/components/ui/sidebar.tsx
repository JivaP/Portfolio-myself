"use client"

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  IconButton,
  Tooltip,
  Badge,
  TextField,
  Skeleton,
  Stack
} from "@mui/material"
import { PanelLeft } from "lucide-react"

// ----------------- Sidebar Context -----------------
const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = 256
const SIDEBAR_WIDTH_MOBILE = 288
const SIDEBAR_WIDTH_ICON = 48
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within SidebarProvider")
  return context
}

// ----------------- Sidebar Provider -----------------
export const SidebarProvider: React.FC<{ children: React.ReactNode, defaultOpen?: boolean }> = ({ children, defaultOpen = true }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [_open, _setOpen] = useState(defaultOpen)
  const open = _open

  const setOpen = useCallback((value: boolean | ((value: boolean) => boolean)) => {
    const val = typeof value === "function" ? value(open) : value
    _setOpen(val)
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${val}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
  }, [open])

  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o)
  }, [isMobile, setOpen, setOpenMobile])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === SIDEBAR_KEYBOARD_SHORTCUT) {
        event.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  const state = open ? "expanded" : "collapsed"
  console.log("Sidebar state:", state, "isMobile:", isMobile)

  const value = useMemo<SidebarContextProps>(() => ({
    state: open ? "expanded" : "collapsed", // TS now infers as "expanded" | "collapsed"
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
  }), [open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar])


  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

// ----------------- Sidebar Component -----------------
export const Sidebar: React.FC<{
  side?: "left" | "right"
  collapsible?: boolean
  children: React.ReactNode
}> = ({ side = "left", children }) => {
  const { open, openMobile, setOpenMobile, isMobile } = useSidebar()
  const drawerWidth = isMobile ? SIDEBAR_WIDTH_MOBILE : SIDEBAR_WIDTH
  const collapsedWidth = SIDEBAR_WIDTH_ICON

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        anchor={side}
        open={openMobile}
        onClose={() => setOpenMobile(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth }
        }}
      >
        <Box sx={{ width: drawerWidth, display: "flex", flexDirection: "column" }}>
          {children}
        </Box>
      </Drawer>
    )
  }

  return (
    <Drawer
      variant="persistent"
      anchor={side}
      open={true}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: (theme) => theme.transitions.create("width"),
          overflowX: "hidden",
        }
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {children}
      </Box>
    </Drawer>
  )
}

// ----------------- Sidebar Trigger -----------------
export const SidebarTrigger: React.FC = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <IconButton onClick={toggleSidebar} sx={{ m: 1 }}>
      <PanelLeft />
    </IconButton>
  )
}

// ----------------- Sidebar Header/Footer/Content -----------------
export const SidebarHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>{children}</Box>
)
export const SidebarFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ p: 2, mt: "auto", display: "flex", flexDirection: "column", gap: 1 }}>{children}</Box>
)
export const SidebarContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 1 }}>{children}</Box>
)
export const SidebarInset: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ flex: 1, m: 2, borderRadius: 2, boxShadow: 1 }}>{children}</Box>
)
export const SidebarInput: React.FC<React.ComponentProps<typeof TextField>> = (props) => (
  <TextField size="small" variant="outlined" fullWidth {...props} />
)

// ----------------- Sidebar Menu -----------------
export const SidebarMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <List sx={{ p: 0, m: 0 }}>{children}</List>
)
export const SidebarMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ListItem disablePadding>{children}</ListItem>
)
export const SidebarMenuButton: React.FC<{
  children: React.ReactNode
  isActive?: boolean
  tooltip?: string
  onClick?: () => void
}> = ({ children, isActive, tooltip, onClick }) => {
  const { state, isMobile } = useSidebar()
  const button = (
    <ListItemButton
      selected={isActive}
      onClick={onClick}
      sx={{
        px: 2,
        py: 1,
        borderRadius: 1,
        "&.Mui-selected": {
          bgcolor: "primary.main",
          color: "primary.contrastText"
        }
      }}
    >
      {children}
    </ListItemButton>
  )
  if (!tooltip || state === "expanded" || isMobile) return button
  return <Tooltip title={tooltip} placement="right">{button}</Tooltip>
}
export const SidebarMenuAction: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ position: "absolute", right: 8, top: 8 }}>{children}</Box>
)
export const SidebarMenuBadge: React.FC<{ badgeContent: React.ReactNode; children: React.ReactNode }> = ({ badgeContent, children }) => (
  <Badge badgeContent={badgeContent} color="primary">{children}</Badge>
)
export const SidebarMenuSkeleton: React.FC<{ showIcon?: boolean }> = ({ showIcon }) => {
  const width = Math.floor(Math.random() * 40) + 50
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 2, py: 1 }}>
      {showIcon && <Skeleton variant="rectangular" width={24} height={24} />}
      <Skeleton variant="rectangular" width={`${width}%`} height={20} />
    </Stack>
  )
}

// ----------------- Sidebar Submenu -----------------
export const SidebarMenuSub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <List sx={{ pl: 4 }}>{children}</List>
)
export const SidebarMenuSubButton: React.FC<{ children: React.ReactNode; isActive?: boolean; onClick?: () => void }> = ({ children, isActive, onClick }) => (
  <ListItemButton selected={isActive} onClick={onClick} sx={{ pl: 2 }}>
    {children}
  </ListItemButton>
)
export const SidebarMenuSubItem: React.FC<{ children: React.ReactNode }> = ({ children }) => <ListItem disablePadding>{children}</ListItem>
