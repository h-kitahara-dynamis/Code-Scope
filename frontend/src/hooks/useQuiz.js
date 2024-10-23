import { useState, useCallback } from 'react';
import { useApi } from './useApi';
import { ApiService } from '../services/api';

export const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [explanation, setExplanation] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showingExplanation, setShowingExplanation] = useState(false);

  const { 
    data: quiz, 
    loading, 
    error, 
    execute: fetchQuiz 
  } = useApi(ApiService.getQuiz);

  const handleAnswer = useCallback((selectedOption) => {
    if (!quiz?.questions[currentQuestion]) return;

    const currentQuizQuestion = quiz.questions[currentQuestion];
    const correct = selectedOption === currentQuizQuestion.correctAnswer;
    
    setIsCorrect(correct);
    setAnswers(prev => [...prev, {
      questionId: currentQuizQuestion.id,
      selectedOption,
      correct
    }]);

    if (correct) {
      setScore(prev => prev + 1);
    }

    setExplanation(currentQuizQuestion.explanation);
    setShowingExplanation(true);
  }, [currentQuestion, quiz]);

  const handleNext = useCallback(() => {
    if (!quiz) return;
    
    if (currentQuestion + 1 >= quiz.questions.length) {
      setIsQuizComplete(true);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setIsCorrect(null);
      setExplanation('');
      setShowingExplanation(false);
    }
  }, [currentQuestion, quiz]);

  return {
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
  };
};
