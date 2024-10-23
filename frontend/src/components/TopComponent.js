import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

const TopComponent = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          CodeScope
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          あなたのCodeスキルを拡げましょう
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/quiz"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
          >
            4択 スタート
          </Button>
          <Button
            component={Link}
            to="/history"
            variant="outlined"
            color="secondary"
            size="large"
          >
            履歴を見る
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TopComponent;