import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';

export const ExplanationPanel = ({ isCorrect, explanation, onNext, isLastQuestion }) => (
  <Paper elevation={2} sx={{ mt: 3, p: 3, bgcolor: 'background.default' }}>
    <Typography variant="h6" color={isCorrect ? 'success.main' : 'error.main'} gutterBottom>
      {isCorrect ? '正解です！' : '不正解です。'}
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
      {explanation}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
        size="large"
      >
        {isLastQuestion ? '結果を見る' : '次へ'}
      </Button>
    </Box>
  </Paper>
);