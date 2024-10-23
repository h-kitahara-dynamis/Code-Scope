import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemText,
  Button,
  Box,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../services/api';
import { useApi } from '../hooks/useApi';

const HistoryComponent = () => {
  const navigate = useNavigate();
  const { data: history, loading, error, execute: fetchHistory } = useApi(ApiService.getHistory);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          クイズ履歴
        </Typography>
        <List>
          {history?.map((quiz, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`${quiz.date} - スコア: ${quiz.score}/${quiz.totalQuestions}`}
                secondary={`正答率: ${(quiz.score / quiz.totalQuestions * 100).toFixed(1)}%`}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            トップへ戻る
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default HistoryComponent;