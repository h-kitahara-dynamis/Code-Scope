import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import TopComponent from './components/TopComponent';
import QuizComponent from './components/QuizComponent';
import HistoryComponent from './components/HistoryComponent';

// カスタムテーマの作成（オプション）
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<TopComponent />} />
          <Route path="/quiz" element={<QuizComponent />} />
          <Route path="/history" element={<HistoryComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;