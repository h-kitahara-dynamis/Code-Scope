import React, { useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Paper,
  CircularProgress,
  Alert,
  Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { ExplanationPanel } from './ExplanationPanel';

const QuizComponent = () => {
  const navigate = useNavigate();
  const {
    quiz,
    loading,
    error,
    fetchQuiz,
    currentQuestion,
    score,
    isQuizComplete,
    explanation,
    isCorrect,
    showingExplanation,
    handleAnswer,
    handleNext
  } = useQuiz();

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

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

  if (!quiz) return null;

  if (isQuizComplete) {
    return (
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            クイズ完了！
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 4 }}>
            スコア: {score}/{quiz.questions.length}
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/')}
            >
              トップへ戻る
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/history')}
            >
              履歴を見る
            </Button>
          </Box>
        </Paper>
      </Container>
    );
  }

  const currentQuizQuestion = quiz.questions[currentQuestion];

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          問題 {currentQuestion + 1}/{quiz.questions.length}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {currentQuizQuestion.question}
        </Typography>
        <Grid container spacing={2}>
          {currentQuizQuestion.options.map((option, index) => (
            <Grid item xs={12} key={index}>
              <Button
                variant="outlined"
                fullWidth
                size="large"
                onClick={() => handleAnswer(index)}
                sx={{ justifyContent: 'flex-start', py: 2 }}
                disabled={showingExplanation}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            スコア: {score}/{currentQuestion}
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/')}
          >
            中断する
          </Button>
        </Box>

        {showingExplanation && isCorrect !== null && (
          <ExplanationPanel
            isCorrect={isCorrect}
            explanation={explanation}
            onNext={handleNext}
            isLastQuestion={currentQuestion + 1 >= quiz.questions.length}
          />
        )}
      </Paper>
    </Container>
  );
};

export default QuizComponent;