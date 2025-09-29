// // ThemeContext.tsx
// import React, { createContext, useContext, ReactNode } from 'react';
// import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

// // Extend MUI Theme to include custom gradients
// declare module '@mui/material/styles' {
//   interface Theme {
//     gradients: {
//       primaryGradient: string;
//       secondaryGradient: string;
//     };
//   }
//   interface ThemeOptions {
//     gradients?: {
//       primaryGradient?: string;
//       secondaryGradient?: string;
//     };
//   }
// }

// interface ThemeContextProps {
//   children: ReactNode;
// }

// const ThemeContext = createContext<Theme | null>(null);

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#511F89',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       main: '#000000',
//       contrastText: '#ffffff',
//     },
//     background: {
//       default: '#000000',
//       paper: '#1A1A1A',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#B0B0B0',
//     },
//   },
//   typography: {
//     // 👇 Add Poppins before Roboto so it has higher priority
//     fontFamily: 'Poppins, Roboto, Arial, sans-serif',
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//           borderRadius: 8,
//         },
//         containedPrimary: {
//           background: 'linear-gradient(45deg, #000000ff 30%, #9306F7 90%)',
//           color: '#ffffff',
//         },
//         containedSecondary: {
//           background: 'linear-gradient(45deg, #000000 30%, #511F89 90%)',
//           color: '#ffffff',
//         },
//       },
//     },
//   },
//   gradients: {
//     primaryGradient: 'linear-gradient(135deg, #451A74, #9809f7, #8900f9ff, #9809f7, #000000ff)',
//     secondaryGradient: 'linear-gradient(135deg, #451A74, #9809f7, #8900f9ff, #9809f7, #000000ff)',
//   },
// });

// export const CustomThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
//   return (
//     <ThemeContext.Provider value={theme}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook to access theme
// export const useCustomTheme = () => {
//   const theme = useContext(ThemeContext);
//   if (!theme) throw new Error('useCustomTheme must be used within CustomThemeProvider');
//   return theme;
// };
// ThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
// import { color } from 'framer-motion';

// Extend MUI Theme to include custom gradients
declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      primaryGradient: string;
      secondaryGradient: string;
    };
  }
  interface ThemeOptions {
    gradients?: {
      primaryGradient?: string;
      secondaryGradient?: string;
    };
  }
}

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext<Theme | null>(null);

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9104F8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    info: {
      main: '#ffffffff',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',

    // Button text
    button: {
      fontWeight: 600,
      letterSpacing: '0.5px',
      color: '#ffffff',
      textShadow: '0 2px 6px rgba(147, 6, 247, 0.6)',
    },

    // Headings with glow
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#ffffff',
      textShadow: '0 4px 12px rgba(147, 6, 247, 0.42)',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#ffffff',
      textShadow: '0 3px 10px rgba(137, 0, 249, 0.7)',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#ffffff',
      textShadow: '0 3px 8px rgba(137, 0, 249, 0.6)',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#ffffff',
      textShadow: '0 2px 6px rgba(147, 6, 247, 0.6)',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#ffffff',
      textShadow: '0 2px 5px rgba(137, 0, 249, 0.5)',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#ffffff',
      textShadow: '0 1px 4px rgba(147, 6, 247, 0.5)',
    },

    // Body text with subtle glow
    body1: {
      fontSize: '1rem',
      color: '#B0B0B0',
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#B0B0B0',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    },

    // Subtitles
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      // color: '#ffffff',
      // textShadow: '0 2px 6px rgba(147, 6, 247, 0.5)',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: 'rgba(10, 10, 10, 1)',
      // textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
    },

    // Caption
    caption: {
      fontSize: '0.75rem',
      color: '#888888',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 12px rgba(0,0,0,0.5)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #9306F7, #b328b3ff)',
          color: '#ffffffff',
          boxShadow: ' rgba(255, 255, 255, 0.51) 0px 3px 8px',
          '&:hover': {
            background: 'linear-gradient(45deg, #A536FF, #6C28B6)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #000000, #333333)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, #1A1A1A, #511F89)',
          },
        },
        outlinedPrimary: {
          borderColor: '#A536FF',
          color: '#ffffffff',
          '&:hover': {
            background: 'linear-gradient(45deg, #1A1A1A, #511F89)',
            borderColor: '#A536FF',
            color: '#ffffff',
            fontWeight: 600,
          },
        },
        outlinedSecondary: {
          borderColor: '#ffffff',
          color: '#ffffff',
          '&:hover': {
            background: 'rgba(255,255,255,0.1)',
            borderColor: '#cccccc',
          },
        },
      },
    },
  },

  gradients: {
    primaryGradient:
      'linear-gradient(45deg, #9306F7, #b328b3ff)',
    secondaryGradient:
      'linear-gradient(135deg, #333333, #451A74, #511F89, #000000)',
  },
});

export const CustomThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme
export const useCustomTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useCustomTheme must be used within CustomThemeProvider');
  return theme;
};
