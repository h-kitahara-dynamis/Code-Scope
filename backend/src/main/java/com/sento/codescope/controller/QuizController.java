package com.sento.codescope.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;
import java.util.Map;
import com.sento.codescope.service.QuizService;
import com.sento.codescope.model.Quiz;

@RestController
public class QuizController {

    private final QuizService quizService;

    public QuizController() {
        this.quizService = new QuizService();
    }

    @GetMapping("/api/quiz")
    public Map<String, List<Quiz>> getQuizData() {

        System.out.println("Quiz data endpoint was accessed.");
        
        List<Quiz> quizzes = quizService.getQuizzes();
        
        return Collections.singletonMap("questions", quizzes);
    }
}
