import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Editor } from './components/Editor'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import { Container, CssBaseline } from '@mui/material';
import { Output } from './components/Output';
import { Header } from './components/Header';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" style={{ minHeight: "100vh" }}>
        <Editor />
        <div style={{ height: "20px" }} />
        <Output value="60" />
      </Container>
    </ThemeProvider>
  </StrictMode >,
)
