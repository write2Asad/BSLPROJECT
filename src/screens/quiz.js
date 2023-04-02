import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';

const QuizScreen = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin', 'Madrid'],
            answer: 'Paris',
        },
        {
            question: 'What is the largest ocean in the world?',
            options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
            answer: 'Pacific',
        },
        {
            question: 'What is the tallest mammal?',
            options: ['Elephant', 'Giraffe', 'Horse', 'Rhino'],
            answer: 'Giraffe',
        },
    ];

    const handleAnswer = (answer) => {
        const correctAnswer = questions[currentQuestion].answer;
        if (answer === correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // End of quiz
            alert(`Your score is ${score}/${questions.length}`);
            setCurrentQuestion(0);
            setScore(0);
        }
    };


    return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.question}>{questions[currentQuestion].question}</Text>
                {questions[currentQuestion].options.map((option, index) => (
                    <View key={index} style={styles.buttonContainer}>
                        <Button
                            title={option}
                            color= '#FF8400'
                            onPress={() => handleAnswer(option)}
                        />
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      buttonContainer: {
        marginBottom: 10,
    
      },
});

export default QuizScreen;