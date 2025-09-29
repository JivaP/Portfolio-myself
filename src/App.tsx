
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Layout } from './components/layout/Layout'
import { AdminLayout } from './components/admin/AdminLayout'
import { HomePage } from './pages/HomePage'
// import { ScrollIndicator } from './components/home/ScrollIndicator'
import { CustomThemeProvider } from './lib/theme'

// MUI Imports
import { Box, CircularProgress } from '@mui/material'
import LoginPage from './pages/admin/login'
import { AdminContext } from './hooks/Context'


// Lazy load pages for better performance
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'))
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage'))
const BlogPage = React.lazy(() => import('./pages/BlogPage'))
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))

// Admin pages
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'))
const AdminProjects = React.lazy(() => import('./pages/admin/AdminProjects/AdminProjects'))
const AdminBlog = React.lazy(() => import('./pages/admin/AdminBlog/AdminBlog'))
const AdminMessages = React.lazy(() => import('./pages/admin/AdminMessages/AdminMessages'))
const AdminSettings = React.lazy(() => import('./pages/admin/AdminSettings'))

// Loader component using MUI
const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress color="primary" />
  </Box>
)

function App() {

  const [admin, setAdmin] = React.useState<any | null>({
    Project: false,
    Blog: false,
    Message: false,
    Setting: false,
  });
  const defaultAdmin = {
    admin,
    setAdmin
  }

  return (
    <CustomThemeProvider>
      <AdminContext.Provider value={defaultAdmin}>

        <Router>
          <Routes>
            <Route
              path="/login"
              element={

                <React.Suspense fallback={<Loader />}>
                  <LoginPage />
                </React.Suspense>

              }
            />
            {/* Public routes */}
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <ProjectsPage />
                  </React.Suspense>
                </Layout>
              }
            />
            <Route
              path="/projects/:id"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <ProjectDetailPage />
                  </React.Suspense>
                </Layout>
              }
            />
            <Route
              path="/blog"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <BlogPage />
                  </React.Suspense>
                </Layout>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <BlogPostPage />
                  </React.Suspense>
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <AboutPage />
                  </React.Suspense>
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <React.Suspense fallback={<Loader />}>
                    <ContactPage />
                  </React.Suspense>
                </Layout>
              }
            />

            {/* Admin routes */}
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <React.Suspense fallback={<Loader />}>
                    <AdminDashboard />
                  </React.Suspense>
                </AdminLayout>
              }
            />
            <Route
              path="/admin/projects"
              element={
                <AdminLayout>
                  <React.Suspense fallback={<Loader />}>
                    <AdminProjects />
                  </React.Suspense>
                </AdminLayout>
              }
            />
            <Route
              path="/admin/blog"
              element={
                <AdminLayout>
                  <React.Suspense fallback={<Loader />}>
                    <AdminBlog />
                  </React.Suspense>
                </AdminLayout>
              }
            />
            <Route
              path="/admin/messages"
              element={
                <AdminLayout>
                  <React.Suspense fallback={<Loader />}>
                    <AdminMessages />
                  </React.Suspense>
                </AdminLayout>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <AdminLayout>
                  <React.Suspense fallback={<Loader />}>
                    <AdminSettings />
                  </React.Suspense>
                </AdminLayout>
              }
            />
          </Routes>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Router>
      </AdminContext.Provider>
      {/* <ScrollIndicator /> */}
    </CustomThemeProvider>
  )
}

export default App
