package com.sento.codescope.repository;

import java.util.Arrays;
import java.util.List;
import com.sento.codescope.model.Quiz;

public class QuizRepository {

    public List<Quiz> getQuizzes() {
        return Arrays.asList(
            new Quiz(
                1,
                "Javaの開発者は誰ですか？", 
                Arrays.asList("James Gosling", "Bjarne Stroustrup", "Guido van Rossum", "Brendan Eich"), 
                0,
                "JavaはJames Goslingによって開発されました。"),
            new Quiz(
                2,
                "Pythonの開発者は誰ですか？", 
                Arrays.asList("James Gosling", "Bjarne Stroustrup", "Guido van Rossum", "Brendan Eich"), 
                2,
                "PythonはGuido van Rossumによって開発されました。")
        );
    }
}