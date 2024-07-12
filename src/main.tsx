import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/globals.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import lightTheme from '@styles/themes/lightTheme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import ReduxProvider from './redux/store';
import { Toaster } from "react-hot-toast";
import { routeOptions } from '@configs/settings';
import { HeaderOption } from '@models/models';
import RouteResolver from '@components/Major/RouteResolver';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ReduxProvider>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Toaster />

            <Routes>
              {routeOptions.map((route: HeaderOption, i: number) => (
                <>
                  {route.activeRoute && (
                    <Route
                      key={i}
                      path={route.link}
                      element={
                        <RouteResolver
                          route={route}
                        />
                      }
                    />
                  )}
                </>
              ))}
            </Routes>

          </ThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    </CacheProvider>
  </React.StrictMode> as any,
)
