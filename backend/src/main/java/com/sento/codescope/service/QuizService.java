package com.sento.codescope.service;

import java.util.List;
import com.sento.codescope.model.Quiz;
import com.sento.codescope.repository.QuizRepository;

public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService() {
        this.quizRepository = new QuizRepository();
    }

    public List<Quiz> getQuizzes() {
        return quizRepository.getQuizzes();
    }
}

