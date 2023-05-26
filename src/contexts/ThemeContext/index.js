import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createGlobalStyle,
  ThemeProvider as ThemeProviderStyled,
} from 'styled-components';
/**
 * Create ThemeContext
 * Context to use theme on the app
 */
export const ThemeContext = createContext();

/**
 * Api provider to manage theme
 * @param {props} props
 */
export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(props.theme);

  const GlobalStyle = createGlobalStyle`

    @media (min-width: 578px) {
      /** Mozilla scrollbar*/
      * {
        scrollbar-color: #CCC !important;
        scrollbar-width: thin !important;
      }

      /** Scrollbar for browser based on webkit */
      ::-webkit-scrollbar {
        width: 8px;
        height: 6px;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.06);
        border-radius: 6px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255,255,255,0.1);
      }
      ::-webkit-scrollbar-thumb:active {
        background: rgba(255,255,255,0.08);
      }
      ::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.06);
      }
    }

    body {
      font-family: Manrope, Poppins, Inter, PingFangSC-Regular, "Microsoft YaHei", sans-serif;
      margin: 0;
      background: ${theme.colors.mainCover};
      color: ${(props) => props.theme.colors?.headingColor || '#C4C4C4'};
      padding: 130px 60px 130px 300px;
      @media screen and (max-width: 991px) {
        padding: 0;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    input, textarea, button {
      font-family: inherit;
    }

    .apexcharts-tooltip {
      color: #222430;
    }

    .css-1vmnjpn-skeletonStyles-Skeleton {
      background-color: rgb(204 204 204 / 90%) !important;
      background-image: linear-gradient(90deg,#cccccc,rgb(238 238 238 / 90%),rgb(204 204 204 / 90%) ) !important;
      animation: animation-16jpnkj 1.8s ease-in-out infinite !important;
    }

    * {
      box-sizing: border-box;
      scroll-behavior: smooth;
    }
  `;

  useEffect(() => {
    const fonts = Object.entries(theme.fonts || {});
    fonts.forEach(([name, fontFamily]) => {
      if (!window.document.getElementById(`${name}-font-styles`)) {
        const font = window.document.createElement('link');
        font.id = `${name}-font-styles`;
        font.rel = 'stylesheet';
        font.async = true;
        font.defer = true;
        font.href = `https://fonts.googleapis.com/css2?family=${
          fontFamily.name
        }:wght@${fontFamily.weights.join(';')}&display=swap`;

        window.document.body.appendChild(font);
      }
    });
  }, [theme]);

  const update = (theme) => {
    setTheme(theme);
  };

  const merge = (partTheme) => {
    setTheme({
      ...theme,
      ...partTheme,
    });
  };

  return (
    <ThemeContext.Provider value={[theme, { update, merge }]}>
      <ThemeProviderStyled theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

/**
 * Hook to get theme state
 */
export const useTheme = () => {
  const themeManager = useContext(ThemeContext);
  return themeManager || [{}];
};
