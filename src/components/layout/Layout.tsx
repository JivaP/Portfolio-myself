import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Box } from '@mui/material'

interface LayoutProps {
  children: React.ReactNode
  showFooter?: boolean
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="realtive">
      <Header
        onMenuToggle={toggleMobileMenu}
        isMenuOpen={isMobileMenuOpen}
      />
      <Box sx={{pt:5}} >{children}</Box>
      {showFooter && <Footer />}
    </div>
  )
}
